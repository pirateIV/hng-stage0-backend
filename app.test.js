import request from "supertest";
import app from "./app.js";

describe("GET /me endpoint", () => {
	it("should return user info, timestamp, and cat fact", async () => {
		const res = await request(app).get("/me");

		expect(res.statusCode).toBe(200);
		expect(res.headers["content-type"]).toMatch(/application\/json/);

		expect(res.body).toHaveProperty("status", "success");
		expect(res.body).toHaveProperty("user");
		expect(res.body.user).toHaveProperty("email");
		expect(res.body.user).toHaveProperty("name");
		expect(res.body.user).toHaveProperty("stack");
		expect(res.body).toHaveProperty("timestamp");
		expect(res.body).toHaveProperty("fact");

		// Verify timestamp format is ISO 8601
		expect(() => new Date(res.body.timestamp).toISOString()).not.toThrow();
	});
});

describe("Rate limiting", () => {
	it("should block requests after the limit is exceeded", async () => {
		for (let i = 0; i < 10; i++) {
			await request(app).get("/me");
		}
		const res = await request(app).get("/me");
		expect(res.statusCode).toBe(429);
		expect(res.body).toEqual({
			status: "error",
			message: "Too many requests, please try again later.",
		});
	});
});

describe("Invalid routes", () => {
	it("should return JSON 404 response for unknown routes", async () => {
		const res = await request(app).get("/unknown");
		expect(res.statusCode).toBe(404);
		expect(res.body).toEqual({
			status: "error",
			message: "Route not found",
		});
	});
});
