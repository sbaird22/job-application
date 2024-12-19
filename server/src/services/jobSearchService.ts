import axios from "axios";

const API_KEY = process.env.GOOGLE_KEY;

export const fetchJobs = async (query: string): Promise<any[]> => {
    try {
    const response = await axios.get(`https://serpapi.com/search`, {
        params: {
        engine: "google_jobs",
        api_key: API_KEY,     
        q: query, // User-provided job search query
        },
    });
    return response.data as any[];
    }
    catch (error) {
    console.error("Error fetching jobs:", error);
    throw new Error("Failed to fetch job listings");
    }
};
