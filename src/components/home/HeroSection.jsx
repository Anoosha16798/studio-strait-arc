import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../common/Button';
import { resolveMediaUrl } from '../../utils/helpers';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  const heroImage = resolveMediaUrl('1_n8q0ih', { width: 2000 });

  // Clear space for fixed header so image never sits under it
  const headerClearance = '6rem';

  return (
    <section
      className="bg-white overflow-hidden relative z-0"
      style={{ paddingTop: headerClearance }}
    >
      <div className="container-custom">
        {/* Hero: image fills width, no side bars */}
        <motion.div
          className="relative w-full overflow-hidden shadow-lg transform-gpu isolate will-change-transform rounded-b-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/3] min-h-[50vh]"
          style={{ opacity }}
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
            className="absolute inset-0 flex items-end md:items-center justify-center p-4 md:p-10"
          >
            <div className="w-full max-w-3xl text-center">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
