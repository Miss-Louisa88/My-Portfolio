import React from "react";
import weatherApp from "../images/weatherapp.png";
import littleLemon from "../images/little lemon restaurant.png";
import calculatorApp from "../images/calculator.jpg";
import "../App.css";

function FeaturedProjects() {
  const projects = [
    {
      name: "React Weather App",
      image: weatherApp,
      demo: "https://louisereact.netlify.app/",
      repo: "https://github.com/Miss-Louisa88/my-react-weather-app",
      description:
        "A responsive weather app using React that fetches real-time data from an API.",
    },
    {
      name: "Calculator App",
      image: calculatorApp,
      demo: "#",
      repo: "#",
      description:
        "A simple calculator application demonstrating React state management.",
    },
    {
      name: "Little Lemon Restaurant Booking Landing Page",
      image: littleLemon,
      demo: "https://github.com/Miss-Louisa88/Little-Lemon-Project/commits/main/",
      repo: "https://github.com/Miss-Louisa88/Little-Lemon-Project/commits/main/",
      description:
        "A restaurant online reservation and menu app built with React and Bootstrap.",
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
        <a href="/projects" className="btn btn-primary">
          View All Projects
        </a>
      </div>
    </section>
  );
}

export default FeaturedProjects;
