import React, { useState } from 'react';

function Services() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);

  const services = [
    { title: 'Interior Design', description: 'Transforming spaces with innovative and personalized designs.', image: 'public/images/sevice1.jpg' },
    { title: 'Construction', description: 'Building durable and sustainable structures with precision.', image: 'public/images/construction.jpg' },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Our Premium Services</h2>
      <div style={cardsContainerStyle}>
        {services.map((service, index) => (
          <div
            key={index}
            style={getCardStyle(index)}
            onMouseEnter={() => setHoveredCardIndex(index)}
            onMouseLeave={() => setHoveredCardIndex(null)}
          >
            <img src={service.image} alt={service.title} style={imageStyle} />
            <h3 style={serviceTitleStyle}>{service.title}</h3>
            <p style={serviceDescriptionStyle}>{service.description}</p>
            <button
              style={getLearnMoreButtonStyle(index)}
              onMouseEnter={() => setHoveredButtonIndex(index)}
              onMouseLeave={() => setHoveredButtonIndex(null)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  // New Card Styles with Sliding Effect and Hover Animations
  function getCardStyle(index) {
    return {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: hoveredCardIndex === index ? '0 15px 30px rgba(0, 0, 0, 0.25)' : '0 8px 24px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease',
      cursor: 'pointer',
      transform: hoveredCardIndex === index ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
      opacity: hoveredCardIndex === index ? 1 : 0.9,
      animation: 'slideIn 1s ease-out',
    };
  }

  // Learn More button styles with hover effects
  function getLearnMoreButtonStyle(index) {
    return {
      backgroundColor: hoveredButtonIndex === index ? '#1e40af' : '#2563eb',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      transform: hoveredButtonIndex === index ? 'scale(1.1)' : 'scale(1)',
    };
  }
}

const sectionStyle = {
  padding: '5px 180px 15px 180px',
  backgroundColor: '#f0f4f8',
  textAlign: 'center',
  animation: 'fadeIn 2s ease-out',
};

const headingStyle = {
  fontSize: '3.2em',
  fontWeight: '700',
  color: '#4B5563',
  marginBottom: '40px',
  
};

const cardsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  justifyContent: 'center',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '20px',
};

const serviceTitleStyle = {
  color: '#1e3a8a',
  fontWeight: '600',
};

const serviceDescriptionStyle = {
  color: '#555',
};

// Keyframe for fade-in animation
const fadeInAnimation = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// New Keyframe for sliding card effect
const slideInAnimation = `
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Services;
