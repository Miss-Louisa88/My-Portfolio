import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* glowing background orb */}
      <div className="glow-orb"></div>

      {/* floating boxes */}
      <div className="box box1"></div>
      <div className="box box2"></div>
      <div className="box box3"></div>
      <div className="box box4"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="accent">Louise</span>
        </h1>
        <h2>Software Engineer | Frontend and Fullstack Developer</h2>
        <p className="hero-subtitle">
          I build fast, scalable and user-focused web applications with React,
          JavaScript, Bootstrap, and modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>

        {/* featured section */}
        <div className="featured">
          <p>As featured in</p>

          <div className="logos">
            <span>React</span>
            <span>Node</span>
            <span>AWS</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
