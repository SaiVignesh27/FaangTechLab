import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import faangtechlogo from '../../faangtechlogobg.png';
import Modal from './modal';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState<'privacy' | 'terms' | null>(null);

  const openModal = (type: 'privacy' | 'terms') => setShowModal(type);
  const closeModal = () => setShowModal(null);

  return (
    <>
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center">
                <img src={faangtechlogo} alt="FAANGTechLab Logo" className="h-12 w-30 object-contain mr-4" />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering the next generation of tech professionals with cutting-edge skills and knowledge through immersive education.
              </p>
              <div className="flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/faangtechlab/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <button onClick={() => openModal('terms')} className="text-gray-400 hover:text-blue-400 transition-colors">
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal('privacy')} className="text-gray-400 hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Our Courses</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Java Programming Excellence
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Master Cybersecurity Essentials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Address</h3>
              <p className="text-gray-400 text-md mb-4">
                Lakshmipuram main road, opposite Sri patibandla sitaramaiah high school, Guntur, Andhra Pradesh (1st floor).
              </p>
              <p className="text-gray-400 text-md mb-4 hover:text-white">
                <a href="tel:+919908970375">+91 99089 70375</a>
              </p>
              <p className="text-gray-400 text-md mb-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=learn@faangtechlab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  learn@faangtechlab.com
                </a>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} FAANGTechLab. All rights reserved.</p>
            <p className="mt-2">
              Designed with <span className="text-red-500">♥</span> for aspiring tech professionals
            </p>
          </div>
        </div>
      </footer>

      {/* Modal Dialog */}
      <Modal
        title={showModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
        isOpen={showModal !== null}
        onClose={closeModal}
      >
        {showModal === 'privacy' ? <PrivacyPolicy /> : <TermsAndConditions />}
      </Modal>
    </>
  );
};

export default Footer;
