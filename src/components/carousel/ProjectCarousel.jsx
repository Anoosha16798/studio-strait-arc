import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';

const preloadImage = (url) => {
  if (!url || typeof url !== 'string') return;
  const img = new Image();
  img.src = url;
};

const ProjectCarousel = ({ media, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [currentLoaded, setCurrentLoaded] = useState(false);

  const currentMedia = media[currentIndex];

  // Preload current and adjacent images so next/prev are instant
  useEffect(() => {
    const prev = currentIndex === 0 ? media.length - 1 : currentIndex - 1;
    const next = currentIndex === media.length - 1 ? 0 : currentIndex + 1;
    [currentIndex, prev, next].forEach((i) => {
      const item = media[i];
      if (item?.type === 'image' && item.url) preloadImage(item.url);
    });
  }, [currentIndex, media]);

  // Reset loaded state when slide changes; for images we wait for onLoad
  useEffect(() => {
    if (currentMedia?.type === 'image') setCurrentLoaded(false);
    else setCurrentLoaded(true);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const handleImageLoad = () => setCurrentLoaded(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white hover:text-gray-300 transition-colors"
      >
        <HiX className="w-10 h-10" />
      </button>

      <button
        onClick={goToPrevious}
        className="absolute left-6 z-50 text-white hover:text-gray-300 transition-colors"
      >
        <HiChevronLeft className="w-12 h-12" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 z-50 text-white hover:text-gray-300 transition-colors"
      >
        <HiChevronRight className="w-12 h-12" />
      </button>

      <div className="w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl max-h-full w-full h-full flex flex-col items-center justify-center relative"
          >
            {currentMedia.type === 'image' ? (
              <>
                {!currentLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={currentMedia.url}
                  alt={currentMedia.caption}
                  className="max-w-full max-h-full object-contain transition-opacity duration-300"
                  loading="eager"
                  decoding="async"
                  onLoad={handleImageLoad}
                  style={{ opacity: currentLoaded ? 1 : 0 }}
                />
              </>
            ) : (
              <div className="w-full aspect-video max-h-full">
                <iframe
                  src={currentMedia.url}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            <p className="text-white mt-6 text-center text-lg">
              {currentMedia.caption}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {media.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 text-white text-sm">
        {currentIndex + 1} / {media.length}
      </div>
    </motion.div>
  );
};

export default ProjectCarousel;