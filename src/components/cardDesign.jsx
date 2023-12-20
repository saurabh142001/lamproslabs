// src/components/Card.jsx
import React from "react";

const Card = ({ title, date, imageUrl, description }) => {
  return (
    <div className="hackcard">
      <div className="hackcard-header">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      <div className="hackcard-body">
        <img src={imageUrl} alt={title} />
        <p>{description}</p>
      </div>
      <div className="hackcard-footer">
        <p>Footer content goes here</p>
      </div>
    </div>
  );
};

export default Card;
