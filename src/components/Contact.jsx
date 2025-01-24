import React from 'react';
import  { useState } from 'react';
import './Contact.css';
import Header from '../assets/images/headingbg.jpg'
import Call from '../assets/images/callicon.png'
import Loc from "../assets/images/loactionicon.png"
import Mail from "../assets/images/mailicon.png"
import Meet from "../assets/images/meeticon.png"
import Interiorteam from "../assets/images/interiorteam.png"

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


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
        
          <img src={Meet} alt="Meeting Icon" className="circle-img" />
          <h2>Book Your Appointment</h2>
          <button className="btn"
      onClick={openModal}
    >Click Here</button>
        </div>

        <div className="contact-card2">
        <img src={Interiorteam} alt="Interior Team Icon" className="circle-img" />
          <h2>Contact Interior Designing Team</h2>
          <button className="btn"
      onClick={openModal}
    >Click Here</button>
        </div>
      </div>
      
            {/* Modal */}
            {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-modal-btn" onClick={closeModal}>
              ×
            </button>
            
            <form className="contact-form">
            <h2 className="form-header">What can we help you with?</h2>
            <select className="form-select" defaultValue="">
              <option value="" disabled>
                ---------- Select An Option --------------
              </option>
              <option>Enquire for a property</option>
              <option>Contact with Our Interior Designing Team</option>
              <option>Others</option>
            </select>
            <h3 className="form-subheader">Contact details</h3>
              {/* Form Fields */}
              <div className="form-group">
               
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your number" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Location</label>
                <select required defaultValue="">
                  <option value="" disabled>
                    Select Location
                  </option>
                  <option>Pune</option>
                  <option>Noida</option>
                  <option>Bangalore</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Type your message"></textarea>
              </div>
              {/* Submit Button */}
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}



      {/* Google Maps Section */}
      <div className="map">
        <div className='map-text'>
          <div className='map-heading'>
            <b>View Our Office Locations</b><br/></div>

Explore the locations of our three offices on the interactive map below. 
Click on the markers to get detailed information, including directions, contact details, and more about each office. 
</div>
      <iframe
  src="https://www.google.com/maps/d/embed?mid=1XNabNR3aU5-T_enGko_YcRHfR4uTNns&ehbc=2E312F"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen="false">
</iframe>
      </div>
    </div>
    
  );
};

export default Contact;
