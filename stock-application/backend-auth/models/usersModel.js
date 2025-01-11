import mongoose from "mongoose";
import usersSchema from "../schemas/usersSchema.js";


//create a mongoose model based on the schema
const UsersModel = mongoose.model("users", usersSchema);


export default UsersModel;