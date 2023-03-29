import { IsString } from "class-validator";

import Teacher from "./teacher.interface";

export default class CreateTeacherDto implements Teacher {
    @IsString()
    public Név: string;
}
