import { motion } from 'framer-motion';

/** Sleek, minimal line figures suggesting construction — low opacity, gentle motion. */
const FIGURES = [
  {
    id: 'architect',
    svg: (
      <svg viewBox="0 0 32 56" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="16" cy="10" r="4" />
        <path d="M16 14 v8 M12 28 l4 6 4-6 M16 34 v12 M12 46 h8" />
        <path d="M20 18 l6-2 v10 l-6 2" />
      </svg>
    ),
    position: { top: '20%', left: '6%' },
    float: [0, -6, 0],
    drift: [0, 10, 0],
    floatDur: 5,
    driftDur: 13,
  },
  {
    id: 'measuring',
    svg: (
      <svg viewBox="0 0 32 56" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="16" cy="10" r="4" />
        <path d="M16 14 v10 M16 24 l-8 14 M16 24 l8 14 M8 38 h16" />
        <path d="M6 22 l20 0" />
      </svg>
    ),
    position: { bottom: '28%', right: '8%' },
    float: [0, 5, 0],
    drift: [0, -8, 0],
    floatDur: 6,
    driftDur: 15,
  },
  {
    id: 'walker',
    svg: (
      <svg viewBox="0 0 32 56" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="16" cy="9" r="3.5" />
        <path d="M16 13 v12 M13 28 l3 10 3-10 M16 38 v8 M12 46 h8" />
        <path d="M18 14 l4 1 v6 l-4-1" />
      </svg>
    ),
    position: { top: '58%', left: '10%' },
    float: [0, 4, -2, 0],
    drift: [0, 6, 0],
    floatDur: 7,
    driftDur: 17,
  },
];

export default function ConstructionAmbience() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden>
      {FIGURES.map((fig, i) => (
        <motion.div
          key={fig.id}
          className="absolute w-9 h-14 md:w-11 md:h-16"
          style={{
            ...fig.position,
            color: 'rgba(148, 46, 6, 0.11)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 + i * 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="w-full h-full"
            animate={{ y: fig.float, x: fig.drift }}
            transition={{
              y: { duration: fig.floatDur, repeat: Infinity, ease: 'easeInOut' },
              x: { duration: fig.driftDur, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            {fig.svg}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
