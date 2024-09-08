import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();


export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    //encryption algo + salt(a random string)

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({
      message: "User registered succesfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getProfile = async (req, res) => {

    res.json({user:req.user});
   
  };


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    //we need to check if user exists or not

    const user = await User.findOne({ email });
    // console.log('user',{user});
    if (!user) return res.send(404).json({ message: "User not found" });

    //if the password matches

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.send(400).json({ message: "Invalid credentials" });

    //we need a token
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      token
    });
  } catch (error) {

    res.status(500).json({
        message:error.message
      });
  }
};
