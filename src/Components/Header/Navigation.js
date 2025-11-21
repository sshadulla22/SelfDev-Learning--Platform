import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import ThemeToggle from "../ThemeToggle";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="">selfDev</Link>
        <ThemeToggle />

      </div>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/react-info">React</Link>
        </li>
        <li>
          <Link to="/javascript-info">JavaScript</Link>
        </li>
        <li>
          <Link to="/css-info">CSS</Link>
        </li>
        <li>
          <Link to="/html-info">HTML</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
