import React from "react";
import "./Contact.css";

const Contact  = () => {
  return (
    <div className="page">
      <div className="page-container">
        <div className="form-content">
          {/* <div className="page-content">Get in Touch</div> */}
          <div className="form-container">
            <h2 className="form-header">What can we help you with?</h2>
            <select className="form-select">
              <option>----------Select An Option --------------</option>
              <option>Enquire for a property</option>
              <option>Contact with Our Interior Designing Team</option>
              <option>Others</option>
            </select>

            <h3 className="form-subheader">Contact details</h3>
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your number" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>

              <div className="form-group">
                <label>Location</label>
                <select required>
                  <option>Select Location</option>
                  <option>Pune</option>
                  <option>Noida</option>
                  <option>Bangalore</option>
                </select>
                <label>Message</label>
                <textarea placeholder="Type your message"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
