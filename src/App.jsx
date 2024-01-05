// src/App.js
import React, { useState } from "react";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GrantsPage from "./components/grantsPage";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Your Logo</div>
      <div className="nav-sections">
        <div className="nav-item">Hackathons</div>
        <div className="nav-item">Grants</div>
      </div>
    </nav>
  );
};

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

const LandingPage = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [prizeFilter, setPrizeFilter] = useState("");

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
  };

  const handlePrizeFilterChange = (event) => {
    setPrizeFilter(event.target.value);
  };

  // Sample data for ongoing hackathons
  const ongoingHackathons = [
    {
      title: "DORAHACKS",
      date: "November 1, 2022",
      imageUrl:
        "https://blog.injective.com/content/images/2023/10/Illuminate.jpg",
      iconUrl: "Icon",
      logoUrl:
        "data:image/png;base64,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",
      prizeMoney: "$10,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "OMNICHAIN",
      date: "November 15, 2024",

      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/1*0mrhim_vfm9IRKuxYzBB2Q.jpeg",
      logoUrl:
        "data:image/png;base64,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",
      prizeMoney: "$15,000",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "ETH INDIA",
      date: "December 5, 2023",
      imageUrl:
        "https://framerusercontent.com/images/8bkgmDXUBnEJ7glnv8lDAzTNEDI.png",
      logoUrl:
        "data:image/png;base64,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",
      prizeMoney: "$12,500",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur laborum  nulla.",
    },
    {
      title: "SOLANA SPEEDRUN",
      date: "December 12, 2023",
      imageUrl:
        "https://preview.redd.it/magicblock-announcing-solana-speedrun-2-the-second-edition-v0-4z77rs3z3r1c1.png?width=680&format=png&auto=webp&s=eb0dc032fb5fd63400e93d84081ea0bb04da867d",
      logoUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmwMBEQACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQYHBAUIAwL/xABEEAABAwICBQcICAQGAwAAAAABAAIEAwUGERIhMUFhBxZRVIGS0RMUIlNVcZGhFSMyQlKUscEIM0NigpOywtLhcnOi/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAIDAQUEBv/EAC8RAQEAAgAEAwYGAgMAAAAAAAABAgMEEVFSBRITFBUxQZGhISIyYbHRcfAjQsH/2gAMAwEAAhEDEQA/AN4oCAgIPnXr0o9J9WvUZTpMGbnvcGtaOkkoNW4u5bLPbHPjWCibpIGo1c9Gi3t2u7NXFBqHEXKViu/Oe2RdKkeg7+hE+qaOGrWe0lBiT3ue4ue4ucTmSTmSgmZQM0EQXNB2tlxLe7FUD7Tc5UXL7rKh0T72nUfgg2hhXl1nUHU6GJoTJVPPIyYwDHjiW7D2ZINzYdxLaMSxBJs06lIbl6TAcns4OadYQdugICAgICAgHUgxrG2NLTg+AJFxqF9d+fkItP8AmVT7tw4lB5txtj694vru89rmjCB+rhUXEUxr1aX4jxPZkgxNAQEBAQEBAQEHMtdym2iYyZbJdaLJZ9mpSeWn3cRwOpBv3k35X416fStmJPJxbg46NOQPRpVjuB/C75E9GxBtkHPYgqAgICAgw7lHx3DwXatNwbXuNcERo2e3pc7oaPnsQeXb3eJ98uVW43SQ6vKqnNz3bhuAG4cEHXoCAgICAgICAgICC5oN2ckHKk+nUoYfxLI0qbsmRJlQ62nUAx56Ognt4BvYbEBAQEHS4uxHCwtYpF1nu9CmMqdMbarz9lo9/wCmZQeS8SX2ZiO8SbpcqmnIrO2Z6mN3Nb0ABB1SAgoBOxAyQEDJAyQRAQXJAyQMkDIoAQeh+RDHxvERuHrtW0p8Zmcao4661Mbid7h8x7ig22gIBQeYuWvGBxDiV0CJUJt1tc6mzInKpV2Odx6B7uKDXKAgo2oO4w3Yq16maAzZHZkatToHQOJW2nTdmX7Md+6asefzZ83Cdka0N8yBy3l7sz8193s2vo8nLit3V+ualj6i3vu8Vz2fDozvF7+5ealj6g3vu8VF0YdGd43iO5RhOx9Qb33eKm6ceiLx3E938HNKx9Qb33eKi6seiL4hxPcvNKxdQb33eKm68Wd8R4ru/heaVi6g3vu8VPkiL4nxff8Awc0bF1Bvfd4qbjGd8U4zv+0UYQsXUW993ipsRfFeN7/tGuMTC2C61GWZpEZgDc88w528jgofreA9e6JeI/V/vxdQj63Ltdwk2q4xp8GoacmPUD6bgdhH7IPX2D8QR8T4eh3eLqFdnps3seNTm9hzQd0gxHlRxHzZwbOl0qmhKrN8hGOYz8o7eM+gZnsQeS3Ek5kkk7SUEQEHZWS0yLvNEeONEDXUqEamDp/6W2nVlty5RGzOYY862tboMe3RGRYjdGkwb9rjvJ4r2MdeOGPlxeTstzvOuUucnz5QCmxnYqixlYoU2MrH6BWdjOxVFjKxVFjLKKOCmxnYwPG+KA4Ptduqej9mRVadv9oP6rDK/J+g8K8N5ct+2f4n/v8ATAyde3UofoUQUbUG4f4eMSGLd5WH5FX6qY3ysdpI1VG/aA97f9KD0Ag0B/EbeTWu9ustN/oRqRr1W/3O1D5D5oNOICCjZtQbLsdyw/bLfToR5tIZgOe52pzndJXs6NmjVhJK+PZhnnefJ2HOOze0KPxWl4jT3MLoz6AxHZvaND4qLv1dyLw+zovOOze0aHxU+vr7mV4fZ2qMR2b2jQ+Km7tfVneF29q847N7Sj95Rduvqi8Ju7V5x2b2lH7ym7dfVneC39q85LL7Sj94qbsw6s7wXEdlUYksvtKP3ioueHVneB4jsrH8WYvoiM6JaK+m+oMqlduoNHQ09PFY57J8MX3cB4XfP6m6fhPhP7a+cc8li/QIgICDssN3R9lv0C50nEOi121NW8A6x8M0Hs2hVZXoU61M5sqNDmnpB1hB5L5U5xuPKBe6+lpBsjyTdewMAb/tQYogIKM0DMoGaBmgiC5oGaBmgZlBEF1oIgICAgoQesOTS805WArI+q/N7YraRJP4M2/7UHlu8yPO7tOk+ukVKnxcSg4SAgoQbPwzPgXaAwU49Blek0Nq0vJjVxHBfoOF2a92vlJ+MYZ413IjR/UUf8sLe68ejG8182j+oo/5YU3Xj0Z3mvm1D1FLuBRcMejK8+q+b0PUUu4FFwnRnbV83oeopdwKLhGVuXVfN6HqKXcCm4zozty6r5vQ9RS7gUeSdGVuXVfN6HqaXcCi4zoyty6sfxXhildIxrwabKc1g1BoAFUdB49Cw26fN+MfZwfG3Tl5c/037NY1GOpvcx7S1zSQWkZEEL4n6GXnOcflAQEFCDY2EsYG14fiws/5en83uP7oNd1WllR7TtBIKD8ICAg5VtnyLdMpyYr9Gozcdjh0HgtNWzLXl5sXLObadlu1C7wxXoei4aqlMnWw+HQv0Wjdjuw5xhljydiFpYysUKLGWUVRYysUKLGdiqLGViqKysVRYysAosZWMUxnhkXBjp8GmPOmDOowf1R/y/VfLu1c/wA0ejwHG+nfT2X8vy/ZrcjIlfI95EBAQc6NEr1aLXsB0Tnl8UH2xRFMLEl1iluj5KXVaBw0jl8kHVoCAgIOfZrpItExsmOdmp7DseOgrbRuy05+bFyzmzVuOrbojOjJB3jRaf3Xq+8tV+MrK66vPq2epk9xviuXxDV0qLpq8+rZ6mT3G+Km8fq6VF4fI592z1Erut8VPt2vpUXhcl5+Wz1Mrut8VN43X+6Lwed+Zz8tnqJXdb4qbxmHRF4HPrDn7bOryj/hb4rnteHRN8P2X5xef1s6vK7rfFT7Th0RfDdvWHP+2DZHl91v/JTeIw6Ivhe2/OMLxFOh3G51JUGO6hTeAXNd95285bs18udly5x63Da89eqY53nXVqG4goQbu5PMJMn4Ot0qpSGlVFQ7N3lHZfJBhXLVbTbeUO4nLKnKDJFP/E0A/wD0HIMFQEBAQUDMoOaLRc3AFtumEHWCKDvBbez7b/1v0ofQ109mzPy7/BPZt3bfpXOcX6Guns2Z+Xd4J7Pt7b9KeadT6Funsyb+Xf4Ll0be2/Rzz49T6Fuvsyb+Xd4J6Oztp58ep9DXTdbJv5d3guels7a56mHU+hrr7Mm/l3+C56WfbT1MO6H0NdPZs38u7wT08+lc9XX3Q+hrn7Mm/l3eC56efRz19XdPq40iPVjP8nIpVKVQayyo0tI7CpssvKtMcplOeN5vijogo6N5QexcEWw2jCFngVGjylGJTFTV94jN3zJQa0/iOsZrW+3X2i0kx3mPWyH3Xa2k9oI7UGhEBAQUBBmuDsOZ6Fyns1ajQpO/1Efova8P4Hn/AMuyf4/tUxrNc+lexY5YqmxllALOxlY/WamxlYqis7iqixlcVzUMrFzWdjK4uNcZ8e2w6kqU8tps2AbXHcBxWWzOYY+auYactmXlxanvd0rXefUl18gSNFrRsa0bAvK2Z3PLnXu6dWOnDyYuuUNRBk/JtY3YgxpbIWiTSFUVqxG5jPSOfvyA7UHrscAEHWYms1G/2CdapGpkqkWB34HbndhyKDx1dIMi2XGTAmMLJEao6nUadxByQcVBUGV4Sw752WzpzCI7TnTYf6h6Tw/Vet4dwHq31Nn6f5ba9Vv5qz3NfouTWxVFjK4qFFjKxVFjK4qCpsZWKs7GdiqbGVxVRYysfKZKowo1SRJeKdJgzc4/t0lZZ5TGc6iYXK8o1ZiO+V7zM03ZsoMJFKn+EdJ4leLu23befyepp0zVjynxdOsmwgIPQn8PeGDCtEjEElhFWd9XHzGyk06z2n9EG30AoNIcv2C3PLcU26lmWtFOcxo3fdqfsezig0YUAIMpo42lUqbKYhxsmNDRlmNnDcvXw8X2YYzHyz8G/r3ly5Ppz6l9Sj95yv3zs7Z93Lut+Rz7ldSj95y573z7Z903Z+y8+5XUo/ecp9759s+6Lkc/JXUY/ed4rnvXPtn3TfxXn7K6jH7zlz3pn2z7puKjHsrqMfvOXL4nl2xN1w5/Suox++5T7yy7U3RL81GPpXUaHfcue8Mu1N4bHq6a+4hl3rRFYMpUWaxSp55Z9J6Svm38Rlu+Pwa69WOv4OmXztBAQZLgHCkjGGIaFupaTI49OTWA/l0xt7TsHFB63hRaMKLSixabadCiwMpsaMg1oGQCD7oCD5SY9KVQqUJFNtSjVaWPY4ZhwO0FB5b5U8BVsHXXykZr32iS4mNVOvQO3QcekbukdqDBiMkEQEBAQEBAQEBAQEBBzLTbpd3uNC32+i6tJrvDKbG7z4cUHqzk6wZGwbYmxaZFSZWyfLr5fbf0D+0bB8d6DK0BAQEHCvNqhXq217dco7a8Wu3Rex36joI25oPMfKRyc3DB0k16YfJtD3fVyQNbM9jX9B47CgwY7UEQEBAQEBAQEBAQdhY7PPv1xo2+1RnyJNQ6mtGwbyTuA6Sg9N8mvJ5BwZDNV+jIu1ZuVeRlqaPwM6Bx3oM4QEBAQEBB8pUajLj1I8qjTrUKjS2pTqNDmvB2gg7UGlMe8iZc6rOwg4a83OgVHah/63bhwPxQaVnwJdtl1IlwjVY0imcnUqrC1w7Cg4yAgICAgICCgZoM+wRyVX3ExpyZLHW62u1+cVm5OeP7G7T7zqQehcI4Qs+EoAi2mOGuIHlZDwDVqkfid8dWwZoO/QEBAQEBAQEDJB1WIMOWfEUbze82+jKZsaXjJzP/ABcNY7EHm7lZwhbMJ3alRtTpHkqo0tGq8O0eA1Z/HNBgeWpA3IIgqC78kHKtkVku4x41QuDKlQNJadeSD0/gzk3wxYqNCXHgecS9EOFeUfKOB4DYOwIM3yQVAQEBAQf/2Q==",
      prizeMoney: "$18,000",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "SOLANA CONSUMER",
      date: "December 13, 2023",
      imageUrl:
        "https://cdn.dorahacks.io/static/files/18c5dddfdaac7af643a8e004b8d9f201.jpg@.webp",
      logoUrl:
        "data:image/jpeg;base64,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",
      prizeMoney: "$17,500",
      description:
        "Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "POLKADOT",
      date: "September 10, 2023",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1400/0*wpA51orc4wG0Nfsn",
      logoUrl:
        "data:image/png;base64,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",
      prizeMoney: "$300,000",
      description:
        "Excepteur sint occaecat cupidatat non proident,  suntin culpa qui officia deserunt mollit anim id est laborum.",
    },
    // Add more hackathons here
  ];

  // Filter ongoing hackathons based on the name, date, and prize money filters
  const filteredHackathons = ongoingHackathons.filter((hackathon) => {
    const nameMatch =
      hackathon.title.toLowerCase().includes(nameFilter.toLowerCase()) ||
      nameFilter === "";

    const dateMatch =
      hackathon.date.toLowerCase().includes(dateFilter.toLowerCase()) ||
      dateFilter === "";

    const prizeMatch =
      hackathon.prizeMoney.toLowerCase().includes(prizeFilter.toLowerCase()) ||
      prizeFilter === "";

    return nameMatch && dateMatch && prizeMatch;
  });

  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Welcome to our platform</h1>

        <p>Explore hackathons and grants to fuel your ideas!</p>

        <Carousel />

        {/* Filter input for ongoing hackathons by name */}
        <h2> Explore Hackathons</h2>
        <div className="filter-section">
          <div className="filter-container">
            <label htmlFor="hackathonNameFilter">Filter by Name:</label>
            <input
              type="text"
              id="hackathonNameFilter"
              value={nameFilter}
              onChange={handleNameFilterChange}
            />
          </div>
          {/* Filter input for ongoing hackathons by date */}
          <div className="filter-container">
            <label htmlFor="hackathonDateFilter">Filter by Date:</label>
            <input
              type="text"
              id="hackathonDateFilter"
              value={dateFilter}
              onChange={handleDateFilterChange}
            />
          </div>
          {/* Filter input for ongoing hackathons by prize money */}
          <div className="filter-container">
            <label htmlFor="hackathonPrizeFilter">Filter by Prize Money:</label>
            <input
              type="text"
              id="hackathonPrizeFilter"
              value={prizeFilter}
              onChange={handlePrizeFilterChange}
            />
          </div>
        </div>

        {/* Container for modified ongoing hackathon cards */}
        <div className="Card-container">
          <div className="two-cards-container">
            {filteredHackathons.map((hackathon, index) => (
              <OngoingHackathonCard
                key={index}
                title={hackathon.title}
                date={hackathon.date}
                iconUrl={hackathon.icon}
                imageUrl={hackathon.imageUrl}
                logoUrl={hackathon.logoUrl}
                prizeMoney={hackathon.prizeMoney}
                description={hackathon.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <LandingPage />
      <GrantsPage />
    </div>
  );
}

export default App;
