import express from "express";
import { getAllHoldingsController , createholdingController} from "../controllers/holdingsController.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authenticateJWT = (req, res, next) => {

    console.log('req.header',req.header('Authorization'))
    const token = req.header('Authorization')?.replace("Bearer ","");

    if(!token){
        return res.status(403).json({message: "Acess denied"});
    };


    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return res.status(403).json({message: "Invalid token"});
        };

        req.user = user;
        next();

    } );

}

const router = express.Router();


//Define routes

//middlewares
router.get("/", authenticateJWT , getAllHoldingsController);

router.post("/", createholdingController);

export default router;