import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LogoIntro = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start the exit animation after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    // Call onComplete after animation finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.25,
              x: typeof window !== 'undefined' ? -window.innerWidth / 2 + 100 : -500,
              y: typeof window !== 'undefined' ? -window.innerHeight / 2 + 80 : -300,
              opacity: 0
            }}
            transition={{
              initial: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              },
              exit: {
                duration: 4.5,
                ease: [0.19, 1, 0.22, 1]
              }
            }}
            className="flex flex-col items-center gap-4"
          >
            <motion.img
              src="/images/logo_icon/SA-Logo_Brown.png"
              alt="Studio Strait Arc"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1
              }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3
              }}
              className="flex flex-col items-center leading-none"
            >
              <span className="text-gray-700 text-lg md:text-xl font-medium tracking-wider uppercase">
                Studio
              </span>
              <span className="text-gray-700 text-lg md:text-xl font-medium tracking-wider uppercase">
                Strait Arc
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoIntro;