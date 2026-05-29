import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import cleaningImage from '../../assets/cleaning-supplies.png';
import walkPaw from '../../assets/walk.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    '100% Satisfaction Guaranteed',
    'Licensed & Insured Professionals',
    'Eco-Friendly Cleaning Products',
    'Trusted by Homes & Businesses',
  ];

  const ease = [0.22, 1, 0.36, 1];

  // Walking paw trail — faint diagonal L/R zigzag (same as the form)
  // Desktop: positioned on the RIGHT side. Mobile: repeated for more spots.
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

  // Mobile: 3 interleaved passes of the trail for a denser scatter of spots
  const mobilePaws = [0, 1, 2].flatMap((pass) =>
    pawTrail.map((p, i) => ({
      top: `${(parseFloat(p.top) + pass * 4.5) % 96}%`,
      left: `${(parseFloat(p.side) + pass * 26) % 88}%`,
      rotate: p.rotate + pass * 12,
      delay: (pass * pawTrail.length + i) * 0.05,
    }))
  );

  return (
    <section
      id="home"
      className="relative pt-32 pb-12 overflow-x-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      {/* Ambient depth — soft glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-40 -left-40 w-[420px] h-[420px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-24 -right-40 w-[420px] h-[420px] rounded-full bg-black/5 blur-3xl" />
      </div>

      {/* Walking paw trail — tiger tracks */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Desktop: right side */}
        <div className="hidden md:block">
          {pawTrail.map((paw, i) => (
            <motion.img
              key={`d-${i}`}
              src={walkPaw}
              alt=""
              className="absolute w-24 h-24"
              style={{
                top: paw.top,
                right: paw.side,
                rotate: `${paw.rotate}deg`,
                opacity: 0.1,
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: 'easeOut' }}
            />
          ))}
        </div>
        {/* Mobile: repeated denser scatter */}
        <div className="md:hidden">
          {mobilePaws.map((paw, i) => (
            <motion.img
              key={`m-${i}`}
              src={walkPaw}
              alt=""
              className="absolute w-14 h-14"
              style={{
                top: paw.top,
                left: paw.left,
                rotate: `${paw.rotate}deg`,
                opacity: 0.1,
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 0.5, delay: paw.delay, ease: 'easeOut' }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* ── 2-column split: image left, text right ── */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center md:items-start max-w-6xl mx-auto">

          {/* LEFT — Image with floating stat (desktop only; mobile shows it mid-text) */}
          <motion.div
            className="relative min-w-0 order-1 hidden md:block"
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.85, ease }}
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src={cleaningImage}
                alt="Tiger Paw Cleaning LLC - Professional cleaning service in action"
                className="w-full h-auto"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <motion.div
              className="absolute -bottom-5 -left-3 md:-bottom-7 md:-left-7 bg-black text-white px-5 py-4 md:px-6 md:py-5 rounded-2xl shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease }}
            >
              <div className="text-3xl md:text-4xl text-primary leading-none mb-1">10+</div>
              <div className="text-xs md:text-sm text-gray-300">Years of Experience</div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Text content */}
          <motion.div
            className="min-w-0 order-2 text-center md:text-left md:pt-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-7">
              <span>⭐</span> #1 Rated Cleaning Service
            </div>

            <h1 className="text-5xl md:text-6xl leading-[1.1] tracking-tight mb-7 text-left">
              <span className="text-black">Spotless,</span>
              <br />
              <span className="text-primary">Guaranteed.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-9 max-w-lg mx-auto md:mx-0">
              Reliable, thorough cleaning for homes and businesses — done right with Tiger Paw Cleaning LLC.
            </p>

            {/* Mobile-only static image — between description and buttons */}
            <div className="md:hidden relative mx-auto max-w-[400px] mb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img
                  src={cleaningImage}
                  alt="Tiger Paw Cleaning LLC - Professional cleaning service in action"
                  className="w-full h-auto"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 bg-black/90 text-white px-4 py-2.5 rounded-xl shadow-xl">
                  <div className="text-2xl text-primary leading-none mb-0.5">10+</div>
                  <div className="text-[10px] text-gray-300">Years of Experience</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(var(--primary-rgb), 0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90 text-lg px-10"
                >
                  Get Free Quote
                </Button>
              </motion.div>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto border-2 border-black text-black hover:bg-black hover:text-white text-lg px-10"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* ── Auto-sliding trust ribbon ── */}
        <motion.div
          className="relative w-full max-w-6xl mx-auto mt-16 border-y border-gray-200/80 py-5 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            maskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="flex w-max animate-[ribbon_26s_linear_infinite] hover:[animation-play-state:paused]">
            {[...features, ...features].map((label, i) => (
              <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-base md:text-lg text-gray-700">{label}</span>
                <span className="text-primary/40 ml-4">✦</span>
              </div>
            ))}
          </div>

          <style>{`
            @keyframes ribbon {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}