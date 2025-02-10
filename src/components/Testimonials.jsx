import React, { useState, useEffect } from "react";
import "./Testimonials.css"; // Ensure the correct CSS file is linked

const testimonials = [
  {
    id: 1,
    text: "This company transformed my house into a dream home! Their design and construction team is top-notch.",
    name: "Williamson",
    city: "Pune",
    img: "/OIP.jpg",
    color: "#FFD700",
  },
  {
    id: 2,
    text: "Highly recommend! The service was excellent, and our vision was brought to life.",
    name: "Ravi Kumar",
    city: "Mumbai",
    img: "/OIP (2).jpg",
    color: "#FF69B4",
  },
  {
    id: 3,
    text: "Amazing work! The attention to detail is exceptional, and the process was seamless from start to finish.",
    name: "Sarah Smith",
    city: "Noida",
    img: "/OIP (1).jpg",
    color: "#87CEEB",
  },
  {
    id: 4,
    text: "The team was professional and attentive throughout. Our project was completed on time and within budget.",
    name: "Rahul Kapoor",
    city: "Bangalore",
    img: "/OIP (2).jpg",
    color: "#A9A9A9",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className="testimonials-heading">Customer Testimonials</h2>
      <div className="testimonial-container">
        <div
          className="testimonial"
          style={{ backgroundColor: testimonials[index].color }}
        >
          <div className="pic">
            <img src={testimonials[index].img} alt={testimonials[index].name} />
          </div>
          <div className="testimonial-content">
            <span className="icon">❝</span>
            <p className="description">{testimonials[index].text}</p>
            <h3 className="title">{testimonials[index].name}</h3>
            <span className="post">{testimonials[index].city}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
