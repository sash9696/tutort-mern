import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import holdingsRoutes from "./routes/holdingsRoutes.js";
import ordersRoutes from "./routes/ordersRoutes.js";

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
//   let tempHoldings = [
//     {
//         name:'BHARTIARTL',
//         qty:2,
//         avg:538.05,
//         price: 542.23,
//         net: "+0.77",
//         day: "+0.14%",
//         isLoss: false,
//     },
//     {
//         name:'TATAMOTORS',
//         qty:2,
//         avg:538.05,
//         price: 542.23,
//         net: "+10.00",
//         day: "+0.54%",
//     },
//     {
//         name:'RELIANCE',
//         qty:2,
//         avg:538.05,
//         price: 542.23,
//         net: "+0.37",
//         day: "+0.24%",
//     },
//     {
//         name:'HDFCBANK',
//         qty:2,
//         avg:670.05,
//         price: 2222.23,
//         net: "+4.77",
//         day: "+2.14%",
//     },
//     {
//         name:'INFY',
//         qty:2,
//         avg:232.05,
//         price: 5566.23,
//         net: "+0.77",
//         day: "+0.14%",
//     },
//     {
//         name:'TCS',
//         qty:2,
//         avg:538.05,
//         price: 542.23,
//         net: "+0.77",
//         day: "+0.14%",
//     },
//     {
//         name:'HDFC',
//         qty:2,
//         avg:538.05,
//         price: 542.23,
//         net: "+0.77",
//         day: "+0.14%",
//     },
//     {
//         name:'ICICIBANK',
//         qty:2,
//         avg:538.05,
//         price: 542.23,
//         net: "+0.77",
//         day: "+0.14%",
//     },
//     {
//         name:'AXISBANK',
//         qty:2,
//         avg:538.05,
//         price: 542.23,
//         net: "+0.77",
//         day: "+0.14%",
//     },
//     {
//         name:'SBIN',
//         qty:2,
//         avg:538.05,
//         price: 542.23,
//         net: "+0.77",
//         day: "+0.14%",
//     }
//   ];

//     try {
//         const Holdings = await HoldingsModel.insertMany(tempHoldings);
//         res.status(201).json(Holdings);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }

// });

// app.get("/allHoldings", async (req, res) => {
//   try {
//     const Holdings = await HoldingsModel.find({});
//     res.status(200).json(Holdings);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


app.use("/api/holdings", holdingsRoutes);
// app.use("/api/positions", positionsRoutes);
app.use("/api/orders", ordersRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
