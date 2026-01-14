import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BlockLuxScan",
      description:
        "BlockLuxScan is a product authentication and digital receipt system designed to combat counterfeit goods. It leverages Qrcode and cryptographic hashing to uniquely verify products, ensuring authenticity and traceability. The platform generates tamper-proof digital receipts and allows users to validate products in real time through a secure verification process.",
      stack: "React, Firebase, Express.js, Cryptographic Hashing",
      link: "https://www.blockluxscan.com/", // add link when ready
    },
    {
      id: 2,
      title: "V6ix Collection",
      description:
        "V6ix Collection is a modern e-commerce boutique built with a strong focus on performance and user experience. It includes advanced features such as order tracking, dynamic product listings, and seamless checkout flow. The system is designed to scale efficiently while maintaining a smooth shopping experience across devices.",
      stack: "React, Firebase, Supabase",
      link: "https://www.v6ixcollection.org/",
    },
    {
      id: 3,
      title: "Global News Aggregator",
      description:
        "A web application that aggregates and displays breaking headlines from top newspapers and news sources around the world. It fetches real-time news data, categorizes headlines, and presents them in a clean and accessible interface, allowing users to stay informed from multiple sources in one place.",
      stack: "React, Public News APIs",
      link: "https://github.com/chikafil-willy/news-app",
    },
    {
      id: 4,
      title: "MsSharonClawz",
      description:
        "MsSharonClawz is a modern and minimal e-commerce platform designed for selling glasses and fashion claws. The application focuses on simplicity, fast load times, and a smooth user interface, providing customers with an intuitive browsing and purchasing experience.",
      stack: "React, Supabase",
      link: "https://www.mssharonclawz.com.ng/",
    },
    {
      id: 5,
      title: "Olea MamaCare Consultancy",
      description:
        "Olea MamaCare is a consultancy website built to deliver a professional online presence. It includes a blogging system for publishing news and event updates, informational sections for services, and a responsive layout. The platform does not use authentication but focuses on content delivery and ease of management.",
      stack: "React, Supabase",
      link: "https://consultancy-durb.vercel.app/",
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <h2>{project.title}</h2>

          <p className="project-description">{project.description}</p>

          <p className="project-stack">
            <strong>Tech Stack:</strong> {project.stack}
          </p>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project
            </a>
          ) : (
            <p className="project-link placeholder">
              Project link coming soon
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
