import { Schema, model } from "mongoose";
import Reservation from "./reservation.interface";

const teacherSchema = new Schema(
    {
        Név: {
            type: String,
            required: true,
        },
    },
    { versionKey: false },
);

const reservationSchema = new Schema<Reservation>(
    {
        tanárID: teacherSchema,
        Idő: {
            type: String,
            required: true,
        },
        Dátum: {
            type: Date,
            required: true,
        },
    },
    { versionKey: false },
);

const reservationModel = model<Reservation>("Reservation", reservationSchema);

export default reservationModel;
