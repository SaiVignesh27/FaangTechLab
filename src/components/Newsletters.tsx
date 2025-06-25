import React from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';

const newsletterData = [
  {
    title: "Tech Spark",
    description: "Igniting careers with premier tech recruiters",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    frequency: "Weekly"
  },
  {
    title: "Inno Hire",
    description: "Where innovation meets talent in the tech industry",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    frequency: "Bi-weekly"
  },
  {
    title: "Career Circuit",
    description: "Circulating opportunities for aspiring tech professionals",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    frequency: "Monthly"
  },
  {
    title: "Innovation Intern",
    description: "Bridging theory to practice with industry-driven internships",
    image: "https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    frequency: "Monthly"
  }
];

const Newsletters: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Newsletters</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, opportunities, and insights in the tech industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {newsletterData.map((newsletter, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={newsletter.image} 
                  alt={newsletter.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Newspaper className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-600">Monthly</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{newsletter.title}</h3>
                <p className="text-gray-600 mb-4">{newsletter.description}</p>
                
                {/* <button className="group flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletters;