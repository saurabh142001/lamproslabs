import React, { useState } from "react";
import "./Hackathoncards.css";

const OngoingHackathonCard = ({
  title,
  date,
  iconUrl,
  imageUrl,
  description,
  logoUrl,
  prizeMoney,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    // Disable scrolling when the popup is open
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    // Enable scrolling when the popup is closed
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <div className="hackcard" onClick={openPopup}>
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
          </div>
          <div className="hackcard-footer">
            <div className="hackcard-prize">
              <p>Prize Money: {prizeMoney}</p>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup-overlay" onClick={closePopup}></div>
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>
              Close
            </button>

            <div className="hackcard-header">
              <div className="hackcard-logo">
                <img src={logoUrl} alt={`${title} Logo`} />
              </div>
            </div>
            <p>{date}</p>
            <div className="hackathon-img">
              <img className="Hackathon-image" src={imageUrl} alt={title} />
            </div>
            <div className="hackcard-details">
              <div className="popupdescription-container">
                <p className="description">{description}</p>
              </div>{" "}
            </div>

            <div className="hackcard-prize">
              <p>Prize Money: {prizeMoney}</p>
            </div>
            <div>
              <button>Apply now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OngoingHackathonCard;
