// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/Gallery">Gallery</Link></li>
                <li className="nav-item"><Link to="/services">Services</Link></li>
                <li className="nav-item"><Link to="/projects">About Us</Link></li>
                <li className="nav-item"><Link to="/clients">Clients</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
