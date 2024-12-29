import "../styles/Home.css";
import React from 'react';
import Chart from '../components/Chart';

interface HomeProps {
    stats: {
        totalJobs: number;
        interviews: number;
        offers: number;
        applied: number;
    };
    chartData: Record<string, number>;
}

const Home: React.FC<HomeProps> = ({ stats, chartData }) => {
    return (
        <div className="dashboard">
            <h1>Job Tracker Dashboard</h1>
            <div className="stats">
                <p><strong>Total Jobs Found:</strong> {stats.totalJobs}</p>
                <p><strong>Interviews Scheduled:</strong> {stats.interviews}</p>
                <p><strong>Offers Received:</strong> {stats.offers}</p>
                <p><strong>Applications Submitted:</strong> {stats.applied}</p>
            </div>
            <div className="chart-section">
                <h2>Job Application Status</h2>
                {Object.keys(chartData).length > 0 ? (
                    <Chart data={chartData} />
                ) : (
                    <p>No data available to display.</p>
                )}
            </div>
        </div>
    );
};

export default Home;