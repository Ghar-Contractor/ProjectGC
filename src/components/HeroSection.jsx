import React, { useState, useEffect } from "react";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredContact, setHoveredContact] = useState(false);
  const [hoveredQuote, setHoveredQuote] = useState(false);

  const images = [
    "https://cdnassets.hw.net/8b/16/ad10b7644b379890958adca8b519/construction.jpg", // Crane & Building
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?w=1600", // Under Construction Site
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e78caf13864951.5627958ac9beb.jpg",
    "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?w=1600", // Workers on Site
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={heroSectionStyle}>
      {/* Background Image */}
      <div style={{ ...sliderContainerStyle, backgroundImage: `url(${images[currentIndex]})` }}></div>

      {/* Content */}
      <h1 style={heroHeadingStyle}>Transforming Spaces, Building Dreams.</h1>
      <p style={heroTextStyle}>
        Let us bring your vision to life with our expert design and construction services.
      </p>

      {/* Buttons */}
      <div style={buttonGroupStyle}>
        <button
          style={{
            ...contactButtonStyle,
            background: hoveredContact
              ? "linear-gradient(90deg, #00A8FF, #0077B5)"
              : "linear-gradient(90deg, #00A8FF, #0052CC)",
            transform: hoveredContact ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredContact(true)}
          onMouseLeave={() => setHoveredContact(false)}
        >
          Contact Us
        </button>
        <button
          style={{
            ...quoteButtonStyle,
            background: hoveredQuote
              ? "linear-gradient(90deg, #FF416C, #FF3A3A)"
              : "linear-gradient(90deg, #FF416C, #FF4B2B)",
            transform: hoveredQuote ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredQuote(true)}
          onMouseLeave={() => setHoveredQuote(false)}
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
}

// Hero Section Styles
const heroSectionStyle = {
  height: "100vh",
  color: "white",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  fontFamily: "Arial, sans-serif",
  overflow: "hidden",
};

const sliderContainerStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: -1,
  transition: "background-image 1s ease-in-out",
};

const heroHeadingStyle = {
  fontSize: "4em",
  fontWeight: "bold",
  marginBottom: "20px",
  textShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
  animation: "fadeIn 2s ease-out",
  color: "black",
};

const heroTextStyle = {
  fontSize: "1.5em",
  marginBottom: "40px",
  fontWeight: "300",
  opacity: "0.8",
  animation: "fadeIn 2s ease-out",
  color: "#333333",
};

// Button Group Style
const buttonGroupStyle = {
  display: "flex",
  gap: "15px",
};

// Contact Button Styles
const contactButtonStyle = {
  background: "linear-gradient(90deg, #00A8FF, #0052CC)",
  color: "white",
  padding: "15px 30px",
  borderRadius: "30px",
  fontSize: "1.2em",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0px 4px 15px rgba(0, 168, 255, 0.3)",
  transition: "all 0.3s ease-in-out",
  transformOrigin: "center",
};

// Get a Quote Button Styles
const quoteButtonStyle = {
  background: "linear-gradient(90deg, #FF416C, #FF4B2B)",
  color: "white",
  padding: "15px 30px",
  borderRadius: "30px",
  fontSize: "1.2em",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0px 4px 15px rgba(255, 75, 43, 0.3)",
  transition: "all 0.3s ease-in-out",
  transformOrigin: "center",
};

export default HeroSection;
