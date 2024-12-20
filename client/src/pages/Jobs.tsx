import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import Chart from "../components/Chart";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [statusCounts, setStatusCounts] = useState<any>({});

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/jobs`);
            setJobs(response.data);

            const counts: any = {};
            response.data.forEach((job: any) => {
                counts[job.status] = (counts[job.status] || 0) + 1;
            });
            setStatusCounts(counts);
        };

        fetchJobs();
    }, []);

    return (
        <div className="container">
            <Chart data={statusCounts} />
            {jobs.map((job: any) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
};

export default Jobs;
