"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const oneside_model_1 = tslib_1.__importDefault(require("./oneside.model"));
class nsideController {
    router = (0, express_1.Router)();
    onesideM = oneside_model_1.default;
    constructor() {
        this.router.get("/api/xyz1", this.getAll);
    }
    getAll = async (req, res) => {
        try {
            const data = await this.onesideM.find();
            res.send(data);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    };
}
exports.default = nsideController;
//# sourceMappingURL=oneside.controller.js.map