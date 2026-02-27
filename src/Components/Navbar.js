import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <a
        href="C:\Users\Louisa Guda\OneDrive\Desktop\MY RESUMES\MY RESUMES\2026 Software Engineer\Louise Adera_Software Engineer Resume.pdf"
        download
        className="btn"
      >
        Download CV
      </a>
    </header>
  );
}

export default Navbar;
