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
                    image="image10.webp"
                    description="We begin with an in-depth consultation to understand your vision, preferences, and requirements."
                />
                <Card
                    title="Concept Development"
                    image="image11.webp"
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

            <h2>Construction</h2>

<div className="cards-container">
  <Card
    title="Residential Construction"
    image="https://media.istockphoto.com/id/1041465228/photo/professional-engineer-architect-worker-with-protective-helmet-and-blueprints-paper-at-house.jpg?s=612x612&w=0&k=20&c=e84Qt0pHjgcj8Ncj62G_2U4wAECjwIKRfb05obFQwN0="
    description="Developing architectural plans, layouts, and specifications that align with local building codes and client requirements.Clearing land, grading, and ensuring a stable foundation for the structure.Activities like framing, plumbing, electrical wiring, roofing, insulation, and interior/exterior finishing."
  />

  <Card
    title="Commercial Construction"
    image="https://www.wicrwaterproofing.com/wp-content/uploads/2021/03/WICR_Blog_2021-Commercial-Construction.jpg"
    description=" Focused on creating functional spaces tailored to the needs of businesses, organizations, or public services. Involves architects, engineers, and project managers to design structures that balance functionality, aesthetics, and compliance with zoning and building codes. Common examples include office buildings, hotels, warehouses, schools, hospitals, and airports."
  />

  <Card
    title="Renovations Construction"
    image="https://4.imimg.com/data4/PP/MX/FUSIONI-31203782/prod-image-500x500.jpg"
    description="Evaluating the building’s condition, identifying goals, and setting a budget. Ensuring adherence to local building codes and regulations. Carrying out the planned modifications, repairs, or additions. Finalizing with decorative or functional enhancements."
  />

  <Card
    title="Modular Construction"
    image="https://constrofacilitator.com/wp-content/uploads/2021/06/Modular-Prefab-Construction-1.jpg"
    description="Construction time is significantly reduced since site preparation and module fabrication occur simultaneously. Modular components can be designed for various purposes, offering versatility for residential, commercial, industrial, and institutional projects. Bulk manufacturing processes and shorter timelines help lower overall project costs."
  />
</div>






<section id="tools-and-technologies">
  <div className="cards-container">
    <h2 className="tools-heading">Tools and Technologies</h2>
    <Card
      title="Construction Tools"
      image="https://thumbs.dreamstime.com/b/vector-construction-tools-helmet-white-background-59750949.jpg"
      description="Hand Tools: Hammers, wrenches, screwdrivers, pliers, and measuring tapes.
                   Power Tools: Drills, circular saws, grinders, nail guns, and jackhammers.
                   Surveying Tools: Theodolites, total stations, laser levels, and GPS devices."
    />
    <Card
      title=" Advanced Construction Technologies"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPcCDK8nXI3J-gyR3s7oQcvy_kEbrMK9cfQ&s"
      description="3D Printing, Prefabrication and Modular Construction, Green Building Technologies, Robotics and Automation ,IoT and Smart Sensors ,Artificial Intelligence (AI), Construction Wearables."
    />
    <Card
      title="Software and Digital Tools"
      image="https://media.istockphoto.com/id/952063596/photo/business-software-concept-ai-artificial-intelligence.jpg?s=612x612&w=0&k=20&c=UNrf6L11psFEsSWLElzd3z6YuFQ6C2x3DPdZTnqYbZc="
      description="Building Information Modeling (BIM), Construction Management Software, Drone Technology, Augmented Reality (AR) and Virtual Reality (VR), Cloud Collaboration Tools"
    />
    <Card
      title="Sustainable Construction Technologies"
      image="https://img.freepik.com/free-photo/view-futuristic-looking-city_23-2150946719.jpg?t=st=1737105805~exp=1737109405~hmac=98b23539d46da67747538e58fd01b867609b4b0ef45b63c353c21407320b7519&w=996"
      description="Energy-Efficient MaterialsInsulated concrete forms, low-E glass, and cross-laminated timber.Waste Management SystemsTechnologies for recycling construction waste and reducing landfill use."
    />
  </div>
</section>
<section id="methodology">
  <h2 className="methodology-heading">Our Methodology</h2>

  <div className="cards-container">
    <Card
      title="Traditional Construction Methodology"
      description="Concept and design creation.Approval of designs and drawings.Construction begins after finalizing designs.."
    />
    <Card
      title="Design-Build Methodology"
      description="The client hires a design-build contractor.Design and construction are executed in parallel."
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
      description="Focuses on minimizing waste, maximizing value, and continuous improvement throughout the construction process."
    />
  </div>
</section>
    </div>
  );
}
