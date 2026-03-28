import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Gauge, Zap, Wind, Settings, Check } from 'lucide-react';
import { getModelById, getBrandById } from '../data/carData';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSelectedBrand, setSelectedModel } from '../store/carSlice';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';

const ModelDetail = () => {
  const { brandId, modelId } = useParams<{ brandId: string; modelId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedBrand, selectedModel } = useAppSelector((state) => state.cars);
  const { ref, controls } = useScrollAnimation(0.2);

  useEffect(() => {
    if (brandId && modelId) {
      const brand = getBrandById(brandId);
      const model = getModelById(brandId, modelId);
      
      if (brand && model) {
        dispatch(setSelectedBrand(brand));
        dispatch(setSelectedModel(model));
      } else {
        navigate('/brands');
      }
    }
  }, [brandId, modelId, dispatch, navigate]);

  if (!selectedBrand || !selectedModel) {
    return (
      <div className="min-h-screen bg-[#0B0C10] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-[#B48C5A] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const specifications = [
    { icon: Gauge, label: 'Horsepower', value: selectedModel.specs.horsepower },
    { icon: Zap, label: 'Acceleration', value: selectedModel.specs.acceleration },
    { icon: Wind, label: 'Top Speed', value: selectedModel.specs.topSpeed },
    { icon: Settings, label: 'Engine', value: selectedModel.specs.engine },
  ];

  const features = [
    'Premium leather upholstery',
    'Advanced driver assistance systems',
    'High-performance braking system',
    'Adaptive suspension',
    'Premium sound system',
    'Climate control',
    'Navigation system',
    'Wireless connectivity',
  ];

  return (
    <main className="min-h-screen bg-[#0B0C10] pt-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={selectedModel.image}
            alt={selectedModel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate(`/brands/${selectedBrand.id}`)}
              className="flex items-center gap-2 text-[#A7ACB8] hover:text-[#B48C5A] transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to {selectedBrand.name}
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={selectedBrand.logo}
                  alt={selectedBrand.name}
                  className="w-10 h-10 object-contain bg-white rounded-full p-1"
                />
                <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
                  {selectedBrand.name}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-[#F4F6FA] mb-4">
                {selectedModel.name}
              </h1>
              
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-[#A7ACB8]">
                  <Calendar className="w-5 h-5" />
                  {selectedModel.year}
                </span>
                <span className="text-[#A7ACB8]">|</span>
                <span className="text-[#B48C5A] uppercase tracking-wider text-sm">
                  {selectedModel.category}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-[#A7ACB8] leading-relaxed text-center"
          >
            {selectedModel.description}
          </motion.p>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-6 bg-[#14161B]">
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
                Technical Specs
              </span>
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA]">
              PERFORMANCE <span className="text-[#B48C5A]">DATA</span>
            </h2>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {specifications.map((spec) => (
              <motion.div
                key={spec.label}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-[#0B0C10] p-6 rounded-lg border border-white/5 hover:border-[#B48C5A]/30 transition-all text-center group"
              >
                <spec.icon className="w-8 h-8 text-[#B48C5A] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-bold text-[#F4F6FA] mb-1">{spec.value}</div>
                <div className="text-[#A7ACB8] text-sm uppercase tracking-wider">{spec.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-[#B48C5A]" />
                <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
                  Features
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA] mb-6">
                LUXURY <span className="text-[#B48C5A]">AMENITIES</span>
              </h2>
              <p className="text-[#A7ACB8] mb-8">
                Every detail has been carefully considered to provide the ultimate driving experience. 
                From premium materials to cutting-edge technology, this vehicle sets new standards.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3"
              >
                {features.map((feature) => (
                  <motion.div
                    key={feature}
                    variants={staggerItem}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-[#B48C5A]" />
                    <span className="text-[#F4F6FA] text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/images/interior_steering_wheel.jpg"
                  alt="Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#B48C5A] p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#0B0C10]">{selectedModel.year}</div>
                <div className="text-[#0B0C10]/70 text-sm">Model Year</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-[#14161B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
              <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
                Gallery
              </span>
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA]">
              VISUAL <span className="text-[#B48C5A]">TOUR</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4"
          >
            {[
              '/images/performance_car_urban.jpg',
              '/images/headlight_detail_dark.jpg',
              '/images/dashboard_screens.jpg'
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="aspect-video rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA] mb-6">
              READY TO EXPERIENCE THE <span className="text-[#B48C5A]">{selectedModel.name}</span>?
            </h2>
            <p className="text-[#A7ACB8] mb-8">
              Schedule a test drive or contact our team for pricing and availability information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-[#B48C5A] text-[#0B0C10] font-semibold rounded-sm hover:bg-[#c49a6a] transition-colors"
              >
                Schedule Test Drive
              </motion.button>
              <motion.a
                href="tel:+15550142378"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-[#F4F6FA]/20 text-[#F4F6FA] font-semibold rounded-sm hover:bg-[#F4F6FA]/5 transition-colors"
              >
                Call for Pricing
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ModelDetail;
