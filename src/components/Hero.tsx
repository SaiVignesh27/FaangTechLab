import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 top-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute left-20 bottom-20 w-96 h-96 bg-indigo-300 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute right-40 bottom-40 w-40 h-40 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 opacity-0 animate-fade-in-down" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            Empowering Minds <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Building Future with FaangTechLab
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            Experience coding at FaangTechLab – it's for everyone! Our expert-led courses and hands-on approach make learning engaging and effective.
          </p>
          
          <button 
            onClick={() => handleScrollToSection('courses')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full 
                      transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                      opacity-0 animate-fade-in-up flex items-center mx-auto"
            style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}
          >
            Join Us Now! <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;