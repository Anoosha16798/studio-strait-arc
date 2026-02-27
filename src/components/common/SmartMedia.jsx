import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const SmartMedia = ({ src, poster, isPriority, type = 'image' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  
  // margin: "1200px" starts downloading the image long before it hits the screen
  const isNearView = useInView(containerRef, { margin: "1200px", once: true });
  const shouldLoad = isPriority || isNearView;

  return (
    <div ref={containerRef} className="w-full h-full bg-gray-50 relative overflow-hidden">
      {/* 1. Animated Skeleton Loader */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-100 overflow-hidden"
          >
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Actual Media */}
      {shouldLoad && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          {type === 'video' ? (
            <video
              src={src}
              poster={poster}
              className="w-full h-full object-cover"
              muted playsInline loop autoPlay
              onLoadedData={() => setIsLoaded(true)}
            />
          ) : (
            <img
              src={src}
              alt=""
              loading={isPriority ? "eager" : "lazy"}
              fetchpriority={isPriority ? "high" : "auto"}
              className="w-full h-full object-cover"
              onLoad={() => setIsLoaded(true)}
            />
          )}
        </motion.div>
      )}
    </div>
  );
};

export default SmartMedia;