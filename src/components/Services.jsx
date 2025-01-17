import React from 'react';
import Card from './Card';

export default function ServicesPage() {
  return (

    


    <div className="services-page">
      <h1>Our Services</h1>
      <h2>Interior designs</h2>

      <div className="cards-container">
         <Card title="Residential Interior Design" 
         image="image.webp"
          description="Creating personalized, functional, and stylish living spaces. We focus on space planning, furniture selection, color schemes, lighting, and personalized touches to transform your home." />
        

        
         <Card title="Commercial Interior Design" 
         image="image 2.webp"
          description="Commercial Interior Design involves creating functional and stylish spaces for businesses, focusing on efficient layouts, brand integration, and enhancing the user experience. It covers space planning, furniture selection, color schemes, lighting, and sustainability to reflect the company's identity and promote productivity." />


         <Card title="Custom Designs" 
         image="image3.webp"
          description="Discover custom interior designs tailored to your taste and lifestyle. From minimalist living rooms to cozy bedrooms, colorful kitchens to spa-like bathrooms, and elegant dining rooms to productive home offices, our designs transform your home into a personalized sanctuary." />

        <Card title="Custom Designs" 
        image="image4.webp"
        description="Transform your commercial space with our bespoke interior design solutions. From sleek office environments to inviting retail stores, functional restaurants to luxurious hospitality settings, our designs enhance functionality, aesthetics, and brand identity to create impactful and inspiring spaces" />




      </div>
      

      <section id="tools-and-technologies">
        <div className='cards-container'>
                <h2 className='tools-heading'>Tools and Technologies</h2>
                <Card
                    title="Design Software"
                    image="image5.webp"
                    description="We use advanced design software such as AutoCAD, SketchUp, and 3D Max to create detailed and accurate plans."
                />
                <Card
                    title="Sustainable Materials"
                    image="image6.webp"
                    description="We prioritize eco-friendly materials and practices to create sustainable and environmentally responsible designs."
                />
                <Card
                    title="Smart Technology Integration"
                    image="image7.webp"
                    description="We incorporate smart home technology to enhance convenience, security, and energy efficiency in residential spaces."
                />
                <Card
                    title="Project Management Tools"
                    image="image8.webp"
                    description="We use project management software to streamline communication, track progress, and ensure timely completion of projects."
                />
                </div>
            </section>
            <section id="methodology">
              <h2 className="methodology-heading">Our Methodology</h2>

                
              <div className="cards-container">
                <Card
                    title="Consultation"
                    description="We begin with an in-depth consultation to understand your vision, preferences, and requirements."
                />
                <Card
                    title="Concept Development"
                    description="Our designers create initial concepts and present them for your feedback and approval."
                />
                <Card
                    title="Design Development"
                    description="We refine the design based on your input, selecting materials, colors, and finishes."
                />
                <Card
                    title="Execution"
                    description="Our team oversees the implementation of the design, coordinating with contractors and suppliers to ensure quality and precision."
                />
                <Card
                    title="Final Touches"
                    description="We add the finishing touches to ensure every detail is perfect, from lighting to decor."
                />
                </div>
            </section>
    </div>
  );
}
