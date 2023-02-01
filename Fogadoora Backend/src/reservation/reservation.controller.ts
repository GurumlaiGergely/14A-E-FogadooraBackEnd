import { Router, Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import IController from "../interfaces/controller.interface";
import IRequestWithUser from "../interfaces/requestWithUser.interface";
import authMiddleware from "../middleware/auth.middleware";
import validationMiddleware from "../middleware/validation.middleware";
import CreateReservationDto from "./reservation.dto";
import ReservationNotFoundException from "../exceptions/ReservationNotFoundException";
import IdNotValidException from "../exceptions/IdNotValidException";
import HttpException from "../exceptions/HttpException";
import reservationModel from "./reservation.model";
import Reservation from "./reservation.interface";

export default class ReservationController implements IController {
    public path = "/reservations";
    public router = Router();
    private reservations = reservationModel;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/:id`, authMiddleware, this.getReservationById);
        this.router.get(`${this.path}/:offset/:limit/:order/:sort/:keyword?`, authMiddleware, this.getPaginatedReservations);
        this.router.get(this.path, authMiddleware, this.getAllReservations);

        this.router.patch(`${this.path}/:id`, [authMiddleware, validationMiddleware(CreateReservationDto, true)], this.modifyReservation);

        this.router.delete(`${this.path}/:id`, authMiddleware, this.deleteReservation);
        this.router.post(this.path, [authMiddleware, validationMiddleware(CreateReservationDto)], this.createReservations);
    }

    private getAllReservations = async (req: Request, res: Response, next: NextFunction) => {
        try {
            this.reservations.find().then(reservations => {
                res.send(reservations);
            });
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    };

    private getReservationById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            if (Types.ObjectId.isValid(id)) {
                const reservation = await this.reservations.findById(id).populate("tanárID");
                if (reservation) {
                    res.send(reservation);
                } else {
                    next(new ReservationNotFoundException(id));
                }
            } else {
                next(new IdNotValidException(id));
            }
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    };

    private getPaginatedReservations = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offset = parseInt(req.params.offset);
            const limit = parseInt(req.params.limit);
            const order = req.params.order;
            const sort = parseInt(req.params.sort); // desc: -1  asc: 1
            let reservations = [];
            let count = 0;
            if (req.params.keyword) {
                const myRegex = new RegExp(req.params.keyword, "i"); // i for case insensitive
                count = await this.reservations.find({ $or: [{ tanárID: myRegex }, { Idő: myRegex }] }).count();
                reservations = await this.reservations
                    .find({ $or: [{ tanárID: myRegex }, { Idő: myRegex }] })
                    .sort(`${sort == -1 ? "-" : ""}${order}`)
                    .skip(offset)
                    .limit(limit);
            } else {
                count = await this.reservations.countDocuments();
                reservations = await this.reservations
                    .find({})
                    .sort(`${sort == -1 ? "-" : ""}${order}`)
                    .skip(offset)
                    .limit(limit);
            }
            res.send({ count: count, reservations: reservations });
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    };

    private modifyReservation = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            if (Types.ObjectId.isValid(id)) {
                const reservationData: Reservation = req.body;
                const reservation = await this.reservations.findByIdAndUpdate(id, reservationData, { new: true });
                if (reservation) {
                    res.send(reservation);
                } else {
                    next(new ReservationNotFoundException(id));
                }
            } else {
                next(new IdNotValidException(id));
            }
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    };

    private createReservations = async (req: IRequestWithUser, res: Response, next: NextFunction) => {
        try {
            const reservationData: Reservation = req.body;
            const createdReservation = new this.reservations({
                ...reservationData,
            });
            const savedReservation = await createdReservation.save();
            await savedReservation.populate("tanárID");
            res.send(savedReservation);
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    };

    private deleteReservation = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            if (Types.ObjectId.isValid(id)) {
                const successResponse = await this.reservations.findByIdAndDelete(id);
                if (successResponse) {
                    res.sendStatus(200);
                } else {
                    next(new ReservationNotFoundException(id));
                }
            } else {
                next(new IdNotValidException(id));
            }
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    };
}
