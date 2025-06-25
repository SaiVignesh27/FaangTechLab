import React from 'react';
import { Globe } from 'lucide-react';

const GlobalVision: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-blue-50 rounded-full shadow-md mx-auto">
            <Globe className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Our Dream is Transforming Learning Globally
            </h2>
          </div>
        </div>
        <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-12 border border-blue-100 max-w-5xl mx-auto">
          <div className="relative z-10">
            <p className="text-gray-700 text-md leading-relaxed">
              Experience a global transformation in learning with <strong>FAANGTechLab</strong>. Our mission is to revolutionize education by offering
              in-person tech courses for learners at all levels. Delve into the dynamic worlds of <strong>Java Development</strong> and <strong>Cybersecurity</strong>, essential for those
              aspiring to thrive in the modern tech industry.
              <br /><br />
              Whether you're a beginner or seeking advanced knowledge, our programs provide the practical skills needed to stand out. We ensure that
              every learner is equipped with job-ready knowledge, supported by mentorship and real-world projects.
              <br /><br />
              Join us and unlock a future filled with opportunities. Don’t just learn — <span className="text-blue-600 font-semibold">innovate with FAANGTechLab</span>.
            </p>
          </div>
        </div>
    </div>
  </section>
  );
};

export default GlobalVision;
