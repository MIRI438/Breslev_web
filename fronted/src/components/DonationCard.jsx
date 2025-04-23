import React from 'react';
import './DonationCard.css';

function DonationCard({ title, image, onClick }) {
  return (
    <div className="donation-card" onClick={onClick}>
      <img src={image} alt={title} className="donation-image" />
      <h3 className="donation-title">{title}</h3>
    </div>
  );
}

export default DonationCard;