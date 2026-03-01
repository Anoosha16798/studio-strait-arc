import { motion } from 'framer-motion';
import Button from '../common/Button';
import servicesData from '../../data/services.json';
import { motionTransition, viewportOnce } from '../../utils/motion';

const ServicesChecklist = () => {
  const { servicesList } = servicesData;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition.default}
          className="text-center mb-20 transform-gpu"
        >
          <h2 className="heading-lg mb-8 text-gray-900">
            {servicesList.title}
          </h2>
          <p className="text-2xl font-light max-w-3xl mx-auto text-gray-600">
            {servicesList.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ ...motionTransition.default, delay: index * 0.05 }}
                className="flex items-start gap-5 transform-gpu"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 bg-primary-600">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-xl text-gray-700">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <Button
              variant="primary"
              size="lg"
              to="/contact"
            >
              GET STARTED
            </Button>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesChecklist;