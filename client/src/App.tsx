import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchComponent from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

interface Job {
  id: number;
  title: string;
  company_name: string;
  location: string;
  status: string;
  description: string;
  appliedDate: string;
  notes: string;
}

const App: React.FC = () => {
  // State for managing jobs
  const [jobs, setJobs] = useState<Job[]>([]);
  
  // State for stats and chart data for the Home page
  const [stats, setStats] = useState({
    totalJobs: 0,
    interviews: 0,
    offers: 0,
  });
  const [chartData, setChartData] = useState<Record<string, number>>({});

  // Function to update stats and chartData
  const updateStatsAndChart = (updatedJobs: Job[]) => {
    const totalJobs = updatedJobs.length;
    const interviews = updatedJobs.filter((job) => job.status === "Interview").length;
    const offers = updatedJobs.filter((job) => job.status === "Offer").length;

    setStats({ totalJobs, interviews, offers });

    const statusCounts = updatedJobs.reduce<Record<string, number>>((acc, job) => {
      acc[job.status] = (acc[job.status] || 0) + 1;
      return acc;
    }, {});
    setChartData(statusCounts);
  };

  // Handlers for managing jobs
  const handleSave = (job: Job) => {
    setJobs((prevJobs) => {
      const updatedJobs = prevJobs.map((j) =>
        j.id === job.id ? { ...j, status: "Saved" } : j
      );
      updateStatsAndChart(updatedJobs);
      return updatedJobs;
    });
    console.log("Job saved:", job);
  };

  const handleDiscard = (id: number) => {
    setJobs((prevJobs) => {
      const updatedJobs = prevJobs.filter((job) => job.id !== id);
      updateStatsAndChart(updatedJobs);
      return updatedJobs;
    });
    console.log("Job discarded:", id);
  };

  const handleChangeStatus = (id: number, newStatus: string) => {
    setJobs((prevJobs) => {
      const updatedJobs = prevJobs.map((job) =>
        job.id === id ? { ...job, status: newStatus } : job
      );
      updateStatsAndChart(updatedJobs);
      return updatedJobs;
    });
    console.log("Job status changed:", { id, newStatus });
  };

  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home stats={stats} chartData={chartData} />
            </PrivateRoute>
          }
        />

        {/* Search Page */}
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <SearchComponent
                jobs={jobs}
                setJobs={setJobs}
                onSave={handleSave}
                onDiscard={handleDiscard}
                onChangeStatus={handleChangeStatus}
              />
            </PrivateRoute>
          }
        />

        {/* Signup and Login */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;










