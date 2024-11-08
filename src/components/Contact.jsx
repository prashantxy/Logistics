// src/components/Contact.jsx
import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-header">
                <h2 className="typing-animation">Contact Us</h2> {/* Apply typing animation */}
                <p className = "color-blue">If you have any questions, feel free to reach out to us. We'd love to hear from you!</p>  {/* Apply typing animation */}
            </div>
            
            <div className="contact-info">
                <div className="info-item">
                    <span className="info-label">Email:</span>
                    <span className="info-value">contact@example.com</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Phone:</span>
                    <span className="info-value">+1 234 567 890</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Address:</span>
                    <span className="info-value">123 Example Street, City, Country</span>
                </div>
            </div>

            <div className="social-media">
                <h3 className="typing-animation">Follow Us</h3> {/* Typing animation */}
                <p className="color-blue">Stay connected through our social media channels:</p>
                <ul>
                    <li><a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
