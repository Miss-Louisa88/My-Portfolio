import React from "react";
import Layout from "../Components/Layout";
import AboutHero from "../Components/AboutHero";
import AboutStory from "../Components/AboutStory";
import ExperienceHighlights from "../Components/ExperienceHighlights";
import WorkPhilosophy from "../Components/WorkPhilosophy";
import AboutCTA from "../Components/AboutCTA";
import "../App.css";

function About() {
  return (
    <Layout>
      <div className="about-page">
        <AboutHero />
        <AboutStory />
        <ExperienceHighlights />
        <WorkPhilosophy />
        <AboutCTA />
      </div>
    </Layout>
  );
}

export default About;
