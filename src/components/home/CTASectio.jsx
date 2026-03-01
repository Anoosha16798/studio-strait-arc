import { motion } from 'framer-motion';
import Button from '../common/Button';
import { motionTransition, viewportOnce } from '../../utils/motion';

const CTASection = ({
  title = "Ready to Transform Your Space?",
  subtitle = "Let's create something beautiful together",
  buttonText = "I WANT TO PROCEED",
  darkBackground = false,
}) => {
  return (
    <section
      className={`section-padding relative overflow-hidden ${darkBackground ? 'bg-primary-600' : 'bg-white'}`}
    >
      {darkBackground && (
        <>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
        </>
      )}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition.default}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className={`heading-lg mb-8 ${darkBackground ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-xl md:text-2xl mb-14 font-light ${darkBackground ? 'text-white/90' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          )}

          <div className="flex flex-col items-center gap-6">
            <Button
              variant={darkBackground ? 'secondary' : 'primary'}
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