import express from "express"
import { getUserSavedPosts, savePost } from "../controllers/user.controller.js"

const router = express.Router()

/**
 * User-related routes for handling saved posts.
 *
 * Routes:
 * - GET `/saved`: Retrieves the list of posts saved by the authenticated user.
 * - PATCH `/save`: Saves or unsaves a post for the user.
*/
router.get("/saved", getUserSavedPosts)
router.patch("/save", savePost)

export default router 