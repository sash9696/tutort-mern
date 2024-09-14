const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

console.log('process.env.MONGO_URI',process.env.MONGO_URI)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error: ', error.message);
        process.exit(1);
    }
}
connectDB();


const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on Port: ${process.env.PORT}`);
})