import React from "react";
import weatherApp from "../images/weatherapp.png";
import littleLemon from "../images/little lemon restaurant.png";
import calculatorApp from "../images/translation.png";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      name: "E-Commerce Website",
      image: calculatorApp,
      demo: "https://sanctuarytranslation.com/",
      repo: "https://sanctuarytranslation.com/",
      description:
        "A simple e-commerce website for a Translation and Interpretation company",
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
    <section id="projects" className="featured-projects container">
      <h2>Featured Projects</h2>

      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.name} className="col-12 col-md-6 col-lg-4">
            <div className="project-card h-100">
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
