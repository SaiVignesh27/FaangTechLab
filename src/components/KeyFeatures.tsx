import React from 'react';
import { Users, Home, UserCheck, Video, ClipboardCheck, Briefcase, Building, Award } from 'lucide-react';

const KeyFeatures: React.FC = () => {
  const features = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, title: "Limited Batch Size", description: "Small, focused learning groups for personalized attention" },
    { icon: <Home className="h-8 w-8 text-blue-600" />, title: "AC Classrooms", description: "Comfortable learning environment with modern amenities" },
    { icon: <UserCheck className="h-8 w-8 text-blue-600" />, title: "Personal Guidance", description: "One-on-one mentoring from industry experts" },
    { icon: <Video className="h-8 w-8 text-blue-600" />, title: "Class Recordings", description: "Access to recorded sessions for revision" },
    { icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />, title: "Weekly Assessments", description: "Regular evaluations to track your progress" },
    { icon: <Briefcase className="h-8 w-8 text-blue-600" />, title: "Mock Interviews", description: "Practice interviews to prepare for job market" },
    { icon: <Building className="h-8 w-8 text-blue-600" />, title: "Placement Cell", description: "Dedicated team to assist with job placements" },
    { icon: <Award className="h-8 w-8 text-blue-600" />, title: "Day One Placements", description: "Start your career immediately after graduation" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What makes FaangTechLab stand out from other tech education providers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 
                        transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;