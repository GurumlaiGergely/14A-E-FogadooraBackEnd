/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsString } from "class-validator";

export default class LogInDto {
    @IsString()
    public email: string;

    @IsString()
    public password: string;
}
