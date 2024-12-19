// src/app.ts
import express from "express";
import cors from "cors";
import jobSearchRoutes from "./routes/jobSearchRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", jobSearchRoutes);

export { app }; // Named export
