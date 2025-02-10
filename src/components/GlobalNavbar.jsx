import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #F8F8F8;
            //position: sticky;
            position: fixed;
            width:98%;
            top: 0;
            z-index: 1000;
            height: 50px;
          }
          .navbar .logo a {
            color: red;
            text-decoration: none;
            font-size: 24px;
            font-weight: bold;
          }
          .navbar .logo .img {
            height: 70px;
            width: 100px;
          }
          .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
          }
          .hamburger span {
            height: 3px;
            width: 25px;
            background-color: gray;
            margin: 4px;
            transition: background-color 0.3s ease;
          }
          .hamburger:hover span {
            background-color: #ff6f61;
          }
          .nav-links {
            list-style: none;
            display: flex;
            gap: 20px;
          }
          .nav-links li a {
            color: gray;
            text-decoration: none;
            font-size: 18px;
            transition: color 0.3s ease;
          }
          .nav-links li a:hover {
            color: #ff6f61;
          }
          @media (max-width: 768px) {
            .nav-links {
              display: ${menuOpen ? 'block' : 'none'};
              position: absolute;
              top: 50px;
              right: 0;
              background-color: #F8F8F8;
              width: 100%;
              text-align: center;
            }
            .nav-links li {
              margin: 10px 0;
            }
            .hamburger {
              display: flex;
            }
          }
        `}
      </style>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img className="img" src="/GharContractorLogo.jpg" alt="MyWebsite Logo" />
          </Link>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
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
