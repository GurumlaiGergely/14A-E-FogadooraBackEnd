import { NextFunction, Response } from "express";
import express from "express";
import IRequestWithUser from "../interfaces/requestWithUser.interface";
import InsufficientRoleException from "../exceptions/InsufficientRoleException";

export default function roleCheckMiddleware(req_roles: string[]): express.RequestHandler {
    return (req: IRequestWithUser, res: Response, next: NextFunction) => {
        const intersectRoles = req.user.roles.filter(value => req_roles.includes(value));
        if (intersectRoles.length > 0) {
            next();
        } else {
            next(new InsufficientRoleException());
        }
    };
}
