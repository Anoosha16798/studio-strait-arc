import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import siteData from '../../data/siteData.json'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Shared class for headers to ensure they match the logo style
  const headerClass = "text-base font-serif font-bold mb-6 text-white";

  return (
    <footer className="text-white relative overflow-hidden" style={{ backgroundColor: '#942e06' }}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>

      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/images/logo_icon/SA-Logo_White.png"
                alt="Studio Strait Arc Icon"
                className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="flex flex-col justify-center leading-none">
                <span className="text-white text-xl font-serif font-bold tracking-tight">Studio</span>
                <span className="text-white text-xl font-serif font-bold tracking-tight">Strait Arc</span>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Transforming spaces into timeless works of art. We bring your vision to life with innovative design solutions.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={headerClass}>Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className={headerClass}>Get In Touch</h3>
            <div className="space-y-4">
              <a href={`mailto:${siteData.site.email}`} className="text-white/80 hover:text-white transition-colors text-sm flex items-start gap-3 group">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{siteData.site.email}</span>
              </a>
              {/* <a href={`tel:${siteData.site.phone.replace(/\s/g, '')}`} className="text-white/80 hover:text-white transition-colors text-sm flex items-start gap-3 group">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteData.site.phone}</span>
              </a> */}
            </div>
          </div>

          {/* Office Location */}
          <div>
            <h3 className={headerClass}>Visit Our Studio</h3>
            <address className="not-italic text-white/80 text-sm leading-relaxed mb-4">
              {siteData.site.address.line1}<br />
              {siteData.site.address.line2}<br />
              {siteData.site.address.city}, {siteData.site.address.state} {siteData.site.address.zip}
            </address>
            <div className="text-white/80 text-sm">
              <p className="font-medium text-white mb-1">Hours</p>
              <p>{siteData.site.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Studio Strait Arc. All Rights Reserved. Crafted with passion.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="w-px h-4 bg-white/10"></span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="absolute bottom-0 left-0 w-full h-1" style={{ background: 'linear-gradient(to right, rgba(86, 28, 4, 0.9), #942e06, rgba(86, 28, 4, 0.9))' }}></div>
    </footer>
  );
};

export default Footer;