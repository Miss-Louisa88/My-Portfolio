import React from "react";
import Layout from "../Components/Layout";
import profile from "../images/LuiDev.jpg";
import "../App.css";
import AboutSkills from "../Components/AboutSkills";
import FeaturedProjects from "../Components/FeaturedProjects";

function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="description">
          <h1>Louise Adera</h1>
          <h2>Software Engineer | Frontend and Fullstack Developer</h2>
          <p>
            I build fast, accessible, and scalable web applicatins using
            React,Javascript and Bootstrap.
          </p>
          {/* Buttons section */}
          <div className="hero-buttons">
            <a href="/projects" className="btn btn-primary">
              View Projects
            </a>
            <a
              href="C:\Users\Louisa Guda\OneDrive\Desktop\MY RESUMES\MY RESUMES\2026 Software Engineer\Louise Adera_Software Engineer Resume.pdf"
              download
              className="btn btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="profile_photo">
          <img src={profile} alt="Louise Adera" />
        </div>
      </section>
      <AboutSkills />
      <section className="featured-projects-wrapper">
        <FeaturedProjects />
      </section>
    </Layout>
  );
}

export default Home;
