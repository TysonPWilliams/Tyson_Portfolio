import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { HashLink } from "react-router-hash-link";

const words = ["Developer", "Engineer", "Architect"];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    const handleType = () => {
      const fullWord = words[currentWord];
      setDisplayed((prev) =>
        isDeleting ? fullWord.substring(0, prev.length - 1) : fullWord.substring(0, prev.length + 1)
      );
      setTypingSpeed(isDeleting ? 60 : 120);

      if (!isDeleting && displayed === fullWord) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && displayed === "") {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
        setLoopNum(loopNum + 1);
      }
    };
    if (isMounted.current) {
      const timer = setTimeout(handleType, typingSpeed);
      return () => clearTimeout(timer);
    }
    return () => { isMounted.current = false; };
    // eslint-disable-next-line
  }, [displayed, isDeleting, currentWord]);

  return (
    <div className="centered-section">
      <section className="hero-section" id="hero-section">
        <div className="hero-content-modern">
          <div className="hero-badge">Available for hire</div>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Tyson Williams</span>
            <br />
            <span className="hero-cycling">
              Full Stack <span className="cycling-word">{displayed}<span className="hero-cursor">|</span></span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Full-stack developer with a background in entrepreneurship and marketing, passionate about building innovative, user-focused solutions using technologies like React.js, Node.js, and Python.
          </p>
          <div className="hero-buttons">
            <HashLink smooth to="#projects-section" className="hero-btn-modern primary">View Projects →</HashLink>
            <HashLink smooth to="#contact-section" className="hero-btn-modern secondary">Contact Me →</HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero; 