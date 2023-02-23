import { IsString, ValidateNested, IsDate } from "class-validator";
import Reservation from "./reservation.interface";
import CreateTeacherDto from "./teacher.dto";
export default class CreateReservationDto implements Reservation {
    @IsString()
    public Idő: string;

    @IsString()
    public Dátum: string;

    @ValidateNested()
    public tanárID: CreateTeacherDto;
}
