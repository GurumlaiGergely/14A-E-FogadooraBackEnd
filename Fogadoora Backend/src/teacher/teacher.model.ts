import { model, Schema } from "mongoose";

import Teacher from "./teacher.interface";

const teacherSchema = new Schema<Teacher>(
    {
        _id: {
            ref: "reservation",
            type: Schema.Types.ObjectId,
        },
        Név: {
            type: String,
            required: true,
        },
    },
    { versionKey: false },
);

const teacherModel = model<Teacher>("Teacher", teacherSchema, "tanarok");

export default teacherModel;
