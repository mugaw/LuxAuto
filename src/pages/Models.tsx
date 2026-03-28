import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Gauge, Zap, Settings, ChevronRight } from 'lucide-react';
import { brands, featuredModels } from '../data/carData';
import { useAppDispatch } from '../hooks/redux';
import { setSelectedBrand, setSelectedModel } from '../store/carSlice';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';

const Models = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { ref, controls } = useScrollAnimation(0.2);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'sedan', 'suv', 'coupe', 'electric', 'sports'];

  // Get all models from all brands
  const allModels = brands.flatMap(brand => 
    brand.models.map(model => ({
      ...model,
      brandId: brand.id,
      brandName: brand.name,
      brandLogo: brand.logo
    }))
  );

  // Filter models
  const filteredModels = allModels.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         model.brandName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeFilter === 'all' || model.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  const handleModelClick = (model: typeof allModels[0]) => {
    const brand = brands.find(b => b.id === model.brandId);
    if (brand) {
      dispatch(setSelectedBrand(brand));
      dispatch(setSelectedModel(model));
      navigate(`/brands/${model.brandId}/models/${model.id}`);
    }
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
                Our Fleet
              </span>
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-[#F4F6FA] mb-6"
            >
              CHOOSE YOUR <span className="text-[#B48C5A]">DRIVE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[#A7ACB8]"
            >
              Browse our complete collection of iconic vehicles. 
              From classic legends to modern masterpieces.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-6 bg-[#14161B] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A7ACB8]" />
              <input
                type="text"
                placeholder="Search models or brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#0B0C10] border border-white/10 rounded-lg text-[#F4F6FA] placeholder-[#A7ACB8] focus:outline-none focus:border-[#B48C5A] transition-colors"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                    activeFilter === category
                      ? 'bg-[#B48C5A] text-[#0B0C10]'
                      : 'bg-[#0B0C10] text-[#A7ACB8] border border-white/10 hover:border-[#B48C5A]/50'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group bg-[#14161B] rounded-lg overflow-hidden border border-white/5 hover:border-[#B48C5A]/30 transition-all cursor-pointer"
                  onClick={() => handleModelClick(model)}
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <motion.img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#0B0C10]/80 backdrop-blur-sm text-[#B48C5A] text-xs font-medium uppercase tracking-wider rounded-full">
                        {model.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <img
                        src={model.brandLogo}
                        alt={model.brandName}
                        className="w-10 h-10 object-contain bg-white rounded-full p-1.5"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#A7ACB8] text-sm">{model.brandName}</span>
                      <span className="text-[#B48C5A] font-bold">{model.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#F4F6FA] mb-3 group-hover:text-[#B48C5A] transition-colors">
                      {model.name}
                    </h3>
                    
                    <p className="text-[#A7ACB8] text-sm mb-4 line-clamp-2">
                      {model.description}
                    </p>

                    {/* Specs */}
                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-4 h-4 text-[#B48C5A]" />
                        <span className="text-[#F4F6FA] text-xs">{model.specs.horsepower}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-[#B48C5A]" />
                        <span className="text-[#F4F6FA] text-xs">{model.specs.acceleration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Settings className="w-4 h-4 text-[#B48C5A]" />
                        <span className="text-[#F4F6FA] text-xs">{model.specs.topSpeed}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-[#B48C5A] font-semibold text-sm"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredModels.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#A7ACB8] text-lg">No models found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
                className="mt-4 text-[#B48C5A] hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Section */}
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
                Featured
              </span>
              <div className="w-12 h-0.5 bg-[#B48C5A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F4F6FA]">
              STAFF <span className="text-[#B48C5A]">PICKS</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredModels.map((model) => (
              <motion.div
                key={model.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-[#0B0C10] rounded-lg overflow-hidden border border-white/5 hover:border-[#B48C5A]/30 transition-all cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[#B48C5A] text-xs uppercase tracking-wider">{model.category}</span>
                  <h3 className="text-lg font-bold text-[#F4F6FA] mt-1">{model.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Models;
