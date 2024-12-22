import express from "express";
import { getAllHoldingsController , createholdingController} from "../controllers/holdingsController.js";



const router = express.Router();


//Define routes

router.get("/", getAllHoldingsController);

router.post("/", createholdingController);

export default router;