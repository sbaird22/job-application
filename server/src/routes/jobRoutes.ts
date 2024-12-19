import { Router, Request, Response } from "express";
import Job from "../models/job";

const router = Router();

// GET all jobs
router.get("/jobs", async (_: Request, res: Response) => {
    try {
        const jobs = await Job.findAll(); // Fetch all jobs from the database
        res.json(jobs); // Return jobs as JSON
    } catch (error) {
        res.status(500).json({ message: "Error fetching jobs", error });
    }
});

// POST a new job
router.post("/jobs", async (req: Request, res: Response) => {
    try {
        const newJob = await Job.create(req.body); // Create a new job from the request body
        res.status(201).json(newJob); // Return the newly created job
    } catch (error) {
        res.status(500).json({ message: "Error creating job", error });
    }
});

export default router;
