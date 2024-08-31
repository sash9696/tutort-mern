import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = Router();

//localhost/api/auth/register
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
