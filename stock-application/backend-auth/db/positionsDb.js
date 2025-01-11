import positionsModel from "../models/positionsModel.js";

export const getAllPositions = async () => {
  try {
    return await positionsModel.find({});
  } catch (error) {
    throw new Error("Error fetching positions", error.message);
  }
};
