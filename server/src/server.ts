import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" }); // Load environment variables
console.log("DATABASE_URL:", process.env.DATABASE_URL);
import jobSearchRoutes from "./routes/jobSearchRoutes";
import express, { Request, Response } from "express";
import cors from "cors";
import sequelize from "./config/database";
import jobRoutes from "./routes/jobRoutes";

const app = express(); // Create the Express app
const PORT = process.env.PORT || 5000;

// Middleware
app.use("/api", jobSearchRoutes);
app.use(cors());
app.use(express.json());

// API Routes
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

    // Start the server
    app.listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
    );
})();
