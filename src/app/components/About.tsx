import { Award, Shield, Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import teamPhoto from '../../assets/team.png';
import vanImage from '../../assets/van.png';

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

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
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

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
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

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
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

          {/* Right image */}
          <motion.div 
            className="relative"
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