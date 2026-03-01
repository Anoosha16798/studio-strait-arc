import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Button from '../common/Button';
import aboutData from '../../data/about.json';
import SmartMedia from '../common/SmartMedia'; // Assuming common folder
import { resolveMediaUrl } from '../../utils/helpers';

const AboutPreview = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { founder } = aboutData;

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative transform-gpu pr-6 pb-6 md:pr-10 md:pb-10"
          >
            {/* Main Image - Large Portrait */}
            <div className="relative w-[85%] overflow-hidden rounded-2xl aspect-[3/4] isolate shadow-md">
              <SmartMedia 
                src={resolveMediaUrl(founder.image, { width: 1200 })} 
                isPriority={false} 
              />
            </div>

            {/* Secondary Image - Floating Overlap */}
            <div className="absolute bottom-0 right-0 w-[45%] overflow-hidden rounded-2xl aspect-square border-4 md:border-[6px] border-white shadow-xl isolate z-10">
                <SmartMedia 
                  src={resolveMediaUrl('/assets/interior-details.jpg', { width: 800 })} 
                  isPriority={false} 
                />
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="transform-gpu"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-gray-400"></span>
              <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-500">
              About Us
              </p>
            </div>
            
            <h2 className="heading-lg mb-8">
              Meet {founder.name.split(' ')[0]}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-800 mb-8 font-serif italic leading-relaxed">
              "{founder.quote}"
            </p>
            <div className="text-body mb-8 text-gray-600">
              {founder.bio}
            </div>

            <Button variant="outline" size="lg" to="/about">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;