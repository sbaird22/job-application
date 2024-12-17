const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Sample Route
app.get("/", (req, res) => res.send("Job Tracker API Running"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));