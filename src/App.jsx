import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/GlobalNavbar';
import Footer from './components/Footer';
import Home from './components/Home.jsx';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Services from './components/Services';
import HeroSection from './components/HeroSection';
import Services2 from './components/Services2';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';


function MainContent() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Poppins, sans-serif' }}>
      <HeroSection />
      <Services2 />
      <Locations />
      <Testimonials />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
