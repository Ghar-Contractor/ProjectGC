import React from 'react'
import './About.css';
import CountUp from 'react-countup';
import mission1 from '../assets/missionimg.png'
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import Header from '../assets/images/orgbg.jpg'



export default function About() {
  return (
    <div className="page-wrapper">
      <div className="main-content">
        <div>
         <div className="contact-header">
                 <div className="headerimg"><img src={Header}/></div>
                 <div className="img-text">ABOUT US</div>
               </div>
          <h2 className='tageline1'>From Vision to Reality: A Journey of Excellence</h2>
          <p className="subtitlex">
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
            <div className= "mission-image">
              <img src={mission1} alt="Our Mission" />
            </div>
          </div>
        </div>

        <div className="counter-section">
          <h2 className="section-title">Our Achievements</h2>
          <div className="counter-container">
            <div className="counter-box">
              <h3><CountUp end={150} duration={9} /></h3>
              <h5>Projects Completed</h5>
            </div>
            <div className="counter-box">
              <h3><CountUp end={25} duration={10} /></h3>
              <h5>Projects Under Construction</h5>
            </div>
            <div className="counter-box">
              <h3><CountUp end={500} duration={7} /></h3>
              <h5>Happy Customers</h5>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2 className="section-title" >Our Values</h2>
          <h3 className='tageline3'>Quality Craftsmanship, Uncompromising Standards.</h3>
          <div className="values">
            <div className="value-card">
              <h3 className="typo">Innovation</h3>
              <p>Constantly pushing boundaries and embracing new technologies.</p>
            </div>
            <div className="value-card">
              <h3 className="typo">Integrity</h3>
              <p>Upholding the highest standards of honesty and ethical conduct.</p>
            </div>
            <div className="value-card">
              <h3 className="typo">Collaboration</h3>
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
              <h3 className="typo">Aarya Falle</h3>
              <p>Position</p>
            </div>
            <div className="team-member">
              <img src={person2} alt="Team Member 2" />
              <h3 className="typo">Akash Mishra</h3>
              <p>Position</p>
            </div>
            <div className="team-member">
              <img src={person1} alt="Team Member 3" />
              <h3 className="typo">Kishan Tiwari</h3>
              <p>Position</p>
            </div>
            <div className="team-member">
              <img src={person2} alt="Team Member 4" />
              <h3 className="typo">Akash Mishra</h3>
              <p>Position</p>
            </div>
          </div>
        </div>

        <div className="cta">
        <div className="cta-section">
          <h2 className="typo">Ready to Get Started?</h2>
          <p >Join us on this exciting journey of growth and innovation.</p>
          <a href="#" className="cta-button">Contact Us</a>
        </div>
      </div>
      </div>
    </div>

  );
}