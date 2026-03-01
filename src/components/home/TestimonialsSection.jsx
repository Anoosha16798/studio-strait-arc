import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import testimonialsData from '../../data/testimonials.json';
import { motionTransition, viewportOnce } from '../../utils/motion';

const cleanPath = (path) => path?.replace(/^(\.?\/)?public\//, '/') || '';

const StarRating = ({ rating, className = '' }) => (
  <div className={`flex gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <svg
        key={i}
        className="w-4 h-4 flex-shrink-0"
        fill={i <= rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, isExpanded, onToggleExpand }) => {
  const avatarSrc = testimonial.image ? cleanPath(testimonial.image) : null;
  const initial = testimonial.name.charAt(0).toUpperCase();
  const hasLongQuote = testimonial.quote && testimonial.quote.length > 180;

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-200/90 shadow-sm p-6 md:p-8 min-h-[280px]">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-primary-50 flex items-center justify-center text-primary-600 font-semibold text-lg">
          {avatarSrc ? (
            <img src={avatarSrc} alt="" className="w-full h-full object-cover" />
          ) : (
            initial
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-gray-900 text-primary-600">{testimonial.name}</p>
          {testimonial.date && (
            <p className="text-xs text-gray-500 mt-0.5">{testimonial.date}</p>
          )}
        </div>
      </div>
      <StarRating rating={testimonial.rating ?? 5} className="text-primary-600 mb-4" />
      <p
        className={`text-gray-600 text-sm md:text-base leading-relaxed flex-1 min-h-0 ${
          isExpanded ? '' : 'line-clamp-4'
        }`}
      >
        {testimonial.quote}
      </p>
      {hasLongQuote && (
        <button
          type="button"
          onClick={onToggleExpand}
          className="mt-3 text-left text-xs text-gray-400 hover:text-primary-600 transition-colors focus:outline-none"
        >
          {isExpanded ? 'Show less' : 'See more'}
        </button>
      )}
      {testimonial.projectSlug && (
        <Link
          to={`/projects/${testimonial.projectSlug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-600/30 rounded"
        >
          View project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const { title, subtitle, testimonials } = testimonialsData;
  const list = testimonials.filter((t) => t.featured);
  const total = list.length;

  const cardsPerView = 1;
  const maxIndex = Math.max(0, total - cardsPerView);

  const goPrev = () => setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition.default}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs md:text-sm tracking-[0.2em] text-gray-500 uppercase mb-2">
            {subtitle}
          </p>
          <h2 className="heading-lg">{title}</h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <TestimonialCard
                  testimonial={list[currentIndex]}
                  isExpanded={expandedCardId === list[currentIndex]?.id}
                  onToggleExpand={() =>
                    setExpandedCardId((prev) =>
                      prev === list[currentIndex]?.id ? null : list[currentIndex]?.id
                    )
                  }
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 rounded-full border-2 border-primary-600 bg-white text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-600/40 z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 rounded-full border-2 border-primary-600 bg-white text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-600/40 z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {total > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {list.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
