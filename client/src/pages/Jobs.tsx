import { useState, useEffect } from "react";
import api from '../utils/api';
import JobCard from "../components/JobCard";
import Chart from "../components/Chart";

const Jobs = () => {
    interface Job {
        id: number;
        status: string;
        // Add other properties of the job object here
    }

    const [jobs, setJobs] = useState<Job[]>([]);
    const [statusCounts, setStatusCounts] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await api.get(`${import.meta.env.VITE_API_BASE_URL}/jobs`);
            setJobs(response.data);

            const counts: { [key: string]: number } = {};
            response.data.forEach((job: Job) => {
                counts[job.status] = (counts[job.status] || 0) + 1;
            });
            setStatusCounts(counts);
        };

        fetchJobs();
    }, []);
    return (
        <div className="container">
            <Chart data={statusCounts} />
            {jobs.map((job: Job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
};

export default Jobs;
