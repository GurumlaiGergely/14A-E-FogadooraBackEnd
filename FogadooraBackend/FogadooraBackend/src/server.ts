import App from "./app";
// remove onesideController or nsideController, if you don't use it:
import nsideController from "./controllers/nside.controller";
const app = new App([new nsideController()]);

app.listen();
