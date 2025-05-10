import React, { useState, useEffect, useRef } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Richard Houston',
    title: 'Director, Colorlib',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
  },
  {
    review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    name: 'Bilateral Illusion',
    title: 'Manager, Bilateral Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    review: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.',
    name: 'Samantha Lee',
    title: 'Guest, Wester Hotel',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  },
  {
    review: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    name: 'John Doe',
    title: 'Travel Blogger',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
    rating: 4,
  },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-rotate every 5s
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex(i => (i + 1) % testimonials.length);
    }, 8000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const goTo = i => setIndex(i);
  const prev = () => setIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex(i => (i + 1) % testimonials.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const t = testimonials[index];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-avatar-area">
          <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
        </div>
        <div className="testimonial-content-area">
          <div className="testimonial-heading">TESTIMONIALS</div>
          <h2 className="testimonial-title">What do customers say about us?</h2>
          <div className="testimonial-rating-row">
            <span className="testimonial-label">Detailed Review:</span>
            <StarRating rating={t.rating} />
          </div>
          <blockquote className="testimonial-review">{t.review}</blockquote>
          <div className="testimonial-reviewer">
            <span className="testimonial-name">{t.name}</span>
            <span className="testimonial-title-role">{t.title}</span>
          </div>
          <div className="testimonial-controls-row">
            <div className="testimonial-indicator">
              {String(index+1).padStart(2,'0')} <span className="testimonial-indicator-bar" /> {String(testimonials.length).padStart(2,'0')}
            </div>
            <div className="testimonial-controls">
              <button className="testimonial-arrow" onClick={prev} aria-label="Previous testimonial">&#60;</button>
              <button className="testimonial-arrow" onClick={next} aria-label="Next testimonial">&#62;</button>
            </div>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot${i === index ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i+1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 