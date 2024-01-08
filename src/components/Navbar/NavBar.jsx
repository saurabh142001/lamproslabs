// src/components/Navbar/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/NavBar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/" className="nav-item">
          Your Logo{" "}
        </Link>
      </div>
      <div className="nav-sections">
        {" "}
        <Link to="/" className="nav-item">
          {" "}
          Hackathons
        </Link>
        <Link to="/grants" className="nav-item">
          Grants
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
