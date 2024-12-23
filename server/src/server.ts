import express, { Request, Response } from "express";
import path from "path";
import cors from "cors";
import sequelize from "./config/database"; // Assuming Sequelize is used for database connections
import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" }); // Load environment variables
// Import your routes
import jobRoutes from "./routes/jobRoutes";
import jobSearchRoutes from "./routes/jobSearchRoutes";
import authRoutes from "./routes/authRoutes";
const app = express();
const PORT = process.env.PORT || 3001;
// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173", // Update with your client URL in production
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
// Serve static files from the Vite build directory
const clientPath = path.resolve(__dirname, "../../../client");
app.use(express.static(clientPath));
// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/job-search", jobSearchRoutes);
// Fallback for React SPA (Serve `index.html` for unmatched routes)
app.get("*", (_req: Request, res: Response) => {
  res.sendFile(path.resolve(clientPath, "index.html"));
});
// Start the server and connect to the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit if the database connection fails
  }
})();