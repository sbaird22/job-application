import React from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
    return (
        <header className="navbar">
            <h1 className="navbar-title">Job Tracker</h1>
            <nav className="navbar-nav">
                <Link to="/" className="navbar-btn">Home</Link>
                <Link to="/search" className="navbar-btn">Search</Link>
            </nav>
            <ToggleTheme />
        </header>
    );
};

export default Navbar;
