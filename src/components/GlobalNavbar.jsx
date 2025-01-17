import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <style>
        {`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: black; /* Black background */
          position: sticky;
          top: 0;
          z-index: 1000; 
        }

        .navbar .logo a {
          color: white; /* White font color for logo */
          text-decoration: none;
          font-size: 24px;
          font-weight: bold;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .nav-links li a {
          color: white; /* White font color for links */
          text-decoration: none;
          font-size: 18px;
          transition: color 0.3s ease;
        }

        .nav-links li a:hover {
          color: #ff6f61; /* Light orange on hover */
        }
        `}
      </style>

      <nav className="navbar">
        <div className="logo">
          <Link to="/">MyWebsite</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      </nav>
    </div>
  );
}
