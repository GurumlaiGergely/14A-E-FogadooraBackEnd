"use strict";
// https://mongoosejs.com/docs/validation.html#built-in-validators
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const onesideSchema = new mongoose_1.Schema({
    _id: Number,
    idopont: {
        type: String,
        required: true,
    },
}, { versionKey: false });
const onesideModel = (0, mongoose_1.model)("oneside", onesideSchema, "Idopontok");
exports.default = onesideModel;
//# sourceMappingURL=oneside.model.js.map