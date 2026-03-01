const CLOUDINARY_CLOUD_NAME = 'douxv8tbe';

const buildCloudinaryUrl = (publicId, { width, quality = 'auto', resourceType = 'image' } = {}) => {
  if (!publicId) return '';

  const baseUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload/`;
  const transformations = ['f_auto', `q_${quality}`];

  if (width) {
    transformations.push(`w_${width}`);
  }

  const safeId = publicId.replace(/^\//, '');
  return `${baseUrl}${transformations.join(',')}/${safeId}`;
};

export const resolveMediaUrl = (path, options = {}) => {
  if (!path) return '';

  // If it's already an absolute URL, just return it
  if (/^https?:\/\//i.test(path)) return path;

  // If it's a local asset path, keep it as-is
  if (path.startsWith('/assets') || path.startsWith('/images') || path.startsWith('/public')) {
    return path.replace(/^\/public/, '');
  }

  // Otherwise treat it as a Cloudinary public ID
  return buildCloudinaryUrl(path, options);
};

export const getImageUrl = (path) => path || '/images/placeholder.jpg';
export const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
export const truncateText = (text, maxLength) => text.length <= maxLength ? text : text.substr(0, maxLength) + '...';
export const generateSlug = (title) => title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
export const filterProjectsByCategory = (projects, category) => category === 'all' ? projects : projects.filter(project => project.category === category);
export const getFeaturedProjects = (projects, limit = 6) => projects.filter(project => project.featured).slice(0, limit);