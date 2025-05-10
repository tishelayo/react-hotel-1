import React from 'react';
import aboutHotelImg from '../assets/about-us.png';
import './AboutUs.css';

export default function AboutUs() {
  // Amenities data
  const amenities = [
    {
      icon: (
        <svg width="32" height="32" fill="#4A89DC" viewBox="0 0 24 24"><path d="M12 3C7.03 3 3 7.03 3 12c0 2.39 1.05 4.54 2.88 6.06l-1.42 1.42c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.42-1.42C7.46 20.95 9.61 22 12 22c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-1.85 0-3.55-.63-4.9-1.69l1.42-1.42C9.46 17.37 10.7 18 12 18c2.76 0 5-2.24 5-5 0-1.3-.63-2.54-1.69-3.48l1.42-1.42C19.37 8.45 20 10.15 20 12c0 4.41-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
      ),
      title: "Free Wi-Fi",
      desc: "High-speed wireless internet available throughout the hotel."
    },
    {
      icon: (
        <svg width="32" height="32" fill="#4A89DC" viewBox="0 0 24 24"><path d="M7 21h10v-2H7v2zm5-18C6.48 3 2 7.48 2 13c0 2.08.8 4.01 2.13 5.5l1.42-1.42C4.1 15.36 3.5 14.23 3.5 13c0-4.14 3.36-7.5 7.5-7.5S18.5 8.86 18.5 13c0 1.23-.6 2.36-2.05 4.08l1.42 1.42C21.2 17.01 22 15.08 22 13c0-5.52-4.48-10-10-10z"/></svg>
      ),
      title: "Bar Wine",
      desc: "Enjoy a curated selection of wines and cocktails at our bar."
    },
    {
      icon: (
        <svg width="32" height="32" fill="#4A89DC" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 3.87 7 13 7 13s7-9.13 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
      ),
      title: "Premium Pool",
      desc: "Relax in our rooftop infinity pool with panoramic city views."
    },
    {
      icon: (
        <svg width="32" height="32" fill="#4A89DC" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-2-2H5V7h14v10z"/></svg>
      ),
      title: "Smart TV",
      desc: "Flat-screen smart TVs with streaming services in every room."
    },
    {
      icon: (
        <svg width="32" height="32" fill="#4A89DC" viewBox="0 0 24 24"><path d="M18 6V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2H2v2h2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8h2V6h-6zm-8-2h8v2H6V4zm10 16H8V8h8v12z"/></svg>
      ),
      title: "Coffee & Tea",
      desc: "Complimentary in-room coffee and tea making facilities."
    },
    {
      icon: (
        <svg width="32" height="32" fill="#4A89DC" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.59 8 8 8s8-3.59 8-8c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
      ),
      title: "Restaurant",
      desc: "On-site restaurant serving gourmet cuisine and local specialties."
    }
  ];

  return (
    <section className="aboutus-section">
      <div className="aboutus-main-flex">
        <div className="aboutus-content">
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '2.6rem',
            fontWeight: 700,
            color: '#6b4e8f',
            marginBottom: 12,
            letterSpacing: 2,
          }}>About Wester Hotel</h2>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, gap: 10 }}>
            <span style={{ fontSize: '1.5rem', color: '#ffb84d' }}>🏨</span>
            <span style={{ display: 'inline-block', height: 2, width: 60, background: 'linear-gradient(90deg, #ffb84d 0%, #9370db 100%)', borderRadius: 2 }}></span>
          </div>
          <h3 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.3rem',
            fontWeight: 600,
            color: '#222',
            marginBottom: 18,
          }}>Where Timeless Elegance Meets Modern Comfort</h3>

          <p style={{
            fontFamily: 'Lora, serif',
            fontSize: '1.08rem',
            color: '#444',
            marginBottom: 16,
            lineHeight: 1.7,
          }}>
            Nestled in the heart of New York City, Hiroto Hotel has been a sanctuary of sophistication and unparalleled hospitality since 1985. Our name, inspired by the Japanese word for "abundance," reflects our commitment to enriching every guest's journey with warmth, attention to detail, and a touch of artistry.
          </p>

          <h4 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#6b4e8f',
            margin: '18px 0 8px 0',
          }}>Our Story</h4>
          <p style={{
            fontFamily: 'Lora, serif',
            fontSize: '1.08rem',
            color: '#444',
            marginBottom: 16,
            lineHeight: 1.7,
          }}>
            Founded by the visionary Akira Tanaka, Hiroto began as a boutique retreat for discerning travelers. Today, we honor our legacy by blending classic charm with contemporary design—each corner of our hotel tells a story, from the handcrafted lobby furnishings to the panoramic views of the city skyline.
          </p>

          <h4 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#6b4e8f',
            margin: '18px 0 8px 0',
          }}>The Wester Experience</h4>
          <ul style={{
            fontFamily: 'Lora, serif',
            fontSize: '1.08rem',
            color: '#444',
            marginBottom: 16,
            lineHeight: 1.7,
            paddingLeft: 18,
          }}>
            <li><b>Luxury Redefined:</b> 85 exquisitely designed rooms and suites, where minimalist aesthetics meet plush comfort.</li>
            <li><b>Culinary Excellence:</b> Award-winning restaurants featuring farm-to-table cuisine and bespoke cocktails.</li>
            <li><b>Serenity Unleashed:</b> A rooftop infinity pool and spa offering holistic wellness rituals.</li>
          </ul>

          <blockquote style={{
            fontFamily: 'Lora, serif',
            fontStyle: 'italic',
            color: '#9370db',
            borderLeft: '4px solid #ffb84d',
            margin: '24px 0 0 0',
            paddingLeft: 16,
          }}>
            "We don't just host guests—we create memories."<br />
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#6b4e8f' }}>— The Wester Team</span>
          </blockquote>

          <div style={{
            marginTop: 24,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            color: '#9370db',
            fontSize: '1.1rem',
            background: '#f8f5ff',
            padding: '8px 18px',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(147, 112, 219, 0.07)'
          }}>
            Since 1995
          </div>
        </div>
        <div className="aboutus-image-area">
          <img src={aboutHotelImg} alt="Hiroto Hotel" style={{
            width: '100%',
            maxWidth: 400,
            borderRadius: 18,
            boxShadow: '0 8px 32px rgba(80, 40, 120, 0.10)',
            objectFit: 'cover',
          }} />
        </div>
      </div>
      <div className="amenities-section">
        <h2 className="amenities-title">Amenities</h2>
        <div className="amenities-grid">
          {amenities.map((a, i) => (
            <div className="amenity-card" key={i}>
              <div className="amenity-icon">{a.icon}</div>
              <div className="amenity-title">{a.title}</div>
              <div className="amenity-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 