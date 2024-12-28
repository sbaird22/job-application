import React from "react";
import "../styles/Home.css";
import Chart from "../components/Chart";

interface Stats {
    totalJobs: number;
    interviews: number;
    offers: number;
}

const Home: React.FC<{ stats: Stats; chartData: Record<string, number> }> = ({ stats, chartData }) => {
    return (
        <div className="dashboard">
            <h1>Job Tracker Dashboard</h1>
            <div className="stats">
                <p><strong>Total Jobs Applied:</strong> {stats.totalJobs}</p>
                <p><strong>Interviews Scheduled:</strong> {stats.interviews}</p>
                <p><strong>Offers Received:</strong> {stats.offers}</p>
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
