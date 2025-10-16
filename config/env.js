import "dotenv/config";

export const env = {
	PORT: process.env.PORT || 3000,

	USER_NAME: process.env.USER_NAME || "John Doe",
	USER_EMAIL: process.env.USER_EMAIL || "johndoe@gmail.com",
	USER_TECH_STACK: process.env.USER_TECH_STACK || "Node.js/Express",
};

