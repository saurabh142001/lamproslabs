import React from "react";
import Css from "./HackathonCards.css";

const OngoingHackathonCard = ({
  title,
  date,
  iconUrl,
  imageUrl,
  description,
  logoUrl,
  prizeMoney,
}) => {
  return (
    <div className="hackcard">
      <div className="hackcard-header">
        <div className="hackcard-logo">
          <img src={logoUrl} alt={`${title} Logo`} />
        </div>
      </div>

      <div className="hackcard-body">
        <div className="hackathon-img">
          <img className="Hackathon-image" src={imageUrl} alt={title} />
        </div>
        <div className="hackcard-details">
          <h3>{title}</h3>
          <p>{date}</p>
          <div className="description-container">
            <p className="description">{description}</p>
          </div>
        </div>
        <div className="hackcard-footer">
          <div className="hackcard-prize">
            <p>Prize Money: {prizeMoney}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingHackathonCard;
