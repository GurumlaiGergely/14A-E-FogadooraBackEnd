import { Schema, model } from "mongoose";
// https://mongoosejs.com/docs/typescript.html
// https://mongoosejs.com/docs/validation.html

const nsideSchema = new Schema(
    {
        _id: Number,
        FK_idopont: {
            ref: "oneside",
            type: Number,
            required: true,
        },
        vezetekNev: {
            type: String,
            required: true,
        },
        keresztNev: {
            type: String,
            required: true,
        },
        ido: {
            type: String,
            required: true,
        },
    },
    { versionKey: false },
);

const nsideModel = model("nside", nsideSchema, "Tanar");

export default nsideModel;
