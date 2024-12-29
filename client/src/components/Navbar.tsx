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
      <h1 className='navbar-brand'>Job Tracker</h1>
      <nav className='navbar-links'>
        <Link className='navbar-btn' to="/">Home</Link>
        <Link className='navbar-btn' to="/search">Search</Link>
        <Link className='navbar-btn' to="/saved">Saved Jobs</Link>
        {!isLoggedIn && <Link className='navbar-btn' to="/signup">Signup</Link>}
        {!isLoggedIn && <Link className='navbar-btn' to="/login">Login</Link>}
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
};
export default Navbar;