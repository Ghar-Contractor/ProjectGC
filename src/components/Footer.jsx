import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
 // import "./css/Footer.css";//  Import the CSS file 
 const Footer = () =>
   { const currentYear = new Date().getFullYear(); 
    return (
       <footer className="footer-container">
         <div>
           <style>
             {` .footer-container
              { background-color: #71797E;
                color: #fff; 
                padding: 50px;
                height:400px;
                
                 font-family: Arial, 
                 sans-serif; width: 100%; /* Ensure full width */ 
                 box-sizing: border-box; /* Include padding in width calculation */ 
                 } 
                 /* Layout */ 
                 .footer-content 
                 { display: flex; 
                  justify-content: space-between; 
                  flex-wrap: wrap; /* Ensure responsiveness */ 
                  gap: 20px; 
                  } .footer-section 
                   { flex: 1; /* Make sections evenly spaced */ 
                    min-width: 200px; /* Prevent sections from shrinking too much */ 
                    }
                     /* Headings */ 
                     .footer-heading 
                     { font-size: 1.2rem; 
                      margin-bottom: 10px; 
                      font-weight: bold; 
                      } 
                      /* Links and Icons */ 
                      .footer-link 
                      { color: #0d1d32; 
                       text-decoration: none; 
                       display: inline-block; 
                       margin: 5px 0; 
                       } 
                       .footer-link:hover 
                       { color:#fff; 
                        text-decoration: underline; 
                        } 
                        .footer-icon1 
                        { margin-right: 10px; 
                         color: #f02aa4; } 
                         .footer-icon2 
                         { margin-right: 10px; 
                          color: #1815df; } 
                          .footer-icon3 
                          { margin-right: 10px; 
                           color: #5de1eb; 
                           } 
                           /* Bottom Section */ 
                           .footer-bottom 
                           { text-align: center; 
                            margin-top: 20px; 
                            border-top: 1px solid #555; 
                            padding-top: 10px; 
                            font-size: 0.9rem; 
                            } 
                            /* Responsive */
                             @media(max-width: 767px) 
                             { .footer-section 
                              { flex: 1 1 100%; /* Take full width on smaller screens */
                                }
                               }
                                 `} 
                                 </style>
                                  </div>
                                   <div className="footer-content"> 
                                    <div className="footer-section"> 
                                      {/* About */} 
                                      <h4 className="footer-heading">About Us</h4> 
                                      <p>We are committed to delivering excellence and driving innovation in everything we do.</p> 
                                      </div> {/* Contact Details */} <div className="footer-section"> 
                                        <h4 className="footer-heading">Contact Details</h4> 
                                        <ul> 
                                          <li> <FaMapMarkerAlt className="footer-icon" />
                                           <span>123 Business Street, New York, NY 10001</span> 
                                           </li> <li> <FaPhone className="footer-icon" /> 
                                           <a href="tel:+1234567890" className="footer-link"> 
                                            +1 (234) 567-890 </a> </li> <li> <FaEnvelope className="footer-icon" />
                                             <a href="mailto:contact@example.com" className="footer-link"> contact@example.com </a> 
                                             </li> </ul> </div> {/* Quick Links */} 
                                             <div className="footer-section "> 
                                              <h4 className="footer-heading">Quick Links</h4> 
                                              <ul> <li><a href="#" className="footer-link">Home</a></li> 
                                              <li><a href="#" className="footer-link">About</a></li> 
                                              <li><a href="#" className="footer-link">Service</a></li> 
                                              {/* <li><a href="#" className="footer-link">Projects</a></li> */} 
                                              {/* <li><a href="#" className="footer-link">Blog</a></li> */} 
                                              <li><a href="#" className="footer-link">Contact</a></li> 
                                              <li><a href="#" className="footer-link">FAQ</a></li> 
                                              </ul> 
                                              </div> 
                                              {/* Follow Us */} 
                                              <div className="footer-section"> 
                                                <h4 className="footer-heading">Follow Us</h4> 
                                                <ul> 
                                                  <li> <FaInstagram className="footer-icon1" /> 
                                                  <a href="#" className="footer-link">Instagram</a>
                                                   </li> <li> <FaFacebook className="footer-icon2" /> 
                                                   <a href="#" className="footer-link">Facebook</a> 
                                                   </li> <li> <FaLinkedin className="footer-icon3" /> 
                                                   <a href="#" className="footer-link">LinkedIn</a> 
                                                   </li> 
                                                   </ul> 
                                                   </div> 
                                                   </div> 
                                                   <div className="footer-bottom"> 
                                                    <p>&copy; {currentYear} Code with yourself. All Rights Reserved.</p> 
                                                    </div> 
                                                    </footer> 
                                                    ); 
                                                  }; 
                                                  export default Footer;