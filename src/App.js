import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>Home</nav>
        <nav>About</nav>
        <nav>Projects</nav>
        <nav>Contact</nav>
        <nav>
          {" "}
          <button>Download CV</button>
        </nav>
      </header>
      <section>
        <div className="description">
          <h1>Louise Adera</h1>
          <h2> Fullstack Developer</h2>
          <p>
            Full-Stack Developer with 4+ years of experience (3+ in frontend, 1+
            in full-stack) building scalable, user-focused web applications. I
            specialize in React, JavaScript, and responsive UI development, with
            backend experience in Node.js, Express, REST APIs, and Firebase.
            I’ve worked in Agile teams, translated Figma designs into
            production-ready interfaces, and delivered measurable improvements
            in performance, user retention, and development efficiency.
          </p>
          <div className="cta_buttons">
            <button>View Projects</button>
            <button>Download CV</button>
          </div>
        </div>
        <div className="profile_photo">
          <img src="/images/LuiDev.jpg" width="400px" />
        </div>
      </section>
      <section classsName="skills">
        <h2>Skills</h2>
        <p>Building interactive and responsive web interfaces...</p>
        <div className="frontend">React, Javascript,htmls/css...</div>
        <div className="backend"> eXPREESS, nODE. ETC...</div>
        <div className="tools"> Git,github, testing ibrary etc...</div>
      </section>
      <section className="faetured_projects">
        <h2>Featured Projects</h2>
        <div className="projects">
          <ul>
            <li>Use card for React Weather Project</li>
            <li> Use card for Littlle Lemon Restaurant app</li>
            <li> Use card for Louuisa bOUTIQE Landing Page</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
