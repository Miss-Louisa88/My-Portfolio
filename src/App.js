import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <h3 className="logo">LuiDev</h3>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="btn">Download CV</button>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="description">
          <h1>Louise Adera</h1>
          <h2>Full-Stack Developer</h2>
          <p>
            Full-Stack Developer with 4+ years of experience (3+ in frontend, 1+
            in full-stack) building scalable, user-focused web applications.
            Specializing in React, JavaScript, and responsive UI development,
            with backend experience in Node.js, Express, REST APIs, and Firebase.
          </p>
          <div className="cta_buttons">
            <button className="primary">View Projects</button>
            <button className="secondary">Download CV</button>
          </div>
        </div>
        <div className="profile_photo">
          <img src="/images/LuiDev.jpg" alt="Louise Adera profile" />
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="skills">
        <h2>Skills</h2>
        <p>Building interactive and responsive web interfaces</p>

        <div className="skills-grid">
          <div className="skill-card">
            <h4>Frontend</h4>
            <p>React, JavaScript, HTML, CSS, Bootstrap</p>
          </div>
          <div className="skill-card">
            <h4>Backend</h4>
            <p>Node.js, Express, REST APIs, Firebase</p>
          </div>
          <div className="skill-card">
            <h4>Tools</h4>
            <p>Git, GitHub, Testing Library, Agile</p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="featured_projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">React Weather App</div>
          <div className="project-card">Little Lemon Restaurant App</div>
          <div className="project-card">Louisa Boutique Landing Page</div>
        </div>
        <button className="btn secondary view-all">View All Projects</button>
      </section>
    </div>
  );
}

export default App;
