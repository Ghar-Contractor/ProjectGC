import React, { useEffect } from 'react';

function Locations() {
  useEffect(() => {
    const tiltElements = document.querySelectorAll('.location-card');
    tiltElements.forEach((element) => {
      element.addEventListener('mousemove', (e) => {
        const { clientX: mouseX, clientY: mouseY } = e;
        const { left, top, width, height } = element.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = (mouseX - centerX) / width;
        const deltaY = (mouseY - centerY) / height;

        element.style.transform = `perspective(1000px) rotateY(${deltaX * 15}deg) rotateX(${deltaY * -15}deg)`;
      });

      element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      });
    });
  }, []);

  const locations = [
    {
      city: 'Pune',
      description: 'The heart of Maharashtra, offering the best in design and construction.',
      image: 'src/assets/images/pune.jpg',
      population: '3.1 million',
      established: '1950',
      constructionInfo: 'Pune has a booming real estate sector, with a focus on both residential and commercial projects. Many high-rise buildings and IT parks are being developed.',
    },
    {
      city: 'Noida',
      description: 'A bustling city in the NCR with limitless opportunities for modern designs.',
      image: 'src/assets/images/noida.jpg',
      population: '1.2 million',
      established: '1997',
      constructionInfo: 'Noida is witnessing rapid growth in residential complexes, tech parks, and infrastructure projects, making it a key hub for construction and real estate investment.',
    },
    {
      city: 'Bangalore',
      description: 'The tech capital of India, with a growing demand for innovative spaces.',
      image: 'src/assets/images/bangalore.jpg',
      population: '12.8 million',
      established: '1537',
      constructionInfo: 'Bangalore is a hotspot for commercial real estate, with a focus on tech parks and mixed-use developments. The city’s infrastructure is constantly evolving to meet the demands of its growing population.',
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Locations We Serve</h2>
      <div style={gridStyle}>
        {locations.map((location, index) => (
          <div key={index} className="location-card" style={cardStyle}>
            <img src={location.image} alt={location.city} style={imageStyle} />
            <h3 style={locationTitleStyle}>{location.city}</h3>
            <p style={locationDescriptionStyle}>{location.description}</p>
            <div style={additionalDataStyle}>
              <p><strong>Population:</strong> {location.population}</p>
              <p><strong>Established:</strong> {location.established}</p>
              <p><strong>Construction Focus:</strong> {location.constructionInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: '10px 3px',
  backgroundColor: '#f0f4f8',
  textAlign: 'center',
  fontFamily: 'Poppins, sans-serif',
  color: '#333', // Adjust text color for contrast
  margin: '0px 90px 0px 90px'
};

const headingStyle = {
  color: '#4B5563',
  fontSize: '3em',
  fontWeight: '700',
  marginBottom: '60px',
  animation: 'fadeIn 2s ease-out',

};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
  justifyItems: 'center',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '15px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  cursor: 'pointer',
  animation: 'fadeIn 2s ease-out',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '20px',
};

const locationTitleStyle = {
  color: '#2563eb',
  fontSize: '2em',
  marginBottom: '10px',
};

const locationDescriptionStyle = {
  fontSize: '1.2em',
};

const additionalDataStyle = {
  marginTop: '20px',
  fontSize: '1.1em',
  color: '#333',
};

export default Locations;
