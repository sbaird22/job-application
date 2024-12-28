import React, { useState } from "react";
import "../styles/JobCard.css";
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

const JobCard = ({ job, onSave, onDiscard, onChangeStatus }: { 
    job: Job;
    onSave: (job: Job) => void;
    onDiscard: (id: number) => void;
    onChangeStatus: (id: number, status: string) => void;
}) => {
    const [status, setStatus] = useState(job.status);

    const handleStatusChange = (newStatus: string) => {
        setStatus(newStatus);
        onChangeStatus(job.id, newStatus);
    }

    return (
        <div className="job-card">
            <h3 className="job-title">{job.title}</h3>
            <p><strong>Company: </strong>{job.company_name}</p>
            <p><strong>Location: </strong>{job.location}</p>
            <p><strong>Description: </strong>{job.description}</p>
            <p><strong>Status: </strong>{status}</p>
            
    <div className="job-actions">
        <button onClick={() => handleStatusChange("Applied")}>Applied</button>
        <button onClick={() => handleStatusChange("Interview")}>Interview</button>
        <button onClick={() => handleStatusChange("Offer")}>Offer</button>
        <button onClick={() => onSave(job)}>Save</button>
        <button onClick={() => onDiscard(job.id)}>Discard</button>
    </div>
</div>
);
};
export default JobCard;