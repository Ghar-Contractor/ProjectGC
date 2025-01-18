import React from 'react';

function Services() {
  const services = [
    { title: 'Interior Design', description: 'Transforming spaces with innovative and personalized designs.', image: 'src/assets/images/sevice1.jpg' },
    { title: 'Construction', description: 'Building durable and sustainable structures with precision.', image: 'src/assets/images/construction.jpg' },
     ];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Our Premium Services</h2>
      <div style={cardsContainerStyle}>
        {services.map((service, index) => (
          <div key={index} style={cardStyle}>
            <img src={service.image} alt={service.title} style={imageStyle} />
            <h3 style={serviceTitleStyle}>{service.title}</h3>
            <p style={serviceDescriptionStyle}>{service.description}</p>
            <button style={learnMoreButtonStyle}>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: '50px 20px',
  backgroundColor: '#f0f4f8',
  textAlign: 'center',
  animation: 'fadeIn 2s ease-out',
};

const headingStyle = {
  fontSize: '3.2em',
  fontWeight: '700',
  color: '#1e3a8a',
  marginBottom: '40px',
};

const cardsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  justifyContent: 'center',
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '25px',
  borderRadius: '12px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  animation: 'fadeIn 2s ease-out',
};

cardStyle.onMouseEnter = (e) => {
  e.target.style.transform = 'scale(1.05)';
  e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
};

cardStyle.onMouseLeave = (e) => {
  e.target.style.transform = 'scale(1)';
  e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
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

const learnMoreButtonStyle = {
  backgroundColor: '#2563eb',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'background-color 0.3s',
};

learnMoreButtonStyle.onMouseEnter = (e) => {
  e.target.style.backgroundColor = '#1e40af';
};

learnMoreButtonStyle.onMouseOut = (e) => {
  e.target.style.backgroundColor = '#2563eb';
};

export default Services;
