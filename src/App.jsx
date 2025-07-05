import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="/TYSONW logo white.svg" alt="Tyson W Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#hero-section">Home</a></li>
          <li><a href="#projects-section">Projects</a></li>
          <li><a href="#about-section">About</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact-section">Contact</a></li>
        </ul>
      </nav>
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <p>Copyright &copy; 2025; Designed by <a href="https://www.tysonwilliams.dev"><img src="/TYSONW logo white.svg" alt="TysonW Logo" className="logo-img footer-logo" /></a></p>
      </footer>
    </div>
  );
}

export default App;
