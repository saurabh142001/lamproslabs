// src/App.js
import React, { useState } from "react";
import "./app.css";
import Navbar from "./components/Navbar/NavBar";
import GrantsPage from "./components/Grants/grantsPage";
import LandingPage from "./components/Landing_page/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <GrantsPage />
    </div>
  );
}

export default App;
