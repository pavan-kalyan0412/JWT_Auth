# JWT Authentication with Node.js and Express

This project is a simple Node.js application demonstrating user authentication using JSON Web Tokens (JWT). It includes endpoints for login, protected resource access, and logout, implemented using Express and `jsonwebtoken`.

## Installation

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up environment variables as described in `.env.example`.

## Usage

1. Run the server with `npm start`.
2. Access the `/login` endpoint to authenticate.
3. Access the `/protected` endpoint with a valid token to access protected resources.
4. Access the `/logout` endpoint to log out.

## Environment Variables

- `JWT_SECRET_KEY`: Secret key used for JWT token encryption.
