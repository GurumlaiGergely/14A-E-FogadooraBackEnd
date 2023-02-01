import HttpException from "./HttpException";

export default class InsufficientRoleException extends HttpException {
    constructor() {
        super(401, "Insufficient role(s)!");
    }
}
