import React from "react";
import "./FeaturedProjects.css";
// Import images from assets
import InteriorDesign from "../assets/id1.jpg";
import ConstructionProjects from "../assets/cons.jpg";
import CommercialComplex from "../assets/commercialcomplex.jpeg";
import CorporateOffice from "../assets/corporateoffice.jpeg";
import IndustrialWarehouse from "../assets/industrialwarehouse.jpeg";
import LuxaryVilla from "../assets/luxaryvilla.jpeg";
import ResidentialApartment from "../assets/residentailapart.jpeg";
import ShoppingMall from "../assets/shoppingmall.jpeg";
import Client1 from '../assets/client1.jpeg'; 
import Client2 from '../assets/client2.jpeg'; 
import Client3 from '../assets/client3.jpeg'; 

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Interior Design Projects",
      description: "High-quality images and descriptions of completed interior design projects.",
      image: InteriorDesign,
    },
    {
      title: "Construction Projects",
      description: "Explore our construction projects with top-notch quality and modern architecture.",
      image: ConstructionProjects,
    },
  ];

  const testimonials = [
    {
      quote: "GharContractor.com transformed our space into a masterpiece. Exceptional service!",
      name: "John Doe",
      project: "Residential Interior Design",
      image: Client1 ,
    },
    {
      quote: "Outstanding construction quality and timely delivery. Highly recommended!",
      name: "Jane Smith",
      project: "Commercial Construction",
      image: Client2,
    },
    {
      quote: "Exceptional service and attention to detail. Our Bangalore office space was completed on time and beyond expectations.",
      name: "Rishabh Roy",
      project: "Office Renovation – Bangalore",
      image: Client3,
    },
  ];

  const completedProjects = [
    {
      title: "Commercial Complex - Pune",
      description: "A state-of-the-art commercial complex built with modern design and sustainable materials.",
      image: CommercialComplex,
      completed: "Dec 2024",
    },
    {
      title: "Luxury Villa - Noida",
      description: "Elegant villa with a spacious layout and premium interiors.",
      image: LuxaryVilla,
      completed: "Oct 2024",
    },
    {
      title: "Residential Apartments - Bangalore",
      description: "Modern residential complex with green spaces and smart amenities.",
      image: ResidentialApartment,
      completed: "Aug 2024",
    },
    {
      title: "Industrial Warehouse - Pune",
      description: "High-capacity warehouse designed for seamless logistics operations.",
      image: IndustrialWarehouse,  
      completed: "July 2024",
    },
    {
      title: "Corporate Office - Noida",
      description: "Modern office space with innovative design for enhanced productivity.",
      image: CorporateOffice,
      completed: "May 2024",
    },
    {
      title: "Shopping Mall - Bangalore",
      description: "A premium shopping mall with world-class amenities and architecture.",
      image: ShoppingMall,
      completed: "March 2024",
    },
  ];

  return (
    <div className="featured-projects-container">
      <h1 className="title">Featured Projects</h1>

      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>

      <h2 className="subtitle">Completed Projects</h2>

      <div className="completed-projects">
        {completedProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <small className="text-muted">Completed: {project.completed}</small>
          </div>
        ))}
      </div>

      <h2 className="subtitle">Client Testimonials</h2>

      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
            <p className="testimonial-project">{testimonial.project}</p>
          </div>
        ))}
      </div>
    </div>
  );
}