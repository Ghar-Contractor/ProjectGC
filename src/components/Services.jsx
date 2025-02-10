import React from 'react';
import Card from './Card';
import "./Services.css"
import Footer from './Footer';
export default function ServicesPage() {
  return (

    


    <div className="services-page">
      <h1 className='Head1'>Our Services</h1>
      <h2 className='Head2'>Interior designs</h2>

      <div className="cards-container">
         <Card title="Residential Interior Design" 
         image="image.webp"
          description="Stylish living spaces with space planning, furniture, color schemes, lighting." />
        

        
         <Card title="Commercial Interior Design" 
         image="image 2.webp"
          description="Stylish, functional business spaces with efficient layouts, brand integration, and sustainability." />


         <Card title="Traditional Interior Design" 
         image="image12.webp"
          description="Traditional interior design harmonizes classic elegance with rich textures and timeless details." />

        <Card title="Custom Designs" 
        image="image4.webp"
        description="Bespoke designs enhance commercial spaces' function, aesthetics, and brand identity." />
 




      </div>
      

      <section id="tools-and-technologies">
  <h3 className="tools-heading">Tools and Technologies</h3>
  <div className="tools-list">
    <div className="tool-item" >
      {/* <img src="image5.webp" alt="Design Software" className="tool-icon" /> */}
      <i className="fa-solid fa-paintbrush fa-2x tool-icon"></i>
      <h4>Design Software</h4>
      <p>Using software like AutoCAD, SketchUp, and 3D Max for accurate plans.</p>
    </div>
    <div className="tool-item">
      {/* <img src="image6.webp" alt="Sustainable Materials" className="tool-icon" /> */}
      <i className="fa-solid fa-leaf fa-2x tool-icon"></i>
      <h4>Sustainable Materials</h4>
      <p>Prioritizing eco-friendly materials and practices for sustainable designs.</p>
    </div>
    <div className="tool-item">
      {/* <img src="image7.webp" alt="Smart Technology Integration" className="tool-icon" /> */}
      <i className="fa-solid fa-microchip fa-2x tool-icon"   ></i>
      <h4>Smart Technology Integration</h4>
      <p>Incorporating smart home tech for convenience, security, and energy efficiency.</p>
    </div>
  </div>
</section>



            
  
  <section id="methodology">
    <h3 className="methodology-heading">Our Methodology</h3>
    <div className="steps-container">
        <div className="step">
            <h4>Consultation</h4>
            <p>Consult to understand your vision, preferences, and requirements.</p>
        </div>
        <div className="step">
            <h4>Concept Development</h4>
            <p>Designers create concepts for your feedback and approval.</p>
        </div>
        <div className="step">
            <h4>Design Development</h4>
            <p>We refine the design based on your input, selecting materials, colors, and finishes.</p>
        </div>
        
    </div>
</section>



           
<section>
<h2 className='Head2'>Construction</h2>
<div className="cards-container">
  <Card
    title="Residential Construction"
    image="https://media.istockphoto.com/id/1041465228/photo/professional-engineer-architect-worker-with-protective-helmet-and-blueprints-paper-at-house.jpg?s=612x612&w=0&k=20&c=e84Qt0pHjgcj8Ncj62G_2U4wAECjwIKRfb05obFQwN0="
    description="Aligning planning with codes and needs for all construction phases."/>

  <Card
    title="Commercial Construction"
    image="https://www.wicrwaterproofing.com/wp-content/uploads/2021/03/WICR_Blog_2021-Commercial-Construction.jpg"
    description=" Designing functional, aesthetic, compliant spaces for offices, hotels, and hospitals."/>

  <Card
    title="Renovations Construction"
    image="https://4.imimg.com/data4/PP/MX/FUSIONI-31203782/prod-image-500x500.jpg"
    description="Assess condition, set goals, ensure compliance, execute modifications, and finalize enhancements."/>

  <Card
    title="Modular Construction"
    image="https://constrofacilitator.com/wp-content/uploads/2021/06/Modular-Prefab-Construction-1.jpg"
    description="Site prep and module fabrication speed up construction with versatile, cost-effective designs." />


</div>
</section>





<section id="tools-and-technologies">
  <h3 className="tools-heading">Tools and Technologies</h3>
  <div className="tools-list">
    <div className="tool-item">
      {/* <img src="https://thumbs.dreamstime.com/b/vector-construction-tools-helmet-white-background-59750949.jpg" alt="Construction Tools" className="tool-icon" /> */}
      <i className="fa-solid fa-hammer fa-2x tool-icon"></i>
      <h4>Construction Tools</h4>
      <p>Hand Tools: Hammers, wrenches, screwdrivers; Power Tools: Drills, saws, nail guns; Surveying Tools: Theodolites, GPS.</p>
    </div>
    <div className="tool-item">
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPcCDK8nXI3J-gyR3s7oQcvy_kEbrMK9cfQ&s" alt="Advanced Construction Technologies" className="tool-icon" /> */}
      <i className="fa-solid fa-helmet-safety fa-2x tool-icon"></i>
      <h4>Advanced Construction Technologies</h4>
      <p>3D Printing, Prefab Construction, Green Building Tech, Robotics, IoT Sensors, AI, Construction Wearables.</p>
    </div>
    <div className="tool-item">
      {/* <img src="https://media.istockphoto.com/id/952063596/photo/business-software-concept-ai-artificial-intelligence.jpg?s=612x612&w=0&k=20&c=UNrf6L11psFEsSWLElzd3z6YuFQ6C2x3DPdZTnqYbZc=" alt="Software and Digital Tools" className="tool-icon" /> */}
      <i className="fa-solid fa-laptop fa-2x tool-icon "></i>
      <h4>Software and Digital Tools</h4>
      <p>BIM, Construction Management Software, Drones, AR/VR, Cloud Collaboration Tools.</p>
    </div>
  </div>
</section>




<section id="methodology">
  <h3 className="methodology-heading">Our Methodology</h3>
  <div className="steps-container">
    <div className="step">
      <h4>Traditional Construction</h4>
      <p>Design creation and approval, followed by construction.</p>
    </div>
    <div className="step">
      <h4>Design-Build</h4>
      <p>Client hires design-build contractor; design and construction executed in parallel.</p>
    </div>
    <div className="step">
      <h4>Construction Management at Risk</h4>
      <p>The construction manager works with designers during the planning phase.</p>
    </div>
    {/* <div className="step">
      <h4>Integrated Project Delivery</h4>
      <p>Share risks and rewards among stakeholders.</p>
    </div> */}
  </div>
  

</section>


</div>


  );
  

}

