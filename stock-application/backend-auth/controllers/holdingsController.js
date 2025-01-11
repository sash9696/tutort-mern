import * as holdingsDb from "../db/holdingsDb.js";

//get all holdings
export const getAllHoldingsController = async (req, res) => {
  console.log('req.user',req.user)
  try {
    const holdings  = await holdingsDb.getAllHoldings();
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//create a new holding


export const createholdingController = async (req, res) => {
  try {
    const newHolding = await holdingsDb.createHolding(req.body);
    res.status(201).json(newHolding);
  } catch (error) {
    res.status(400).json({ message:'Error creating holding', error: error.message });
  }
}
