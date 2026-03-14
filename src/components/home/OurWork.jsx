import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import projectsData from '../../data/projects.json';
import SmartMedia from '../common/SmartMedia';
import { resolveMediaUrl } from '../../utils/helpers';
import { motionTransition, viewportOnce } from '../../utils/motion';

const OurWork = () => {
  // Use only the first 2 projects, but keep the original collage layout
  const limitedProjects = projectsData.projects.slice(0, 2);
  const allMedia = limitedProjects.flatMap(project =>
    (project.media || []).map(m => ({ ...m, slug: project.slug }))
  ).slice(0, 11);

  // Original 11-slot collage layout
  const gridMapping = [
    { span: "md:col-span-6 md:row-span-2", aspect: "aspect-[3/4]" },
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },
    { span: "md:col-span-12 md:row-span-1", aspect: "aspect-[21/9]" },
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[4/3]" },
    { span: "md:col-span-6 md:row-span-2", aspect: "aspect-[3/4]" },
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },
    { span: "md:col-span-6 md:row-span-1", aspect: "aspect-[16/9]" },
  ];

  return (
    <section className="pt-7 md:pt-9 lg:pt-12 pb-24 bg-white">
      <div className="container-custom">
        <motion.header
          className="text-center mb-10 md:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition.default}
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-3 md:mb-4">Our Latest In</p>
          <h2 className="text-3xl md:text-4xl font-serif">Designing Dream Homes</h2>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {allMedia.map((item, index) => {
            const layout = gridMapping[index];
            if (!layout) return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...motionTransition.default, delay: index * 0.06 }}
                className={`${layout.span} relative group transform-gpu`}
              >
                <Link to={`/projects/${item.slug}`}>
                  <div className={`w-full h-full ${layout.aspect} overflow-hidden rounded-xl md:rounded-sm bg-gray-50 isolate`}>
                    <SmartMedia
                      src={resolveMediaUrl(item.url, {
                        width: 1600,
                        resourceType: item.type === 'video' ? 'video' : 'image',
                      })}
                      type={item.type || 'image'}
                    />
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