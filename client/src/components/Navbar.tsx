import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  const isLoggedIn = Boolean(localStorage.getItem('token'));
  return (
    <header className="navbar">
      <h1>Job Tracker</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        {!isLoggedIn && <Link to="/signup">Signup</Link>}
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
};
export default Navbar;