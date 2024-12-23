import axios from "axios";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const API_KEY = process.env.VITE_SERPA_API_KEY;
console.log("API Key:", API_KEY);

export const fetchJobs = async (q: string, location: string): Promise<any[]> => {
    try {
        const response = await axios.get(`https://serpapi.com/search`, {
            params: {
                engine: "google_jobs",
                api_key: API_KEY,
                q, // User-provided job search query
                location, // User-provided location
            },
        });
        return response.data.jobs_results || []; // Assuming the jobs are in the 'jobs' field of the response
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw new Error("Failed to fetch job listings");
    }
};