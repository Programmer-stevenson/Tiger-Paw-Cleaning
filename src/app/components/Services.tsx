import { useState, useEffect } from 'react';
import { Home, Building2, Sparkles, Wind, Droplets, Sofa } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion, AnimatePresence } from 'motion/react';
import cleaningSupplies from '../../assets/hero-cleaning.png';
import walkPaw from '../../assets/walk.png';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Complete home cleaning services including dusting, vacuuming, mopping, and sanitizing all living spaces.',
    },
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning to maintain a pristine work environment for your business.',
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Intensive cleaning service that tackles every corner, perfect for seasonal cleaning or move-in/move-out.',
    },
    {
      icon: Wind,
      title: 'Post-Construction',
      description: 'Specialized cleaning to remove construction dust and debris, making your space move-in ready.',
    },
    {
      icon: Droplets,
      title: 'Carpet & Upholstery',
      description: 'Professional carpet and upholstery cleaning using advanced equipment and eco-friendly solutions.',
    },
    {
      icon: Sofa,
      title: 'Move In/Out Cleaning',
      description: 'Comprehensive cleaning services for moving transitions, ensuring spaces are spotless and ready.',
    },
  ];

  // Split into two fixed rows of 3 (cards never cross rows)
  const topRow = services.slice(0, 3);
  const bottomRow = services.slice(3, 6);

  // Mobile carousel: a window of 2 columns, advancing by one every 10s.
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setOffset((o) => (o + 1) % 3), 10000);
    return () => clearInterval(t);
  }, []);

  // Two visible columns for the TOP row (current + next, wrapping within 3)
  const topA = offset;
  const topB = (offset + 1) % 3;
  // BOTTOM row runs out of sync — shifted by 2 so it never matches the top
  const botA = (offset + 2) % 3;
  const botB = (offset + 3) % 3;

  // Walking paw trail — 3 passes on both desktop (right side) and mobile
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
  // Desktop: 3 passes anchored to the RIGHT
  const desktopPaws = [0, 1, 2].flatMap((pass) =>
    pawTrail.map((p, i) => ({
      top: `${(parseFloat(p.top) + pass * 4.5) % 96}%`,
      right: `${(parseFloat(p.side) + pass * 26) % 88}%`,
      rotate: p.rotate + pass * 12,
      delay: (pass * pawTrail.length + i) * 0.05,
    }))
  );
  // Mobile: 3 passes anchored to the LEFT
  const mobilePaws = [0, 1, 2].flatMap((pass) =>
    pawTrail.map((p, i) => ({
      top: `${(parseFloat(p.top) + pass * 4.5) % 96}%`,
      left: `${(parseFloat(p.side) + pass * 26) % 88}%`,
      rotate: p.rotate + pass * 12,
      delay: (pass * pawTrail.length + i) * 0.05,
    }))
  );

  const MiniCard = ({ service }: { service: typeof services[number] }) => {
    const Icon = service.icon;
    return (
      <Card className="border-2 h-full">
        <CardContent className="p-4">
          <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg mb-2">{service.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
        </CardContent>
      </Card>
    );
  };

  const FullCard = ({ service, index }: { service: typeof services[number]; index: number }) => {
    const Icon = service.icon;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <Card className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 group h-full">
          <CardContent className="p-8">
            <motion.div
              className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="w-8 h-8 text-primary group-hover:text-black" />
            </motion.div>
            <h3 className="text-2xl mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden">
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
              style={{ top: paw.top, right: paw.right, rotate: `${paw.rotate}deg`, opacity: 0.1 }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: paw.delay, ease: 'easeOut' }}
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
              style={{ top: paw.top, left: paw.left, rotate: `${paw.rotate}deg`, opacity: 0.1 }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: paw.delay, ease: 'easeOut' }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-primary/10 text-primary text-lg md:text-xl px-5 py-2 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-5xl md:text-6xl tracking-tight mb-4">
            Comprehensive Cleaning Solutions
          </h2>
          <p className="text-xl text-gray-600">
            From residential homes to commercial spaces, we provide professional cleaning services 
            tailored to your specific needs.
          </p>
        </motion.div>

        {/* Hero image */}
        <motion.div 
          className="mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={cleaningSupplies}
              alt="Tiger Paw Cleaning - Professional cleaning supplies and service" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* ── MOBILE: 2-column carousel window (2 top, 2 bottom), advances every 10s ── */}
        <div className="md:hidden">
          {/* Top row */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[topA, topB].map((col, slot) => (
              <div key={`top-${slot}`} className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={col}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <MiniCard service={topRow[col]} />
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
          {/* Bottom row — out of sync, slides the opposite direction */}
          <div className="grid grid-cols-2 gap-4">
            {[botA, botB].map((col, slot) => (
              <div key={`bot-${slot}`} className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={col}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 60 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <MiniCard service={bottomRow[col]} />
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                aria-label={`Show services ${i + 1}`}
                onClick={() => setOffset(i)}
                className={'h-2 rounded-full transition-all ' + (i === offset ? 'w-6 bg-primary' : 'w-2 bg-gray-300')}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP: full grid ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FullCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl mb-4">Don't See What You Need?</h3>
            <p className="text-xl text-gray-300 mb-8">
              We offer custom cleaning solutions for any situation. Contact us to discuss your specific requirements.
            </p>
            <motion.a 
              href="tel:573-777-0025"
              className="inline-block bg-primary text-black px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us Today: (573) 777-0025
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}