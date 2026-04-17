import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutSkills() {
  return (
    <div className="container my-5">
      <h1 className="my-skills text-center">My Skills</h1>

      <section className="row g-4 mt-4">
        {/* FRONTEND */}
        <div className="col-12 col-md-6">
          <div className="skills-card">
            <h3>Frontend Engineering</h3>

            <div className="devIcons">
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              </span>
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              </span>
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
              </span>
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
              </span>
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
              </span>
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              </span>
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              </span>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="col-12 col-md-6">
          <div className="skills-card">
            <h3>Backend & Systems</h3>

            <div className="backendIcons">
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
              </span>
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" />
              </span>
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" />
              </span>
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
              </span>
              <span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSkills;
