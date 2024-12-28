// SearchComponent.tsx

import React, { useState } from 'react';
import { fetchJobListings, Job } from '../utils/search-api';
import JobCard from '../components/JobCard'; 

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
    const handleSave = (job: Job) => {
        setJobs((prevJobs) => 
            prevJobs.map((j) => (j.id ===job.id?{...j,status:'Saved'} : j))
    );
    console.log('Job saved:', job);
};
const handleDiscard = (id: number) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    console.log('Job discarded:', id);
};
const handleChangeStatus = (id: number, newStatus: string) => {
    setJobs((prevJobs) =>
        prevJobs.map((job) => (job.id === id ? { ...job, status: newStatus } : job))
    );
    console.log('Job status changed:', { id, newStatus });
};
                

    return (
        <div className='search-container'>
            <section className='search-bar'>
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
            </section>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className = "job-results">
                {jobs.map((job) => (
                    <JobCard 
                        key={`${job.title}-${job.company_name}-${job.location}-${job.description}`} 
                        job={job}
                        onSave={  handleSave }
                        onDiscard={ handleDiscard }
                        onChangeStatus={ handleChangeStatus }
                    /> 
                ))}
            </div>
        </div>
    );
};

export default SearchComponent;