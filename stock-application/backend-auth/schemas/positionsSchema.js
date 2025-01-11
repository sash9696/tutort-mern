import mongoose from "mongoose";

//individual trade entriies

const positionsSchema = new mongoose.Schema({
    product: { type: String, required: true },
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    avg: { type: Number, required: true },
    price: { type: Number, required: true },
    net: { type: String, required: true }, //5%
    day: { type: String, required: true },
    isLoss:{type:Boolean}
});

export default positionsSchema;
