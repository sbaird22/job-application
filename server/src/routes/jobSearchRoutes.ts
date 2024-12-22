import { Router, Request, Response } from "express";
import { fetchJobs } from "../services/jobSearchService";
import Job from "../models/job";

const router = Router();
router.get(
    "/search",
    async (req: Request<any, any, any, any>, res: Response): Promise<void> => {
      const query = req.query.query as string;

  
      if (!query) {
        res.status(400).json({ success: false, error: "Query parameter is required" });
        return;
      }
  
      try {
        console.log("Query received:", query);
        const results: Job[] = await fetchJobs(query);
        res.json({ success: true, data: results });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to fetch jobs" });
      }
    }
  );

export default router;