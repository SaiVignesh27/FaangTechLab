import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const DemoSessions: React.FC = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Free Demo Sessions</h2>
            <p className="text-gray-300 text-lg">
              Experience our teaching methodology firsthand through our interactive demo sessions.
              Learn from industry experts and discover how we can help you achieve your tech goals.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Calendar className="h-6 w-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Next Session</h3>
                  <p className="text-gray-300">Every Saturday at 11:00 AM IST</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Clock className="h-6 w-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Duration</h3>
                  <p className="text-gray-300">60 minutes with Q&A</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Users className="h-6 w-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">What to Expect</h3>
                  <p className="text-gray-300">Live coding, interactive Q&A, course overview</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const yOffset = -80;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Register for Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSessions;