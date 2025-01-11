import UsersModel from "../models/usersModel.js";


export const registerUser = async () => {
  try {
    
  } catch (error) {
    throw new Error("Error fetching holdings", error.message);
  }
};

// Create a new holding

export const loginUser = async (data) => {
  try {
    console.log('loginUser', data)
    return 'login '
  } catch (error) {
    throw new Error("Error login user", error.message);
  }
};
