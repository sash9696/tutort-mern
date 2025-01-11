import * as postionsDb from "../db/positionsDb.js";

//get all positions
export const getAllPositionsController = async (req, res) => {
  try {
    const positions  = await postionsDb.getAllPositions();
    res.json(positions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
