/**
 * Routes for post-related operations.
 *
 * Endpoints:
 * - GET `/upload-auth`: Returns upload authorization (e.g. for image/file uploads).
 * - GET `/`: Retrieves a list of posts.
 * - GET `/:slug`: Retrieves a single post by its slug; increments visit count via `increaseVisit` middleware.
 * - POST `/`: Creates a new post.
 * - DELETE `/:id`: Deletes a post by its ID.
 * - PATCH `/feature`: Marks a post as featured.
 *
 * Controllers handle the core logic, and middleware like `increaseVisit` is applied where needed.
*/

import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  uploadAuth,
  featurePost,
} from "../controllers/post.controller.js";
import increaseVisit from "../middlewares/increaseVisit.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getPosts);
router.get("/:slug", increaseVisit, getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/feature", featurePost);

export default router;