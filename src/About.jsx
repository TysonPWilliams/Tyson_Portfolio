import React from "react";
import "./About.css";

const About = () => (
  <section className="about-section" id="about-section">
    <div className="about-content">
      <div className="about-text">
        <h2>About Me</h2>
        <h3>Full-Stack Developer and a little bit of <span className="about-highlight">everything</span></h3>
        <p>I'm Tyson Williams, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend and backend, I thrive on solving complex problems with clean, efficient code. My expertise spans JavaScript, Python, PostgreSQL, HTML and CSS, and I'm always eager to learn more.</p>
        <p>When I'm not coding, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.</p>
        <p>I believe in waking up each day eager to make a difference!</p>
      </div>
      <img src="old-portfolio/images/tyson_bw.jpg" alt="Tyson Williams" className="about-profile" />
    </div>
  </section>
);

export default About; 