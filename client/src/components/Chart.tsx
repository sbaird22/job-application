// src/components/Chart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart: React.FC<{ data: Record<string, number> }> = ({ data }) => {
    console.log("Chart Data Received:", data);
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: 'Job Application Status',
                data: Object.values(data),
                backgroundColor: [
                    '#007acc',
                    '#60a5fa',
                    '#e2e8f0',
                    '#475569',
                    '#1e293b',
                ],
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