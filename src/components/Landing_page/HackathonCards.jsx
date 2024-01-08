// Import necessary dependencies
import React from "react";
import "./Hackathoncards.css";

// Define the OngoingHackathonCard component
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
    // Container for the entire hackathon card
    <div className="hackcard">
      {/* Header section with hackathon logo */}
      <div className="hackcard-header">
        <div className="hackcard-logo">
          <img src={logoUrl} alt={`${title} Logo`} />
        </div>
      </div>

      {/* Body section containing hackathon image and details */}
      <div className="hackcard-body">
        {/* Hackathon image */}
        <div className="hackathon-img">
          <img className="Hackathon-image" src={imageUrl} alt={title} />
        </div>
        {/* Details of the hackathon */}
        <div className="hackcard-details">
          <h3>{title}</h3>
          <p>{date}</p>
          {/* Container for hackathon description */}
          <div className="description-container">
            <p className="description">{description}</p>
          </div>
        </div>

        {/* Footer section with hackathon prize details */}
        <div className="hackcard-footer">
          <div className="hackcard-prize">
            <p>Prize Money: {prizeMoney}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the OngoingHackathonCard component
export default OngoingHackathonCard;
