import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Carousel/Carousel.css";

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className="cards">
        <a
          href="https://dorahacks.io/hackathon/starship/detail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.dorahacks.io/static/files/18ae51539e38f9fe5ae4d2e4e3f91285.jpg@256h.webp"
            alt="Card starship"
          />
        </a>
      </div>
      <div className="cards">
        <a
          href="https://dorahacks.io/hackathon/rebuild-ownership-2/detail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.dorahacks.io/static/files/18c5dadf64c4721cb298a0a441a930fc.jpg@.webp"
            alt="Card Internet privacy"
          />
        </a>
      </div>
      <div className="cards">
        <a
          href="https://dorahacks.io/hackathon/taipei-blockchain-week/detail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.dorahacks.io/static/files/18b84a981fc22bd0ec73e7a45d18a0ca.jpg@256h.webp"
            alt="Card taipei"
          />
        </a>
      </div>
      <div className="cards">
        <a
          href="https://dorahacks.io/hackathon/web3space-winter-ideathon/detail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.dorahacks.io/static/files/18c5bc66355b4b730cee1544118bd4b1.jpg@256h.webp"
            alt="Card winter"
          />
        </a>
      </div>
      <div className="cards">
        <a
          href="https://dorahacks.io/hackathon/dora-grant-dao/buidl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.dorahacks.io/static/files/18a8efabac827d53a288c3f4338bd169.jpg@256h.webp"
            alt="Card doradao"
          />
        </a>
      </div>

      {/* Add more cards as needed */}
    </Slider>
  );
};
export default Carousel;
