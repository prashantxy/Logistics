// src/components/AboutUs.jsx
import React from 'react';
import './aboutus.css'; // Import the CSS for animations

const AboutUs = () => {
    return (
        <div className="aboutus">
            <h2 className="aboutus-title">About Us</h2>
            <div className="aboutus-cards">
                <div className="aboutus-card">
                    <h3>Company Overview</h3>
                    <p>
                        Maa Ambe Road Carrier, along with its sister concern Anamika Road Lines, is a leading and fast-growing company in the transport industry. We have a presence in over 10+ branches across Pan India, with our head office located in Mumbai.
                    </p>
                </div>
                <div className="aboutus-card">
                    <h3>Our Vision</h3>
                    <p>
                        To be the pioneers in handling the distribution of materials safely, in time and intact, while building a culture of efficiency, reliability, and total quality management in the logistics sector.
                    </p>
                </div>
                <div className="aboutus-card">
                    <h3>Our Mission</h3>
                    <p>
                        To add value to the comprehensive range of logistics solutions globally and excel in using the 'best of the breed' technology, providing our customers with a competitive and economical edge.
                    </p>
                </div>
                <div className="aboutus-card">
                    <h3>Our Values</h3>
                    <p>
                        We strive to achieve superlative customer satisfaction through ethical business practices, respect and dignity for all stakeholders, and concern for the environment and society.
                    </p>
                </div>
                <div className="aboutus-card">
                    <h3>Our Services</h3>
                    <p>
                        Apart from Dry Cargo, we provide Refrigerated Transportation services, LTL (Less than Truck Load) services, Over Dimensional Consignments (ODC), Air Cargo, and Last Mile Delivery services.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
