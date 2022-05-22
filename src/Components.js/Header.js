import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="un_list">
          <li className="link">
            <Link style={{ textDecoration: "none" }} to={"/"}>
              Home
            </Link>
          </li>
          <li className="link">
            <Link style={{ textDecoration: "none" }} to={"/about"}>
              About
            </Link>
          </li>
          <li className="link">
            <Link style={{ textDecoration: "none" }} to={"/cards"}>
              Cards
            </Link>
          </li>
          <li className="link">
            <Link style={{ textDecoration: "none" }} to={"/Contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
