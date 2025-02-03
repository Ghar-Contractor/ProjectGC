import React from 'react';
import Card from './Card';
import "./Services.css"
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
      
                <h3 className='tools-heading'>Tools and Technologies</h3>
                <div className='cards-container'>
                <Card
                    title="Design Software"
                    image="image5.webp"
                    description="Using software like AutoCAD, SketchUp, and 3D Max for accurate plans."/>
                <Card
                    title="Sustainable Materials"
                    image="image6.webp"
                    description="Prioritizing eco-friendly materials and practices for sustainable designs."
                />
                <Card
                    title="Smart Technology Integration"
                    image="image7.webp"
                    description="Incorporating smart home tech for convenience, security, and energy efficiency."/>
                {/* <Card
                    title="Project Management Tools"
                    image="image8.webp"
                    description="Using project management software to streamline communication and track progress."/> */}
                </div>
            </section>
            <section id="methodology">
    <h3 className="methodology-heading">Our Methodology</h3>
    <div className="steps-container">
        <div class="step">
            <h4>Consultation</h4>
            <p>Consult to understand your vision, preferences, and requirements.</p>
        </div>
        <div class="step">
            <h4>Concept Development</h4>
            <p>Designers create concepts for your feedback and approval.</p>
        </div>
        <div class="step">
            <h4>Design Development</h4>
            <p>We refine the design based on your input, selecting materials, colors, and finishes.</p>
        </div>
        
    </div>
</section>


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






<section id="tools-and-technologies">
  
    <h3 className="tools-heading">Tools and Technologies</h3>
    <div className="cards-container">
    <Card
      title="Construction Tools"
      image="https://thumbs.dreamstime.com/b/vector-construction-tools-helmet-white-background-59750949.jpg"
      description="Hand Tools: Hammers, wrenches, screwdrivers; Power Tools: Drills, saws, nail guns; Surveying Tools: Theodolites, GPS."
    />
    <Card
      title=" Advanced Construction Technologies"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPcCDK8nXI3J-gyR3s7oQcvy_kEbrMK9cfQ&s"
      description="3D Printing, Prefab Construction, Green Building Tech, Robotics, IoT Sensors, AI, Construction Wearables."
    />
    <Card
      title="Software and Digital Tools"
      image="https://media.istockphoto.com/id/952063596/photo/business-software-concept-ai-artificial-intelligence.jpg?s=612x612&w=0&k=20&c=UNrf6L11psFEsSWLElzd3z6YuFQ6C2x3DPdZTnqYbZc="
      description="BIM, Construction Management Software, Drones, AR/VR, Cloud Collaboration Tools."
    />
    {/* <Card
      title="Sustainable Construction Technologies"
      image="https://img.freepik.com/free-photo/view-futuristic-looking-city_23-2150946719.jpg?t=st=1737105805~exp=1737109405~hmac=98b23539d46da67747538e58fd01b867609b4b0ef45b63c353c21407320b7519&w=996"
      description="Energy-Efficient Materials: Insulated concrete forms, low-E glass, cross-laminated timber; Waste Management: Recycling tech."/> */}
  </div>
</section>
<section id="methodology">
  <h3 className="methodology-heading">Our Methodology</h3>
  <div class="steps-container">
    <div class="step">
      <h4>Traditional Construction</h4>
      <p>Design creation and approval, followed by construction.</p>
    </div>
    <div class="step">
      <h4>Design-Build</h4>
      <p>Client hires design-build contractor; design and construction executed in parallel.</p>
    </div>
    <div class="step">
      <h4>Construction Management at Risk</h4>
      <p>The construction manager works with designers during the planning phase.</p>
    </div>
    {/* <div class="step">
      <h4>Integrated Project Delivery</h4>
      <p>Share risks and rewards among stakeholders.</p>
    </div> */}
  </div>
</section>

    </div>
  );
}

