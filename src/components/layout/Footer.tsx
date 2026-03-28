import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0C10] border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div 
            className="flex items-center gap-2 text-[#A7ACB8] text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span>This art of work is made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1, 1.2, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>by MuGaw. All rights reserved</span>
            <span className="text-[#B48C5A]">©</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6 text-sm text-[#A7ACB8]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a href="#" className="hover:text-[#B48C5A] transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-[#B48C5A] transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-[#B48C5A] transition-colors duration-300">Careers</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
