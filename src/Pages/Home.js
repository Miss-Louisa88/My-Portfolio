import React from "react";
import Layout from "../Components/Layout";
import "../App.css";
import AboutSkills from "../Components/AboutSkills";
import FeaturedProjects from "../Components/FeaturedProjects";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Hero from "../Components/Hero";

function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSkills />
      <About />
      <section className="featured-projects-wrapper">
        <FeaturedProjects />
      </section>
      <Contact />
    </Layout>
  );
}

export default Home;
