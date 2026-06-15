import React from "react";
import "./Contact.css";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section__header">
          <div className="section__meta">
            <span className="section__num">05</span>
            <span className="section__title">contact</span>
          </div>
        </div>

        <p className="contact__prompt">$ get in touch</p>

        <a
          href="mailto:airtonluizcanalefilho@hotmail.com?subject=Airton, I found your portfolio!"
          className="contact__email"
        >
          <span className="contact__arrow">→</span>
          airtonluizcanalefilho@hotmail.com
        </a>

        <p className="contact__tagline">
          Hiring for a role? Tell me about the problem<br />
          I read everything sent here.
        </p>

        <div className="contact__buttons">
          <a
            href="https://github.com/airton-canale"
            target="_blank"
            rel="noreferrer"
            className="contact__btn"
          >
            <SiGithub size={16} />
            github
            <span className="contact__btn-arrow">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/airton-canale-045967237/"
            target="_blank"
            rel="noreferrer"
            className="contact__btn"
          >
            <SiLinkedin size={16} />
            linkedin
            <span className="contact__btn-arrow">↗</span>
          </a>
        </div>

        <footer className="contact__footer">
          <span>© {year} airton canale</span>
        </footer>
      </div>
    </section>
  );
}
