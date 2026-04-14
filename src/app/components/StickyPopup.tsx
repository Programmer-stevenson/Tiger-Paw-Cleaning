import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import tigerImg from '../../assets/tiger-popup.png';

export function StickyPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after short delay on every page load
    const timer = setTimeout(() => setIsOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCTA = () => {
    handleClose();
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="fixed bottom-4 right-4 z-[60] max-w-sm w-[calc(100%-2rem)] sm:w-96 bg-black rounded-xl shadow-2xl border border-primary/30 overflow-hidden"
          style={{ boxShadow: '0 0 40px rgba(234, 179, 8, 0.25)' }}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close popup"
            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-primary z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Yellow accent bar */}
          <div className="h-1.5 bg-primary" />

          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <img
                src={tigerImg}
                alt="Tiger Paw Cleaning"
                className="w-20 h-20 object-contain flex-shrink-0"
              />
              <div className="pr-4">
                <div className="text-[10px] uppercase tracking-widest text-primary/80 mb-1">
                  New Client Offer
                </div>
                <h3 className="text-2xl text-primary leading-tight mb-1">
                  Save 10% on Your First Clean
                </h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Professional deep cleaning for homes and offices. Licensed, insured, and trusted across the valley.
            </p>
            <Button
              onClick={handleCTA}
              className="bg-primary text-black hover:bg-primary/90 w-full"
              size="sm"
            >
              Get Your Free Quote
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}