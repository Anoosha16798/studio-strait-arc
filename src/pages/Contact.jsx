import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import siteData from '../data/siteData.json'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-gray-500">
            Get In Touch
          </p>
          <h1 className="heading-xl mb-8">Let's Create Something Beautiful</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="flex items-start space-x-5">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-primary-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Visit Our Office</h3>
                <address className="not-italic text-gray-600 text-base leading-relaxed">
                  {siteData.site.address.line1}<br/>
                  {siteData.site.address.city}
                </address>
              </div>
            </div>
            
            <div className="flex items-start space-x-5">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-primary-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Email Us</h3>
                <p className="text-gray-600">{siteData.site.email}</p>
              </div>
            </div>
          </motion.div>

          {/* Formspree Form */}
          <div className="lg:col-span-2">
            <form
              action="https://formspree.io/f/mqedlblg" // PASTE YOUR URL HERE
              method="POST"
              className="space-y-8"
            >
              <div>
                <label className="block text-base font-medium mb-3 text-gray-700">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 text-base outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-base font-medium mb-3 text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 text-base outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-base font-medium mb-3 text-gray-700">Message *</label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 resize-none text-base outline-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-all text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;