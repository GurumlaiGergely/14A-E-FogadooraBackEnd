import { Session } from "express-session";

export default interface ISession extends Session {
    user_id: string;
    user_email: string;
    isAutoLogin: boolean;
    isLoggedIn: boolean;
}
