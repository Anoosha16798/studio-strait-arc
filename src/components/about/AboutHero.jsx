import { motion } from 'framer-motion';
import aboutData from '../../data/about.json';
import ConstructionAmbience from './ConstructionAmbience';

const { hero } = aboutData;

const pillars = [
  { word: 'Structure', line: 'Intentional form and spatial clarity' },
  { word: 'Detail', line: 'Refined materials and craftsmanship' },
  { word: 'Collaboration', line: 'Your vision, our expertise' },
];

export default function AboutHero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-header">
      {/* Strong gradient – clearly visible cream to warm terracotta */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 90% 60% at 50% -15%, rgba(253,251,247,0.9) 0%, transparent 50%), linear-gradient(150deg, #FDFBF7 0%, #F2E9DE 18%, #E8DAC9 38%, #DFCBB8 58%, #D4BAA5 78%, rgba(148, 46, 6, 0.22) 100%)`,
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundSize: '100% 100%, 100% 100%',
        }}
      />

      <ConstructionAmbience />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 pt-6 pb-16 lg:pt-8 lg:pb-20">
        {/* Left: About Studio Design */}
        <motion.div
          className="flex-shrink-0 max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-gray-500 mb-3"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="h-px w-12 mb-6 mx-auto lg:mx-0"
            style={{ backgroundColor: '#942e06', transformOrigin: 'left' }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold tracking-tight mb-6 leading-tight"
            style={{ color: '#942e06' }}
          >
            {hero.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative pl-4 sm:pl-6 border-l-2 border-[#942e06]/20"
          >
            <p className="text-gray-600 text-[15px] sm:text-base leading-[1.8]">
              {hero.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Elegant pillar block – signifies the studio without busy illustration */}
        <motion.div
          className="w-full max-w-sm flex-shrink-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative pl-8 sm:pl-10 border-l-2 border-[#942e06]/25">
            {pillars.map((item, i) => (
              <motion.div
                key={item.word}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.12, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="pb-10 last:pb-0 cursor-default transition-colors duration-200"
              >
                <motion.span
                  className="block font-serif text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 mb-1"
                  style={{ color: '#942e06' }}
                  whileHover={{ letterSpacing: '0.02em' }}
                  transition={{ duration: 0.25 }}
                >
                  {item.word}
                </motion.span>
                <span className="text-sm text-gray-500 tracking-wide">
                  {item.line}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 text-center text-[10px] sm:text-xs text-gray-400 tracking-[0.2em] uppercase"
          >
            Our process
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
