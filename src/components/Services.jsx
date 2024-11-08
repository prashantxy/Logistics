// src/components/Services.jsx
import React from 'react';
import './services.css';  // Ensure this path is correct

const servicesData = [
    {
        title: "Transportation",
        description: "Reliable transportation services tailored to your needs."
    },
    {
        title: "Warehousing",
        description: "Secure and efficient warehousing solutions."
    },
    {
        title: "Consultation",
        description: "Expert consultation services for logistics optimization."
    },
    {
        title: "Supply Chain Management",
        description: "End-to-end supply chain management solutions to optimize operations and reduce costs."
    }
];


const Services = () => {
    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="services-list">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-item">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
