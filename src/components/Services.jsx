import React from 'react';
import Card from './Card';
import "./Services.css"
export default function ServicesPage() {
  return (

    


    <div className="services-page">
      <h1>Our Services</h1>
      <h2>Interior designs</h2>

      <div className="cards-container">
         <Card title="Residential Interior Design" 
         image="image.webp"
          description="Stylish living spaces with space planning, furniture, color schemes, lighting." />
        

        
         <Card title="Commercial Interior Design" 
         image="image 2.webp"
          description="Stylish, functional business spaces with efficient layouts, brand integration, and sustainability." />


         <Card title="Custom Designs" 
         image="image3.webp"
          description="Custom room designs transform your home into a personalized sanctuary." />

        <Card title="Custom Designs" 
        image="image4.webp"
        description="Bespoke designs enhance commercial spaces' function, aesthetics, and brand identity." />
 




      </div>
      

      <section id="tools-and-technologies">
        <div className='cards-container'>
                <h2 className='tools-heading'>Tools and Technologies</h2>
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
                <Card
                    title="Project Management Tools"
                    image="image8.webp"
                    description="Using project management software to streamline communication and track progress."/>
                </div>
            </section>
            <section id="methodology">
              <h3 className="methodology-heading">Our Methodology</h3>

                
              <div className="cards-container">
                <Card
                    title="Consultation"
                   
                    description="Consult to understand your vision, preferences, and requirements."
                />
                <Card
                    title="Concept Development"
                    
                    description="Designers create concepts for your feedback and approval."/>
                <Card
                    title="Design Development"
                    description="We refine the design based on your input, selecting materials, colors, and finishes."
                />
                <Card
                    title="Execution"
                    description="Coordinates with contractors and suppliers for quality and precision."/>
                <Card
                    title="Final Touches"
                    description="Finishing touches ensure every detail is perfect, from lighting to decor."/>
                </div>
            </section>

            <h2>Construction</h2>

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
  <div className="cards-container">
    <h3 className="tools-heading">Tools and Technologies</h3>
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
    <Card
      title="Sustainable Construction Technologies"
      image="https://img.freepik.com/free-photo/view-futuristic-looking-city_23-2150946719.jpg?t=st=1737105805~exp=1737109405~hmac=98b23539d46da67747538e58fd01b867609b4b0ef45b63c353c21407320b7519&w=996"
      description="Energy-Efficient Materials: Insulated concrete forms, low-E glass, cross-laminated timber; Waste Management: Recycling tech."/>
  </div>
</section>
<section id="methodology">
  <h3 className="methodology-heading">Our Methodology</h3>

  <div className="cards-container">
    <Card
      title="Traditional Construction "
      description="Design creation and approval, followed by construction."
    />
    <Card
      title="Design-Build "
      description="Client hires design-build contractor; design and construction executed in parallel."
    />
    <Card
      title="Construction Management at Risk"
      description="The construction manager works with designers during the planning phase."
    />
    <Card
      title="Integrated Project Delivery"
      description="Share risks and rewards among stakeholders."
    />
    <Card
      title="Lean Construction"
      description="Reduces waste, maximizes value, and ensures continuous improvement."
    />
  </div>
</section>
    </div>
  );
}
