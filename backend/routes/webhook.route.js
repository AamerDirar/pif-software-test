import express from "express";
import { clerkWebHook } from "../controllers/webhook.controller.js";
import bodyParser from "body-parser";

const router = express.Router();

/**
 * Clerk webhook endpoint.
 * - Listens for POST requests to the `/clerk` route.
 * - Uses `bodyParser.raw` to parse the raw body as required for verifying Clerk's webhook signatures.
 * - Forwards the request to the `clerkWebHook` controller for processing the event.
 *
 * Note: Do not use `express.json()` here, as Clerk requires the raw body for signature verification.
*/
router.post(
  "/clerk",
  bodyParser.raw({ type: "application/json" }),
  clerkWebHook
);

export default router;