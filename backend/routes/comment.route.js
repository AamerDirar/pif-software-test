/**
 * Routes for handling comments on posts.
 *
 * Endpoints:
 * - GET `/:postId`: Retrieves all comments for a specific post.
 * - POST `/:postId`: Adds a new comment to the specified post.
 * - DELETE `/:id`: Deletes a comment by its ID.
 *
*/

import express from "express"
import { addComment, deleteComment, getPostComments } from "../controllers/comment.controller.js"

const router = express.Router()

router.get("/:postId", getPostComments)
router.post("/:postId", addComment)
router.delete("/:id", deleteComment)

export default router