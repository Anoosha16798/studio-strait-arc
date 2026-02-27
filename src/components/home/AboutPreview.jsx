import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Button from '../common/Button';
import aboutData from '../../data/about.json';
import SmartMedia from '../common/SmartMedia'; // Assuming common folder

const cleanPath = (path) => path?.replace(/^(\.?\/)?public\//, '/') || '';

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
            className="relative"
          >
            {/* Main Image with Skeleton */}
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
              <SmartMedia 
                src={cleanPath(founder.image)} 
                isPriority={false} 
              />
            </div>

            {/* Additional Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <SmartMedia 
                  src="/assets/design-process.jpg" 
                  isPriority={false} 
                />
              </div>
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <SmartMedia 
                  src="/assets/interior-details.jpg" 
                  isPriority={false} 
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-gray-500">
              About Us
            </p>
            <h2 className="heading-lg mb-8">
              Meet {founder.name.split(' ')[0]}
            </h2>
            <p className="text-2xl text-gray-700 mb-8 italic font-light leading-relaxed">
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