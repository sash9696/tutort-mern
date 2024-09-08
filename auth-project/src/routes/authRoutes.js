import { Router } from "express";
import { registerUser, loginUser, getProfile } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

//localhost/api/auth/register
router.post("/register", registerUser);
router.post("/login", loginUser);

router.get('/profile',authMiddleware, getProfile);

export default router;
