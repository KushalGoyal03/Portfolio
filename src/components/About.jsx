/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  return (
    <motion.div
      className="content about-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        👨‍💻 About Me
      </motion.h2>

      <motion.p
        className="about-para"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I’m a Full Stack Developer passionate about crafting responsive,
        user-friendly web applications. I'm eager to contribute to impactful
        projects and constantly grow as a full-stack developer.
      </motion.p>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3>🎓 Education</h3>
        <ul>
          <li>
            <strong>MCA</strong> – JIMS (GGSIPU), New Delhi{" "}
            <span className="edu-year">2024–Present</span>
          </li>
          <li>
            <strong>B.Sc. (Hons.) Computer Science</strong> – RLA College (DU)
            <span className="edu-year">2021–2024</span>
            <br />
            <em>CGPA: 8.811</em>
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h3>🛠️ Skills</h3>
        <div className="skills-grid">
          <div>
            <strong>Languages:</strong>
            <p>HTML, CSS, JavaScript, Java, Python</p>
          </div>
          <div>
            <strong>Technologies:</strong>
            <p>React.js, Node.js, Express.js</p>
          </div>
          <div>
            <strong>Databases:</strong>
            <p>MongoDB, Chrome Local Storage</p>
          </div>
          <div>
            <strong>Tools:</strong>
            <p>Git, GitHub, VS Code</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
