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

const JobCard = ({
    job,
    onSave,
    onChangeStatus,
}: {
    job: Job;
    onSave: (job: Job) => void;
    onChangeStatus: (id: number, status: string) => void;
}) => {
    const [status, setStatus] = useState(job.status);

    const handleStatusChange = (newStatus: string, event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation(); // Prevent event propagation
        setStatus(newStatus);
        onChangeStatus(job.id, newStatus);
    };

    const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation(); // Prevent event propagation
        onSave(job);
    };

    return (
        <div
            className="job-card"
            onClick={(e) => e.stopPropagation()} // Ensure the card itself doesn't propagate the event
        >
            <h3 className="job-title">{job.title}</h3>
            <p>
                <strong>Company: </strong>
                {job.company_name}
            </p>
            <p>
                <strong>Location: </strong>
                {job.location}
            </p>
            <p>
                <strong>Description: </strong>
                {job.description}
            </p>
            <p>
                <strong>Status: </strong>
                {status}
            </p>

            <div className="job-actions">
                <button onClick={(e) => handleStatusChange("Applied", e)}>
                    Applied
                </button>
                <button onClick={(e) => handleStatusChange("Interview", e)}>
                    Interview
                </button>
                <button onClick={(e) => handleStatusChange("Offer", e)}>
                    Offer
                </button>
                <button onClick={(e) => handleSave(e)}>Save</button>
            </div>
        </div>
    );
};

export default JobCard;
