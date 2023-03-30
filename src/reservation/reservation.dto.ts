import { IsMongoId, IsOptional, IsString } from "class-validator";
import { Schema } from "mongoose";

import Reservation from "./reservation.interface";
export default class CreateReservationDto implements Reservation {
    @IsString()
    public Idő: string;

    @IsString()
    public Dátum: string;

    @IsMongoId()
    @IsOptional()
    public _id: Schema.Types.ObjectId;
}
