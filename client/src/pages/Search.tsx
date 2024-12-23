// SearchComponent.tsx

import React, { useState } from 'react';
import { fetchJobListings, Job } from '../utils/search-api';

const SearchComponent: React.FC = () => {
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('');
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null); // Reset error state
        try {
            const results = await fetchJobListings(query, location);
            setJobs(results);
        } catch (err) {
            setError('Failed to fetch job listings. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Job title" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
                {jobs.map((job, index) => (
                    <div key={index}>
                        <h3>{job.title}</h3>
                        <p>{job.company} - {job.location}</p>
                        <p>{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchComponent;