import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';
import ProjectCarousel from '../components/carousel/ProjectCarousel';
import SmartMedia from '../components/common/SmartMedia';

const cleanPath = (path) => path?.replace(/^(\.?\/)?public\//, '/') || '';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectsData.projects.find((p) => p.slug === slug);
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) return <div className="pt-40 text-center">Project Not Found</div>;

  // LAYOUT CONFIGURATION: Matches the "Home Page" logic (12-column grid)
  const gridMapping = [
    { span: "md:col-span-12", aspect: "aspect-[21/9]" }, // 1: Hero landscape
    { span: "md:col-span-6", aspect: "aspect-[4/3]" },   // 2: Square/Box
    { span: "md:col-span-6", aspect: "aspect-[4/3]" },   // 3: Square/Box
    { span: "md:col-span-7 md:row-span-2", aspect: "aspect-[3/4]" }, // 4: Vertical
    { span: "md:col-span-5", aspect: "aspect-[16/9]" },  // 5: Small horizontal
    { span: "md:col-span-5", aspect: "aspect-[16/9]" },  // 6: Small horizontal
    { span: "md:col-span-6", aspect: "aspect-[4/3]" },   // 7
    { span: "md:col-span-6", aspect: "aspect-[4/3]" },   // 8
    { span: "md:col-span-12", aspect: "aspect-[21/9]" }, // 9: Full width feature
    { span: "md:col-span-6", aspect: "aspect-[4/3]" },   // 10
  ];

  return (
    <>
      <div className="pt-32 pb-20 bg-white min-h-screen">
        <div className="container-custom">
          {/* Project Header */}
          <header className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-gray-400 font-medium">
              {project.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-gray-900">
              {project.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 font-serif italic leading-relaxed">
              "{project.description}"
            </p>
          </header>

          {/* DYNAMIC GRID: Using gap-5 (x gap) to match your standard neat spacing */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">
            {project.media?.map((item, index) => {
              // Apply layout mapping, or default to standard square for extras
              const layout = gridMapping[index] || { span: "md:col-span-4", aspect: "aspect-square" };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative cursor-pointer overflow-hidden rounded-lg shadow-sm group ${layout.span}`}
                  onClick={() => { 
                    setCarouselStartIndex(index); 
                    setShowCarousel(true); 
                  }}
                >
                  <div className={`w-full h-full ${layout.aspect} bg-gray-50`}>
                    <SmartMedia 
                      src={cleanPath(item.url)} 
                      type={item.type} 
                      isPriority={index === 0}
                    />
                    {/* Hover effect to indicate it's clickable */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Carousel Overlay */}
      <AnimatePresence>
        {showCarousel && (
          <ProjectCarousel 
            media={project.media?.map(m => ({...m, url: cleanPath(m.url)}))} 
            initialIndex={carouselStartIndex}
            onClose={() => setShowCarousel(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetailPage;