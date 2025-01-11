import * as ordersDb from "../db/ordersDb.js";
 


//create a new order


export const createOrderController = async (req, res) => {
    try {
      const newOrder = await ordersDb.createOrder(req.body);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(400).json({ message:'Error creating holding', error: error.message });
    }
  }
  