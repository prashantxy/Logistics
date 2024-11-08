// src/components/Footer.jsx
import React from 'react';
import './footer.css';  // Custom CSS file for Footer

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 My Company. All rights reserved.</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
