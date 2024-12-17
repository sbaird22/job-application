// src/components/JobList.tsx
import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../services/jobSearchService';

const JobList: React.FC = () => {
    const [jobs, setJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getJobs = async () => {
            try {
                const data = await fetchJobs('software engineer'); // Example query
                setJobs(data.jobs); // Adjust based on the actual response structure
            } catch (err) {
                setError('Failed to fetch jobs');
            } finally {
                setLoading(false);
            }
        };

        getJobs();
    }, []); // Empty dependency array means this runs once on mount

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>{job.title}</li> // Adjust based on the actual job object structure
                ))}
            </ul>
        </div>
    );
};

export default JobList;