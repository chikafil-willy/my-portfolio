import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link home-link">Home</Link>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`nav-menu ${isOpen ? "open" : ""}`}>
        <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
        <Link to="/projects" className="nav-link" onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
