// https://mongoosejs.com/docs/validation.html#built-in-validators

import { Schema, model } from "mongoose";

const onesideSchema = new Schema(
    {
        _id: Number,
        idopont: {
            type: String,
            required: true,
        },
    },
    { versionKey: false },
);

const onesideModel = model("oneside", onesideSchema, "Idopontok");

export default onesideModel;
