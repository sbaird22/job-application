// src/pages/SavedJobs.tsx

import React from 'react';
import JobCard from '../components/JobCard';
import '../styles/Jobs.css';

interface Job {
    id: number;
    title: string;
    company_name: string;
    location: string;
    status: string;
    description: string;
    appliedDate: string;
    notes: string;
}

interface SavedJobsProps {
jobs: Job[];
onChangeStatus: (id: number, newStatus: string) => void;
}

const SavedJobs: React.FC<SavedJobsProps> = ({ jobs, onChangeStatus }) => {
const savedJobs = jobs.filter((job) => job.status === 'Saved');

return (
    <div className="jobs-page">
        <h1>Saved Jobs</h1>
        <div className="job-list-container">
        {savedJobs.length > 0 ? (
        savedJobs.map((job) => (
            <JobCard
                key={job.id}
                job={job}
                onSave={() => {}}
                onChangeStatus={onChangeStatus}
            />
            ))
        ) : (
        <p>No saved jobs yet.</p>
        )}
        </div>
    </div>
);
};

export default SavedJobs;
