import mongoose from "mongoose";
import positionsSchema from "../schemas/positionsSchema.js";


//create a mongoose model based on the schema
const PositionsModel = mongoose.model("positions", positionsSchema);


export default PositionsModel;