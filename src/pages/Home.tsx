import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Gauge, Zap, Shield, Settings, Clock, Wrench, Headphones } from 'lucide-react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src="/images/hero_night_drive.jpg"
          alt="Luxury car at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/60 via-transparent to-[#0B0C10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10]/80 via-transparent to-[#0B0C10]/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase mb-4"
          >
            Welcome to LuxAuto Gallery
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F4F6FA] tracking-tight mb-6"
          >
            DRIVE THE
            <br />
            <span className="text-[#B48C5A]">EXTRAORDINARY</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-[#A7ACB8] max-w-2xl mx-auto mb-10"
          >
            Curated performance. Precision engineering. Delivered to your door.
            Discover the world's most prestigious automotive brands.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/brands')}
              className="px-8 py-4 bg-[#B48C5A] text-[#0B0C10] font-semibold rounded-sm flex items-center justify-center gap-2 hover:bg-[#c49a6a] transition-colors"
            >
              Explore Models
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border border-[#F4F6FA]/20 text-[#F4F6FA] font-semibold rounded-sm hover:bg-[#F4F6FA]/5 transition-colors"
            >
              Book a Test Drive
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#F4F6FA]/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-[#B48C5A] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const StatementSection = () => {
  const { ref, controls } = useScrollAnimation(0.3);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <img
          src="/images/city_tunnel_drive.jpg"
          alt="Car in tunnel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0C10]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.div variants={fadeInLeft} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-[#B48C5A]" />
            <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
              The Standard
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInLeft}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F4F6FA] leading-tight mb-8"
          >
            ELEGANT
            <br />
            <span className="text-[#B48C5A]">AND</span>
            <br />
            POWERFUL
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#A7ACB8] mb-10 max-w-xl"
          >
            A gallery of machines built for the road—clean lines, raw capability, 
            and quiet confidence. Each vehicle in our collection represents the 
            pinnacle of automotive excellence.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 text-[#B48C5A] font-semibold group"
          >
            Meet the Lineup
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedModelsSection = () => {
  const { ref, controls } = useScrollAnimation(0.2);
  const navigate = useNavigate();

  const models = [
    {
      id: 'phantom-gt',
      name: 'Phantom GT',
      category: 'Featured Model',
      description: 'Twin-turbo precision, rear-biased AWD, and a cabin tuned for long-distance composure.',
      image: '/images/performance_car_urban.jpg',
      specs: { hp: '503 HP', accel: '3.6s', speed: '189 mph' }
    },
    {
      id: 'velar-sport',
      name: 'Velar Sport',
      category: 'New Arrival',
      description: 'Adaptive damping, panoramic roof, and intuitive cockpit controls—designed for real roads.',
      image: '/images/headlight_detail_dark.jpg',
      specs: { hp: '518 HP', accel: '3.9s', speed: '176 mph' }
    }
  ];

  return (
    <section className="relative py-24 bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#B48C5A]" />
            <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
              Featured
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#F4F6FA]">
            This Month's <span className="text-[#B48C5A]">Highlights</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => navigate('/models')}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <motion.img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[#B48C5A] text-xs font-medium tracking-[0.2em] uppercase mb-2 block">
                  {model.category}
                </span>
                <h3 className="text-3xl font-bold text-[#F4F6FA] mb-3">{model.name}</h3>
                <p className="text-[#A7ACB8] text-sm mb-4 line-clamp-2">{model.description}</p>
                
                <div className="flex gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-[#B48C5A]" />
                    <span className="text-[#F4F6FA] text-sm">{model.specs.hp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#B48C5A]" />
                    <span className="text-[#F4F6FA] text-sm">{model.specs.accel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-[#B48C5A]" />
                    <span className="text-[#F4F6FA] text-sm">{model.specs.speed}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[#B48C5A] font-semibold text-sm"
                >
                  Configure
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PerformanceSection = () => {
  const { ref, controls } = useScrollAnimation(0.3);

  const stats = [
    { value: '503', label: 'Horsepower', unit: 'HP' },
    { value: '3.6', label: '0-60 mph', unit: 's' },
    { value: '516', label: 'Torque', unit: 'lb-ft' },
    { value: '8', label: 'Transmission', unit: 'Speed' }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <img
          src="/images/car_in_motion_street.jpg"
          alt="Car in motion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0C10]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="bg-[#0B0C10]/90 backdrop-blur-md p-8 md:p-12 rounded-lg max-w-3xl"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-[#B48C5A]" />
            <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
              Performance
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-[#F4F6FA] mb-4"
          >
            BUILT TO <span className="text-[#B48C5A]">PERFORM</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-[#A7ACB8] mb-10">
            Engineered balance. No compromises. Every component optimized for maximum performance.
          </motion.p>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#B48C5A] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#A7ACB8] uppercase tracking-wider">{stat.label}</div>
                <div className="text-xs text-[#F4F6FA]/50">{stat.unit}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 px-6 py-3 border border-[#B48C5A] text-[#B48C5A] font-semibold rounded-sm hover:bg-[#B48C5A] hover:text-[#0B0C10] transition-colors"
          >
            Download Spec Sheet
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const InteriorSection = () => {
  const { ref, controls } = useScrollAnimation(0.3);

  const features = [
    'Heated & ventilated seats',
    'Ambient lighting',
    'Premium audio system',
    'Leather upholstery',
    'Panoramic sunroof',
    'Climate control'
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <img
          src="/images/interior_steering_wheel.jpg"
          alt="Car interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0C10]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full flex justify-end">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="bg-[#0B0C10]/90 backdrop-blur-md p-8 md:p-12 rounded-lg max-w-xl"
        >
          <motion.div variants={fadeInRight} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-[#B48C5A]" />
            <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
              Craft & Comfort
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInRight}
            className="text-3xl md:text-4xl font-bold text-[#F4F6FA] mb-4"
          >
            INSIDE THE <span className="text-[#B48C5A]">DETAILS</span>
          </motion.h2>

          <motion.p variants={fadeInRight} className="text-[#A7ACB8] mb-8">
            Materials chosen for touch and time. Layout designed to keep your eyes on the road.
            Every surface, every stitch, every detail crafted to perfection.
          </motion.p>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-3 mb-8">
            {features.map((feature) => (
              <motion.div
                key={feature}
                variants={staggerItem}
                className="flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 bg-[#B48C5A] rounded-full" />
                <span className="text-[#F4F6FA] text-sm">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            variants={fadeInRight}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-[#B48C5A] text-[#0B0C10] font-semibold rounded-sm hover:bg-[#c49a6a] transition-colors"
          >
            Explore Interiors
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const { ref, controls } = useScrollAnimation(0.2);

  const services = [
    {
      icon: Clock,
      title: 'Concierge Delivery',
      description: 'We bring your dream car directly to your doorstep, anywhere in the country.'
    },
    {
      icon: Wrench,
      title: 'Scheduled Maintenance',
      description: 'Expert technicians and genuine parts to keep your vehicle in peak condition.'
    },
    {
      icon: Shield,
      title: 'Protection Plans',
      description: 'Comprehensive coverage options for complete peace of mind.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance whenever you need it, wherever you are.'
    }
  ];

  return (
    <section className="py-24 bg-[#14161B]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#B48C5A]" />
            <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
              Ownership
            </span>
            <div className="w-12 h-0.5 bg-[#B48C5A]" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#F4F6FA] mb-4">
            WE KEEP YOU <span className="text-[#B48C5A]">MOVING</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#A7ACB8] max-w-2xl mx-auto">
            From delivery to maintenance, we handle the details so you can focus on the drive.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="bg-[#0B0C10] p-6 rounded-lg border border-white/5 hover:border-[#B48C5A]/30 transition-colors group"
            >
              <service.icon className="w-10 h-10 text-[#B48C5A] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-[#F4F6FA] mb-2">{service.title}</h3>
              <p className="text-[#A7ACB8] text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/images/test_drive_road.jpg"
          alt="Test drive"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0C10]/70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-[#F4F6FA] mb-6">
          FEEL IT FOR <span className="text-[#B48C5A]">YOURSELF</span>
        </h2>
        <p className="text-lg text-[#A7ACB8] mb-10">
          Book a private test drive. No pressure. Just the road.
          Experience the thrill of driving excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-[#B48C5A] text-[#0B0C10] font-semibold rounded-sm hover:bg-[#c49a6a] transition-colors"
          >
            Schedule Now
          </motion.button>
          <motion.a
            href="tel:+15550142378"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border border-[#F4F6FA]/20 text-[#F4F6FA] font-semibold rounded-sm hover:bg-[#F4F6FA]/5 transition-colors"
          >
            Or call (555) 014-2378
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

const Home = () => {
  return (
    <main className="bg-[#0B0C10]">
      <HeroSection />
      <StatementSection />
      <FeaturedModelsSection />
      <PerformanceSection />
      <InteriorSection />
      <ServicesSection />
      <CTASection />
    </main>
  );
};

export default Home;
