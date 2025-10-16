import express, { response } from "express";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import { fetchCatFact } from "./services/index.js";

const app = express();

const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minutes
	limit: 10,
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

		const response = {
			status: "success",
			user: profileInfo,
			timestamp,
			fact: catFact,
		};

		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
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
