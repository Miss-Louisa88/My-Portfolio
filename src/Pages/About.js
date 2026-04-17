import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import profile from "../images/LuiDev.jpg";

function About() {
  return (
    <div className="about-page">
      <h1 className="about-heading">About Me</h1>
      <section id="about" className="about-section container">
        <div className="row align-items-center g-5">
          {/* LEFT */}
          <motion.div
            className="col-12 col-lg-4 about-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              I’m a frontend-focused Software Engineer who loves building fast,
              scalable, and user-centered web applications. Using technologies
              like React, TypeScript, and Node.js, I transform designs into
              responsive, production-ready interfaces and optimize performance
              for real users. I’m passionate about creating solutions that are
              technically solid and deliver meaningful user experiences.
            </p>
          </motion.div>

          {/* IMAGE */}
          <div className="col-12 col-lg-4 text-center about-image">
            <div className="image-glow"></div>
            <div className="image-ring"></div>
            <img src={profile} alt="Louise Adera" />
          </div>

          {/* RIGHT */}
          <motion.div
            className="col-12 col-lg-4 about-right"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              I specialize in React technologies which bring a lot of benefits
              to my clients:
            </p>

            <ul>
              <li>👍 A lot of third-party plugins and components.</li>
              <li>👍 Technology is supported by Facebook.</li>
              <li>👍 Very good performance compared with other frameworks.</li>
            </ul>

            <a
              href="/Louise Adera_Software Engineer Resume.pdf"
              download
              className="btn-secondary"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
