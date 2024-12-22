import axios from 'axios';

// Define the interface for job listings
export interface Job {
    title: string;
    company: string;
    location: string;
    description: string;
}


// Function to fetch job listings from SerpApi
export async function fetchJobListings(query: string, location: string, apiKey: string): Promise<Job[]> {
    const endpoint = `https://serpapi.com/search?engine=google_jobs&q=${encodeURIComponent(query)}&l=${encodeURIComponent(location)}&api_key=1ec640930a1b73287790bb4fdbf3b5b943d1a032aab1d49a72389665f5a6fe2f`;

    try {
        const response: { data: { jobs: Job[] } } = await axios.get(endpoint, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            }
        });
        return response.data.jobs; // Adjust based on the actual response structure
    } catch (error) {
        console.error('Error fetching job listings:', error);
        return [];
    }
}