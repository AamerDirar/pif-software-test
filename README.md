# pif-software-test
This repository contains my solution to the software testing assignment provided by PIF for the Full-Stack Developer position.

# This project conatins two parts:
# First Part: Backend API:

## Overview

This is a Node.js backend application built with Express.js. It supports user authentication and management with Clerk, handles webhook verification via Svix, integrates image uploads through ImageKit, and uses MongoDB via Mongoose for data persistence. The app also supports CORS and parses incoming JSON requests.

---

## Features

- User authentication and management with Clerk
- Webhook verification and handling using Svix
- Image upload and management using ImageKit
- MongoDB database integration with Mongoose
- CORS support for cross-origin requests
- Clean, modular Express routing

---

## Technologies & Dependencies

| Package           | Purpose                                      |
|-------------------|----------------------------------------------|
| `express`         | Web framework                                |
| `@clerk/express`  | Clerk authentication middleware              |
| `body-parser`     | Parses incoming JSON request bodies          |
| `cors`            | Cross-Origin Resource Sharing support        |
| `imagekit`        | Image upload SDK                             |
| `micro`           | Minimalist HTTP server (optional)             |
| `mongoose`        | MongoDB object modeling                      |
| `svix`            | Webhook signature verification               |

---

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd backend

2. Install dependencies

```bash
npm install


3. Set up environment variables

Create a .env file or configure your environment with the following variables:
MONGO=<your-mongodb-connection-string>
CLERK_WEBHOOK_SECRET<your-clerk-webhook-api>
CLERK_PUBLISHABLE_KEY=<your-clerk-piblishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
CLIENT_URL=<your-frontend-url>
IMAGEKIT_PUBLIC_KEY=<your-imagekit-public-key>
IMAGEKIT_PRIVATE_KEY=<your-imagekit-private-key>
IMAGEKIT_ENDPOINT=<your-imagekit-endpoint-url>

# Running the Application
First enter the backend directory and after that run this command:

```bash
node --env-file .env --watch index.js

The app will run on http://localhost:3000 by default (or the port set in your environment).

# API Endpoints
# User Routes (/users)
* PATCH /users/save — Save a post to the users saved posts.

# Post Routes (/posts)
Handles CRUD operations for posts.

# Comment Routes (/comments)
Handles CRUD operations for comments.

# Webhook Route (/clerk/webhook)
Handles incoming Clerk webhook events with signature verification via Svix.

# Usage
* Authentication is managed via Clerk middleware.
* Webhook security is ensured by validating Svix signatures.
* Image uploads are supported through ImageKit integration.
* Database operations use Mongoose schemas (not included here).

# Testing
Currently, no automated tests are included. You can add tests as needed.

Run the default test script:

```bash
npm test