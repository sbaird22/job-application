import React from "react";

const JobCard = ({ job }: { job: any }) => (
    <div className="card">
        <h3>{job.title}</h3>
        <p>Company: {job.company}</p>
        <p>Status: {job.status}</p>
        <p>Applied Date: {new Date(job.appliedDate).toLocaleDateString()}</p>
        <p>Notes: {job.notes}</p>
    </div>
);

export default JobCard;
