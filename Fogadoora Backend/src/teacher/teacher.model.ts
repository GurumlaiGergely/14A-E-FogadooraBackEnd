import { model, Schema } from "mongoose";

import Teacher from "./teacher.interface";

const teacherSchema = new Schema<Teacher>(
    {
        _id: {
            type: String,
        },
        Név: {
            type: String,
            required: true,
        },
    },
    { versionKey: false },
);

const teacherModel = model<Teacher>("teacher", teacherSchema, "teachers");

export default teacherModel;
