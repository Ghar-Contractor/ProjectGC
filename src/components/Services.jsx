import React from 'react';
import Card from './Card';

export default function ServicesPage() {
  return (

    


    <div className="services-page">
      <h2>Our Services</h2>
      <h3>Interior designs</h3>

      <div className="cards-container">
         <Card title="Residential Interior Design" 
         image="image.webp"
          description="Creating personalized, functional, and stylish living spaces. We focus on space planning, furniture selection, color schemes, lighting, and personalized touches to transform your home." />
        

        
         <Card title="Commercial Interior Design" 
         image="image 2.webp"
          description="Commercial Interior Design involves creating functional and stylish spaces for businesses, focusing on efficient layouts, brand integration, and enhancing the user experience. It covers space planning, furniture selection, color schemes, lighting, and sustainability to reflect the company's identity and promote productivity." />


         <Card title="Custom Designs" 
         image="image3.webp"
          description="Custom Designs are personalized solutions tailored to meet unique client needs and preferences, focusing on creating distinctive and functional elements that reflect individual tastes." />



      </div>

      <div className="service-details">
        <h3>Details</h3>
        <p>Our services come with detailed descriptions and showcase the tools, technologies, and methods we use to ensure the highest quality.</p>
        <ul>
          <li>
            <img src="path/to/description-placeholder.png" alt="Description" className="detail-image" />
            Descriptions of each service.
          </li>
          <li>
            <img src="path/to/tools-placeholder.png" alt="Tools and Technologies" className="detail-image" />
            Showcase tools, technologies, and methods used.
          </li>
        </ul>
      </div>
    </div>
  );
}
