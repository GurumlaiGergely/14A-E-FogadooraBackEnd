import HttpException from "./HttpException";

export default class TeacherNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `Teacher with id ${id} not found`);
    }
}
