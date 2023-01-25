"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const oneside_model_1 = tslib_1.__importDefault(require("./controllers/oneside.model"));
const nside_model_1 = tslib_1.__importDefault(require("./controllers/nside.model"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
// import cors from "cors";
class App {
    app;
    constructor(controllers) {
        this.app = (0, express_1.default)();
        this.connectToTheDatabase();
        this.app.use(express_1.default.json());
        // Enabled CORS (don't forget to import cors):
        // this.app.use(cors());
        // morgan logger middleware for node.js
        // settings: https://github.com/expressjs/morgan#predefined-formats
        this.app.use((0, morgan_1.default)(":method :url status=:status :date[clf] length=:res[content-length] time=:response-time ms"));
        controllers.forEach(controller => {
            this.app.use("/", controller.router);
        });
    }
    listen() {
        this.app.listen(5000, () => {
            console.log("App listening on the port 5000");
        });
    }
    connectToTheDatabase() {
        mongoose_1.default.set("strictQuery", true); // for disable Deprecation Warning
        // Connect to localhost:27017, create "FogadoOra" database if not exist:
        mongoose_1.default.connect("mongodb://127.0.0.1:27017/FogadoOra", err => {
            if (err) {
                console.log("Unable to connect to the server. Please start MongoDB.");
            }
        });
        mongoose_1.default.connection.on("error", error => {
            console.log(`Mongoose error message: ${error.message}`);
        });
        mongoose_1.default.connection.on("connected", () => {
            console.log("Connected to MongoDB server.");
        });
        // init models for populate
        oneside_model_1.default.init();
        nside_model_1.default.init();
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map