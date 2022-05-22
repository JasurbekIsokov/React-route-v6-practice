import React from "react";
// import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="un_list">
          <li className="link">Home</li>
          <li className="link">About</li>
          <li className="link">Cards</li>
          <li className="link">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
