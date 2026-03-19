import Layout from "../Components/Layout";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function ContactMe() {
  return (
    <div>
      <section id="contact" className="contact-section">
        <div className="contact-box">
          <h1 className="contact-title">Let's Connect</h1>

          <p className="contact-intro">
            I'm always open to meaningful conversations, collaboration
            opportunities, and roles where I can build impactful software. Feel
            free to reach out through any of the platforms below.
          </p>

          <div className="contact-grid">
            <a href="tel:+254729276642" className="contact-card">
              <FaPhone className="contact-icon" />
              <h3>Phone</h3>
              <p>+254 729 276 642</p>
            </a>

            <a href="mailto:louiseadera@gmail.com" className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>louiseadera@gmail.com</p>
            </a>

            <a
              href="https://github.com/Miss-Louisa88"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <FaGithub className="contact-icon" />
              <h3>GitHub</h3>
              <p>View my repositories</p>
            </a>

            <a
              href="https://www.linkedin.com/in/louise-adera-71820284"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <FaLinkedin className="contact-icon" />
              <h3>LinkedIn</h3>
              <p>Connect professionally</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactMe;
