import HttpException from "./HttpException";

export default class SessionExpiredException extends HttpException {
    constructor() {
        super(401, "Session id missing or session has expired, please log in!");
    }
}
