import React, { useState, useRef, useEffect } from 'react';
import './Gallery.css';

// Replace with your own hotel image URLs
const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
];

const description = "Discover the elegance and comfort of our hotel through our curated gallery. Each photo captures the unique charm, luxurious amenities, and inviting atmosphere that await you. From stunning interiors to breathtaking views, explore what makes our hotel the perfect destination for your next stay.";

export default function Gallery() {
  const [start, setStart] = useState(0);
  const [visible, setVisible] = useState(window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3);

  // Responsive update
  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStart(prev => (prev + 1) % images.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => setStart((prev) => (prev + 1) % images.length);
  const prev = () => setStart((prev) => (prev - 1 + images.length) % images.length);

  // For dot indicators
  const totalSlides = images.length;
  const slideIndices = Array.from({ length: totalSlides }, (_, i) => i);

  // Touch swipe support
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) prev();
    if (dx < -50) next();
    touchStartX.current = null;
  };

  // Get visible images
  const visibleImages = [];
  for (let i = 0; i < visible; i++) {
    visibleImages.push(images[(start + i) % images.length]);
  }

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <div className="gallery-title">OUR GALLERY</div>
        <div className="gallery-subheading">Explore The Most Beautiful In The Hotel</div>
        <div className="gallery-desc">{description}</div>
        <button className="gallery-cta">
          View Gallery <span className="arrow">→</span>
        </button>
      </div>
      <div
        className="gallery-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="carousel-arrow left" onClick={prev} aria-label="Previous">&#60;</button>
        <div className="carousel-images">
          {visibleImages.map((img, idx) => (
            <div className="carousel-img-wrapper" key={idx}>
              <img src={img} alt={`Hotel gallery ${idx + 1}`} className="carousel-img" />
            </div>
          ))}
        </div>
        <button className="carousel-arrow right" onClick={next} aria-label="Next">&#62;</button>
      </div>
      <div className="carousel-dots">
        {slideIndices.map((i) => (
          <button
            key={i}
            className={`carousel-dot${i === start ? ' active' : ''}`}
            onClick={() => setStart(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
