import React, { useState, useEffect } from 'react';
import './Footer.css';

// Font Awesome CDN (add this in your public/index.html <head> if not already present)
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

export default function Footer() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  // Scroll-to-top logic
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 1700);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMsg('Please enter a valid email address.');
      return;
    }
    setMsg('Thank you for subscribing!');
    setEmail('');
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-col brand-info">
          <h2 className="footer-hotel-name">Wester Hotel</h2>
          <div className="footer-contact">
            <div><i className="fas fa-map-marker-alt"></i> 123 Sakura St, Tokyo, Japan</div>
            <div><i className="fas fa-phone"></i> +81 3-1234-5678</div>
            <div><i className="fas fa-envelope"></i> info@hirotohotel.com</div>
          </div>
        </div>
        {/* Quick Links */}
        <div className="footer-col quick-links">
          <div className="footer-section-title">Quick Links</div>
          <div className="footer-links-grid">
            <a href="#home">Home</a>
            <a href="#rooms">Rooms</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        {/* Newsletter */}
        <div className="footer-col newsletter">
          <div className="footer-section-title">Newsletter</div>
          <div className="footer-news-desc">Subscribe to get the latest offers and updates.</div>
          <form className="footer-news-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {msg && <div className="footer-news-msg">{msg}</div>}
        </div>
        {/* Social Media */}
        <div className="footer-col social">
          <div className="footer-section-title social-title">
            Follow Us
          </div>
          <div className="footer-social-icons-inline">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Hiroto Hotel. All rights reserved.</div>
        <div className="footer-legal-links">
          <a href="#privacy">Privacy Policy</a>
          <span>|</span>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </footer>
  );
}
