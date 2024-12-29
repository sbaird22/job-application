import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchComponent from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import "./styles/App.css";

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
    console.log("Updated Jobs Array:", updatedJobs);
    const totalJobs = updatedJobs.length;
    const interviews = updatedJobs.filter((job) => job.status === "Interview").length;
    const offers = updatedJobs.filter((job) => job.status === "Offer").length;

    setStats({ totalJobs, interviews, offers });

    const statusCounts = updatedJobs.reduce<Record<string, number>>((acc, job) => {
      acc[job.status] = (acc[job.status] || 0) + 1;
      return acc;
    }, {});
    console.log("Updated Status Counts for Chart:", statusCounts);
    setChartData(statusCounts);
  };

  // Handlers for managing jobs
  const handleSave = (job: Job) => {
    setJobs((prevJobs) => {
      const updatedJobs = prevJobs.map((j) =>
        j.id === job.id ? { ...j, status: "Saved" } : j
      );
      console.log("Jobs After Save:", updatedJobs);
      updateStatsAndChart(updatedJobs);
      return updatedJobs;
    });
    console.log("Job saved:", job);
  };

  const handleChangeStatus = (id: number, newStatus: string) => {
    setJobs((prevJobs) => {
      const updatedJobs = prevJobs.map((job) => {
        if (job.id === id) {
          return { ...job, status: newStatus };
        }
        return job;
      });
      console.log("Jobs After Status Change:", updatedJobs); 

      // Update the chart data after changing the status
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










