// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Css from "../src/App.css";
import Navbar from "./components/Navbar/NavBar";
import GrantsPage from "./components/Grants/grantsPage";
import LandingPage from "./components/Landing_page/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/grants" element={<GrantsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
