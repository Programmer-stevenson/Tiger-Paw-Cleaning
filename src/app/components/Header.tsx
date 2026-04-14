import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import logo from '../../assets/favicon.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'border-b border-gray-200 shadow-sm' : ''}`}>
      {/* Top bar */}
      <div className="bg-black text-white py-1.5">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2 text-xs">
          <div className="flex items-center gap-4">
            <a href="tel:573-777-0025" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>(573) 777-0025</span>
            </a>
            <a href="mailto:tigerpawcleaning@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>tigerpawcleaning@gmail.com</span>
            </a>
          </div>
          <div className="hidden sm:block">
            <span className="text-primary">Professional. Reliable. Powerful Clean.</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={logo} 
              alt="Tiger Paw Cleaning LLC Logo" 
              className="h-20 w-auto md:h-24 -my-4"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-900">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(234, 179, 8, 0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-block rounded-lg"
            >
              <Button 
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-black hover:bg-primary/90"
              >
                Get a Free Quote
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 flex flex-col gap-1 text-sm bg-white rounded-lg shadow-lg mb-2 px-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-left text-gray-900 hover:text-primary transition-colors py-2.5 border-b border-gray-100"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-left text-gray-900 hover:text-primary transition-colors py-2.5 border-b border-gray-100"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left text-gray-900 hover:text-primary transition-colors py-2.5 border-b border-gray-100"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-left text-gray-900 hover:text-primary transition-colors py-2.5"
            >
              Contact
            </button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-black hover:bg-primary/90 w-full mt-2"
            >
              Get a Free Quote
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}