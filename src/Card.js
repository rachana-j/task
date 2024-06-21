// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, description, image }) => {
  return (
   
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    
  );
};

export default Card;
