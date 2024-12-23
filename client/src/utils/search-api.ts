// utils/search-api.ts

import axios from 'axios';

export interface Job {
    title: string;
    company: string;
    location: string;
    description: string;
}

export const fetchJobListings = async (query: string, location: string): Promise<Job[]> => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/job-search/search`, {
            params: {
                engine: "google_jobs",
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