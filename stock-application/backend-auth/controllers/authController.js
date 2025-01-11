import * as authDb from "../db/authDb.js";
import UsersModel from "../models/usersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config(); //load env variables

//get all holdings
export const registerUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await UsersModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    //hash password

    const hashedPassword = await bcrypt.hash(password, 10);

    //create a new user

    const newUser = new UsersModel({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//create a new holding

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user exists
    const user = await UsersModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    //jwt token

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      email:user.email,
      token,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error Login user", error: error.message });
  }
};
