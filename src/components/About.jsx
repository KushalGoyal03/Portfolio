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
        I'm Kushal Goyal, a dedicated and detail-oriented Full Stack Developer
        with a strong foundation in computer science and a passion for building
        scalable, responsive, and user-friendly web applications. I enjoy
        solving real-world problems using technology and constantly seek to
        expand my knowledge and skills in the evolving web ecosystem.
        <br />
        <br />
        Currently pursuing my MCA from JIMS (GGSIPU), I have a solid academic
        background with a B.Sc. (Hons.) in Computer Science from Delhi
        University. Full Stack Developer with practical experience in building
        full-stack web applications that are responsive, user-friendly, and
        scalable. Skilled in developing real-time features, integrating APIs,
        and writing clean, maintainable code. Strong understanding of modern
        JavaScript technologies and a passion for solving problems through
        efficient solutions. Experienced in deploying applications using
        platforms like Netlify, Render, and MongoDB Atlas. Committed to
        contributing to meaningful tech projects and continuously growing as a
        full-stack developer.
        <br />
        <br />
        My goal is to contribute to innovative projects that make a meaningful
        impact, work with collaborative teams, and continuously grow as a
        developer.
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
            <p>HTML5, CSS3, JavaScript, Java, Python</p>
          </div>
          <div>
            <strong>Web Technologies:</strong>
            <p>React.js, Node.js, Express.js, RESTful APIs</p>
          </div>
          <div>
            <strong>Databases:</strong>
            <p>MongoDB, Chrome Local Storage</p>
          </div>
          <div>
            <strong>Tools & Platforms:</strong>
            <p>Git, GitHub, VS Code, Postman</p>
          </div>
          <div>
            <strong>Deployment: </strong>
            <p>Netlify, Render, MongoDB Atlas</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
