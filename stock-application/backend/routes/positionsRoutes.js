import express from "express";
import { getAllPositionsController} from "../controllers/positionsController.js";



const router = express.Router();


//Define routes

router.get("/", getAllPositionsController);


export default router;