import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../../assets/footer-logo.png';
import { PrivacyPolicy } from './Privacypolicy';
import { TermsOfService } from './Termsofservice';

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-10 md:py-12">
          {/* MOBILE LAYOUT */}
          <div className="md:hidden">
            {/* Logo + description + social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center mb-8"
            >
              <img 
                src={logo} 
                alt="Tiger Paw Cleaning LLC Logo" 
                className="h-24 w-auto mb-3"
              />
              <p className="text-gray-400 text-sm max-w-xs mb-4">
                Professional cleaning services you can trust. Licensed, insured, and dedicated to excellence.
              </p>
              <motion.a 
                href="https://www.facebook.com/share/17TS22qmai/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-black rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Facebook"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* 2-column Links/Services */}
            <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-800">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <h3 className="text-base mb-3 text-primary">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-primary transition-colors">
                      Home
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-primary transition-colors">
                      Services
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-primary transition-colors">
                      About Us
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-primary transition-colors">
                      Contact
                    </button>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-base mb-3 text-primary">Services</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Residential</li>
                  <li>Commercial</li>
                  <li>Deep Cleaning</li>
                  <li>Post-Construction</li>
                  <li>Carpet & Upholstery</li>
                  <li>Move In/Out</li>
                </ul>
              </motion.div>
            </div>

            {/* Contact centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-base mb-4 text-primary text-center">Get In Touch</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="tel:573-777-0025" className="flex items-center justify-center gap-2 text-gray-400 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>(573) 777-0025</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:tigerpawcleaning@gmail.com" className="flex items-center justify-center gap-2 text-gray-400 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="break-all">tigerpawcleaning@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-center justify-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Serving the Greater Metro Area</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logo} 
                  alt="Tiger Paw Cleaning LLC Logo" 
                  className="h-32 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Professional cleaning services you can trust. Licensed, insured, and dedicated to excellence.
              </p>
              <div className="flex gap-4">
                <motion.a 
                  href="https://www.facebook.com/share/17TS22qmai/?mibextid=wwXIfr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary text-black rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl mb-4 text-primary">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-primary transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-primary transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-primary transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-primary transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl mb-4 text-primary">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Cleaning</li>
                <li>Commercial Cleaning</li>
                <li>Deep Cleaning</li>
                <li>Post-Construction</li>
                <li>Carpet & Upholstery</li>
                <li>Move In/Out Cleaning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-xl mb-4 text-primary">Contact Info</h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:573-777-0025" className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>(573) 777-0025</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:tigerpawcleaning@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>tigerpawcleaning@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Serving the Greater Metro Area</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-6 md:pt-8 md:mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
              <p className="text-gray-400 text-xs md:text-sm text-center">
                © 2026 Tiger Paw Cleaning LLC. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs md:text-sm">
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setShowTerms(true)}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyPolicy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsOfService isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </>
  );
}