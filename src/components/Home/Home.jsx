import React from "react";
import "./home.css";
import ImageSlot from "../ImageSlot/ImageSlot";

const INDEX_ITEMS = [
  { label: "years of experience", value: "4+" },
  { label: "projects shipped",    value: "10+" },
  { label: "open to work",        value: "yes" },
];

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__grid">
          <div className="hero__left">
            <h1 className="hero__name">
              airton canale<span className="cursor" />
            </h1>

            <dl className="hero__def">
              <dt>role</dt>
              <dd>software engineer · full-stack</dd>

              <dt>stack</dt>
              <dd>python · react · django · aws</dd>

              <dt>location</dt>
              <dd>São Marcos, RS — Brazil</dd>

              <dt>status</dt>
              <dd>
                <span className="status-dot" />
                available for work
              </dd>
            </dl>
          </div>

          <div className="hero__right">
            <ImageSlot id="hero-photo" aspectRatio="4/5" src="/assets/profileImage1.jpeg" alt="Airton Canale" />
          </div>
        </div>

        <div className="hero__index">
          {INDEX_ITEMS.map(({ label, value }) => (
            <div key={label} className="hero__index-item">
              <span className="hero__index-value">{value}</span>
              <span className="hero__index-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
