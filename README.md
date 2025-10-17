
# HNG Task — Profile Endpoint (Stage 0)

A simple **Node.js + Express** backend that exposes a `/me` endpoint returning your profile information along with a random cat fact fetched from an external API.
This task demonstrates knowledge of RESTful API design, external API consumption, and proper error handling.

## Live Demo

> **Base URL:** `https://hng-stage0-backend-production-fdf4.up.railway.app/me`

### Example Endpoint

```
GET /me
```

### Example Response

```json
{
  "name": "Benjamin Abolade",
  "email": "benjamin@example.com",
  "stack": "Node.js/Express",
  "fact": "Cats sleep 70% of their lives"
}
```

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hng-task_0-backend.git
cd hng-task_0-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the project root using `.env.example` as a guide:

```env
PORT=3000
USER_NAME=your name here
USER_EMAIL=your email here
USER_TECH_STACK=Node.js/Express
```

### 4. Run the server

```bash
npm start
```

Server will start on:

```
http://localhost:3000
```

## Features Implemented

* **Rate limiting** using `express-rate-limit`. This feature permits up to 10 requests to the endpoint `/me`. After that it resets in 5 minutes.
* **Dynamic cat fact** fetched from [Cat Fact API](https://catfact.ninja/fact)
* **Environment configuration** with `.env`
* **Automatic 404 handling** for invalid routes
* **Clean JSON output** with proper content-type headers
* **Test coverage** using Jest and Supertest

## Testing

To run tests:

```bash
npm test
```

Tests include:

* Successful `/me` response with all required fields
* 404 handling for invalid routes

## Project Structure

```
.
├── config/
│   └── env.js
├── services/
│   └── index.js
├── app.js
├── app.test.js
├── package.json
└── .env.example
```

## What I Learnt

* How to structure a simple Express API endpoint.
* How to integrate external APIs (Cat Fact API).
* Importance of `.env` for configuration and testing.
* Implementing rate limiting for API protection.
* Writing and running backend tests with Jest and Supertest.

##  About me

**Benjamin Abolade**
Frontend & Backend Developer
[GitHub](https://github.com/pirateIV) • [LinkedIn](https://www.linkedin.com/in/benjamin-abolade-9922842ab/)