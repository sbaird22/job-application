import { Router, Request, Response } from "express";
import { fetchJobs } from "../services/jobSearchService"; // Adjust the path as necessary
import Job from "../models/job"; // Ensure this model is defined correctly

const router = Router();

// Search Route
router.get(
    "/search",
    async (req: Request<any, any, any, { query: string }>, res: Response): Promise<void> => {
        const query = req.query.query;

        // Validate the query parameter
        if (!query) {
            res.status(400).json({ success: false, error: "Query parameter is required" });
            return;
        }

        try {
            console.log("Query received:", query);
            const results: Job[] = await fetchJobs(query); // Fetch jobs using the service
            res.json({ success: true, data: results });
        } catch (error) {
            console.error("Error fetching jobs:", error);
            res.status(500).json({ success: false, error: "Failed to fetch jobs" });
        }
    }
);

export default router;