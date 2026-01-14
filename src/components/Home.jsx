import React, { useState, useEffect } from "react";
import profilePic from "../assets/profile.png";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import hero7 from "../assets/hero7.jpg";

const Home = () => {
  const bio = {
    name: "Chika Williams",
    years_active: "3+ Years",
    description:
      "Full Stack Developer & Cybersecurity Consultant focused on building fast, modern, scalable and secure web applications.",
  };

  const techStack = [
    "React",
    "JavaScript",
    "CSS",
    "HTML",
    "Node.js",
    "Express",
    "Firebase",
    "Supabase",
    "Web3",
  ];

  const services = [
    "Web Development",
    "E-commerce Solutions",
    "Portfolio Websites",
    "Site Maintenance & Upgrades",
    "Web3 Integration",
    "SEO Optimization",
    "Web Application Security",
    "Security Audits & Hardening",
    "OWASP Top 10 Mitigation",
  ];

  const projects = [
    { title: "V6ix Collection", description: "A modern e-commerce store built with React + Supabase + Firebase." },
    { title: "Portfolio Site", description: "A beautiful personal portfolio showcasing skills & projects." },
    { title: "Olea MamaCare", description: "A responsive consultancy website built with React + Supabase." },
    { title: "News Aggregator", description: "A web app that fetches & displays breaking news globally." },
    { title: "mssharonclawz", description: "A classy fashion e-commerce store with a smooth UI/UX." },
  ];

  const scrollingProjects = [...projects, ...projects];
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* ===== STYLES ===== */
  const page = {
    background: "linear-gradient(180deg, #050B14, #0A1F33)",
    color: "#EAF6FF",
    fontFamily: "Inter, Arial, sans-serif",
    minHeight: "100vh",
  };

  const container = {
    maxWidth: "1200px",
    width: "95%",
    margin: "0 auto",
    padding: "2rem 0",
  };

  const card = {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "24px",
    padding: "2rem",
    boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
    marginBottom: "3rem",
    backdropFilter: "blur(10px)",
  };

  const heroImage = {
    width: "170px",
    height: "170px",
    borderRadius: "50%",
    border: "4px solid #00B4D8",
    objectFit: "cover",
    marginBottom: "1.2rem",
  };

  const sectionHeader = {
    fontSize: "2.2rem",
    marginBottom: "1.5rem",
    color: "#00B4D8",
  };

  const techList = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  };

  const pill = {
    padding: "0.6rem 1.3rem",
    borderRadius: "999px",
    background: "rgba(0,180,216,0.15)",
    border: "1px solid rgba(0,180,216,0.4)",
    fontWeight: "600",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.2rem",
  };

  const serviceCard = {
    background: "rgba(255,255,255,0.08)",
    padding: "1.3rem",
    borderRadius: "16px",
    fontWeight: "600",
    textAlign: "center",
  };

  const projectsContainer = {
    height: "260px",
    overflow: "hidden",
  };

  const projectsScroll = {
    display: "flex",
    flexDirection: "column",
    animation: "scrollUp 18s linear infinite",
  };

  const heroSliderSection = {
    height: "60vh",
    minHeight: "300px",
    borderRadius: "24px",
    overflow: "hidden",
    position: "relative",
    marginBottom: "3rem",
  };

  const styleSheet = `
    @keyframes scrollUp {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }

    @media (max-width: 768px) {
      .tech-pill { padding: 0.4rem 0.8rem; font-size: 0.85rem; }
      .service-card { padding: 1rem; font-size: 0.9rem; }
      .projects-container { height: 220px; }
      section { padding: 1.5rem 1rem; }
      .hero-image { width: 140px; height: 140px; }
      h1 { font-size: 2rem; }
      h2 { font-size: 1.7rem; }
    }

    @media (max-width: 480px) {
      .tech-pill { padding: 0.3rem 0.6rem; font-size: 0.75rem; }
      .hero-image { width: 120px; height: 120px; }
      h1 { font-size: 1.6rem; }
      h2 { font-size: 1.4rem; }
    }
  `;

  return (
    <div style={page}>
      <style>{styleSheet}</style>
      <div style={container}>
        {/* HERO */}
        <section style={{ ...card, textAlign: "center" }}>
          <img src={profilePic} alt="Profile" style={heroImage} className="hero-image" />
          <h1>{bio.name}</h1>
          <p style={{ opacity: 0.85 }}>
            Full Stack Developer • Cybersecurity Consultant • {bio.years_active}
          </p>
          <p style={{ maxWidth: "700px", margin: "1rem auto", lineHeight: 1.7 }}>
            {bio.description}
          </p>
        </section>

        {/* TECH STACK */}
        <section style={card}>
          <h2 style={sectionHeader}>Tech Stack</h2>
          <div style={techList}>
            {techStack.map((t, i) => (
              <span key={i} style={pill} className="tech-pill">{t}</span>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section style={card}>
          <h2 style={sectionHeader}>Services</h2>
          <div style={grid}>
            {services.map((s, i) => (
              <div key={i} style={serviceCard} className="service-card">{s}</div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section style={card}>
          <h2 style={sectionHeader}>Projects</h2>
          <div style={projectsContainer} className="projects-container">
            <div style={projectsScroll}>
              {scrollingProjects.map((p, i) => (
                <div key={i} style={{ padding: "1rem 0", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                  <strong>{p.title}</strong>
                  <p style={{ opacity: 0.85 }}>{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HERO IMAGE SLIDER */}
        <section style={heroSliderSection}>
          {heroImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Hero ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                opacity: i === currentHero ? 1 : 0,
                transition: "opacity 1s ease-in-out, transform 6s ease-in-out",
                transform: i === currentHero ? "scale(1.08)" : "scale(1)",
              }}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
