import { motion } from 'framer-motion';
import aboutData from '../../data/about.json';

const { hero } = aboutData;

export default function BlueprintHero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-header">
      {/* Gradient background – cream to warm terracotta tint, clearly visible */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(160deg, #FDFBF7 0%, #F8F4EF 25%, #F2EBE3 50%, #EDE4DA 75%, #E8DDD2 90%, rgba(148, 46, 6, 0.12) 100%)',
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,46,6,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,46,6,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 py-12 lg:py-16">
        {/* Left: About Studio Design – clear narrative */}
        <motion.div
          className="flex-shrink-0 max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, x: -24 }}
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold tracking-tight mb-4 leading-tight"
            style={{ color: '#942e06' }}
          >
            {hero.title}
          </motion.h1>
          <p className="text-gray-600 text-sm mb-6 max-w-md">
            Design, precision, and collaboration—the blueprint shows how we work: from structure to detail, concept to final design.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative pl-4 sm:pl-6 border-l-2 border-[#942e06]/25"
          >
            <p className="text-gray-600 text-[15px] sm:text-base leading-[1.75]">
              {hero.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Your reference image – exact look. For SVG + animation, use the original SVG export from your design tool, not a trace. */}
        <motion.div
          className="w-full max-w-xl lg:max-w-2xl flex-shrink-0"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src="/images/about-blueprint.png"
            alt="About Studio Design – from structure to detail, concept to final design"
            className="w-full h-auto block"
          />
          <p className="text-center text-[10px] sm:text-xs text-gray-500 pt-4 tracking-wider uppercase">
            Our process: structure, detail, collaboration
          </p>
        </motion.div>
      </div>
    </section>
  );
}
