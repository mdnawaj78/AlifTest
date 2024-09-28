import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';

// Resolve the current directory path
const __dirname = path.resolve();

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON requests
app.use(cookieParser()); // Middleware to parse cookies

// Serve static files from the frontend build (if needed)
app.use(express.static(path.join(__dirname, '/todos/dist')));

// Ensure MONGO environment variable is defined
const mongoURI = process.env.MONGO;
if (!mongoURI) {
    console.error('Error: MONGO environment variable is not defined');
    process.exit(1);
}

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    });

// Test route (can be removed later)
app.get('/', (req, res) => {
    res.send("Hello, World!");
});

// API routes
app.use("/server/user", userRoutes);
app.use("/server/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
