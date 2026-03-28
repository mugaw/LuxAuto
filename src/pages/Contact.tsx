import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, controls } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sales@luxauto.gallery',
      href: 'mailto:sales@luxauto.gallery'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(555) 014-2378',
      href: 'tel:+15550142378'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '1230 Bayline Drive, Suite 400',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Sat: 9AM - 7PM',
      href: '#'
    }
  ];

  return (
    <main className="min-h-screen bg-[#0B0C10] pt-24">
      {/* Hero */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
              <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
                Get in Touch
              </span>
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-[#F4F6FA] mb-6"
            >
              START THE <span className="text-[#B48C5A]">CONVERSATION</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[#A7ACB8]"
            >
              Ask a question. Request availability. We'll respond within one business day.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-[#B48C5A]" />
                <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
                  Contact Info
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA] mb-6">
                LET'S <span className="text-[#B48C5A]">CONNECT</span>
              </h2>
              <p className="text-[#A7ACB8] mb-10">
                Whether you're looking to purchase, consign, or simply learn more about 
                our collection, our team is here to assist you every step of the way.
              </p>

              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={staggerContainer}
                className="space-y-6"
              >
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    variants={staggerItem}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#14161B] rounded-lg flex items-center justify-center group-hover:bg-[#B48C5A]/10 transition-colors">
                      <item.icon className="w-5 h-5 text-[#B48C5A]" />
                    </div>
                    <div>
                      <div className="text-[#A7ACB8] text-sm">{item.label}</div>
                      <div className="text-[#F4F6FA] font-medium group-hover:text-[#B48C5A] transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 aspect-video bg-[#14161B] rounded-lg overflow-hidden border border-white/5"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#B48C5A] mx-auto mb-4" />
                    <p className="text-[#F4F6FA] font-medium">LuxAuto Gallery</p>
                    <p className="text-[#A7ACB8] text-sm">1230 Bayline Drive, Suite 400</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#14161B] p-8 rounded-lg border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-0.5 bg-[#B48C5A]" />
                  <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
                    Send Message
                  </span>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-[#B48C5A] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[#F4F6FA] mb-2">Message Sent!</h3>
                    <p className="text-[#A7ACB8]">We'll get back to you within one business day.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-[#A7ACB8] text-sm mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0B0C10] border border-white/10 rounded-lg text-[#F4F6FA] placeholder-[#A7ACB8] focus:outline-none focus:border-[#B48C5A] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-[#A7ACB8] text-sm mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#0B0C10] border border-white/10 rounded-lg text-[#F4F6FA] placeholder-[#A7ACB8] focus:outline-none focus:border-[#B48C5A] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-[#A7ACB8] text-sm mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0B0C10] border border-white/10 rounded-lg text-[#F4F6FA] placeholder-[#A7ACB8] focus:outline-none focus:border-[#B48C5A] transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[#A7ACB8] text-sm mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-[#0B0C10] border border-white/10 rounded-lg text-[#F4F6FA] placeholder-[#A7ACB8] focus:outline-none focus:border-[#B48C5A] transition-colors resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-[#B48C5A] text-[#0B0C10] font-semibold rounded-sm hover:bg-[#c49a6a] transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-[#14161B]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
              <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
                FAQ
              </span>
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA]">
              COMMON <span className="text-[#B48C5A]">QUESTIONS</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                question: 'Do you offer financing options?',
                answer: 'Yes, we work with several premium lenders to offer competitive financing options tailored to your needs.'
              },
              {
                question: 'Can I schedule a test drive?',
                answer: 'Absolutely! Contact us to schedule a private test drive at our showroom or we can arrange delivery to your location.'
              },
              {
                question: 'Do you accept trade-ins?',
                answer: 'Yes, we offer competitive trade-in values. Our team will assess your vehicle and provide a fair market offer.'
              },
              {
                question: 'What is your delivery range?',
                answer: 'We offer nationwide delivery across the United States. International shipping can be arranged on request.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-[#0B0C10] p-6 rounded-lg border border-white/5"
              >
                <h3 className="text-lg font-semibold text-[#F4F6FA] mb-2">{faq.question}</h3>
                <p className="text-[#A7ACB8]">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
