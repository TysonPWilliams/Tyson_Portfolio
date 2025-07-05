import React from "react";
import "./About.css";

const About = () => (
  <div className="centered-section">
    <section className="about-section" id="about-section">
      <div className="about-content-modern">
        <div className="about-badge">About Me</div>
        <div className="about-text-modern">
          <h2 className="about-title">
            Full-Stack Developer and a little bit of <span className="about-highlight">everything</span>
          </h2>
          <p className="about-subtitle">
            I'm Tyson Williams, a proactive full-stack developer passionate about creating dynamic
            web experiences. From frontend and backend, I thrive on solving complex problems with
            clean, efficient code. My expertise spans JavaScript, React, Express, Python, MongoDB, HTML and CSS,
            and I'm always eager to learn more.
          </p>
          <p className="about-subtitle">
            When I'm not coding, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
          </p>
          <p className="about-subtitle">
            I believe in waking up each day eager to make a difference!
          </p>
        </div>
        <div className="about-profile-container">
          <img src="/tyson_bw.jpg" alt="Tyson Williams" className="about-profile-modern" />
        </div>
      </div>
    </section>
  </div>
);

export default About; 