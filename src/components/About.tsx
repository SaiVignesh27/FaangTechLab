import React from 'react';
import { Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how FaangTechLab is transforming tech education with innovative learning approaches and industry expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div 
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 
                       transform transition-transform duration-500 hover:scale-105"
            data-aos="fade-right"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Empowering individuals with Java programming and cybersecurity expertise through personalized learning experiences, hands-on training, and industry-aligned curriculum to transform students into tech professionals ready for the modern workforce.
            </p>
          </div>

          <div 
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 
                       transform transition-transform duration-500 hover:scale-105"
            data-aos="fade-left"
          >
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in e-learning, recognized for innovation, quality education, and producing industry-ready professionals who excel in their fields and contribute to technological advancement worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;