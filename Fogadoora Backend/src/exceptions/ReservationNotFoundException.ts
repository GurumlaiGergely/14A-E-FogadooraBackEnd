import HttpException from "./HttpException";

export default class ReservationNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `Reservation with id ${id} not found`);
    }
}
