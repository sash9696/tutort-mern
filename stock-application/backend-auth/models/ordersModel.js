import ordersSchema from "../schemas/ordersSchema.js";
import mongoose from "mongoose";



const OrdersModel  = mongoose.model('orders', ordersSchema);

export default OrdersModel;