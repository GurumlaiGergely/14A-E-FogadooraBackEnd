import { Type } from "class-transformer";
import { IsDate, IsString, ValidateNested } from "class-validator";

import CreateTeacherDto from "../teacher/teacher.dto";
import Reservation from "./reservation.interface";
export default class CreateReservationDto implements Reservation {
    @IsString()
    public Idő: string;

    @IsString()
    public Dátum: string;

    @ValidateNested()
    @Type(() => CreateTeacherDto)
    public tanárID: CreateTeacherDto;
}
