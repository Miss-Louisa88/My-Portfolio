import React from "react";
import Layout from "../Components/Layout";
import profile from "../images/LuiDev.jpg";
import "../App.css";

function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="description">
          <h1>Louise Adera</h1>
          <h2>Full-Stack Developer</h2>
        </div>

        <div className="profile_photo">
          <img src={profile} alt="Louise Adera" />
        </div>
      </section>
    </Layout>
  );
}

export default Home;
