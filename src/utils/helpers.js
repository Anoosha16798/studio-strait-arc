export const getImageUrl = (path) => path || '/images/placeholder.jpg';
export const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
export const truncateText = (text, maxLength) => text.length <= maxLength ? text : text.substr(0, maxLength) + '...';
export const generateSlug = (title) => title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
export const filterProjectsByCategory = (projects, category) => category === 'all' ? projects : projects.filter(project => project.category === category);
export const getFeaturedProjects = (projects, limit = 6) => projects.filter(project => project.featured).slice(0, limit);