import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import siteData from '../data/siteData.json';
import { staggerContainer, staggerItem, motionTransition } from '../utils/motion';

const Contact = () => {
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value?.trim() || '';
    const email = form.email?.value?.trim() || '';
    const message = form.message?.value?.trim() || '';

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage('Email service is not configured. Please add VITE_EMAILJS_* to your .env file.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        form.reset();
      })
      .catch((err) => {
        setStatus('error');
        setErrorMessage(err?.text || err?.message || 'Something went wrong. Please try again.');
      });
  };

  return (
    <motion.div
      className="pt-header pb-20 bg-white min-h-screen"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <div className="container-custom">
        <motion.div
          variants={staggerItem}
          transition={motionTransition.default}
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
            variants={staggerItem}
            transition={motionTransition.default}
            className="space-y-10"
          >
            <div className="flex items-start space-x-5">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-primary-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Visit Our Office</h3>
                <address className="not-italic text-gray-600 text-base leading-relaxed">
               {siteData.site.address.line1}<br />
                            {siteData.site.address.line2}<br />
                            {siteData.site.address.city}, {siteData.site.address.state} {siteData.site.address.zip}
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

          {/* Contact Form */}
          <motion.div
            variants={staggerItem}
            transition={{ ...motionTransition.default, delay: 0.08 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div>
                <label className="block text-base font-medium mb-3 text-gray-700">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={status === 'sending'}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 text-base outline-none disabled:opacity-60"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-base font-medium mb-3 text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={status === 'sending'}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 text-base outline-none disabled:opacity-60"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-base font-medium mb-3 text-gray-700">Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  disabled={status === 'sending'}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 resize-none text-base outline-none disabled:opacity-60"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-all text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="text-center text-green-600 text-sm font-medium">
                    Message sent! We'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-center text-red-600 text-sm">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;