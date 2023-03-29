import { model, Schema } from "mongoose";

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
            type: String,
            required: true,
        },
    },
    { versionKey: false },
);

const reservationModel = model<Reservation>("reservation", reservationSchema, "reservations");

export default reservationModel;
