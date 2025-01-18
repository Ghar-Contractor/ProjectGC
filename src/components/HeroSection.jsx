import React, { useState, useEffect } from 'react';

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'src/assets/images/build2.jpg',
    'src/assets/images/buid3.jpg',
    'src/assets/images/build3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div>
      

      {/* Hero Section */}
      <header style={heroSectionStyle}>
        <div style={sliderContainerStyle}>
          <img src={images[currentIndex]} alt="Slide" style={imageStyle} />
        </div>
        <h1 style={heroHeadingStyle}>Transforming Spaces, Building Dreams.</h1>
        <p style={heroTextStyle}>Let us bring your vision to life with our expert design and construction services.</p>
        <div style={buttonGroupStyle}>
          <button style={contactButtonStyle}>Contact Us</button>
          <button style={quoteButtonStyle}>Get a Quote</button>
        </div>
      </header>
    </div>
  );
}



// Hero Section Styles
const heroSectionStyle = {
  height: '100vh',
  color: 'white',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  fontFamily: 'Arial, sans-serif',
};

const sliderContainerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
};

const imageStyle = {
  width: '100%',
  height: '100vh',
  objectFit: 'cover',
};

const heroHeadingStyle = {
  fontSize: '4em',
  fontWeight: 'bold',
  marginBottom: '20px',
  textShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
  animation: 'fadeIn 2s ease-out',
};

const heroTextStyle = {
  fontSize: '1.5em',
  marginBottom: '40px',
  fontWeight: '300',
  opacity: '0.8',
  animation: 'fadeIn 2s ease-out',
};

// Button Group Style
const buttonGroupStyle = {
  display: 'flex',
  gap: '15px', // Spacing between buttons
};

// Contact Button Styles
const contactButtonStyle = {
  background: 'linear-gradient(90deg, #00A8FF, #0052CC)', // Gradient background
  color: 'white',
  padding: '15px 30px',
  borderRadius: '30px', // Fully rounded corners
  fontSize: '1.2em',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0px 4px 15px rgba(0, 168, 255, 0.3)', // Soft shadow for depth
  transition: 'all 0.3s ease-in-out',
};

contactButtonStyle.onMouseOver = (e) => {
  e.target.style.background = 'linear-gradient(90deg, #0052CC, #00A8FF)'; // Reverse gradient on hover
  e.target.style.transform = 'scale(1.1)'; // Slight scale-up
  e.target.style.boxShadow = '0px 6px 20px rgba(0, 168, 255, 0.5)'; // Brighter shadow
};

contactButtonStyle.onMouseOut = (e) => {
  e.target.style.background = 'linear-gradient(90deg, #00A8FF, #0052CC)'; // Reset gradient
  e.target.style.transform = 'scale(1)';
  e.target.style.boxShadow = '0px 4px 15px rgba(0, 168, 255, 0.3)'; // Reset shadow
};

// Get a Quote Button Styles
const quoteButtonStyle = {
  background: 'linear-gradient(90deg, #FF416C, #FF4B2B)', // Distinctive gradient
  color: 'white',
  padding: '15px 30px',
  borderRadius: '30px',
  fontSize: '1.2em',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0px 4px 15px rgba(255, 75, 43, 0.3)', // Soft shadow
  transition: 'all 0.3s ease-in-out',
};

quoteButtonStyle.onMouseOver = (e) => {
  e.target.style.background = 'linear-gradient(90deg, #FF4B2B, #FF416C)'; // Reverse gradient on hover
  e.target.style.transform = 'scale(1.1)';
  e.target.style.boxShadow = '0px 6px 20px rgba(255, 75, 43, 0.5)'; // Brighter shadow
};

quoteButtonStyle.onMouseOut = (e) => {
  e.target.style.background = 'linear-gradient(90deg, #FF416C, #FF4B2B)'; // Reset gradient
  e.target.style.transform = 'scale(1)';
  e.target.style.boxShadow = '0px 4px 15px rgba(255, 75, 43, 0.3)'; // Reset shadow
};

export default HeroSection;
