import "dotenv/config";
import App from "../../app";
import AuthenticationController from "../../authentication/authentication.controller";
import request from "supertest";

let server: Express.Application;

beforeAll(async () => {
    server = new App([new AuthenticationController()]).getServer();
});

describe("test API endpoints", () => {
    it("GET /auth/register", async () => {
        const response = await request(server)
            .post("/auth/register")
            .send({
                name: "student001",
                email: "student001@jedlik.eu",
                email_verified: true,
                auto_login: true,
                picture: "none",
                roles: ["admin"],
                password: "student001",
            });
        expect(response.statusCode).toEqual(400);
        expect(response.body.message).toEqual("User with email student001@jedlik.eu already exists");
        expect(response.body.status).toEqual(400);
    });

    it("GET /auth/login", async () => {
        const response = await request(server).post("/auth/login").send({
            email: "student001@jedlik.eu",
            password: "student001",
        });
        expect(response.statusCode).toEqual(200);
        expect(response.body._id).toEqual("61b5e9c0f39e4edcf5b8a3b9");
        expect(response.body.address.city).toEqual("Győr");
        expect(response.body.address.country).toEqual("Hungary");
        expect(response.body.address.street).toEqual("Szent István út 7.");
        expect(response.body.address._id).toEqual("61b5e9c0f39e4edcf5b8a3ba");
        expect(response.body.email).toEqual("student001@jedlik.eu");
        expect(response.body.name).toEqual("student001");
    });

    it("GET /auth/logout", async () => {
        const response = await request(server).post("/auth/logout");
        expect(response.text).toEqual("OK");
        expect(response.statusCode).toEqual(200);
    });
});
