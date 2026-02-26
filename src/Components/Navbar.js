import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // so it uses your existing CSS

function Navbar() {
  return (
    <header className="navbar">
      <h3 className="logo">LuiDev</h3>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
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
