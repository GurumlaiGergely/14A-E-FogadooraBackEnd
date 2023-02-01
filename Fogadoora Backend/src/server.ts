import App from "./app";
import AuthenticationController from "./authentication/authentication.controller";
import UserController from "./user/user.controller";
import ReservationController from "./reservation/reservation.controller";

const app = new App([new ReservationController(), new AuthenticationController(), new UserController()]);

app.listen();
