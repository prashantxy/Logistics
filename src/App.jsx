// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
// Import the About component
import Services from './components/Services'; // Import the Services component
import Projects from './components/AboutUs'; // Import the Projects component
import Clients from './components/Client'; 
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer'; // Import Footer component

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer /> {/* Add Footer here */}
        </Router>
    );
}

export default App;
