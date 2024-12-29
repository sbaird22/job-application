// utils/search-api.ts

import axios from 'axios';

export interface Job {
    id: number;
    title: string;
    company_name: string;
    location: string;
    status: string;
    description: string;
    appliedDate: string;
    notes: string;

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
        const jobs = response.data.data.map((job: any) => ({
            ...job,
            id: job.job_id ?? job.id, // Prefer `job_id`, fallback to `id` if `job_id` is missing
        }));

        console.log("Mapped Jobs with IDs:", jobs);
        return jobs;
        

    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw new Error("Failed to fetch job listings");
    }
};