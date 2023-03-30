import { model, Schema } from "mongoose";

import Reservation from "./reservation.interface";

const reservationSchema = new Schema<Reservation>(
    {
        _id: Schema.Types.ObjectId,
        tanárID: {
            ref: "teacher",
            type: Number,
        },
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
