import { Router, Request, Response } from "express";
import { fetchJobs } from "../services/jobSearchService";
import Job from "../models/job"; // Ensure this model is defined correctly

const router = Router();

// Search Route
router.get(
    "/search",
    async (req: Request<any, any, any, { q?: string; location?: string }>, res: Response): Promise<void> => {
        const { q, location } = req.query;

        // Validate the query parameters
        if (!q || !location) {
            res.status(400).json({
                success: false,
                error: "Both 'q' (query) and 'location' parameters are required",
            });
            return;
        }

        try {
            console.log("Search query received:", { q, location });

            // Fetch jobs from external API (e.g., SerpApi)
            const externalResults = await fetchJobs(q, location);

            // Fetch jobs from local database
            const localResults = await Job.findAll({
                where: {
                    title: q,
                    location, // Ensure the Job model includes a location field
                },
            });

            // Combine results
            const combinedResults = [...externalResults, ...localResults];

            res.json({ success: true, data: combinedResults });
        } catch (error) {
            console.error("Error fetching jobs:", error);
            res.status(500).json({ success: false, error: "Failed to fetch job listings" });
        }
    }
);

export default router;
