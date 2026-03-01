import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';
import ProjectCarousel from '../components/carousel/ProjectCarousel';
import SmartMedia from '../components/common/SmartMedia';
import { resolveMediaUrl } from '../utils/helpers';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectsData.projects.find((p) => p.slug === slug);
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) return <div className="pt-40 text-center">Project Not Found</div>;

  // Combine base media and extra detailMedia for the detail page only
  const baseMedia = project.media || [];
  const extraDetailMedia = project.detailMedia || [];
  const detailMedia = [...baseMedia, ...extraDetailMedia];

  // Carousel media with full-size URLs (compute once for preload + carousel)
  const carouselMedia = detailMedia.map((m) => ({
    ...m,
    url: resolveMediaUrl(m.url, {
      width: 2000,
      resourceType: m.type === 'video' ? 'video' : 'image',
    }),
  }));

  const preloadCarouselImage = (index) => {
    const item = carouselMedia[index];
    if (item?.type === 'image' && item?.url) {
      const img = new Image();
      img.src = item.url;
    }
  };

  // Collage layout (same as Home OurWork): repeat this 11-slot pattern for ALL items
  const gridMapping = [
    { span: "md:col-span-6 md:row-span-2", aspect: "aspect-[3/4]" },   // 1: Large Vertical
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },  // 2: Top Right
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },  // 3: Mid Right
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },   // 4
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },   // 5
    { span: "md:col-span-12 md:row-span-1", aspect: "aspect-[21/9]" }, // 6: Full Width
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },   // 7
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },   // 8
    { span: "md:col-span-6 md:row-span-2", aspect: "aspect-[3/4]" },   // 9: Bottom Large Vertical
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },  // 10
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },  // 11
  ];

  return (
    <>
      <div className="pt-header pb-20 bg-white min-h-screen">
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

          {/* Collage grid: same 11-slot pattern repeated for all media (index % 11) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {detailMedia.map((item, index) => {
              const layout = gridMapping[index % 11];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 11) * 0.05 }}
                  className={`relative cursor-pointer overflow-hidden rounded-sm shadow-sm group ${layout.span}`}
                  onClick={() => { 
                    setCarouselStartIndex(index); 
                    setShowCarousel(true); 
                  }}
                  onMouseEnter={() => preloadCarouselImage(index)}
                >
                  <div className={`w-full h-full ${layout.aspect} bg-gray-50`}>
                    <SmartMedia
                      src={resolveMediaUrl(item.url, { 
                        width: 1600,
                        resourceType: item.type === 'video' ? 'video' : 'image'
                      })}
                      type={item.type}
                      isPriority={index === 0}
                    />
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
            media={carouselMedia} 
            initialIndex={carouselStartIndex}
            onClose={() => setShowCarousel(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetailPage;