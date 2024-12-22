// search.tsx

import React, { useState } from 'react';
import { fetchJobListings, Job } from '../utils/search-api';


const SearchComponent: React.FC = () => {
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('');
    const [jobs, setJobs] = useState<Job[]>([]);
    const apiKey = import.meta.env.SERPA_API_KEY; 

    const handleSearch = async () => {
        const results = await fetchJobListings(query, location, apiKey);
        setJobs(results);
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
            <button onClick={handleSearch}>Search</button>

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