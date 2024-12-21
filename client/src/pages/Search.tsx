import React, { useState } from "react";
import api from '../utils/api';

interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
}

const Search: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        if (!query.trim()) {
            setError("Please enter a search term.");
            return;
        }
        setError(null);
        setLoading(true);

        try {
            const response = await api.get('/search', {
                params: { query },
            });
            setJobs(response.data.jobs || []);
        } catch (err) {
            setError("Failed to fetch jobs. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <h1>Search for Jobs</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search job titles or keywords..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-btn">Search</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            <div className="search-results">
                {jobs.length > 0 ? (
                    jobs.map((job) => (
                        <div key={job.id} className="job-card">
                            <h2>{job.title}</h2>
                            <p><strong>Company:</strong> {job.company}</p>
                            <p><strong>Location:</strong> {job.location}</p>
                            <p>{job.description}</p>
                        </div>
                    ))
                ) : (
                    !loading && <p>No jobs found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
