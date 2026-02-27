import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import aboutData from '../data/about.json';
import Button from '../components/common/Button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { hero, founder, layers, values, team, stats } = aboutData;

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
              {hero.subtitle}
            </p>
            <h1 className="heading-xl mb-6">{hero.title}</h1>
            <p className="text-md text-gray-600">{hero.description}</p>
          </motion.div>
        </div>
      </section>

      <FounderSection founder={founder} />
      <StatsSection stats={stats} />
      <LayersSection layers={layers} />
      <ValuesSection values={values} />

      {/* Process Gallery */}
      <ProcessGallerySection />

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-lg text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create something beautiful together
            </p>
            <Button variant="primary" size="lg" to="/contact">
              GET IN TOUCH
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const HeroImagesSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const heroImages = [
    { url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop', span: 'md:col-span-2' },
    { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop', span: 'md:col-span-1' },
    { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=800&fit=crop', span: 'md:col-span-1' },
    { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop', span: 'md:col-span-1' },
    { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop', span: 'md:col-span-2' },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden rounded-lg ${image.span} aspect-[4/3]`}
            >
              <img
                src={image.url}
                alt={`Studio work ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderSection = ({ founder }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-auto object-cover"
              />
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
          >
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
              Founder Story
            </p>
            <h2 className="heading-lg mb-2">{founder.name}</h2>
            <p className="text-gray-600 mb-6 text-lg">{founder.title}</p>
            <p className="text-2xl text-gray-700 mb-8 italic font-light leading-relaxed">
              "{founder.quote}"
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">{founder.bio}</p>
            {founder.story.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = ({ stats }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-primary-600 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-white">{stats.title}</h2>
        </motion.div>

        {/* Centered grid: 3 items perfectly centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center">
          {stats.items.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center group w-full max-w-xs"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
    </section>
  );
};


const LayersSection = ({ layers }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This creates the "one by one" effect
        delayChildren: 0.1    // slight delay before starting
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      // We set the base styles here in the variant instead of the 'initial' prop
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
      scale: 1
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">{layers.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {layers.subtitle}
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Waits until 100px of the list is visible
        >
          {layers.items.map((layer, index) => (
            <motion.div
              key={layer.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(249, 250, 251, 1)", // bg-gray-50
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" // shadow-lg
              }}
              // Fast transition for hover interaction (200ms)
              transition={{ duration: 0.2 }}
              className="flex gap-6 items-start p-6 rounded-xl cursor-default bg-white"
            >
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg shadow-lg"
              >
                {index + 1}
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {layer.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {layer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ValuesSection = ({ values }) => {
  const [ref, isVisible] = useScrollAnimation();

  const iconPaths = {
    0: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    1: "M13 10V3L4 14h7v7l9-11h-7z",
    2: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    3: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    4: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    5: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  };

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">{values.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{values.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.items.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[index] || iconPaths[0]} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessGallerySection = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const processImages = [
    { url: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop', title: 'Design' },
    { url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop', title: 'Execution' },
    { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop', title: 'Completion' },
  ];

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Our Process in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, see how we bring your vision to life
          </p>
        </motion.div>

        {/* MAGIC: auto-fit + justify-center */}
        <div className="grid grid-flow-col auto-cols-fr max-w-4xl mx-auto justify-center gap-6 p-4">
          {processImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative overflow-hidden rounded-lg aspect-[4/3] shadow-md hover:shadow-xl group min-w-0"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
