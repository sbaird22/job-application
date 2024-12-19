import { Router, Request, Response } from "express";
import { fetchJobs } from "../services/jobSearchService";
import Job from "../models/job";

const router = Router();

interface Job {
    id: string;
    title: string;
    location: string;
    company: string;
}
router.get(
    "/search-jobs",
    async (req: Request<any, any, any, any>, res: Response): Promise<void> => {
      const { query } = req.query;
  
      if (!query) {
        res.status(400).json({ success: false, error: "Query parameter is required" });
        return;
      }
  
      try {
        const results: Job[] = await fetchJobs(query);
        res.json({ success: true, data: results });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to fetch jobs" });
      }
    }
  );

export default router;