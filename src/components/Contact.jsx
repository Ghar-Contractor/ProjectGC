import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="contact-page">
    <h1>Contact</h1>
      <div className="contact-options">
        <div className="contact-card">
          <img
            src=""
            alt="Sales Icon"
            className="icon"
          />
          <h2>Talk to our Sales team</h2>
          <p>We are here to help you find the right products to build your dream house.</p>
          <button className="btn" onClick={openModal}>
            Contact Sales
          </button>
        </div>
        <div className="contact-card">
          <img
            src="https://via.placeholder.com/100"
            alt="Vendor Icon"
            className="icon"
          />
          <h2>Register as a Vendor</h2>
          <p>Becoming a vendor with us will lead your business to the next level of sales.</p>
          <button className="btn" onClick={openModal}>
            Register Now
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
    </div>
  );
};

export default ContactUs;
