import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './home.css'; // Import the CSS file for styling
 // Ensure this path is correct


const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to control chatbot visibility
  const [userInput, setUserInput] = useState(''); // State for user input
  const [messages, setMessages] = useState([ // State to hold messages in the chatbot
    { text: 'Hello! How can I assist you today?', sender: 'bot' }
  ]);

  useEffect(() => {
    // GSAP animations for the landing page
    gsap.from(".heading-container h1", {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: "power4.out"
    });

    gsap.from(".heading-container h2", {
      opacity: 0,
      y: -50,
      duration: 1.5,
      delay: 0.5,
      ease: "power4.out"
    });

    gsap.from(".cta-button", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 1,
      ease: "power4.out"
    });

    // Remove the Three.js scene setup since it's no longer needed

  }, []);

  const toggleChatbot = () => {
    setIsChatOpen(!isChatOpen); // Toggle chatbot visibility
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value); // Set the user input
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      // Add user message to the chat
      const userMessage = { text: userInput, sender: 'user' };
      setMessages([...messages, userMessage]);

      // Predefined responses based on user input
      let botResponse = '';
      if (userInput.toLowerCase().includes('services')) {
        botResponse = 'All kind of logistics and transportation services available type contact for more info';
      } else if (userInput.toLowerCase().includes('contact')) {
        botResponse = 'You can contact us at contact@gmail.in and on call 7383748232';
      } else {
        botResponse = 'I\'m sorry, I didn\'t quite understand that. Can you rephrase?';
      }

      // Add bot response to the chat after a delay
      setTimeout(() => {
        const botMessage = { text: botResponse, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }, 1000);

      setUserInput(''); // Clear the input field after sending message
    }
  };

  return (
    <div className="home-page">
      <div className="heading-container">
        <h1>Anamika Roadways and logistics</h1>
        <h2>Your Transportation friend</h2>
      </div>

      <button className="cta-button" onClick={toggleChatbot}>
        Get Started to know more
      </button>

      {/* Chatbot Container */}
      {isChatOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Chat with us!</h3>
            <button className="close-chatbot" onClick={toggleChatbot}>X</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={handleUserInput}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
