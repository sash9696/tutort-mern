import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import holdingsRoutes from "./routes/holdingsRoutes.js";
import ordersRoutes from "./routes/ordersRoutes.js";
import positionsRoutes from './routes/positionsRoutes.js';
import {holdings, positions} from './data/index.js';
import HoldingsModel from "./models/holdingsModel.js";
import PositionsModel from "./models/positionsModel.js";

dotenv.config(); //load env variables

const app = express();

const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

app.use(cors()); //enable cors
app.use(express.json()); //parse incoming request body

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Error connecting to MongoDB Atlas", err));

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [...holdings];

//     try {
//         const Holdings = await HoldingsModel.insertMany(tempHoldings);
//         res.status(201).json(Holdings);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }

// });

app.get("/addPositions", async (req, res) => {
  let tempHoldings = [...positions];

    try {
        const Holdings = await PositionsModel.insertMany(tempHoldings);
        res.status(201).json(Holdings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

// app.get("/allHoldings", async (req, res) => {
//   try {
//     const Holdings = await HoldingsModel.find({});
//     res.status(200).json(Holdings);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


app.use("/api/holdings", holdingsRoutes);
app.use("/api/positions", positionsRoutes);
app.use("/api/orders", ordersRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
