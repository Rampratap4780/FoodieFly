import React from "react";
import './Card.css';

const Card = ({ image, title, description, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href="#order" className="card-button">{buttonText}</a>
      </div>
    </div>
  );
};

export default Card;
