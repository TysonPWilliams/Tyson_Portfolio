import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "SatoshiFund P2P Bitcoin Lending",
    image: "/satoshiFund-min.png",
    tech: ["JavaScript", "React", "Node.js", "Mongoose", "Express"],
    description: "A decentralized peer-to-peer Bitcoin lending platform with smart contracts, real-time trading, and secure wallet integration.",
    links: [
      { label: "View Code", url: "https://github.com/orgs/SatoshiFundAus/repositories" },
      { label: "Live Demo", url: "https://satoshifund.netlify.app/" }
    ]
  },
  {
    title: "Learning Management System API",
    image: "/LMS-API.png",
    tech: ["Python", "Flask", "SQLAlchemy", "Marshmallow"],
    description: "A comprehensive RESTful API for managing courses, students, and enrollments with full CRUD operations.",
    links: [
      { label: "View Code", url: "https://github.com/TysonPWilliams/oct24-build-an-api" }
      
    ]
  },
  {
    title: "Student Grading Backend",
    image: "/grading.jpg",
    tech: ["JavaScript", "Express", "Mongoose"],
    description: "Student Grading system for teachers/assessors to use with RESTful routes",
    links: [
      { label: "View Code", url: "https://github.com/TysonPWilliams/student-grading-backend" }
    ]
  },
  {
    title: "PostgreSQL Scripts",
    image: "/postgresql-image.png",
    tech: ["PostgreSQL", "SQL", "Database Design"],
    description: "Collection of advanced SQL scripts for database management, optimization, and complex data analysis queries.",
    links: [
      { label: "View Code", url: "https://github.com/TysonPWilliams/database-scripts-assessment" }
    ]
  }
];

const Projects = () => (
  <section className="projects-section" id="projects-section">
    <h2>Featured Projects</h2>
    <p className="projects-subtitle">Showcasing my latest work in full-stack development</p>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <div className="tech-stack">
            {project.tech.map((t, i) => <span className="tech-tag" key={i}>{t}</span>)}
          </div>
          <p>{project.description}</p>
          <div className="project-links">
            {project.links.map((link, i) => (
              <a href={link.url} target="_blank" rel="noopener noreferrer" className={i === 0 ? "btn-primary" : "btn-secondary"} key={i}>{link.label}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 