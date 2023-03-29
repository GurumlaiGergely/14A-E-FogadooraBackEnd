import { Types } from "mongoose";

export default interface Reservation {
    _id?: Types.ObjectId | string;
    Idő: string;
    Dátum: string;
    tanárID: {
        Név: string;
    };
}
