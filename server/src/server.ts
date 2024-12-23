import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import sequelize from "./config/database"; // Database connection
import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" }); // Load environment variables

// Import routes
import authRoutes from "./routes/authRoutes";
import jobRoutes from "./routes/jobRoutes";
import jobSearchRoutes from "./routes/jobSearchRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173", // Replace with your frontend URL in production
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Use CORS with options
app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the dist directory (client)
const clientPath = path.join(__dirname, "../../client/dist");
app.use(express.static(clientPath));

// API Routes
app.use("/api/auth", authRoutes); // Auth routes
app.use("/api/jobs", jobRoutes); // Job routes
app.use("/api/job-search", jobSearchRoutes); // Job search routes

// Serve React app for any unmatched routes
app.get("*", (_: Request, res: Response) => {
    const indexPath = path.join(clientPath, "index.html");
    res.sendFile(indexPath);
});

// Ensure database connection and start the server
(async () => {
    try {
        await sequelize.authenticate(); // Test database connection
        console.log("Database connected successfully!");

        // Run migrations programmatically
        await sequelize.sync({ alter: true });
        console.log("Database migrations applied successfully!");

        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit if the database connection fails
    }
})();
