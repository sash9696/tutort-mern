import express from "express";
import { registerUserController , loginUserController} from "../controllers/authController.js";



const router = express.Router();


//Define routes

router.post("/register", registerUserController);

router.post("/login", loginUserController);

export default router;