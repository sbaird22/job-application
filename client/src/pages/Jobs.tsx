// src/pages/Jobs.tsx

import { useState, useEffect } from "react";
import api from '../utils/api';
import JobCard from "../components/JobCard";
import Chart from "../components/Chart";
import "../styles/Jobs.css";


const Jobs = () => {
    interface Job {
        id: number;
        title: string; // Add other properties of the job object here
        companyName: string;
        location: string;
        status: string;
        description: string;
        appliedDate: string;
        notes: string;
    }

    const [jobs, setJobs] = useState<Job[]>([]);
    const [statusCounts, setStatusCounts] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await api.get("/jobs");
                setJobs(response.data);

                const counts: { [key: string]: number } = {};
                response.data.forEach((job: Job) => {
                    counts[job.status] = (counts[job.status] || 0) + 1;
                });
                setStatusCounts(counts);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="jobs-page">
            <h1>Job Listings</h1>
            <div className="chart-section">
                <Chart data={statusCounts} />
            </div>
            <div className="job-list-container">
                {jobs.map((job: Job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default Jobs;