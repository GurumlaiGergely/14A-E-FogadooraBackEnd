import HttpException from "./HttpException";

export default class IdNotValidException extends HttpException {
    constructor(id: string) {
        super(404, `This ${id} id is not valid.`);
    }
}
