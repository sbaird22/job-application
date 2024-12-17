import { Router } from "express";
import Job from "../models/Job.js";

const router = Router();

// GET all jobs
router.get("/jobs", async (req, res) => {
try {
    const jobs = await Job.findAll();
    res.json(jobs);
    } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
    }
});

// POST a new job
router.post("/jobs", async (req, res) => {
    try {
    const newJob = await Job.create(req.body);
    res.status(201).json(newJob);
    } catch (error) {
    res.status(500).json({ message: "Error creating job", error });
    }
});

export default router;
