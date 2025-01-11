import OrdersModel from "../models/ordersModel.js";

export const createOrder = async (data) => {
  try {
    const newOrder = new OrdersModel(data);
    await newOrder.save();
    return newOrder;
  } catch (error) {
    throw new Error("Error creating order", error.message);
  }
};
