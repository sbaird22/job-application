import React from "react";
import "../styles/JobCard.css";
const JobCard = ({ job }: { job: any }) => (
    <div className="job-card">
        <h3 className="job-title">{job.title}</h3>
        <p><strong>Company: </strong>{job.company}</p>
        <p><strong>Status: </strong>{job.status}</p>
        <p><strong>Applied Date:</strong> {new Date(job.appliedDate).toLocaleDateString()}</p>
        <p><strong>Notes: </strong>{job.notes}</p>
    </div>
);

export default JobCard;
