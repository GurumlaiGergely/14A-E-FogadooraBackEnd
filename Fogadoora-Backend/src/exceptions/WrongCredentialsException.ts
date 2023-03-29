import HttpException from "./HttpException";

export default class WrongCredentialsException extends HttpException {
    constructor() {
        super(401, "Wrong credentials provided");
    }
}
