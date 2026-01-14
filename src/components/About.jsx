import React from "react";

const About = () => {
  const page = {
    background: "linear-gradient(180deg, #050B14, #0A1F33)",
    color: "#EAF6FF",
    minHeight: "100vh",
    padding: "3rem 1rem",
    fontFamily: "Inter, Arial, sans-serif",
  };

  const container = {
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const card = {
    background: "rgba(255, 255, 255, 0.06)",
    backdropFilter: "blur(12px)",
    borderRadius: "28px",
    padding: "2.8rem",
    boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
    border: "1px solid rgba(255,255,255,0.12)",
  };

  const title = {
    fontSize: "2.6rem",
    marginBottom: "1.5rem",
    color: "#00B4D8",
    textAlign: "center",
  };

  const paragraph = {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    marginBottom: "1.4rem",
    opacity: 0.95,
  };

  const highlight = {
    color: "#90E0EF",
    fontWeight: 600,
  };

  return (
    <div style={page}>
      <div style={container}>
        <div style={card}>
          <h1 style={title}>About Me</h1>

          <p style={paragraph}>
            I am a multidisciplinary professional with a strong academic
            foundation in <span style={highlight}>Industrial Chemistry</span>,
            holding both a <span style={highlight}>BSc</span> and
            <span style={highlight}> MSc</span>. This background has shaped my
            analytical thinking, attention to detail, and problem-solving
            approach, which I now apply across software development and
            cybersecurity.
          </p>

          <p style={paragraph}>
            I am a <span style={highlight}>Full Stack Developer</span> and
            <span style={highlight}> Cybersecurity Consultant</span> with over
            <span style={highlight}> 3 years of experience</span> designing,
            building, and securing modern web applications. I focus on creating
            scalable, high-performance systems with security integrated from the
            ground up.
          </p>

          <p style={paragraph}>
            On the development side, I work extensively with React,
            JavaScript, Firebase, Supabase, and Express.js to build clean,
            maintainable, and user-centric applications. My work emphasizes
            performance, responsive design, and sound application architecture.
          </p>

          <p style={paragraph}>
            From a cybersecurity perspective, I carry out structured web
            application security assessments to identify vulnerabilities,
            misconfigurations, and weak security controls. My approach is guided
            by industry best practices and the <span style={highlight}>OWASP Top 10</span>,
            enabling a clear understanding of application risk exposure.
          </p>

          <p style={paragraph}>
            Beyond identifying issues, I actively implement remediation and
            hardening measures such as secure authentication and authorization
            flows, input validation, access control enforcement, and data
            protection strategies. This ensures applications are resilient,
            reliable, and capable of withstanding real-world threats.
          </p>

          <p style={{ ...paragraph, marginBottom: 0 }}>
            By combining a strong scientific foundation with full-stack
            development and practical security auditing expertise, I deliver
            applications that are not only functional and visually appealing,
            but also secure by design and built for long-term reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
