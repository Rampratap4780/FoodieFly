import React from "react";
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Foodiefly</h2>
      </div>
      
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants, dishes, etc." />
        <button>Search</button>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Call-to-Action Button */}
      <a href="#signup" className="cta-button">Sign Up</a>
    </nav>
  );
};

export default Navbar;
