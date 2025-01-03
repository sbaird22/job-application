import React, { useState } from 'react';
import { fetchJobListings, Job } from '../utils/search-api';
import JobCard from '../components/JobCard'; 

const SearchComponent: React.FC<{ 
    jobs: Job[]; 
    setJobs: React.Dispatch<React.SetStateAction<Job[]>>; 
    onSave: (job: Job) => void; 
    onChangeStatus: (id: number, newStatus: string) => void; 
}> = ({ jobs, setJobs, onSave, onChangeStatus }) => {
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null); // Reset error state
        try {
            const results = await fetchJobListings(query, location);
            console.log("Fetched jobs from API:", results);
            setJobs(results);
        } catch (err) {
            setError('Failed to fetch job listings. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
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

            <div className="job-results">
                {jobs.map((job) => (
                    <JobCard 
                        key={`${job.title}-${job.company_name}-${job.location}-${job.description}`} 
                        job={job}
                        onSave={(job) => { 
                            console.log("Saving job:", job); 
                            onSave(job); 
                        }}
                        onChangeStatus={(id, newStatus) => { 
                            onChangeStatus(id, newStatus); 
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchComponent;
