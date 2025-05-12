import React from 'react';
import './CtaBanner.css';

const CTABanner = () => (
  <section className="cta-banner">
    <div className="cta-content">
      <span className="cta-badge">Limited-time offers!</span>
      <h2 className="cta-headline">
        Contact us now to get the latest deals and for the next booking
      </h2>
      <button className="cta-button">Booking Now</button>
    </div>
    <section className="promo-banner">
      <div className="promo-content">
        <div className="promo-left">
          <span className="promo-badge">25% OFF</span>
          <h2 className="promo-headline">
            <span role="img" aria-label="suitcase">🧳</span>
            Planning your next trip? <span className="highlight">Save up to 25% on your hotel</span>
          </h2>
          <div className="promo-timer">Limited time offer!</div>
        </div>
        <button className="promo-btn">Explore More</button>
      </div>
    </section>
  </section>
);

export default CTABanner;
