import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

/**
 *  Initializes the Express application instance.
 * This `app` object is used to define middleware, routes, and server configuration.
*/
const app = express();

/**
 * CORS (Cross-Origin Resource Sharing) middleware.
 * Configures the server to accept requests only from the origin defined in `process.env.CLIENT_URL`.
 *
 * Helps protect the API by restricting access to trusted frontend clients.
*/
app.use(cors(process.env.CLIENT_URL));

/**
 * Clerk authentication middleware.
 * Integrates Clerk into the Express app to handle user authentication and session management.
 *
 * This middleware validates incoming requests and attaches authenticated user data to the request object.
*/
app.use(clerkMiddleware());

app.use("/webhooks", webhookRouter);

/**
 * Middleware to parse incoming JSON requests.
 * Automatically parses JSON payloads and makes the data available in `req.body`.
 *
 * This is essential for handling APIs that receive JSON data in POST, PUT, or PATCH requests.
*/
app.use(express.json());

/**
 * CORS (Cross-Origin Resource Sharing) middleware for Express.
 * Sets response headers to allow requests from any origin.
 *
 * Adds the following headers:
 * - Access-Control-Allow-Origin: Allows all origins ("*")
 * - Access-Control-Allow-Headers: Specifies allowed custom headers
 *
*/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

/**
 * Global error-handling middleware for Express.
 * Catches and formats any errors that occur during request processing.
 *
 * Sends a JSON response containing:
 * - HTTP status code (default: 500)
 * - Error message (default: "Something went wrong!")
 * - Stack trace (useful for debugging) *
*/
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

/**
 * Starts the Express server on port 3000.
 * - Establishes a connection to the database by calling `connectDB()`.
 * - Logs a message indicating that the server is running.
 *
*/
app.listen(process.env.PORT, () => {
  connectDB();
  console.log("Server is running!");
});