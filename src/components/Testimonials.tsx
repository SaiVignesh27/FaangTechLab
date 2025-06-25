import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Microsoft",
    quote: "The Java Programming course at FAANGTechLab completely transformed my career. The instructors were incredibly knowledgeable and supportive, and the curriculum was perfectly aligned with industry requirements. I secured a job at Microsoft within a month of completing the course!",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Security Analyst",
    company: "Amazon",
    quote: "The Cybersecurity course exceeded all my expectations. The hands-on labs and real-world scenarios prepared me for the challenges of the industry. Thanks to FAANGTechLab, I'm now working my dream job as a Security Analyst at Amazon.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 3,
    name: "Aisha Khan",
    role: "Full Stack Developer",
    company: "Google",
    quote: "I tried several online courses before, but nothing compared to the quality of education at FAANGTechLab. The personalized attention and focus on practical skills made all the difference. I'm now thriving as a Full Stack Developer at Google.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Java Developer",
    company: "Oracle",
    quote: "The mock interviews and placement support at FAANGTechLab were exceptional. They not only taught me technical skills but also prepared me for the interview process. I received multiple job offers and chose Oracle as my new workplace.",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    let interval: number | undefined;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrent(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);
  
  const next = () => {
    setAutoplay(false);
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setAutoplay(false);
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToSlide = (index: number) => {
    setAutoplay(false);
    setCurrent(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our successful graduates who have transformed their careers through our programs
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Main Testimonial */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 md:flex">
            <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
              <div className="relative h-60 md:h-full rounded-xl overflow-hidden">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="flex justify-center mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                      current === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="md:w-2/3 flex flex-col justify-between">
              <div>
                <div className="flex mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "{testimonials[current].quote}"
                </blockquote>
              </div>
              
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonials[current].name}
                </p>
                <p className="text-blue-600">
                  {testimonials[current].role} at {testimonials[current].company}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
            <button
              onClick={prev}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={next}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('courses');
              if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full 
                    transition-all duration-300 transform hover:scale-105"
          >
            Join Our Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;