// src/components/Gallery.jsx
import React, { useState, useEffect } from 'react';
import './gallery.css'; 

// Import images
import l1 from '../assets/l1.jpg';
import l2 from '../assets/l2.jpg';
import l3 from '../assets/l3.jpg';
import l4 from '../assets/l4.jpg';
import l5 from '../assets/l5.jpg';
import l6 from '../assets/l6.jpg';

const Gallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lightbox, setLightbox] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const images = [
        { src: l1, alt: 'Transportation 1' },
        { src: l2, alt: 'Transportation 2' },
        { src: l3, alt: 'Transportation 3' },
        { src: l4, alt: 'Transportation 4' },
        { src: l5, alt: 'Transportation 5' },
        { src: l6, alt: 'Transportation 6' }
    ];

    const openLightbox = (image) => {
        setCurrentImage(image);
        setLightbox(true);
    };

    const closeLightbox = () => {
        setLightbox(false);
    };

    return (
        <section className="gallery-section">
            
            <div className={`gallery ${isVisible ? 'fade-in' : ''}`}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => openLightbox(image.src)}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content">
                        <img src={currentImage} alt="Full view" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
