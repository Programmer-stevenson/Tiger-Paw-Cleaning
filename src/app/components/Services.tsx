import { Home, Building2, Sparkles, Wind, Droplets, Sofa } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import cleaningSupplies from '../../assets/cleaning-supplies.png';

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

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
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

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card 
                  className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 group h-full"
                >
                  <CardContent className="p-8">
                    <motion.div 
                      className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-primary group-hover:text-black" />
                    </motion.div>
                    <h3 className="text-2xl mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl p-12">
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