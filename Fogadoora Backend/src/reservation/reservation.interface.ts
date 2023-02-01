import { Types } from "mongoose";

export default interface Reservation {
    _id?: Types.ObjectId | string;
    Idő: string;
    Dátum: Date;
    tanárID: {
        Név: string;
    };
}
