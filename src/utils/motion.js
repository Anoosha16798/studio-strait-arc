/**
 * Shared framer-motion config for minimal, elegant transitions.
 * Use across the site for consistency.
 */

export const motionTransition = {
  default: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  fast: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  slow: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** For use with whileInView on sections */
export const viewportOnce = { once: true, amount: 0.08, margin: '-80px' };
