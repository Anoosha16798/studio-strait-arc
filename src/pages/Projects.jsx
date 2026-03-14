import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import testimonialsData from '../data/testimonials.json';
import SmartMedia from '../components/common/SmartMedia';
import { resolveMediaUrl } from '../utils/helpers';
import { motionTransition, viewportOnce } from '../utils/motion';

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedQuoteId, setExpandedQuoteId] = useState(null);
  const visibleProjects = projectsData.projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projectsData.projects.length;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const getTestimonial = (project) => {
    return testimonialsData.testimonials.find(t => project.id && t.id === `test-${project.id.split('-')[1]}`) || testimonialsData.testimonials[0];
  };

  return (
    <motion.div
      className="pt-header pb-16 md:pb-24 lg:pb-28 bg-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container-custom">
        <motion.header
          className="text-center pt-6 md:pt-8 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 text-gray-500">Our Portfolio</p>
          <h2 className="heading-xl mb-6 text-3xl md:text-5xl">Designing Dream Homes</h2>
        </motion.header>

        <div className="flex flex-col gap-0">
          {visibleProjects.map((project, idx) => {
            const isAlt = idx % 2 !== 0;
            const testimonial = getTestimonial(project);

            return (
              <motion.section
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: '-60px' }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full mb-8"
              >
                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {project.media && [project.media[0]?.url, project.media[1]?.url].map((url, i) => (
                    <Link key={i} to={`/projects/${project.slug}`} className="aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                      <SmartMedia 
                        src={resolveMediaUrl(url, { width: 1400 })} 
                        isPriority={idx === 0 && i === 0} 
                      />
                    </Link>
                  ))}
                </div>

                {/* Mixed Content Row */}
                <div className={`flex flex-col lg:grid gap-6 md:gap-8 ${isAlt ? 'lg:grid-cols-[1.4fr_2.6fr]' : 'lg:grid-cols-[2.6fr_1.4fr]'}`}>
                  <div className={`${isAlt ? 'lg:order-2' : ''} flex flex-col justify-between min-h-0`}>
                    <div className="md:border-l-2 border-primary-600/20 md:pl-8 pl-0 mb-6 md:mb-8 lg:mb-0 flex flex-col min-h-0">
                      <p className={`text-base md:text-lg text-gray-700 font-serif italic mb-3 md:mb-4 text-center md:text-left leading-relaxed ${expandedQuoteId === project.id ? '' : 'line-clamp-4'}`}>
                        "{testimonial.quote}"
                      </p>
                      {testimonial.quote && testimonial.quote.length > 200 && (
                        <button
                          type="button"
                          onClick={() => setExpandedQuoteId((prev) => (prev === project.id ? null : project.id))}
                          className="text-xs text-gray-500 hover:text-primary-600 transition-colors mb-4 md:mb-6 text-center md:text-left focus:outline-none"
                        >
                          {expandedQuoteId === project.id ? 'Show less' : 'Read more'}
                        </button>
                      )}
                      <Link to={`/projects/${project.slug}`} className="flex items-center gap-3 md:gap-4 justify-center md:justify-start mt-auto">
                        <span className="font-bold text-base md:text-2xl uppercase text-primary-600">{project.title}</span>
                        <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary-600 text-primary-600 flex items-center justify-center transition-all hover:bg-primary-600 hover:text-white">→</span>
                      </Link>
                    </div>
                    {project.media &&
                    <Link to={`/projects/${project.slug}`} className="aspect-[5/3] rounded-lg overflow-hidden shadow-md">
                      <SmartMedia src={resolveMediaUrl(project.media && project.media[2] && project.media[2]?.url, { width: 1400 })} isPriority={idx === 0} />
                    </Link>
          }
                  </div>
                  {project.media &&
                  <div className="aspect-[3/4] md:aspect-[3/5] rounded-lg overflow-hidden shadow-lg">
                    <SmartMedia 
                      src={resolveMediaUrl(
                        project.media && project.media[3] && project.media[3]?.url || project.autoplayVideo, 
                        { width: 1200, resourceType: 'video' }
                      )} 
                      poster={resolveMediaUrl(project.thumbnail ? project.thumbnail : '', { width: 800 })} 
                      type="video" 
                      isPriority={idx === 0} 
                    />
                  </div>
          }
                </div>
                {idx < visibleProjects.length - 1 && <div className="w-full h-px bg-gray-100 mt-8" />}
              </motion.section>
            );
          })}
        </div>

        {hasMoreProjects && (
          <div className="flex justify-center mt-12">
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={motionTransition.default}
              onClick={() => setVisibleCount(p => p + 3)}
              className="px-10 py-4 bg-primary-600 text-white rounded-full transition-all shadow-md hover:bg-primary-700"
            >
              Load More Projects
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;