import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import faangvideo from '../../faangofficevideo.mp4'

type FAQItem = {
  question: string;
  answer: string;
  category: 'course' | 'support' | 'placement';
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const faqs: FAQItem[] = [
    {
      question: "How long are the courses?",
      answer: "Our Java Programming Excellence course is 6 months long, while the Master Cybersecurity Essentials course runs for 5 months. Both courses include a combination of classroom sessions, practical labs, and project work.",
      category: 'course'
    },
    {
      question: "Are practice tests included in the course fee?",
      answer: "Yes, all practice tests, assessments, and learning materials are included in the course fee. There are no hidden charges for any of the resources provided during the course.",
      category: 'course'
    },
    {
      question: "Do you provide real-time projects?",
      answer: "Absolutely! Real-time projects are a core component of our curriculum. Students work on industry-relevant projects with guidance from experienced mentors, building a robust portfolio to showcase to potential employers.",
      category: 'course'
    },
    {
      question: "How are the instructors selected?",
      answer: "Our instructors are industry professionals with extensive experience in their respective fields. We select instructors based on their technical expertise, teaching ability, and real-world experience in top tech companies.",
      category: 'support'
    },
    {
      question: "What kind of support do students receive after classes?",
      answer: "Students receive comprehensive support including access to recorded sessions, one-on-one doubt clearing sessions, additional practice materials, and mentorship. Our faculty is available through dedicated channels to address any questions or concerns.",
      category: 'support'
    },
    {
      question: "Do you assist with job placements?",
      answer: "Yes, we have a dedicated placement cell that works with students to prepare them for interviews and connect them with potential employers. Our placement assistance includes resume building, mock interviews, and networking opportunities with hiring partners.",
      category: 'placement'
    },
    {
      question: "What is your placement success rate?",
      answer: "We maintain a placement success rate of over 90%, with many students receiving job offers on the first day of placements. Our industry connections and rigorous training methodology ensure that our students are well-prepared for the job market.",
      category: 'placement'
    },
    {
      question: "Can I attend a trial class before enrolling?",
      answer: "Yes, we offer free demo sessions for prospective students. These sessions give you a taste of our teaching methodology and course content. You can register for a demo session through our website or by contacting our admissions team.",
      category: 'course'
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === null || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const categoryLabels = {
    'course': 'Course',
    'support': 'Support',
    'placement': 'Placement'
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses, support, and placement assistance
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <svg
                  className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
            
            <div className="flex space-x-2">
              {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className={`text-blue-600 transition-transform duration-300`}>
                      {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full mr-2 ${
                        faq.category === 'course' ? 'bg-blue-100 text-blue-700' :
                        faq.category === 'support' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {categoryLabels[faq.category]}
                      </span>
                    </div>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No FAQs match your search criteria. Try a different search term or filter.</p>
            </div>
          )}
          
          {/* Still Have Questions */}
          <div className="mt-12 text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Still Have Questions?</h3>
            <p className="text-gray-600 mb-4">
              Can't find the answer you're looking for? Feel free to reach out to our team.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  const yOffset = -80;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;