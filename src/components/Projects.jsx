import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) console.error(error);
      else setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
