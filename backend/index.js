import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./Routes/auth.js";
import userRouter from "./Routes/user.js";
import clientRouter from "./Routes/client.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: true, 
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/clients', clientRouter);


// Routes
app.get("/", (req, res) => {
    res.send("API is working");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB database connected successfully");
    } catch (err) {
        console.error("MongoDB connection failed:", err);
    }
};

app.listen(port, () => {
    connectDB();
    console.log("Server is running on port " + port);
});