// src/components/BackgroundCarousel.jsx
import React, { useState, useEffect } from 'react';
import './backgroundCarousel.css';  // Create a custom CSS file for background carousel styling

const BackgroundCarousel = () => {
  const images = [
    'path_to_your_image_1.jpg',
    'path_to_your_image_2.jpg',
    'path_to_your_image_3.jpg',
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-slide feature
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);  // Change image every 5 seconds
    return () => clearInterval(interval);  // Cleanup on component unmount
  }, []);

  return (
    <div className="background-carousel">
      <img
        src={images[currentIndex]}
        alt={`background-carousel-${currentIndex}`}
        className="background-image"
      />
    </div>
  );
};

export default BackgroundCarousel;
