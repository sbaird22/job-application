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
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/job-search/search`, {
            params: {
                engine: "google_jobs",
                q: query,
                location: location,
            },
        });
        console.log("API Response:", response.data);
        if (!response.data || !Array.isArray(response.data.data)) {
            console.error("Unexpected response structure:", response.data);
            throw new Error("Invalid response structure from backend.");
        }

        return response.data.data;
        

    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw new Error("Failed to fetch job listings");
    }
};