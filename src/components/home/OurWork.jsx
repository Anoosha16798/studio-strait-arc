import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Button from '../common/Button';
import projectsData from '../../data/projects.json';
import SmartMedia from '../common/SmartMedia';

const cleanPath = (path) => path?.replace(/^(\.?\/)?public\//, '/') || '';

const OurWork = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  // Flatten project media into a single list to populate the 11 sketch slots
  const allMedia = projectsData.projects.flatMap(project => 
    (project.media || []).map(m => ({ ...m, slug: project.slug }))
  ).slice(0, 11);

  // Layout configuration mapping exactly to your numbered sketch (1-11)
  const gridMapping = [
    { span: "md:col-span-6 md:row-span-2", aspect: "aspect-[3/4]" },   // 1: Large Vertical
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },  // 2: Top Right
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },  // 3: Mid Right
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },   // 5: Mid Left
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },   // 4: Mid Center/Right
    { span: "md:col-span-12 md:row-span-1", aspect: "aspect-[21/9]" }, // 6: Full Width Feature
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },   // 7: Lower Left
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },   // 8: Lower Right
    { span: "md:col-span-6 md:row-span-2", aspect: "aspect-[3/4]" },   // 9: Bottom Large Vertical
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },  // 10: Bottom Right Top
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },  // 11: Bottom Right Base
  ];

  return (
    <section ref={ref} className="pb-24 bg-white">
      <div className="container-custom">
        <header className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">Our Latest In</p>
          <h2 className="text-4xl font-serif">Designing Dream Homes</h2>
        </header>

        {/* 'gap-4' ensures the equal 'x' distance requested */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-fr">
          {allMedia.map((item, index) => {
            const layout = gridMapping[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08 }}
                className={`${layout.span} relative group`}
              >
                <Link to={`/projects/${item.slug}`}>
                  <div className={`w-full h-full ${layout.aspect} overflow-hidden rounded-sm bg-gray-50`}>
                    <SmartMedia 
                      src={cleanPath(item.url)} 
                      type={item.type || 'image'}
                    />
                    {/* Minimal hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="md" to="/projects">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;