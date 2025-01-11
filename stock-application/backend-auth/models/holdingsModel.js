import mongoose from "mongoose";
import holdingsSchema from "../schemas/holdingsSchema.js";


//create a mongoose model based on the schema
const HoldingsModel = mongoose.model("holdings", holdingsSchema);


export default HoldingsModel;