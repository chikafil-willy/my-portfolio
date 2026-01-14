import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menuRef = useRef(null); // reference to mobile menu

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="navbar">
      {/* Left side: Home for mobile only */}
      {isMobile && (
        <Link to="/" className="home-link" onClick={() => setIsOpen(false)}>
          Home
        </Link>
      )}

      {/* Spacer for desktop links */}
      {!isMobile && <div style={{ flexGrow: 1 }}></div>}

      {/* Nav links */}
      <div ref={menuRef} className={`nav-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
      </div>

      {/* Hamburger on mobile */}
      {isMobile && (
        <button className="hamburger" onClick={() => setIsOpen((prev) => !prev)}>
          ☰
        </button>
      )}
    </nav>
  );
};

export default Navbar;
