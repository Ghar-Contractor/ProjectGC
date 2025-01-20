import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (

    
    <div className="contact-page">
   
      <div className="heading">Contact Us</div>
      <div className="contact-options">
        <div className="contact-card">
          <img
            src="src/assets/images/salesicon.jpeg"
            alt="Sales Icon"
            className="icon"
            
          />
          <h2>Book Your Appointment</h2>

          <button className="btn" onClick={openModal}>
            Contact Sales Team
          </button>
        </div>
        <div className="contact-card">
          <img
            src="src/assets/images/teamicon.jpeg"
            alt="Vendor Icon"
            className="icon"
          />
          <h2>Interior Designing Team</h2>
          
          <button className="btn" onClick={openModal}>
            Contact Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>Connect with us</h2>
            <form className="contact-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email ID" required />
              <input type="tel" placeholder="Phone number" required />
                
                <div className='input-box'>
              <label for="location">Choose Location:</label>

            <select id="location-select">
             <option >--Location --</option>
             <option value="Noida">Noida</option>  
              <option value="Pune">Pune</option>
           <option value="Bangalore">Bangalore</option>
</select>
</div>
<div className="input-box">
          <label>Your Message</label>
          <textarea name="" id="" placeholder="Enter your message" required></textarea>
        </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
     
     <div className='google-maps'>
      {/* Google Map div placed below the modal */}
      <div className="google-maps1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224357.2891784778!2d77.40182500000002!3d28.522202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1737138237272!5m2!1sen!2sin" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="google-maps1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224357.2891784778!2d77.40182500000002!3d28.522202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1737138237272!5m2!1sen!2sin" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="google-maps1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224357.2891784778!2d77.40182500000002!3d28.522202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1737138237272!5m2!1sen!2sin" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
