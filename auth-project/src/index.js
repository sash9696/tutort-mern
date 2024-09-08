import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

//auth routes
//products routes
//orders routes

app.use('/api/auth', authRoutes)
// app.use('/api/products', productRoutes)

const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})