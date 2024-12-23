// utils/search-api.ts

import axios from 'axios';

export interface Job {
    title: string;
    company: string;
    location: string;
    description: string;
}

export const fetchJobListings = async (query: string, location: string): Promise<Job[]> => {
    const apiKey = import.meta.env.VITE_SERP_API_KEY; // Ensure you use VITE_ prefix for Vite to expose env variables
    try {
        const response = await axios.get(`https://serpapi.com/search`, {
            params: {
                engine: "google_jobs",
                api_key: apiKey,
                q: query,
                location: location,
            },
        });
        return response.data.jobs; // Adjust based on the actual response structure
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw new Error("Failed to fetch job listings");
    }
};