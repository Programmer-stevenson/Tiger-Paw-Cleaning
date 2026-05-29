import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../../assets/footer-logo.png';
import walkPaw from '../../assets/walk.png';
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

  // Walking paw trail — 3 passes; right side on desktop, left on mobile
  const pawTrail = [
    { top: '6%',  side: '4%',  rotate: -18 },
    { top: '14%', side: '15%', rotate:  16 },
    { top: '22%', side: '7%',  rotate: -14 },
    { top: '30%', side: '22%', rotate:  20 },
    { top: '40%', side: '12%', rotate: -17 },
    { top: '50%', side: '28%', rotate:  14 },
    { top: '58%', side: '18%', rotate: -20 },
    { top: '66%', side: '34%', rotate:  18 },
    { top: '74%', side: '24%', rotate: -15 },
    { top: '84%', side: '40%', rotate:  21 },
  ];
  const desktopPaws = [0, 1, 2].flatMap((pass) =>
    pawTrail.map((p, i) => ({
      top: `${(parseFloat(p.top) + pass * 4.5) % 96}%`,
      right: `${(parseFloat(p.side) + pass * 26) % 88}%`,
      rotate: p.rotate + pass * 12,
      delay: (pass * pawTrail.length + i) * 0.05,
    }))
  );
  const mobilePaws = [0, 1, 2].flatMap((pass) =>
    pawTrail.map((p, i) => ({
      top: `${(parseFloat(p.top) + pass * 4.5) % 96}%`,
      left: `${(parseFloat(p.side) + pass * 26) % 88}%`,
      rotate: p.rotate + pass * 12,
      delay: (pass * pawTrail.length + i) * 0.05,
    }))
  );

  return (
    <>
      <footer className="relative bg-black text-white overflow-hidden">
        {/* Walking paw trail — tiger tracks */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Desktop: right side, 3 passes */}
          <div className="hidden md:block">
            {desktopPaws.map((paw, i) => (
              <motion.img
                key={`d-${i}`}
                src={walkPaw}
                alt=""
                className="absolute w-24 h-24"
                style={{ top: paw.top, right: paw.right, rotate: `${paw.rotate}deg`, opacity: 0.25 }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 0.25, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: paw.delay, ease: 'easeOut' }}
              />
            ))}
          </div>
          {/* Mobile: left side, 3 passes */}
          <div className="md:hidden">
            {mobilePaws.map((paw, i) => (
              <motion.img
                key={`m-${i}`}
                src={walkPaw}
                alt=""
                className="absolute w-14 h-14"
                style={{ top: paw.top, left: paw.left, rotate: `${paw.rotate}deg`, opacity: 0.25 }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 0.25, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: paw.delay, ease: 'easeOut' }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-10 md:py-12 relative">
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
                <li className="flex items-center justify-center gap-2 text-orange-500">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Service Areas</span>
                </li>
                <li className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-gray-400">
                  <span className="hover:text-primary transition-colors cursor-default">Kansas City Metro</span>
                  <span className="text-gray-600">·</span>
                  <span className="hover:text-primary transition-colors cursor-default">St. Louis Metro</span>
                  <span className="text-gray-600">·</span>
                  <span className="hover:text-primary transition-colors cursor-default">Statewide Missouri</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* DESKTOP LAYOUT — centered, mirroring the mobile structure */}
          <div className="hidden md:block">
            {/* Logo + description + social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center mb-10"
            >
              <img
                src={logo}
                alt="Tiger Paw Cleaning LLC Logo"
                className="h-32 w-auto mb-4"
              />
              <p className="text-gray-400 max-w-md mb-5">
                Professional cleaning services you can trust. Licensed, insured, and dedicated to excellence.
              </p>
              <motion.a
                href="https://www.facebook.com/share/17TS22qmai/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-primary text-black rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Facebook"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Quick Links + Services, centered side by side */}
            <div className="flex justify-center gap-24 mb-10 pb-10 border-b border-gray-800">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center"
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
                className="text-center"
              >
                <h3 className="text-xl mb-4 text-primary">Our Services</h3>
                <div className="flex gap-12 text-left">
                  <ul className="space-y-2 text-gray-400">
                    <li>Residential Cleaning</li>
                    <li>Commercial Cleaning</li>
                    <li>Deep Cleaning</li>
                  </ul>
                  <ul className="space-y-2 text-gray-400">
                    <li>Post-Construction</li>
                    <li>Carpet & Upholstery</li>
                    <li>Move In/Out Cleaning</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Contact, centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-2"
            >
              <h3 className="text-xl mb-5 text-primary text-center">Get In Touch</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:573-777-0025" className="flex items-center justify-center gap-2 text-gray-400 hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>(573) 777-0025</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:tigerpawcleaning@gmail.com" className="flex items-center justify-center gap-2 text-gray-400 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span>tigerpawcleaning@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-center justify-center gap-2 text-orange-500">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Service Areas</span>
                </li>
                <li className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-gray-400">
                  <span className="hover:text-primary transition-colors cursor-default">Kansas City Metro</span>
                  <span className="text-gray-600">·</span>
                  <span className="hover:text-primary transition-colors cursor-default">St. Louis Metro</span>
                  <span className="text-gray-600">·</span>
                  <span className="hover:text-primary transition-colors cursor-default">Statewide Missouri</span>
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