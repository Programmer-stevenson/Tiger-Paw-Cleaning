import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

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
            <h3 className="text-xl mb-2 text-primary pr-6">
              🐯 Limited Time Offer
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Get <span className="text-primary font-semibold">20% off</span> your first deep cleaning service. Book today and experience the Tiger Paw difference!
            </p>
            <Button
              onClick={handleCTA}
              className="bg-primary text-black hover:bg-primary/90 w-full"
              size="sm"
            >
              Claim Your Discount
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}