import React from "react";
import { Pie } from "react-chartjs-2";

const Chart = ({ data }: { data: Record<string, number> }) => {
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: "Job Applications",
                data: Object.values(data),
                backgroundColor: ["#007acc", "#60a5fa", "#e2e8f0", "#475569", "#1e293b"],
            },
        ],
    };

    return (
        <div className="chart-container">
            <Pie data={chartData} />
        </div>
    );
};

export default Chart;
