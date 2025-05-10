import React from 'react';
import './RoomListing.css'; // Use dedicated CSS for room listing

const rooms = [
  {
    name: 'Deluxe Room',
    price: 55,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    details: 'A cozy room with queen bed, city view, and modern amenities.'
  },
  {
    name: 'Executive Suite',
    price: 120,
    img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
    details: 'Spacious suite with king bed, lounge area, and luxury bath.'
  },
  {
    name: 'Family Room',
    price: 85,
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    details: 'Perfect for families, with two double beds and extra space.'
  },
  {
    name: 'Penthouse',
    price: 210,
    img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80',
    details: 'Top-floor luxury with panoramic views and private terrace.'
  },
];

export default function RoomListing() {
  return (
    <section className="room-listing-section">
      <h2 className="room-listing-title">Explore Our Hotel</h2>
      <div className="room-listing-grid">
        {rooms.map((room, idx) => (
          <div className="room-card" key={idx} style={{position:'relative'}}>
            <div style={{position:'relative'}}>
              <img className="room-image" src={room.img} alt={room.name} />
              <div className="room-info-overlay">
                <div className="room-name">{room.name}</div>
                <div className="room-price">${room.price}<span style={{fontSize:'1rem',fontWeight:400}}>/day</span></div>
              </div>
            </div>
            <div className="room-card-content">
              <div className="room-details">{room.details}</div>
              <a className="room-btn" href="#book" role="button">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 