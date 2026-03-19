import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link className={activeSection === "home" ? "active" : ""} to="/">
          Home
        </Link>

        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          About
        </a>

        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
