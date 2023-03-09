import { NextFunction, Request, Response, Router } from "express";
import { Types } from "mongoose";

import HttpException from "../exceptions/HttpException";
import IdNotValidException from "../exceptions/IdNotValidException";
import TeacherNotFoundException from "../exceptions/TeacherNotFoundException";
import IController from "../interfaces/controller.interface";
import IRequestWithUser from "../interfaces/requestWithUser.interface";
import authMiddleware from "../middleware/auth.middleware";
import validationMiddleware from "../middleware/validation.middleware";
import CreateTeacherDto from "./teacher.dto";
import Teacher from "./teacher.interface";
import teacherModel from "./teacher.model";

export default class TeacherController implements IController {
    public path = "/api/teachers";
    public router = Router();
    private teacher = teacherModel;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, authMiddleware, this.getAllTeachers);
        this.router.get(`${this.path}/:id`, authMiddleware, this.getTeacherById);
        this.router.post(this.path, [authMiddleware, validationMiddleware(CreateTeacherDto)], this.createTeacher);
        this.router.patch(`${this.path}/:id`, [authMiddleware, validationMiddleware(CreateTeacherDto, true)], this.modifyTeacher);
        this.router.delete(`${this.path}/:id`, authMiddleware, this.deleteTeacher);
    }

    private getAllTeachers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            this.teacher.find().then(teachers => {
                res.send(teachers);
            });
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    };

    private getTeacherById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            if (id) {
                const teacher = await this.teacher.findById(id);
                if (teacher) {
                    res.send(teacher);
                } else {
                    next(new TeacherNotFoundException(id));
                }
            } else {
                next(new IdNotValidException(id));
            }
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    };

    private modifyTeacher = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            if (id) {
                const teacherData: Teacher = req.body;
                const teacher = await this.teacher.findByIdAndUpdate(id, teacherData, { new: true });
                if (teacher) {
                    res.send(teacher);
                } else {
                    next(new TeacherNotFoundException(id));
                }
            } else {
                next(new IdNotValidException(id));
            }
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    };

    private createTeacher = async (req: IRequestWithUser, res: Response, next: NextFunction) => {
        try {
            const teacherData: Teacher = req.body;
            const createdTeacher = new this.teacher({
                ...teacherData,
            });
            const savedTeacher = await createdTeacher.save();
            await savedTeacher.populate("tanárID");
            res.send(savedTeacher);
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    };

    private deleteTeacher = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            if (id) {
                const successResponse = await this.teacher.findByIdAndDelete(id);
                if (successResponse) {
                    res.sendStatus(200);
                } else {
                    next(new TeacherNotFoundException(id));
                }
            } else {
                next(new IdNotValidException(id));
            }
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    };
}
