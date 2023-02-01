import { IsArray, ArrayNotEmpty, IsOptional, IsString, IsBoolean, IsEmail, ValidateNested } from "class-validator";
// import { Match } from "./match.decorator";
import CreateAddressDto from "./address.dto";
import IUser from "./user.interface";

export default class CreateUserDto implements IUser {
    @IsString()
    public name: string;

    @IsEmail()
    public email: string;

    // Example - compare two fields in document:
    // @IsEmail()
    // @Match("email", { message: "email and email_address_confirm don't match." })
    // public email_address_confirm: string;

    @IsBoolean()
    public email_verified: boolean;

    @IsBoolean()
    public auto_login: boolean;

    @IsString()
    public picture: string;

    @IsString()
    public password: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    public roles: string[];

    @IsOptional()
    @ValidateNested()
    public address?: CreateAddressDto;
}
