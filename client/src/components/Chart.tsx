import React from "react";
import { Pie } from "react-chartjs-2";

const Chart = ({ data }: { data: any }) => {
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

    return <Pie data={chartData} />;
};

export default Chart;
