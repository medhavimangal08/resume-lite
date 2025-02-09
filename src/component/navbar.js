import React from "react";
import "../style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Tanjiro Resume</h1>
      <div className="menu">
        <a href="/">Home</a>
        <a href="/">Contact</a>
        <a href="/">Services</a>
      </div>
    </div>
  );
};

export default Navbar;
