import { Router, Request, Response } from "express";
import Job from "../models/job";

const router = Router();

// GET all jobs
router.get("/jobs", async (_: Request, res: Response) => {
try {
    const jobs = await Job.findAll();
    res.json(jobs);
    } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
    }
});

// POST a new job
router.post("/jobs", async (req: Request, res: Response) => {
    try {
    const newJob = await Job.create(req.body);
    res.status(201).json(newJob);
    } catch (error) {
    res.status(500).json({ message: "Error creating job", error });
    }
});

export default router;
