import React, { useState } from "react";
import "./Contact.css";
import Headimg from "../assets/images/headingbg.jpg";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="page">
      {/* Header Section */}
      <div className="form-content">
        <div className="page-container">
          <div style={{ position: "relative", width: "100%", height: "250px" }}>
            <img
              src={Headimg}
              height={"250px"}
              width={"100%"}
              alt="Heading img"
              style={{
                objectFit: "cover",
                margin: 0,
                padding: 0,
                boxShadow: "4px 4px 8px rgba(0,0,0,0.8)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "60px",
                fontWeight: "bold",
                fontFamily: "Source Sans Pro",
                textShadow: "2px 2px 4px rgba(7, 7, 7, 0.8)",
              }}
            >
              CONTACT US
            </div>
          </div>
        </div>
      </div>

      <div className="parent-card" >
     
  <div
    className="contact-card"
    style={{
      width: "300px",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "8px",
      textAlign: "center",
    }}
  >
    <img
      src="src/assets/images/contacticon.jpg"
      alt="Contact Icon"
      className="contact-icon"
      style={{ marginBottom: "10px" }}
    />
    <h2>Contact Our  Team</h2>
    <p>

</p>    <button
      className="btn"
      onClick={openModal}
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Contact Now
    </button>
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

      {/* Google Map */}
      <div className="google-map">
      <iframe
    src="https://www.google.com/maps/d/embed?mid=1XNabNR3aU5-T_enGko_YcRHfR4uTNns&ehbc=2E312F"
    width="100%"  /* Ensure iframe takes 100% of the width */
    height="100%"  /* Set iframe height to 100% */
    style={{ border: 'none' }}
    title="Google Map"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
      </div>
    </div>
  );
};

export default Contact;
