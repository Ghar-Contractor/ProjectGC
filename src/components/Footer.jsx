import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          {/* About */}
          <h4 className="footer-heading">About Us</h4>
          <p>We are committed to delivering excellence and driving innovation in everything we do.</p>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact Details</h4>
          <ul>
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <span>123 Business Street, New York, NY 10001</span>
            </li>
            <li>
              <FaPhone className="footer-icon" />
              <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:contact@example.com" className="footer-link">contact@example.com</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">About</a></li>
            <li><a href="#" className="footer-link">Service</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
            <li><a href="#" className="footer-link">FAQ</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <ul>
            <li>
              <FaInstagram className="footer-icon1" />
              <a href="#" className="footer-link">Instagram</a>
            </li>
            <li>
              <FaFacebook className="footer-icon2" />
              <a href="#" className="footer-link">Facebook</a>
            </li>
            <li>
              <FaLinkedin className="footer-icon3" />
              <a href="#" className="footer-link">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Code with yourself. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
