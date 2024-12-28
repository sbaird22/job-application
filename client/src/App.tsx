import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchComponent from './pages/Search';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  const stats: { totalJobs: number; interviews: number; offers: number } = {
    totalJobs: 0,
    interviews: 0,
    offers: 0,
  }; // Define stats variable with type
  const chartData: { [key: string]: number } = {}; // Define chartData variable with type
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home stats={stats} chartData={chartData}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <SearchComponent />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
export default App;












