import { motion } from 'framer-motion';
import aboutData from '../../data/about.json';
import { motionTransition, viewportOnce } from '../../utils/motion';

// Split "Title (Bracket content)" into { main, sub } for display
const parseTitle = (title) => {
  const match = title.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (match) return { main: match[1].trim(), sub: match[2].trim() };
  return { main: title, sub: null };
};

const ServicesPreview = () => {
  const layers = aboutData.layers;
  const steps = layers.items.map((item, i) => ({
    ...item,
    number: String(i + 1).padStart(2, '0'),
    ...parseTitle(item.title),
  }));

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition.default}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="heading-lg mb-3 md:mb-4 text-gray-900">{layers.title}</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">{layers.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...motionTransition.default, delay: index * 0.06 }}
              className="relative flex flex-col items-center text-center"
            >
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[2rem] h-px bg-gray-200 pointer-events-none"
                  style={{
                    left: 'calc(50% + 2rem)',
                    width: 'calc(50% - 2rem)',
                  }}
                  aria-hidden
                />
              )}

              <div
                className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center bg-white flex-shrink-0 mb-4 md:mb-5"
                style={{ borderColor: '#942e06' }}
              >
                <span
                  className="font-serif text-lg md:text-xl font-bold"
                  style={{ color: '#942e06' }}
                >
                  {step.number}
                </span>
              </div>

              <h3 className="font-serif text-lg md:text-xl font-semibold text-gray-900 mb-1.5">
                {step.main}
              </h3>
              {step.sub && (
                <p className="text-sm text-gray-500 mb-3 max-w-[200px] mx-auto">
                  {step.sub}
                </p>
              )}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[260px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
