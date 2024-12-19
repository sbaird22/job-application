import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config(); // Load environment variables

const app = express(); // Create the Express app
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", jobRoutes);

// Basic Route
app.get("/", (_: Request, res: Response) => {
    res.send("Job Tracker API Running!");
});

// Database Connection
const sequelize = new Sequelize(process.env.DATABASE_URL || "", { dialect: "postgres" });

(async () => {
    try 
    {
    await sequelize.authenticate();
    console.log("Database connected!");
    }
    catch (error) {
    console.error("Database connection failed:", error);
    }

  // Start Server after database connection
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})();
