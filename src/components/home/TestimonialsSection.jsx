import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import testimonialsData from '../../data/testimonials.json';

// --- UTILITY: CLEAN PATHS ---
const cleanPath = (path) => path?.replace(/^(\.?\/)?public\//, '/') || '';

const TestimonialsSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { title, subtitle, testimonials } = testimonialsData;
  const featuredTestimonials = testimonials.filter(t => t.featured);

  return (
    <section ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Restored Original Heading CSS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="text-xs md:text-sm tracking-[0.3em] text-gray-500 uppercase mb-3">
            {subtitle}
          </p>
          <h2 className="heading-lg mb-3">{title}</h2>
        </motion.div>

        <div className="flex flex-col gap-32 lg:gap-40">
          {featuredTestimonials.map((testimonial, index) => {
            const isAlt = index % 2 !== 0;
            const mainImage = testimonial.projectImages?.[0] || testimonial.image;
            
            // Extracting the project slug (e.g., from "test-1" to "project-1" slug mapping)
            // If your JSON doesn't have a direct slug, we link to the general projects or a fallback
            const projectSlug = testimonial.projectSlug || ""; 

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:grid gap-12 lg:gap-24 items-center ${
                  isAlt ? 'lg:grid-cols-[1.2fr_2.8fr]' : 'lg:grid-cols-[2.8fr_1.2fr]'
                }`}
              >
                {/* Text Content with Vertical Border and Navigation Arrow */}
                <div className={`${isAlt ? 'lg:order-2' : ''} flex flex-col justify-center`}>
                  <div className="border-l-2 border-[#8B4513]/20 pl-8 py-2">
                    <p className="text-xl md:text-2xl text-gray-800 font-serif italic mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold uppercase tracking-wide text-[#8B4513]">
                          {testimonial.name}
                        </span>
                     
                      </div>

                      {/* Redirect Arrow to Project Details */}
                      {projectSlug && (
                        <Link 
                          to={`/projects/${projectSlug}`}
                          className="w-10 h-10 rounded-full border border-[#8B4513] flex items-center justify-center text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all duration-300"
                        >
                          →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[450px] rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={cleanPath(mainImage)}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;