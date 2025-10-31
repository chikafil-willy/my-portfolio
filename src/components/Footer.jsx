import React from "react";
import whatsappLogo from "../assets/whatsapp.png";   // your WhatsApp logo
import linkedinLogo from "../assets/linkedin.png";   // your LinkedIn logo
import instagramLogo from "../assets/instagram.png"; // your Instagram logo

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#302e2eff",
    textAlign: "center",
    padding: "1.5rem 0",
    borderTop: "1px solid #ddd",
  };

  const iconContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.2rem",
    marginBottom: "0.8rem",
  };

  const iconStyle = {
    width: "30px",
    height: "30px",
    objectFit: "contain",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    borderRadius: "50%",
  };

  const emailStyle = { 
    color: "#0077b6", 
    fontWeight: "500", 
    marginBottom: "0.5rem" 
  };

  const copyStyle = { 
    fontSize: "0.9rem", 
    color: "#c0a5a5ff" 
  };

  return (
    <footer style={footerStyle}>
      <div style={iconContainer}>
        <a href="https://wa.me/2347061207669" target="_blank" rel="noopener noreferrer">
          <img src={whatsappLogo} alt="WhatsApp" style={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/chika-williams-927581159/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" style={iconStyle} />
        </a>
        <a href="https://www.instagram.com/igbelimark61/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" style={iconStyle} />
        </a>
      </div>

      <p style={emailStyle}>📧 chikawilliams35@yahoo.com</p>
      <p style={copyStyle}>© 2025 Chika Williams. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
