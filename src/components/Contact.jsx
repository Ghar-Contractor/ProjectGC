import React from 'react';
import './Contact.css';
import Header from '../assets/images/headingbg.jpg'
import Call from '../assets/images/callicon.png'
import Loc from "../assets/images/loactionicon.png"
import Mail from "../assets/images/mailicon.png"

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Contact Page Header Section */}
      <div className="contact-header">
        <img src={Header}/>
        <div className="img-text">CONTACT US</div>
      </div>

      {/* Contact Page Section */}
      <div className="card-parent">
     
        <div className="left-col">
          <div className='left-text'>
          <div className="contact-info">
      <div className="contact-item">
        <div className="icon">
          <img src={Loc}/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="contact-item">
        <div className="icon">
          <img src={Mail}/>
        </div>
        <p>info@gharcontractor.com</p>
      </div>
      <div className="contact-item">
        <div className="icon">
          <img src={Call}/>
        </div>
        <p>
          +91 123 456 789 <br /> +91 123 456 789
        </p>
      </div>
      </div>
    </div>
        </div>

        <div className="contact-card1">
          <h2>Book Your Appointment</h2>
          <button className="card-btn">Contact our Team</button>
        </div>

        <div className="contact-card2">
          <h2>Contact Interior Designing Team</h2>
          <button className="card-btn">Contact Here</button>
        </div>
      </div>
      

      {/* Google Maps Section */}
      <div className="map">
      <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.894435706666!2d73.78873047496211!3d18.488440282598884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb088b75f8f%3A0x499414447665729d!2sRMD%20SINHGAD%20TECHNICAL%20INSTITUTE%20CAMPUS!5e0!3m2!1sen!2sin!4v1737655730393!5m2!1sen!2sin"
title="Google Maps Embed"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
      </div>
    </div>
    
  );
};

export default Contact;
