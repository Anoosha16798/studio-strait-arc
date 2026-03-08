import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import testimonialsData from '../../data/testimonials.json';
import { motionTransition, viewportOnce } from '../../utils/motion';

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
  const hasLongQuote = testimonial.quote && testimonial.quote.length > 200;
  const projectType = testimonial.projectType || testimonial.role;
  const location = testimonial.location || testimonial.date || '';

  return (
    <div className="flex flex-col h-full bg-white rounded-xl border border-gray-200/80 shadow-sm p-6 md:p-8 text-left">
      <StarRating
        rating={testimonial.rating ?? 5}
        className="text-[#942e06] mb-4"
      />
      <p
        className={`font-serif text-gray-800 text-sm md:text-base leading-relaxed flex-1 min-h-0 ${
          isExpanded ? '' : 'line-clamp-5'
        }`}
      >
        "{testimonial.quote}"
      </p>
      {hasLongQuote && (
        <button
          type="button"
          onClick={onToggleExpand}
          className="mt-3 text-left text-xs text-gray-400 hover:text-[#942e06] transition-colors focus:outline-none"
        >
          {isExpanded ? 'Show less' : 'See more'}
        </button>
      )}
      <p className="font-serif font-semibold text-gray-900 mt-4 text-base md:text-lg">
        {testimonial.name}
      </p>
      {projectType && (
        <p className="font-serif text-sm text-[#942e06] mt-0.5">
          {projectType}
        </p>
      )}
      {location && (
        <p className="text-gray-600 text-xs md:text-sm mt-0.5">
          {location}
        </p>
      )}
      {testimonial.projectSlug && (
        <Link
          to={`/projects/${testimonial.projectSlug}`}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#942e06] hover:underline focus:outline-none"
        >
          View project
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const { title, subtitle, testimonials } = testimonialsData;
  const featured = testimonials.filter((t) => t.featured);
  const list = featured.slice(0, 3);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#FBF9F6] overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition.default}
          className="text-center mb-12 md:mb-16"
        >
          <p
            className="text-xs md:text-sm tracking-[0.25em] uppercase mb-2 font-medium"
            style={{ color: '#942e06' }}
          >
            {subtitle}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {list.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...motionTransition.default, delay: index * 0.08 }}
              className="min-w-0"
            >
              <TestimonialCard
                testimonial={testimonial}
                isExpanded={expandedCardId === testimonial.id}
                onToggleExpand={() =>
                  setExpandedCardId((prev) =>
                    prev === testimonial.id ? null : testimonial.id
                  )
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
