import React from "react";
import "../styles/JobCard.css";
interface Job {
    title: string;
    company_name: string;
    status: string;
    location: string;
    appliedDate: string;
    notes: string;
    description: string;
}

const JobCard = ({ job }: { job: Job }) => (
    <div className="job-card">
        <h3 className="job-title">{job.title}</h3>
        <p><strong>Company: </strong>{job.company_name}</p>
        <p><strong>Location: </strong>{job.location}</p>
        <p><strong>Description: </strong>{job.description}</p>
        <p><strong>Status: </strong>{job.status}</p>
        <p><strong>Applied Date:</strong> {new Date(job.appliedDate).toLocaleDateString()}</p>
        <p><strong>Notes: </strong>{job.notes}</p>
    </div>
);

export default JobCard;
