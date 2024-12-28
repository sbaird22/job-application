import React from "react";
import "../styles/Home.css";
import Chart from "../components/Chart";


interface Stats {
    totalJobs: number;
    interviews: number;
    offers: number;
}

interface ChartData {
    [key: string]: number;
}

const Home = ({ stats, chartData }: {stats: Stats; chartData: ChartData}) => {
    return (
        <div className="dashboard">
            <h1>Job Tracker Dashboard</h1>
            <div className="stats">
                <p>Total Jobs Applied: {stats.totalJobs}</p>
                <p>Interviews Scheduled: {stats.interviews}</p>
                <p>Offers Received: {stats.offers}</p>
            </div>
            <Chart data={chartData} />
        </div>
    );
}

export default Home;
