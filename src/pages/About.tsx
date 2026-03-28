import { motion } from 'framer-motion';
import { Award, Users, Globe, Target } from 'lucide-react';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, controls } = useScrollAnimation(0.2);

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We only represent the finest automotive brands, ensuring every vehicle meets our exacting standards.'
    },
    {
      icon: Users,
      title: 'Client First',
      description: 'Your satisfaction is our priority. We provide personalized service tailored to your unique needs.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to exclusive vehicles from around the world, delivered to your doorstep.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters. From selection to delivery, we ensure perfection at every step.'
    }
  ];

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '2,500+', label: 'Vehicles Sold' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '8', label: 'Premium Brands' }
  ];

  const team = [
    {
      name: 'Alexander Mitchell',
      role: 'Founder & CEO',
      image: '/images/grille_detail_closeup.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Sales',
      image: '/images/headlight_detail_dark.jpg'
    },
    {
      name: 'Marcus Williams',
      role: 'Chief Technician',
      image: '/images/performance_car_urban.jpg'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Client Relations',
      image: '/images/front_quarter_low_light.jpg'
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
                About Us
              </span>
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-[#F4F6FA] mb-6"
            >
              THE ART OF <span className="text-[#B48C5A]">AUTOMOTIVE</span> EXCELLENCE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[#A7ACB8]"
            >
              Since 2009, LuxAuto Gallery has been the premier destination for discerning 
              collectors and enthusiasts seeking the world's finest automobiles.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-[#14161B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/images/city_tunnel_drive.jpg"
                  alt="Our showroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-[#B48C5A]" />
                <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA] mb-6">
                A PASSION FOR <span className="text-[#B48C5A]">PERFECTION</span>
              </h2>
              <div className="space-y-4 text-[#A7ACB8]">
                <p>
                  Founded by Alexander Mitchell, a lifelong automotive enthusiast and collector, 
                  LuxAuto Gallery began as a small boutique dealership with a simple mission: 
                  to connect passionate drivers with exceptional vehicles.
                </p>
                <p>
                  Over the past 15 years, we've grown into one of the most respected names in 
                  the luxury automotive industry, representing eight of the world's most 
                  prestigious brands and serving clients across the globe.
                </p>
                <p>
                  Our team of experts brings decades of combined experience in automotive 
                  engineering, sales, and service. We don't just sell cars—we curate experiences 
                  and build lasting relationships with our clients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
              <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
                Our Values
              </span>
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA]">
              WHAT DRIVES <span className="text-[#B48C5A]">US</span>
            </h2>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-[#14161B] p-6 rounded-lg border border-white/5 hover:border-[#B48C5A]/30 transition-all group"
              >
                <value.icon className="w-10 h-10 text-[#B48C5A] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#F4F6FA] mb-3">{value.title}</h3>
                <p className="text-[#A7ACB8] text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-[#14161B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#B48C5A] mb-2">{stat.value}</div>
                <div className="text-[#A7ACB8] text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
              <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
                Our Team
              </span>
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA]">
              MEET THE <span className="text-[#B48C5A]">EXPERTS</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#F4F6FA]">{member.name}</h3>
                <p className="text-[#B48C5A] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#14161B]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA] mb-6">
              READY TO START YOUR <span className="text-[#B48C5A]">JOURNEY</span>?
            </h2>
            <p className="text-[#A7ACB8] mb-8">
              Visit our showroom or contact us to schedule a private consultation 
              with one of our automotive experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#B48C5A] text-[#0B0C10] font-semibold rounded-sm hover:bg-[#c49a6a] transition-colors"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="/brands"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-[#F4F6FA]/20 text-[#F4F6FA] font-semibold rounded-sm hover:bg-[#F4F6FA]/5 transition-colors"
              >
                Browse Collection
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
