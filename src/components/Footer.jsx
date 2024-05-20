import React from "react";
import "../index.css";

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
      </div>
    </footer>
  );
};

export default Footer;