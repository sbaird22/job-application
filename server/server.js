import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", jobRoutes);
// Database Connection
const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: "postgres" });

try {
await sequelize.authenticate();
console.log("Database connected!");
} catch (error) {
console.error("Database connection failed:", error);
}

// Basic Route
app.get("/", (req, res) => res.send("Job Tracker API Running!"));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
