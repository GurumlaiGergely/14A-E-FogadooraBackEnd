import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/HttpException";

export default async function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction): Promise<void> {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).send({
        message,
        status,
    });
    next();
}
