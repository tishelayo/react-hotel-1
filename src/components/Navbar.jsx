import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const pagesDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (pagesDropdownRef.current && !pagesDropdownRef.current.contains(event.target)) {
        setIsPagesDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePagesDropdown = (e) => {
    e.stopPropagation();
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>96 Emser Vista Suite 437, NY, US</span>
          <span>(123) 456-78-90</span>
        </div>
        <div className="auth-section">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
          <div className="language-dropdown">
            <button 
              className="language-btn"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              English
              <span className="arrow">▼</span>
            </button>
            {isLanguageDropdownOpen && (
              <div className="dropdown-content">
                <a href="#en">English</a>
                <a href="#es">Spanish</a>
                <a href="#fr">French</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="logo">
          <h1>Wester Hotel</h1>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {/* <a href="#home">Home</a> */}
          <a href="#rooms">Rooms</a>
          <a href="#about">About Us</a>
          <div className="pages-dropdown" ref={pagesDropdownRef}>
            <button 
              className="pages-btn"
              onClick={togglePagesDropdown}
            >
              Pages
              <span className="arrow">▼</span>
            </button>
            <div className={`dropdown-content ${isPagesDropdownOpen ? 'active' : ''}`}>
              <div className="dropdown-section">
                <h4>Room Details</h4>
                <a href="#standard">Standard Room</a>
                <a href="#deluxe">Deluxe Room</a>
                <a href="#suite">Suite Room</a>
                <a href="#family">Family Room</a>
              </div>
              <div className="dropdown-section">
                <h4>Blog</h4>
                <a href="#blog-list">Blog List</a>
                <a href="#blog-grid">Blog Grid</a>
                <a href="#blog-single">Blog Single</a>
              </div>
            </div>
          </div>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <button className="book-now-btn">
            Book Now
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 