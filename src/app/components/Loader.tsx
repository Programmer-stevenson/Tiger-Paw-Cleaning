import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import loaderLogo from '../../assets/loader-logo.png';

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Show the loader for ~2.6s, then fade out.
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Logo — breathing pulse + gold glow */}
          <motion.img
            src={loaderLogo}
            alt="Tiger Paw Cleaning LLC"
            className="w-48 h-48 md:w-60 md:h-60 object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: [0.95, 1.05, 0.95],
              opacity: 1,
              filter: [
                'drop-shadow(0 0 0px rgba(255,200,0,0.0))',
                'drop-shadow(0 0 28px rgba(255,200,0,0.65))',
                'drop-shadow(0 0 0px rgba(255,200,0,0.0))',
              ],
            }}
            transition={{
              scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
              filter: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 0.5 },
            }}
          />

          {/* Gold progress bar */}
          <div className="mt-10 w-44 h-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.4, ease: 'easeInOut' }}
            />
          </div>

          <motion.p
            className="mt-5 text-sm tracking-[0.25em] uppercase text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Tiger Paw Cleaning
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
