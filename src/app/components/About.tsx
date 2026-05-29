import { useState, useEffect } from 'react';
import { Award, Shield, Users, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import teamPhoto from '../../assets/team.png';
import vanImage from '../../assets/van.png';
import walkPaw from '../../assets/walk.png';

export function About() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
    },
    {
      icon: Award,
      value: '10+',
      label: 'Years Experience',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Satisfaction Rate',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support Available',
    },
  ];

  // Mobile-only: cycle one stat card every 4s
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % stats.length), 4000);
    return () => clearInterval(t);
  }, [stats.length]);

  const StatCard = ({ stat }: { stat: typeof stats[number] }) => {
    const Icon = stat.icon;
    return (
      <>
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div className="text-4xl mb-2">{stat.value}</div>
        <div className="text-gray-600">{stat.label}</div>
      </>
    );
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
    <section id="about" className="relative py-20 bg-gray-50 overflow-hidden">
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
        {/* Mobile: left side, 3 passes */}
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
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Why Choose Tiger Paw Cleaning?
          </h2>
          <p className="text-xl text-gray-600">
            We're more than just a cleaning company – we're your trusted partner in maintaining 
            pristine, healthy environments.
          </p>
        </motion.div>

        {/* Team image */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={teamPhoto}
              alt="Tiger Paw Cleaning Team - Professional, Reliable, Powerful Clean" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Stats — auto slideshow (one card) on mobile, full grid on desktop */}
        {/* Mobile: single auto-rotating card */}
        <div className="sm:hidden mb-16">
          <div className="relative h-44">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0 bg-white rounded-xl p-8 text-center shadow-lg flex flex-col items-center justify-center"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <StatCard stat={stats[active]} />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {stats.map((_, i) => (
              <button
                key={i}
                aria-label={`Show stat ${i + 1}`}
                onClick={() => setActive(i)}
                className={
                  'h-2 rounded-full transition-all ' +
                  (i === active ? 'w-6 bg-primary' : 'w-2 bg-gray-300')
                }
              />
            ))}
          </div>
        </div>

        {/* Desktop / tablet: full grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <StatCard stat={stat} />
            </motion.div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl mb-6">
              Professional Team, <span className="text-primary">Powerful Results</span>
            </h3>

            {/* Mobile-only image — directly under the heading */}
            <div className="lg:hidden rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                src={vanImage}
                alt="Tiger Paw Cleaning company van"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6 text-lg text-gray-700">
              <p>
                At Tiger Paw Cleaning LLC, we pride ourselves on delivering exceptional cleaning 
                services that exceed expectations. Our team of trained professionals brings years 
                of experience and dedication to every job.
              </p>
              <p>
                We understand that your home or business is your most valuable asset. That's why 
                we treat every space with the utmost care and attention to detail, using only 
                eco-friendly products that are safe for your family, pets, and employees.
              </p>
              <p>
                Our commitment to excellence has earned us a reputation as one of the most trusted 
                cleaning companies in the area. We're fully licensed, insured, and background-checked 
                for your peace of mind.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
              <motion.div 
                className="border-l-4 border-primary pl-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-1">Licensed & Insured</div>
                <p className="text-gray-600">Fully certified professionals</p>
              </motion.div>
              <motion.div 
                className="border-l-4 border-primary pl-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-1">Eco-Friendly</div>
                <p className="text-gray-600">Safe, green cleaning products</p>
              </motion.div>
              <motion.div 
                className="border-l-4 border-primary pl-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-1">Background Checked</div>
                <p className="text-gray-600">Trusted and verified team</p>
              </motion.div>
              <motion.div 
                className="border-l-4 border-primary pl-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-1">Quality Guaranteed</div>
                <p className="text-gray-600">100% satisfaction promise</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right image — desktop only (mobile shows it under the heading) */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={vanImage}
                alt="Tiger Paw Cleaning company van" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}