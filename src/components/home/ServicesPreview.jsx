import { useState } from 'react';
import { motion } from 'framer-motion';
import aboutData from '../../data/about.json';
import { motionTransition, viewportOnce } from '../../utils/motion';

// Icons for each process step (Understanding → Concept → Design → Execution → Handover)
const stepIcons = [
  // 1. Understanding You – conversation / listening
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>,
  // 2. Concept & Mood – lightbulb / ideas
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  // 3. Designing the Details – pencil / blueprint
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>,
  // 4. Execution – tools / coordination
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // 5. The Handover – key / completion
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </svg>,
];

const ServicesPreview = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const layers = aboutData.layers;

  const handleToggle = (index) => (e) => {
    e.stopPropagation();
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition.default}
          className="text-center mb-12 md:mb-20 max-w-4xl mx-auto transform-gpu"
        >
          <h2 className="heading-lg mb-4 md:mb-8">{layers.title}</h2>
          <p className="text-base md:text-2xl text-gray-600 font-light">{layers.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-16 md:mb-20">
          {layers.items.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...motionTransition.default, delay: index * 0.08 }}
              className="group flex flex-col bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/90 h-full"
            >
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-5 transition-colors duration-300 group-hover:bg-primary-600 [&_svg]:text-primary-600 [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:!text-white">
                {stepIcons[index]}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 leading-snug flex-shrink-0">
                {layer.title}
              </h3>
              <p className={`text-sm md:text-base text-gray-600 leading-relaxed text-left min-h-0 flex-1 ${expandedIndex === index ? '' : 'line-clamp-5'}`}>
                {layer.description}
              </p>
              <button
                type="button"
                onClick={handleToggle(index)}
                className="mt-3 flex-shrink-0 text-left text-xs text-gray-400 hover:text-[#942e06] transition-colors focus:outline-none focus:text-[#942e06]"
                aria-expanded={expandedIndex === index}
              >
                {expandedIndex === index ? 'Show less' : 'Read more'}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={motionTransition.default}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transform-gpu"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
