import express from "express";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import { fetchCatFact } from "./services/index.js";

const app = express();

const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minutes
	limit: 10,
	standardHeaders: true,
	legacyHeaders: false,
	handler: (_req, res) => {
		res.status(429).json({
			status: "error",
			message: "Too many requests, please try again later.",
		});
	},
});

const profileInfo = {
	email: env.USER_EMAIL,
	name: env.USER_NAME,
	stack: env.USER_TECH_STACK,
};

app.get("/me", limiter, async (_req, res, next) => {
	try {
		// Fetch cat fact from external API
		const catFact = await fetchCatFact();

		// Get current UTC timestamp in ISO 8601 format
		const timestamp = new Date().toISOString();

		res.status(200).json({
			success: true,
			user: profileInfo,
			timestamp,
			fact: catFact,
		});
	} catch (error) {
		next(error);
	}
});

// Handle invalid routes (404)
app.use((_req, res) => {
	res.status(404).json({
		status: "error",
		message: "Route not found",
	});
});

// Error handling middleware
app.use((err, _req, res, _next) => {
	console.error(err);
	res.status(500).json({
		success: false,
		message: "Internal Server Error",
	});
});

const PORT = env.PORT;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
