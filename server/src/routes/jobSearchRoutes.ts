import { Router, Request, Response } from "express";
import { fetchGoogleJobs } from "../services/jobSearchService";

const router = Router();

router.get("/search-jobs", async (req: Request, res: Response) => {
    const query = req.query.query as string;

    if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
    }

    try {
    const results = await fetchGoogleJobs(query);
    return res.json(results);
    }
    catch (error) {
    return res.status(500).json({ error: error.message });
    }
});

export default router;
