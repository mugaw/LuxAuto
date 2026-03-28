import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { brands } from '../data/carData';
import { useAppDispatch } from '../hooks/redux';
import { setSelectedBrand } from '../store/carSlice';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';

const Brands = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { ref, controls } = useScrollAnimation(0.2);

  const handleBrandClick = (brand: typeof brands[0]) => {
    dispatch(setSelectedBrand(brand));
    navigate(`/brands/${brand.id}`);
  };

  return (
    <main className="min-h-screen bg-[#0B0C10] pt-24">
      {/* Hero */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
              <span className="text-[#B48C5A] text-sm font-medium tracking-[0.2em] uppercase">
                Our Collection
              </span>
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-[#F4F6FA] mb-6"
            >
              LEGENDARY <span className="text-[#B48C5A]">BRANDS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[#A7ACB8]"
            >
              Explore the world's most prestigious automotive manufacturers. 
              From German engineering to Italian passion, discover the stories behind the icons.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {brands.map((brand) => (
              <motion.div
                key={brand.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group bg-[#14161B] rounded-lg overflow-hidden border border-white/5 hover:border-[#B48C5A]/30 transition-all duration-500 cursor-pointer"
                onClick={() => handleBrandClick(brand)}
              >
                {/* Brand Header */}
                <div className="p-6 border-b border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-white rounded-full p-3 flex items-center justify-center"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#F4F6FA] group-hover:text-[#B48C5A] transition-colors">
                        {brand.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[#A7ACB8]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Est. {brand.founded}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {brand.country}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#A7ACB8] text-sm line-clamp-3">{brand.description}</p>
                </div>

                {/* Models Preview */}
                <div className="p-6">
                  <h4 className="text-xs font-medium text-[#B48C5A] tracking-[0.2em] uppercase mb-4">
                    Iconic Models
                  </h4>
                  <div className="space-y-3">
                    {brand.models.slice(0, 3).map((model) => (
                      <div
                        key={model.id}
                        className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                      >
                        <div>
                          <span className="text-[#F4F6FA] font-medium">{model.name}</span>
                          <span className="text-[#A7ACB8] text-sm ml-2">({model.year})</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#A7ACB8] group-hover:text-[#B48C5A] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-6 flex items-center gap-2 text-[#B48C5A] font-semibold text-sm group/btn"
                  >
                    View All Models
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#14161B]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '8', label: 'Premium Brands' },
              { value: '24', label: 'Iconic Models' },
              { value: '100+', label: 'Years of History' },
              { value: '500+', label: 'Happy Clients' }
            ].map((stat) => (
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
    </main>
  );
};

export default Brands;
