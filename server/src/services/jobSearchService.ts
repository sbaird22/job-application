import axios from "axios";
import dotenv from 'dotenv';
import { Job } from "../models/job";
dotenv.config(); // Load environment variables

const API_KEY = process.env.SERP_API_KEY;
console.log("API Key:", process.env);

export const fetchJobs = async (q: string, location: string): Promise<Job[]> => {
    try {
        const response = await axios.get(`https://serpapi.com/search`, {
            params: {
                engine: "google_jobs",
                q, // User-provided job search query
                location,
                api_key: API_KEY,
            },
        });
        console.log("Full SerpAPI Response:", JSON.stringify(response.data, null, 2)); 
        return response.data?.data || []; // Assuming the jobs are in the 'jobs' field of the response
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw new Error("Failed to fetch job listings");
    }
};