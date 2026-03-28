import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Gauge, Zap, Settings, ChevronRight } from 'lucide-react';
import { getBrandById } from '../data/carData';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSelectedBrand, setSelectedModel } from '../store/carSlice';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';

const BrandDetail = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedBrand } = useAppSelector((state) => state.cars);
  const { ref, controls } = useScrollAnimation(0.2);

  useEffect(() => {
    if (brandId) {
      const brand = getBrandById(brandId);
      if (brand) {
        dispatch(setSelectedBrand(brand));
      } else {
        navigate('/brands');
      }
    }
  }, [brandId, dispatch, navigate]);

  const handleModelClick = (model: typeof selectedBrand extends null ? never : NonNullable<typeof selectedBrand>['models'][0]) => {
    if (model && selectedBrand) {
      dispatch(setSelectedModel(model));
      navigate(`/brands/${selectedBrand.id}/models/${model.id}`);
    }
  };

  if (!selectedBrand) {
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

  // Sort models by year (oldest to newest)
  const sortedModels = [...selectedBrand.models].sort((a, b) => a.year - b.year);

  return (
    <main className="min-h-screen bg-[#0B0C10] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/brands')}
            className="flex items-center gap-2 text-[#A7ACB8] hover:text-[#B48C5A] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Brands
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-32 h-32 bg-white rounded-full p-6 flex items-center justify-center shadow-2xl"
            >
              <img
                src={selectedBrand.logo}
                alt={selectedBrand.name}
                className="w-full h-full object-contain"
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 mb-3"
              >
                <span className="flex items-center gap-1 text-[#B48C5A] text-sm">
                  <Calendar className="w-4 h-4" />
                  Est. {selectedBrand.founded}
                </span>
                <span className="flex items-center gap-1 text-[#A7ACB8] text-sm">
                  <MapPin className="w-4 h-4" />
                  {selectedBrand.country}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold text-[#F4F6FA] mb-4"
              >
                {selectedBrand.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-[#A7ACB8] max-w-2xl"
              >
                {selectedBrand.description}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
                Model Timeline
              </span>
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA]">
              FROM <span className="text-[#B48C5A]">HERITAGE</span> TO <span className="text-[#B48C5A]">INNOVATION</span>
            </h2>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#B48C5A]/30 md:-translate-x-1/2" />

            {sortedModels.map((model, index) => (
              <motion.div
                key={model.id}
                variants={staggerItem}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#B48C5A] rounded-full border-4 border-[#14161B] md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#0B0C10] rounded-lg overflow-hidden border border-white/5 hover:border-[#B48C5A]/30 transition-all cursor-pointer group"
                    onClick={() => handleModelClick(model)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <motion.img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[#B48C5A] text-2xl font-bold">{model.year}</span>
                        <span className="text-[#A7ACB8] text-sm uppercase tracking-wider">{model.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#F4F6FA] mb-2 group-hover:text-[#B48C5A] transition-colors">
                        {model.name}
                      </h3>
                      
                      <p className="text-[#A7ACB8] text-sm mb-4">{model.description}</p>
                      
                      <div className={`flex flex-wrap gap-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className="flex items-center gap-1.5">
                          <Gauge className="w-4 h-4 text-[#B48C5A]" />
                          <span className="text-[#F4F6FA] text-sm">{model.specs.horsepower}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Zap className="w-4 h-4 text-[#B48C5A]" />
                          <span className="text-[#F4F6FA] text-sm">{model.specs.acceleration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Settings className="w-4 h-4 text-[#B48C5A]" />
                          <span className="text-[#F4F6FA] text-sm">{model.specs.topSpeed}</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ x: 5 }}
                        className={`mt-4 flex items-center gap-2 text-[#B48C5A] font-semibold text-sm ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
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
              INTERESTED IN <span className="text-[#B48C5A]">{selectedBrand.name}</span>?
            </h2>
            <p className="text-[#A7ACB8] mb-8">
              Contact our team to learn more about availability, pricing, and test drive options.
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#B48C5A] text-[#0B0C10] font-semibold rounded-sm hover:bg-[#c49a6a] transition-colors"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BrandDetail;
