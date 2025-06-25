import React, { useState } from 'react';
import { GraduationCap, FileCheck, Code } from 'lucide-react';

const TrainingHighlights: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Quality Training",
      content: "Our curriculum is designed by industry experts with years of experience in top tech companies. We focus on practical skills and industry-relevant technologies that employers are actively seeking. With small batch sizes, we ensure personalized attention and tailor the learning experience to individual needs."
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Practice Tests",
      content: "Regular assessments and practice tests are integral to our teaching methodology. These tests simulate real-world scenarios and interview questions, helping students gauge their progress and identify areas for improvement. Our comprehensive evaluation system provides detailed feedback to enhance learning outcomes."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Realtime Projects",
      content: "Students work on real-world projects that mirror industry challenges. These hands-on experiences develop practical skills, problem-solving abilities, and teamwork. Each project is mentored by industry professionals who provide guidance and feedback throughout the development process, preparing students for actual workplace scenarios."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Training Highlights</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What makes our training methodology stand out from the rest
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 focus:outline-none 
                          transition-colors duration-300 sm:px-6 md:text-base
                          ${activeTab === index 
                            ? 'border-blue-600 text-blue-600' 
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab(index)}
              >
                <span className={`mr-2 ${activeTab === index ? 'text-blue-600' : 'text-gray-400'}`}>
                  {tab.icon}
                </span>
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                {tabs[activeTab].icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{tabs[activeTab].title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {tabs[activeTab].content}
            </p>
          </div>

          {/* Progress Circles */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24" viewBox="0 0 100 100">
                  <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
                  <circle className="text-blue-600 progress-ring" strokeWidth="8" strokeLinecap="round" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" style={{ strokeDasharray: '264', strokeDashoffset: 264 * (1 - 0.95) }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">95%</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">Success Rate</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24" viewBox="0 0 100 100">
                  <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
                  <circle className="text-blue-600 progress-ring" strokeWidth="8" strokeLinecap="round" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" style={{ strokeDasharray: '264', strokeDashoffset: 264 * (1 - 0.85) }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">85%</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">Day 1 Placement</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24" viewBox="0 0 100 100">
                  <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
                  <circle className="text-blue-600 progress-ring" strokeWidth="8" strokeLinecap="round" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" style={{ strokeDasharray: '264', strokeDashoffset: 264 * (1 - 0.98) }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">98%</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHighlights;