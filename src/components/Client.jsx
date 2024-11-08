// src/components/Clients.jsx
import React from 'react';
import './client.css';

const clientsData = [
    { name: "Maa Ambe X Anamika", address: "Old Mumbai-Puna Road, Panvel, Navi Mumbai", contact: ["9769419731", "8850418165"] },
    { name: "Client B", address: "123 Client St, Mumbai", contact: ["9999999999"] },
    { name: "Tech Innovations Pvt Ltd", address: "Plot 42, Sector 14, Vashi, Navi Mumbai", contact: ["9988776655", "9922334455"] },
    { name: "Green Energy Solutions", address: "Baner, Pune, Maharashtra", contact: ["9856441122", "9911223344"] },
    { name: "Vibrant Technologies", address: "B-501, Andheri East, Mumbai", contact: ["9000001111", "9182736450"] },
    { name: "Skyline Construction", address: "Sector 35, CBD Belapur, Navi Mumbai", contact: ["8822334455", "9900112233"] },
    { name: "Global Enterprises", address: "Building 9, Worli, Mumbai", contact: ["9777888999", "9955223344"] },
    { name: "Oceanic Traders", address: "C-7, Malad West, Mumbai", contact: ["9112233445", "9354678231"] },
    { name: "Infinity Solutions", address: "Hiranandani Business Park, Powai, Mumbai", contact: ["9922113344", "9055678833"] },
    { name: "MediTech HealthCare", address: "Building 12, Lower Parel, Mumbai", contact: ["9988771122", "9394839292"] }
];


const Clients = () => {
    return (
        <div className="clients">
            <h2>Our Clients</h2>
            <div className="clients-list">
                {clientsData.map((client, index) => (
                    <div key={index} className="client-item">
                        <h3>{client.name}</h3>
                        <p><strong>Address:</strong> {client.address}</p>
                        <p><strong>Contact:</strong> {client.contact.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clients;
