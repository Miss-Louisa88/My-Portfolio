import React from "react";
import weatherApp from "../images/weatherapp.png";
import littleLemon from "../images/weatherapp.png";
import calculatorApp from "../images/weatherapp.png";
import "../App.css";

function FeaturedProjects() {
  const projects = [
    {
      name: "React Weather App",
      image: weatherApp,
      demo: "#", // replace with your live demo link
      repo: "#", // replace with GitHub repo link
      description:
        "A responsive weather app using React that fetches real-time data from an API.",
    },
    {
      name: "Little Lemon Restaurant App",
      image: littleLemon,
      demo: "#",
      repo: "#",
      description:
        "A restaurant reservation and menu app built with React and Bootstrap.",
    },
    {
      name: "Calculator App",
      image: calculatorApp,
      demo: "#",
      repo: "#",
      description:
        "A simple calculator application demonstrating React state management.",
    },
  ];

  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-btn">
        <a href="#all-projects" className="btn btn-primary">
          View All Projects
        </a>
      </div>
    </section>
  );
}

export default FeaturedProjects;
