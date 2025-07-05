import React, { useState } from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="/TYSONW logo white.svg" alt="Tyson W Logo" className="logo-img" />
        </div>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M3 6H21M3 12H21M3 18H21" 
              stroke="#22c55e" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li><a href="#hero-section" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#projects-section" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#about-section" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
          <li><a href="#contact-section" onClick={() => setMenuOpen(false)}>Contact</a></li>
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
