/* eslint-disable no-unused-vars */
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "../styles/Contact.css";

export default function Contact() {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const message = form.message.value.trim();

    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setSuccessMsg("");
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_1vmaxun",
        "template_kr7mawl",
        e.target,
        "APmQg-_H-zWJi_Htb"
      )
      .then(
        () => {
          setSuccessMsg("Message sent successfully!");
          setErrorMsg("");
          form.reset();
          // Hide success message after 2 seconds
          setTimeout(() => setSuccessMsg(""), 2000);
        },
        () => {
          setErrorMsg("Failed to send message. Please try again later.");
          setSuccessMsg("");
        }
      );
  };

  return (
    <motion.div
      className="contact-section content"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h2 className="section-title">Get in Touch</h2>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-details">
          <div className="contact-box">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Kirari, Delhi (India)</span>
          </div>
          <div className="contact-box">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:kushalgoyal011@gmail.com">
              kushalgoyal011@gmail.com
            </a>
          </div>
          <div className="contact-box">
            <FaPhoneAlt className="contact-icon" />
            <a href="tel:+918512003021">+91 8512003021</a>
          </div>
          <div className="contact-box">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/kushal-goyal-396032230"
              target="_blank"
              rel="noopener noreferrer"
            >
              /in/kushal-goyal
            </a>
          </div>
          <div className="contact-box">
            <FaGithub className="contact-icon" />
            <a
              href="https://github.com/KushalGoyal03"
              target="_blank"
              rel="noopener noreferrer"
            >
              @KushalGoyal03
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>

          {/* Messages */}
          {successMsg && <p className="success-msg">{successMsg}</p>}
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </form>
      </div>
    </motion.div>
  );
}
