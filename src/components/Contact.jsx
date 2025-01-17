import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="contact-page">
      <div className="heading">Contact</div>
      <div className="contact-options">
        <div className="contact-card">
          <img
            src=""
            alt="Sales Icon"
            className="icon"
          />
          <h2>Book Your Appointment</h2>
          <p>We are here to help you find the right products to build your dream house.</p>
          <button className="btn" onClick={openModal}>
            Contact Sales Team
          </button>
        </div>
        <div className="contact-card">
          <img
            src="https://via.placeholder.com/100"
            alt="Vendor Icon"
            className="icon"
          />
          <h2>Contact Our Interior Designing Team</h2>
          <p>Becoming a vendor with us will lead your business to the next level of sales.</p>
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
              <textarea placeholder="Message" rows="4" required></textarea>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Google Map div placed below the modal */}
      <div className="google-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224357.2891784778!2d77.40182500000002!3d28.522202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1737138237272!5m2!1sen!2sin" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
