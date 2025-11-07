import React from "react";
import profilePic from "../assets/profile.png";

const Home = () => {

  const bio = {
    name: "Chika Williams",
    years_active: "2+ years",
    description: "Passionate Full Stack Developer, building modern web apps."
  };

  const techStack = [
    "React",
    "JavaScript",
    "CSS",
    "HTML",
    "Node.js",
    "Express",
    "Supabase",
    "Web3"
  ];

  const services = [
    "Web Development",
    "E-commerce Solutions",
    "Portfolio Websites",
    "Site Maintenance & Upgrades",
    "Web3 Integration"
  ];

  const projects = [
    { title: "V6ix Collection", description: "An e-commerce store built with React and Supabase." },
    { title: "Portfolio Site", description: "A personal portfolio site showcasing projects and skills." },
    { title: "Olea MamaCare", description: "A modern and responsive consultancy website built with React and Supabase." },
    { title: "Global News Aggregator", description: "A dynamic news web app that fetches and displays top headlines."},
    { title: "mssharonclawz", description: "A a modern e-commerce store offering a curated collection of stylish apparel and accessories with a sleek, user-friendly interface"}
    
     ,
  ];


  // -----------------------
  // Inline styles
  // -----------------------
  const containerStyle = { padding: "2rem", fontFamily: "Arial, sans-serif", color: "#333" };
  const bioStyle = { textAlign: "center", marginBottom: "3rem" };
  const nameStyle = { fontWeight: "bold", fontSize: "2.5rem", marginBottom: "0.5rem", color: "#0077b6" };
  const profileImageStyle = { width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" };
  const sectionStyle = { marginBottom: "3rem" };
  const headerStyle = { color: "#023e8a" };

  const techListStyle = { display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "center" };
  const techItemStyle = { background: "#ade8f4", padding: "0.5rem 1rem", borderRadius: "10px", fontWeight: "bold", color: "#023e8a" };

  const servicesListStyle = { listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" };
  const serviceItemStyle = { background: "#caf0f8", padding: "0.5rem 1rem", borderRadius: "8px", color: "#03045e", fontWeight: "500" };

  const projectsContainerStyle = { height: "300px", overflow: "hidden", border: "1px solid #ccc", borderRadius: "8px", position: "relative" };
  const projectsScrollStyle = { display: "flex", flexDirection: "column", animation: "scrollUp 20s linear infinite" };
  const projectCardStyle = { padding: "1rem", borderBottom: "1px solid #ddd" };
  const projectTitleStyle = { margin: "0 0 0.5rem 0", color: "#0077b6" };
  const projectDescStyle = { margin: 0, color: "#333" };

  // 🔹 Scrolling header styles
  const scrollingHeaderContainer = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    background: "#023e8a",
    color: "white",
    fontWeight: "bold",
    fontSize: "0.7rem",
    padding: "0.5rem 0",
    marginBottom: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  };

  const scrollingHeaderText = {
    display: "inline-block",
    paddingLeft: "129%",
    animation: "scrollLeft 12s linear infinite",
  };

  // 🔹 Add both animations (projects scroll + header scroll)
  const styleSheet = `
    @keyframes scrollUp {
      0% { transform: translateY(0%); }
      100% { transform: translateY(-50%); }
    }

    @keyframes scrollLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
  `;

  const scrollingProjects = [...projects, ...projects];

  return (
    <div style={containerStyle}>
      <style>{styleSheet}</style>

      {/* 🔹 SCROLLING HEADER */}
      <div style={scrollingHeaderContainer}>
        <div style={scrollingHeaderText}>Turning your ideas into beautiful digital experiences🚀</div>
      </div>

      {/* BIO */}
      <section style={bioStyle}>
        <img src={profilePic} alt="Profile" style={profileImageStyle} />
        <h1 style={nameStyle}>{bio.name}</h1>
        <p style={{ color: "#023e8a" }}>Years Active: {bio.years_active}</p>
        <p>{bio.description}</p>
      </section>

      {/* TECH STACK */}
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Tech Stack</h2>
        <div style={techListStyle}>
          {techStack.map((tech, index) => (
            <span key={index} style={techItemStyle}>{tech}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Services</h2>
        <ul style={servicesListStyle}>
          {services.map((service, index) => (
            <li key={index} style={serviceItemStyle}>{service}</li>
          ))}
        </ul>
      </section>

      {/* PROJECTS SCROLLING */}
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Projects</h2>
        <div style={projectsContainerStyle}>
          <div style={projectsScrollStyle}>
            {scrollingProjects.map((project, index) => (
              <div key={index} style={projectCardStyle}>
                <h3 style={projectTitleStyle}>{project.title}</h3>
                <p style={projectDescStyle}>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
