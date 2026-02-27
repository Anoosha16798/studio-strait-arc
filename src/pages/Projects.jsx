import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import testimonialsData from '../data/testimonials.json';
import SmartMedia from '../components/common/SmartMedia'
const cleanPath = (path) => {
  if (!path) return '';
  return path.replace(/^(\.?\/)?public\//, '/');
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProjects = projectsData.projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projectsData.projects.length;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const getTestimonial = (project) => {
    return testimonialsData.testimonials.find(t => project.id && t.id === `test-${project.id.split('-')[1]}`) || testimonialsData.testimonials[0];
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container-custom">
        <header className="text-center mb-20">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 text-gray-500">Our Portfolio</p>
          <h2 className="heading-xl mb-6 text-3xl md:text-5xl">Designing Dream Homes</h2>
        </header>

        <div className="flex flex-col gap-0">
          {visibleProjects.map((project, idx) => {
            const isPriority = idx === 0;
            const isAlt = idx % 2 !== 0;
            const testimonial = getTestimonial(project);

            return (
              <motion.section 
                key={project.id}
                initial={isPriority ? { opacity: 1 } : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full mb-8"
              >
                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {project.media && [project.media[0]?.url, project.media[1]?.url].map((url, i) => (
                    <Link key={i} to={`/projects/${project.slug}`} className="aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                      <SmartMedia 
                        src={cleanPath(url)} 
                        isPriority={isPriority} 
                      />
                    </Link>
                  ))}
                </div>

                {/* Mixed Content Row */}
                <div className={`flex flex-col lg:grid gap-8 ${isAlt ? 'lg:grid-cols-[1.4fr_2.6fr]' : 'lg:grid-cols-[2.6fr_1.4fr]'}`}>
                  <div className={`${isAlt ? 'lg:order-2' : ''} flex flex-col justify-between`}>
                    <div className="border-l-2 border-[#8B4513]/20 pl-8">
                      <p className="text-1xl md:text-2xl text-gray-800 font-serif italic mb-8">"{testimonial.quote}"</p>
                      <Link to={`/projects/${project.slug}`} className="flex items-center gap-4">
                        <span className="font-bold text-1xl md:text-3xl uppercase text-[#8B4513]">{project.title}</span>
                        <span className="w-10 h-10 rounded-full border border-[#8B4513] flex items-center justify-center transition-all">→</span>
                      </Link>
                    </div>
                    {project.media &&
                    <Link to={`/projects/${project.slug}`} className="aspect-[5/3] rounded-lg overflow-hidden shadow-md">
                      <SmartMedia src={cleanPath(project.media && project.media[2] && project.media[2]?.url)} isPriority={isPriority} />
                    </Link>
          }
                  </div>
                  {project.media &&
                  <div className="aspect-[3/4] md:aspect-[3/5] rounded-lg overflow-hidden shadow-lg">
                    <SmartMedia 
                      src={cleanPath(project.media &&project.media[3]&&project.media[3]?.url || project.autoplayVideo)} 
                      poster={cleanPath(project.thumbnail?project.thumbnail:'')} 
                      type="video" 
                      isPriority={isPriority} 
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
            <button onClick={() => setVisibleCount(p => p + 3)} className="px-10 py-4 bg-[#8B4513] text-white rounded-full transition-all shadow-md">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;