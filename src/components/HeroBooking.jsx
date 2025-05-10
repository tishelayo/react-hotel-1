import React, { useState } from 'react';
import './HeroBooking.css';

const personsOptions = [
  '1 Adult, 0 Children',
  '2 Adult, 0 Children',
  '2 Adult, 1 Children',
  '2 Adult, 2 Children',
  '3 Adult, 2 Children',
];

// Helper to format date as "09 May 2025"
function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).replace(/ /g, ' ');
}

export default function HeroBooking() {
  const [checkIn, setCheckIn] = useState('2025-05-09');
  const [checkOut, setCheckOut] = useState('2025-05-09');
  const [persons, setPersons] = useState(personsOptions[2]);
  const [showPersons, setShowPersons] = useState(false);

  return (
    <section className="hero-booking-section">
      <div className="hero-bg-blur"></div>
      <div className="hero-content-wrapper">
        <div className="hero-text">
          <span className="welcome">WELCOME WESTER</span>
          <h1>Experience the greatest.</h1>
          <div className="tagline">for you holidays..</div>
        </div>
        <form className="booking-form" onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <label>Check In</label>
            <div className="input-icon">
              <input
                type="date"
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
              />
              <span className="icon">📅</span>
            </div>
          </div>
          <div className="form-group">
            <label>Check Out</label>
            <div className="input-icon">
              <input
                type="date"
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
              />
              <span className="icon">📅</span>
            </div>
          </div>
          <div className="form-group">
            <label>Person</label>
            <div
              className="input-icon dropdown"
              tabIndex={0}
              onBlur={() => setShowPersons(false)}
            >
              <div
                className="dropdown-selected"
                onClick={() => setShowPersons(s => !s)}
              >
                <span className="icon">👥</span>
                {persons}
                <span className="arrow">▼</span>
              </div>
              {showPersons && (
                <div className="dropdown-list">
                  {personsOptions.map(opt => (
                    <div
                      key={opt}
                      className="dropdown-item"
                      onClick={() => {
                        setPersons(opt);
                        setShowPersons(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button className="book-btn" type="submit">
            BOOK NOW
          </button>
        </form>
      </div>
    </section>
  );
} 