import React from "react";
import { motion } from "framer-motion";
import AboutCTA from "../Components/AboutCTA";
import "../App.css";
import profile from "../images/LuiDev.jpg";

function About() {
  return (
    <div className="about-page">
      <section id="about" className="about-section">
        <h1 className="about-heading">About Me</h1>
        {/* LEFT SIDE */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            I’m a frontend-focused Software Engineer who loves building fast,
            scalable, and user-centered web applications. Using technologies
            like React, TypeScript, and Node.js, I transform designs into
            responsive, production-ready interfaces and optimize performance for
            real users. I’m passionate about creating solutions that are both
            technically solid and deliver meaningful user experiences.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            I specialize in React technologies which bring a lot of benefits to
            my clients:
          </p>

          <ul>
            <li>👍 A lot of third-party plugins and components.</li>
            <li>👍 Technology is supported by Facebook.</li>
            <li>👍 Very good performance compared with other frameworks.</li>
          </ul>
        </motion.div>
        <div className="hero-buttons">
          <a
            href="C:\Users\Louisa Guda\OneDrive\Desktop\MY RESUMES\MY RESUMES\2026 Software Engineer\Louise Adera_Software Engineer Resume.pdf"
            download
            className="btn btn-secondary"
          >
            Download CV
          </a>
        </div>

        <div className="profile_photo">
          <img src={profile} alt="Louise Adera" />
        </div>
      </section>
    </div>
  );
}

export default About;
