import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqs = [
    { question: "What is the typical timeline for a project?", answer: "Project timelines vary based on complexity, but we aim to provide a clear schedule during the initial consultation." },
    { question: "How do you determine project costs?", answer: "Costs are based on project scope, materials, and design choices. We provide detailed estimates after our first meeting." },
    { question: "Can I customize my design?", answer: "Absolutely! We work closely with you to ensure your vision is realized in every aspect of the design." },
    { question: "What materials do you use for construction?", answer: "We use high-quality, durable materials that align with the project’s needs and client preferences." },
    { question: "Do you offer budget-friendly renovation options?", answer: "Yes, we specialize in providing cost-effective solutions without compromising quality." },
  ];

  return (
    <>
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Find answers to your queries about timelines, costs, and our design processes to help you plan your project effectively.
        </p>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <div
              className="faq-item"
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="line"><hr />

      </div>
      
      
      {/* support section */}
      <div className="faq-support">
        <h2>Need More Help?</h2>
        <p>If your questions aren’t answered here, feel free to contact us:</p>
        <ul>
          <li>Email: <a href="mailto:support@gharcontractor.com">support@gharcontractor.com</a></li>
          <li>Phone: <a href="tel:+1234567890">+123 456 7890</a></li>
          <li>Live Chat: Available 9 AM - 6 PM</li>
        </ul>
      </div>
    </>
  );
};

export default FAQ;

