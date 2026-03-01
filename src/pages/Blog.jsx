import { useEffect } from 'react';
import { motion } from 'framer-motion';
import blogData from '../data/blog.json';
import { formatDate } from '../utils/helpers';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-header pb-20 bg-white min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase mb-2 text-gray-600">
            {blogData.subtitle}
          </p>
          <h1 className="heading-lg">{blogData.title}</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogData.posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-dark text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{formatDate(post.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="heading-sm mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-primary font-medium group-hover:underline">
                  Read More →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;