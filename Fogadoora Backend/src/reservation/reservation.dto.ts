import { IsString, ValidateNested, IsDate } from "class-validator";
import Reservation from "./reservation.interface";
import CreateTeacherDto from "./teacher.dto";
export default class CreateReservationDto implements Reservation {
    @IsString()
    public Idő: string;

    @IsDate()
    public Dátum: Date;

    @ValidateNested()
    public tanárID: CreateTeacherDto;
}
