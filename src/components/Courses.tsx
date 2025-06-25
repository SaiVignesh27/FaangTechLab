import React, { useState } from 'react';
import { BookOpen, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  level: string;
  duration: string;
  color: string;
}> = ({ icon, title, description, features, level, duration, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`relative h-[450px] perspective-1000 cursor-pointer group`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative preserve-3d w-full h-full duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div 
          className={`absolute backface-hidden w-full h-full rounded-xl p-6 flex flex-col 
                     shadow-lg border border-gray-100 ${
                      color === 'blue' ? 'bg-blue-50' : 'bg-indigo-50'
                     }`}
        >
          <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 ${
            color === 'blue' ? 'bg-blue-100' : 'bg-indigo-100'
          }`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{description}</p>
          
          <div className="flex justify-between text-sm mb-4">
            <span className={`px-3 py-1 rounded-full ${
              color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'
            }`}>
              {level}
            </span>
            <span className={`px-3 py-1 rounded-full ${
              color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'
            }`}>
              {duration}
            </span>
          </div>
          
          <button 
            className={`mt-auto group flex items-center justify-center w-full py-3 rounded-lg font-medium text-white transition-all ${
              color === 'blue' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            Hover To View More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Back */}
        <div 
          className={`absolute backface-hidden rotate-y-180 w-full h-full rounded-xl p-6 
                     shadow-lg border border-gray-100 ${
                      color === 'blue' ? 'bg-blue-600 text-white' : 'bg-indigo-600 text-white'
                     }`}
        >
          <h3 className="text-xl font-bold mb-4">Course Features</h3>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <button 
            className={`mt-auto group flex items-center justify-center w-full py-3 rounded-lg font-medium transition-all ${
              color === 'blue' 
                ? 'bg-white text-blue-600 hover:bg-blue-50' 
                : 'bg-white text-indigo-600 hover:bg-indigo-50'
            }`}
          ><Link to='/contact'>
            Join Now
          </Link>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed by industry experts to fast-track your tech career
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <CourseCard 
            icon={<BookOpen className="h-8 w-8 text-blue-600" />}
            title="Java Programming Excellence"
            description="Explore Java programming at FaangTechLab. Master core concepts, advanced topics, and real-world applications with hands-on projects."
            features={[
              "Core Java fundamentals",
              "Object-oriented programming principles",
              "Data structures and algorithms",
              "Spring Boot framework",
              "Microservices architecture",
              "Real-world project development"
            ]}
            level="Beginner to Advanced"
            duration="6 months"
            color="blue"
          />
          
          <CourseCard 
            icon={<Shield className="h-8 w-8 text-indigo-600" />}
            title="Master Cybersecurity Essentials"
            description="Master cybersecurity, network security, and ethical hacking principles with hands-on labs and real-world scenarios."
            features={[
              "Network security fundamentals",
              "Ethical hacking techniques",
              "Security tools and practices",
              "Vulnerability assessment",
              "Penetration testing",
              "Security certification preparation"
            ]}
            level="Intermediate to Advanced"
            duration="5 months"
            color="indigo"
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;