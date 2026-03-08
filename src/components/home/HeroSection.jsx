import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../common/Button';
import { resolveMediaUrl } from '../../utils/helpers';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  const heroImage = resolveMediaUrl('1_n8q0ih', { width: 2000 });

  // Full-screen hero image; header floats on top
  const heroMinHeight = '100vh';

  return (
    <section className="bg-white overflow-hidden relative z-0">
      {/* Full-bleed hero: spans entire viewport width */}
      <motion.div
        className="relative w-screen overflow-hidden shadow-lg transform-gpu isolate will-change-transform"
        style={{ opacity, minHeight: heroMinHeight }}
      >
        <img
          src={heroImage}
          alt="Interior"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20" />

        {/* TEXT ON IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 flex items-end md:items-center justify-center"
        >
          <div className="container-custom p-4 md:p-10">
            <div className="w-full max-w-3xl text-center mx-auto">
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                <span className="block">Craft Your Perfect</span>
                <span className="block italic text-[#f4c7b5]">Dream Home</span>
              </h1>

              <div className="mt-5 flex justify-center">
                <Button variant="primary" size="sm" to="/contact">
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
