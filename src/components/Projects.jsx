/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "../styles/Projects.css";

export default function Projects() {
  const projectList = [
    {
      title: "KnowMyRights",
      description:
        "A Full-stack legal awareness platform using React, Express.js, and MongoDB, combining dynamic GPT-based legal Q&A with structured, database-driven rights summaries.",
      tech: ["React + Vite", "Node.js", "Express", "MongoDB", "GPT"],
      live: "https://know-my-rights.netlify.app/",
    },
    {
      title: "ChatRealm",
      description:
        "A clean and modular real time chat platform using React, Express.js, and MongoDB, featuring secure user authentication and protected routes.",
      tech: ["React + Vite", "Node.js", "Express", "MongoDB"],
      live: "https://chatrealm.netlify.app/home",
    },
    {
      title: "Job Portal",
      description:
        "A simple job portal website showcasing listings and a user-friendly interface built with pure frontend tech.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://kushalgoyal03.github.io/Job-Portal",
    },
  ];

  return (
    <motion.div
      className="content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="project-grid">
        {projectList.map((proj, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h3>{proj.title}</h3>
            <p className="project-description">{proj.description}</p>
            <ul className="tech-stack">
              {proj.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <div className="project-links">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  🔗 GitHub
                </a>
              )}
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noopener noreferrer">
                  🚀 Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
