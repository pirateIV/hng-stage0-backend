# HNG Stage 0 Task: Dynamic Profile API

A simple RESTful API endpoint that returns profile information along with dynamic cat facts fetched from an external API.

## Features

-  **GET /me** endpoint that returns profile information
-  Dynamic cat facts integration with [Cat Facts API](https://catfact.ninja/fact)
-  Real-time UTC timestamps in ISO 8601 format

## API Endpoints

### GET /me

Returns profile information with a random cat fact.

**Response Format:**

```json
{
	"status": "success",
	"user": {
		"email": "<your email>",
		"name": "<your full name>",
		"stack": "<your backend stack>"
	},
	"timestamp": "<current UTC time in ISO 8601 format>",
	"fact": "<random cat fact from Cat Facts API>"
}
```

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/pirateIV/hng-stage0-backend
cd hng-stage0-backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Configuration**

```bash
# Copy the example environment file
cp env.example .env
```

4. **Configure your profile** (Optional)

Edit the `.env` file with your information:

```env
PORT=3000
USER_EMAIL=your.email@example.com
USER_NAME=Your Full Name
USER_STACK=Node.js/Express
```

If you don't set these environment variables, default values will be used.

### Running Locally

1. Run the command:

```bash
npm start
```

2. Access the API

-  Profile endpoint: `http://localhost:3000/me`
