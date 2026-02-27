import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '../common/Button';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  const heroImages = [
    '/assets/three_fold_groove/1.jpg',
    '/assets/oasis/1.jpg',
    '/assets/srujana/1.png',
    '/assets/kaira/3.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-16 lg:mt-20 pb-4 bg-white overflow-hidden">
      <div className="container-custom">
        
        {/* CAROUSEL: Height set to 80vh for impact */}
        <motion.div 
          className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-2xl overflow-hidden shadow-lg"
          style={{ opacity }}
        >
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Interior"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* HORIZONTAL LAYOUT: Heading and Button side-by-side */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 md:mt-5"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <h1 className="font-serif text-xl md:text-1xl lg:text-1xl text-gray-900 leading-tight">
              Craft Your Perfect <span className="text-[#942e06] italic">Dream Home</span>
            </h1>
            
            <div className="flex-shrink-0">
              <Button variant="primary" size="sm" to="/contact">
                Start Your Project
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;