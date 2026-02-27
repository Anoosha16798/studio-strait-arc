import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Button from '../common/Button';

const CTASection = ({
  title = "Ready to Transform Your Space?",
  subtitle = "Let's create something beautiful together",
  buttonText = "I WANT TO PROCEED"
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="heading-lg mb-8 text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-14 font-light text-gray-600">
              {subtitle}
            </p>
          )}

          <div className="flex flex-col items-center gap-6">
            <Button
              variant="primary"
              size="lg"
              to="/contact"
            >
              {buttonText}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;