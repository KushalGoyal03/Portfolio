/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";

const typedLines = [
  "Hi, I'm Kushal Goyal.",
  "Full Stack Developer.",
  "I build responsive web apps.",
];

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const line = typedLines[lineIndex];
    if (charIndex < line.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + line.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setLineIndex((prev) => (prev + 1) % typedLines.length);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="home-wrapper">
      <motion.div
        className="home-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="typewriter-text">
          {currentText}
          <span className="cursor">|</span>
        </div>
        <div className="subtext">
          <p>Hello and welcome! 👋</p>
          <p>
            I'm a passionate <strong>Full Stack Developer</strong> with
            experience in building dynamic and responsive web applications.
          </p>
          <p>
            I specialize in the <strong>MERN stack</strong> — MongoDB,
            Express.js, React.js, and Node.js — along with HTML, CSS, and
            JavaScript.
          </p>
          <p>
            I love creating clean, efficient, and user-centric applications.
          </p>
          <p>Let’s build something amazing together. 🚀</p>
        </div>
        <a href="/Kushal Goyal_Resume.pdf" download className="cv-download-btn">
          Download CV
        </a>
      </motion.div>

      <motion.div
        className="home-right"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="image-holder">
          <img
            src="/Kushal_Goyal.jpg"
            alt="Profile"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
