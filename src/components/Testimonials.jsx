import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "This company transformed my house into a dream home! Their design and construction team is top-notch.",
      name: "John Doe",
      city: "Pune",
    },
    {
      quote: "Amazing work! The attention to detail is exceptional, and the process was seamless from start to finish.",
      name: "Sarah Smith",
      city: "Noida",
    },
    {
      quote: "The team was professional and attentive throughout. Our project was completed on time and within budget.",
      name: "Rahul Kapoor",
      city: "Bangalore",
    },
    {
      quote: "Highly recommend! The service was excellent, and our vision was brought to life.",
      name: "Anjali Sharma",
      city: "Mumbai",
    },
    {
      quote: "Very happy with the results. The quality and design exceeded expectations.",
      name: "Ravi Kumar",
      city: "Chennai",
    },
    {
      quote: "A truly wonderful experience. The team understood our needs and delivered perfectly.",
      name: "Priya Verma",
      city: "Delhi",
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Customer Testimonials</h2>
      <div style={scrollingWrapperStyle}>
        <div style={scrollingContentStyle}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={testimonialCardStyle}>
              <blockquote style={blockquoteStyle}>
                &#8220;{testimonial.quote}&#8221;
              </blockquote>
              <p style={authorStyle}>
                <strong>{testimonial.name}</strong>, {testimonial.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: '0.1px 20px',
  backgroundColor: '#f0f4f8',
  textAlign: 'center',
  fontFamily: 'Poppins, sans-serif',
  color: 'black',
};

const headingStyle = {
  color: '#4B5563',
  fontSize: '3em',
  fontWeight: '700',
  marginBottom: '60px',
  
};

const scrollingWrapperStyle = {
  overflow: 'hidden',
  width: '100vw',
  position: 'relative',
};

const scrollingContentStyle = {
  display: 'flex',
  animation: 'scroll 30s linear infinite',
  width: '200vw',
};

const testimonialCardStyle = {
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '15px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  cursor: 'pointer',
  position: 'relative',
  marginRight: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: '80px'
};

const blockquoteStyle = {
  fontSize: '1.2em',
  fontStyle: 'italic',
  color: '#333',
  marginBottom: '20px',
};

const authorStyle = {
  color: '#2563eb',
  fontSize: '1em',
  marginTop: '10px', // Added margin to separate the name from the quote
};

// Add CSS for animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes scroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`,
  styleSheet.cssRules.length
);

export default Testimonials;
