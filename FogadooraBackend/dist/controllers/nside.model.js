"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// https://mongoosejs.com/docs/typescript.html
// https://mongoosejs.com/docs/validation.html
const nsideSchema = new mongoose_1.Schema({
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
}, { versionKey: false });
const nsideModel = (0, mongoose_1.model)("nside", nsideSchema, "Tanar");
exports.default = nsideModel;
//# sourceMappingURL=nside.model.js.map