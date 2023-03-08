import App from "./app";
import AuthenticationController from "./authentication/authentication.controller";
import ReservationController from "./reservation/reservation.controller";
import UserController from "./user/user.controller";

new App([new ReservationController(), new AuthenticationController(), new UserController()]);
