import { Schema, model } from "mongoose";
import Teacher from "./teacher.interface";

const teacherSchema = new Schema<Teacher>(
    {
        Név: {
            type: String,
            required: true,
        },
    },
    { versionKey: false },
);

const teacherModel = model<Teacher>("Teacher", teacherSchema);

export default teacherModel;
