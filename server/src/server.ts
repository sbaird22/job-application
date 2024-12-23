import express, { Request, Response } from "express";
import cors from "cors";
import sequelize from "./config/database";
import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" }); // Load environment variables
console.log("DATABASE_URL:", process.env.DATABASE_URL);
import jobRoutes from "./routes/jobRoutes";
import jobSearchRoutes from "./routes/jobSearchRoutes";
import authRoutes from './routes/authRoutes';

const app = express(); // Create the Express app
const PORT = process.env.PORT || 3001;

    // Start the server
    app.listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
);

// Middleware
app.use(
    cors({
        origin: "http://localhost:5173", // Allow requests from your frontend
        methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
        credentials: true, // Allow cookies
    })
); 
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use("/api", jobSearchRoutes);
app.use("/api", jobRoutes);

// Basic Route
app.get("/", (_: Request, res: Response) => {
    res.send("Job Tracker API Running!");
});

// Ensure database connection and start server
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit process if the database connection fails
        }
    })();
