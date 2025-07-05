import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
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
            <li><HashLink smooth to="/#hero-section" onClick={() => setMenuOpen(false)}>Home</HashLink></li>
            <li><HashLink smooth to="/#projects-section" onClick={() => setMenuOpen(false)}>Projects</HashLink></li>
            <li><HashLink smooth to="/#about-section" onClick={() => setMenuOpen(false)}>About</HashLink></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><HashLink smooth to="/#contact-section" onClick={() => setMenuOpen(false)}>Contact</HashLink></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Projects />
                  <About />
                  <Contact />
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>Copyright &copy; 2025; Designed by <a href="https://www.tysonwilliams.dev"><img src="/TYSONW logo white.svg" alt="TysonW Logo" className="logo-img footer-logo" /></a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
