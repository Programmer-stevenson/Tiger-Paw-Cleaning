import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import cleaningImage from '../../assets/hero-cleaning.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              ⭐ #1 Rated Cleaning Service
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-black">Professional Cleaning</span>
              <br />
              <span className="text-primary">You Can Trust</span>
            </motion.h1>

            {/* Mobile-only hero image — between heading and description */}
            <motion.div 
              className="md:hidden relative rounded-2xl overflow-hidden shadow-2xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              <img
                src={cleaningImage}
                alt="Tiger Paw Cleaning LLC - Professional cleaning service in action"
                className="w-full h-auto"
              />
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Experience the power of a professional clean with Tiger Paw Cleaning LLC. 
              We deliver reliable, thorough cleaning services for homes and businesses.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
             <motion.div
  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(var(--primary-rgb), 0.5)" }}
  whileTap={{ scale: 0.97 }}
  className="inline-block rounded-lg"
>
  <Button 
    size="lg"
    onClick={() => scrollToSection('contact')}
    className="bg-primary text-black hover:bg-primary/90 text-lg px-8"
  >
    Get Free Quote
  </Button>
</motion.div>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8"
              >
                Our Services
              </Button>
            </motion.div>

            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg">100% Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg">Licensed & Insured Professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg">Eco-Friendly Cleaning Products</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right image — desktop only */}
          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={cleaningImage}
                alt="Tiger Paw Cleaning LLC - Professional cleaning service in action" 
                className="w-full h-auto"
              />
            </div>
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-xl shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="text-4xl text-primary mb-1">10+</div>
              <div className="text-sm">Years of Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}