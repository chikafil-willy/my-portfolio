import React from "react";
import profilePic from "../assets/profile.png";

const Home = () => {
  const bio = {
    name: "Chika Williams",
    years_active: "2+ Years",
    description:
      "Full Stack Developer specializing in building fast, modern and scalable digital experiences.",
  };

  const techStack = ["React","JavaScript","CSS","HTML","Node.js","Express","Supabase","Web3"];

  const services = [
    "Web Development",
    "E-commerce Solutions",
    "Portfolio Websites",
    "Site Maintenance & Upgrades",
    "Web3 Integration",
    "SEO Optimization",
  ];

  const projects = [
    { title: "V6ix Collection", description: "A modern e-commerce store built with React + Supabase." },
    { title: "Portfolio Site", description: "A beautiful personal portfolio showcasing skills & projects." },
    { title: "Olea MamaCare", description: "A responsive consultancy website built with React + Supabase." },
    { title: "News Aggregator", description: "A web app that fetches & displays breaking news globally." },
    { title: "mssharonclawz", description: "A classy fashion e-commerce store with a smooth UI/UX." },
  ];

  const scrollingProjects = [...projects, ...projects];

  // STYLES
  const heroSection = {
    padding: "4rem 2rem",
    background: "linear-gradient(135deg, #00253D, #004B73, #0096C7)",
    color: "white",
    textAlign: "center",
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
  };

  const heroImage = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid white",
    marginBottom: "1rem",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  };

  const heroTitle = { fontSize: "2.5rem", fontWeight: "bold" };
  const heroSub = { opacity: 0.9, marginTop: "0.5rem", marginBottom: "1rem" };
  const heroText = { maxWidth: "600px", margin: "0 auto", opacity: 0.9, lineHeight: 1.6 };

  const section = { padding: "3rem 2rem", textAlign: "center" };
  const sectionHeader = { fontSize: "2rem", marginBottom: "1.5rem", color: "#004B73" };

  const techList = { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" };
  const techItem = {
    background: "#D9F3FF",
    padding: "0.6rem 1.2rem",
    borderRadius: "12px",
    fontWeight: "bold",
    color: "#005A87",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const servicesGrid = {
    display: "grid",
    gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr 1fr" : "1fr",
    gap: "1rem",
    maxWidth: "900px",
    margin: "0 auto",
  };
  const serviceCard = {
    background: "#F1FBFF",
    padding: "1rem",
    borderRadius: "10px",
    fontWeight: "bold",
    color: "#003A57",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const projectsHero = {
    padding: "2rem",
    margin: "2rem 0",
    background: "linear-gradient(135deg, #004B73, #0077B6)",
    borderRadius: "20px",
    color: "white",
    textAlign: "center",
  };

  const projectsContainer = {
    height: "280px",
    overflow: "hidden",
    borderRadius: "12px",
    marginTop: "1rem",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(6px)",
  };
  const projectsScroll = {
    display: "flex",
    flexDirection: "column",
    animation: "scrollUp 18s linear infinite",
  };
  const projectCard = { padding: "1rem", borderBottom: "1px solid rgba(255,255,255,0.3)" };
  const projectTitle = { margin: "0 0 0.3rem 0", color: "#fff", fontWeight: "bold" };
  const projectDesc = { margin: 0, opacity: 0.9, color: "#E0F6FF" };

  const styleSheet = `
    @keyframes scrollUp {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
  `;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#00253D", padding: 0, margin: 0 }}>
      <style>{styleSheet}</style>

      {/* TOP HERO */}
      <section style={heroSection}>
        <img src={profilePic} alt="Profile" style={heroImage} />
        <h1 style={heroTitle}>{bio.name}</h1>
        <p style={heroSub}>Full Stack Developer • {bio.years_active}</p>
        <p style={heroText}>{bio.description}</p>
      </section>

      {/* TECH STACK */}
      <section style={section}>
        <h2 style={sectionHeader}>Tech Stack</h2>
        <div style={techList}>
          {techStack.map((t, i) => (
            <span key={i} style={techItem}>{t}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <h2 style={sectionHeader}>Services</h2>
        <div style={servicesGrid}>
          {services.map((s, i) => (
            <div key={i} style={serviceCard}>{s}</div>
          ))}
        </div>
      </section>

      {/* SCROLLING PROJECTS HERO */}
      <section style={projectsHero}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Projects</h2>
        <div style={projectsContainer}>
          <div style={projectsScroll}>
            {scrollingProjects.map((p, i) => (
              <div key={i} style={projectCard}>
                <h3 style={projectTitle}>{p.title}</h3>
                <p style={projectDesc}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
