import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

// Individual Sections (can be pages or reusable components)
import Hero from './components/Hero';
import About from './components/About';
import KeyFeatures from './components/KeyFeatures';
import Courses from './components/Courses';
import GlobalVision from './components/GlobalVision';
import TrainingHighlights from './components/TrainingHighlights';
import DemoSessions from './components/DemoSessions';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletters from './components/Newsletters';
import VideoDemo from './components/VideoDemo';

// Define full-page views
const HomePage = () => (
  <>
    <Hero />
    <About />
    <KeyFeatures />
    <GlobalVision />
    <Courses />
    <TrainingHighlights />
    <DemoSessions />
    <Contact />
    <Testimonials />
    <FAQ />
    <VideoDemo />
    <Newsletters />
  </>
);

// Scroll to section helper
const ScrollToSection: React.FC<{ sectionId: string }> = ({ sectionId }) => {
  useEffect(() => {
    // Wait for DOM to render
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  }, [sectionId]);
  return null;
};

// Wrapper for section routes
const HomeAndScroll: React.FC<{ sectionId: string }> = ({ sectionId }) => (
  <>
    <HomePage />
    <ScrollToSection sectionId={sectionId} />
  </>
);

function App() {
  useEffect(() => {
    document.title = 'FAANGTechLab - Empowering Future Tech Leaders';

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in-down {
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      .animate-fade-in-down {
        animation: fade-in-down 0.8s ease forwards;
      }

      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease forwards;
      }

      .perspective-1000 {
        perspective: 1000px;
      }

      .preserve-3d {
        transform-style: preserve-3d;
      }

      .backface-hidden {
        backface-visibility: hidden;
      }

      .rotate-y-180 {
        transform: rotateY(180deg);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomeAndScroll sectionId="home" />} />
            <Route path="/about" element={<HomeAndScroll sectionId="about" />} />
            <Route path="/courses" element={<HomeAndScroll sectionId="courses" />} />
            <Route path="/contact" element={<HomeAndScroll sectionId="contact" />} />
            <Route path="/faq" element={<HomeAndScroll sectionId="faq" />} />
            <Route path="/demo" element={<HomeAndScroll sectionId="demo" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
