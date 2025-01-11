import HoldingsModel from "../models/holdingsModel.js";


//eslint 
//prettiers
//unit testing
//github actions
//get all holdings

export const getAllHoldings = async () => {
  try {
    return await HoldingsModel.find({});
  } catch (error) {
    throw new Error("Error fetching holdings", error.message);
  }
};

// Create a new holding

export const createHolding = async (data) => {
  try {
    const newHolding = new HoldingsModel(data);
    await newHolding.save();
    return newHolding;
  } catch (error) {
    throw new Error("Error creating holding", error.message);
  }
};
