import React from "react";
import "../index.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons library

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-container">
        <h2>Contact Me</h2>
        <form className="custom-contact-form">
          <div className="custom-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="custom-form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
        <div className="social-icons">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
