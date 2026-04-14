import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle2, XCircle, ShieldCheck, Zap, Award } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../assets/footer-logo.png';
import walkPaw from '../../assets/walk.png';

const WEB3FORMS_ACCESS_KEY = 'cedffbde-d6b1-4a2e-9c82-3f1799460038';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Quote Request – ${formData.service || 'General Inquiry'}`,
          from_name: 'Tiger Paw Cleaning Website',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
      label: 'Direct Line',
      value: '(573) 777-0025',
      link: 'tel:573-777-0025',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'tigerpawcleaning@gmail.com',
      link: 'mailto:tigerpawcleaning@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Service Areas',
      value: 'Greater Metro Area, Kansas City & St. Louis',
      link: null,
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Monday – Saturday  ·  8:00 AM – 6:00 PM',
      link: null,
    },
  ];

  const trustSignals = [
    { icon: ShieldCheck, label: 'Licensed & Insured' },
    { icon: Zap, label: '24hr Response' },
    { icon: Award, label: '5-Star Rated' },
  ];

  // Walking paw pattern — elegant diagonal trail with natural L/R zigzag
  const walkingPaws = [
    { top: '2%',  right: '3%',  rotate: -18, delay: 0.00 },
    { top: '9%',  right: '14%', rotate:  16, delay: 0.08 },
    { top: '16%', right: '6%',  rotate: -14, delay: 0.16 },
    { top: '23%', right: '20%', rotate:  20, delay: 0.24 },
    { top: '30%', right: '12%', rotate: -17, delay: 0.32 },
    { top: '37%', right: '28%', rotate:  14, delay: 0.40 },
    { top: '44%', right: '20%', rotate: -20, delay: 0.48 },
    { top: '51%', right: '36%', rotate:  18, delay: 0.56 },
    { top: '58%', right: '28%', rotate: -15, delay: 0.64 },
    { top: '65%', right: '44%', rotate:  21, delay: 0.72 },
    { top: '72%', right: '36%', rotate: -18, delay: 0.80 },
    { top: '79%', right: '52%', rotate:  15, delay: 0.88 },
    { top: '86%', right: '44%', rotate: -16, delay: 0.96 },
    { top: '92%', right: '60%', rotate:  19, delay: 1.04 },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm uppercase tracking-[0.2em] text-primary">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-5 text-gray-900">
            Request a consultation
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tell us about your space. We'll respond within one business day with a detailed, no-obligation quote tailored to your needs.
          </p>
        </motion.div>

        {/* Main split panel */}
        <motion.div
          className="grid lg:grid-cols-5 bg-white rounded-2xl shadow-2xl shadow-gray-200/60 overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* LEFT — Dark info panel */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-10 lg:p-12 flex flex-col relative overflow-hidden">
            {/* Ambient accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-16 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Brand */}
              <div className="mb-10 text-center">
                <h3 className="text-2xl mb-6">Let's talk cleaning.</h3>
                <img src={logo} alt="Tiger Paw Cleaning" className="h-28 w-auto mb-6 mx-auto" />
                <div className="h-px w-16 bg-primary mb-6 mx-auto" />
                <p className="text-gray-400 leading-relaxed">
                  Our team is ready to provide you with a professional assessment of your space.
                </p>
              </div>

              {/* Contact rows */}
              <div className="space-y-1 mb-10">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const rowContent = (
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      className="flex items-start gap-4 py-4 border-b border-white/10 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1 pt-1">
                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">{info.label}</div>
                        <div className="text-white break-words">{info.value}</div>
                      </div>
                    </motion.div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block hover:text-primary transition-colors">
                      {rowContent}
                    </a>
                  ) : (
                    <div key={index}>{rowContent}</div>
                  );
                })}
              </div>

              {/* Trust signals */}
              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">Why Tiger Paw</div>
                <div className="grid grid-cols-3 gap-3">
                  {trustSignals.map((signal, index) => {
                    const Icon = signal.icon;
                    return (
                      <div key={index} className="flex flex-col items-center text-center gap-2">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="text-xs text-gray-400 leading-tight">{signal.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form panel */}
          <div className="lg:col-span-3 p-10 lg:p-12 relative overflow-hidden">
            {/* Walking paws — tiger tracks across the form */}
            <div className="absolute inset-0 pointer-events-none select-none">
              {walkingPaws.map((paw, i) => (
                <motion.img
                  key={i}
                  src={walkPaw}
                  alt=""
                  className="absolute w-16 h-16 md:w-20 md:h-20"
                  style={{
                    top: paw.top,
                    right: paw.right,
                    rotate: `${paw.rotate}deg`,
                    opacity: 0.12,
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 0.12, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: paw.delay,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
            <div className="mb-8">
              <h3 className="text-2xl text-gray-900 mb-2">Project details</h3>
              <p className="text-gray-500 text-sm">Fields marked with an asterisk are required.</p>
            </div>

            {/* Status banners */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-900 rounded-lg p-4 mb-6"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" />
                  <p className="text-sm">Thank you. Your request has been received — we'll be in touch within one business day.</p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-900 rounded-lg p-4 mb-6"
                >
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                  <p className="text-sm">Submission failed. Please try again or call us directly at (573) 777-0025.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-600 mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="h-12 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary transition-colors"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-600 mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="h-12 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary transition-colors"
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-gray-600 mb-2">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(###) ###-####"
                    className="h-12 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary transition-colors"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-wider text-gray-600 mb-2">
                    Service Type <span className="text-primary">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 px-3 rounded-md border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary outline-none transition-colors disabled:opacity-50"
                    disabled={status === 'submitting'}
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
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-600 mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Square footage, frequency, special requirements..."
                  rows={5}
                  className="border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary transition-colors resize-none"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-gray-500 max-w-sm">
                  By submitting, you agree to be contacted regarding your inquiry. We never share your information.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 bg-primary text-black hover:bg-primary/90 disabled:opacity-50"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending
                    </span>
                  ) : (
                    'Submit Request'
                  )}
                </Button>
              </div>
            </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}