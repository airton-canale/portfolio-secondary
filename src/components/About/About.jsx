import React from "react";
import "./about.css";
import ImageSlot from "../ImageSlot/ImageSlot";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__header">
          <div className="section__meta">
            <span className="section__num">03</span>
            <span className="section__title">about</span>
          </div>
        </div>

        <div className="about__grid">
          <div className="about__photo">
            <ImageSlot id="about-photo" aspectRatio="1/1" src="/assets/profileImage2.jpeg" alt="Airton Canale" />
          </div>

          <div className="about__text">
            <h2 className="about__heading">
              Software engineer with 4+ years building web, mobile, and cloud-native applications.
            </h2>

            <p className="about__para">
              I'm Airton, from São Marcos, Rio Grande do Sul. I'm skilled in Python, JavaScript/TypeScript,
              React, Django, and AWS — delivering full-stack solutions across startups and freelance
              engagements, from architecting microservices to deploying production infrastructure.
            </p>

            <p className="about__para">
              Passionate about clean code, great UX, and automation. Currently pursuing a B.Sc. in
              Software Engineering at PUCRS (expected Jul 2027).
            </p>

            <div className="about__actions">
              <a
                href="mailto:airtonluizcanalefilho@hotmail.com?subject=Airton, I found your portfolio!"
                className="about__btn"
              >
                → email me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
