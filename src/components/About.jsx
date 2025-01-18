import React from 'react'
import './About.css';
import mission1 from '../assets/missionimg.png'
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
export default function About() {
  return (
    <div className="page-wrapper">
      <div className="main-content">
        <div>
          <h1 className="typo">About Us</h1>
          <h2 className='tageline1'>From Vision to Reality: A Journey of Excellence</h2>
          <p className="subtitle">
            We are a team of passionate individuals dedicated to delivering exceptional solutions and driving innovation in our industry.
          </p>
        </div>

        <div>
          <div className="mission">
            <div className="mission-content">
              <h2 className="section-title">Our Mission</h2>
              <h3 className='tageline2'>Crafting Spaces, Inspiring Lifestyles</h3>
              <p>
                To empower businesses with cutting-edge solutions that drive growth, efficiency, and success in the digital age.
              </p>
              <p>
                We strive to be at the forefront of technological advancements, constantly innovating to meet the evolving needs of our clients.
              </p>
            </div>
            <div className="mission-image">
              <img src={mission1} alt="Our Mission" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="section-title">Our Values</h2>
          <h3 className='tageline3'>Quality Craftsmanship, Uncompromising Standards.</h3>
          <div className="values">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries and embracing new technologies.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Upholding the highest standards of honesty and ethical conduct.</p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>Fostering teamwork and partnerships for mutual success.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="section-title">Our Team</h2>
          <h3 className='tageline4'>Passionate Professionals, Exceptional Results.</h3>
          <div className="team">
            <div className="team-member">
              <img src={person1} alt="Team Member 1" />
              <h3>Aarya Falle</h3>
              <p>Position</p>
            </div>
            <div className="team-member">
              <img src={person2} alt="Team Member 2" />
              <h3>Akash Mishra</h3>
              <p>Position</p>
            </div>
            <div className="team-member">
              <img src={person1} alt="Team Member 3" />
              <h3>Kishan Tiwari</h3>
              <p>Position</p>
            </div>
            <div className="team-member">
              <img src={person2} alt="Team Member 4" />
              <h3>Akash Mishra</h3>
              <p>Position</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Join us on this exciting journey of growth and innovation.</p>
          <a href="#" className="cta-button">Contact Us</a>
        </div>
      </div>

      <div className="footer" style={{backgroundColor: '#1e40af'}}>
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We are committed to delivering excellence and driving innovation in everything we do.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>123 Business Street, City, Country</p>
            <p>contact@example.com</p>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </div>

  );
}