import { Schema } from "mongoose";
export default interface Reservation {
    _id?: Schema.Types.ObjectId;
    Idő: string;
    Dátum: string;
    tanárID?: number;
}
