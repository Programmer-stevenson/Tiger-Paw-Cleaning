import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(573) 777-0025',
      link: 'tel:573-777-0025',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'tigerpawcleaning@gmail.com',
      link: 'mailto:tigerpawcleaning@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Serving the Greater Metro Area',
      link: null,
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon-Sat: 8AM-6PM',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
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
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-600">
            Ready to experience the Tiger Paw difference? Contact us for a free, no-obligation quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info cards */}
          <div className="space-y-6">
            <h3 className="text-2xl mb-6">Get in Touch</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">{info.title}</div>
                          <div className="text-lg">{info.value}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );

              return info.link ? (
                <a key={index} href={info.link} className="block">
                  {content}
                </a>
              ) : (
                content
              );
            })}

            <motion.div 
              className="bg-gradient-to-br from-black to-gray-900 text-white rounded-xl p-8 mt-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl mb-4">Emergency Services</h4>
              <p className="text-gray-300 mb-4">
                Need urgent cleaning? We offer emergency and same-day services for your convenience.
              </p>
              <a 
                href="tel:573-777-0025"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Phone className="w-5 h-5" />
                Call Now: (573) 777-0025
              </a>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">Request a Free Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="border-2 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="border-2 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(573) 777-0025"
                        className="border-2 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block mb-2">
                        Service Type *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border-2 border-input bg-background focus:border-primary outline-none"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Cleaning</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="deep">Deep Cleaning</option>
                        <option value="construction">Post-Construction</option>
                        <option value="carpet">Carpet & Upholstery</option>
                        <option value="move">Move In/Out Cleaning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your cleaning needs..."
                      rows={5}
                      className="border-2 focus:border-primary"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-black hover:bg-primary/90"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}