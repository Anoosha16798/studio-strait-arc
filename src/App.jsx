import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/common/Header'
import Footer from './components/common/Footer';
import LogoIntro from './components/common/LogoIntro';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetailPage';
import About from './pages/About';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro in this session
    const introSeen = sessionStorage.getItem('introSeen');
    if (introSeen) {
      setShowIntro(false);
      setHasSeenIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasSeenIntro(true);
    sessionStorage.setItem('introSeen', 'true');
  };

  const isIntroActive = showIntro && !hasSeenIntro;

  return (
    <Router>
      {isIntroActive && <LogoIntro onComplete={handleIntroComplete} />}
      <motion.div
        className="min-h-screen bg-white flex flex-col"
        style={{ pointerEvents: isIntroActive ? 'none' : 'auto' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroActive ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          id="whatsapp-btn"
          href="https://wa.me/919902253473"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: '#25D366' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.348L4.5 28.5l7.348-1.715A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 01-4.868-1.262l-.347-.201-4.363 1.02 1.046-4.253-.222-.36A9.944 9.944 0 016 15C6 9.477 10.477 5 16 5zm-3.293 5.293c-.195 0-.512.073-.781.366C11.656 11 10.5 12.119 10.5 14.381c0 2.262 1.646 4.449 1.875 4.756.229.307 3.193 5.074 7.875 6.918 1.099.44 1.956.703 2.625.9.548.162 1.053.14 1.449.085.442-.062 1.361-.556 1.553-1.092.191-.537.191-.997.134-1.092-.057-.096-.212-.153-.447-.268-.234-.115-1.38-.68-1.595-.757-.214-.077-.371-.115-.528.115-.157.23-.606.757-.743.913-.136.155-.273.174-.507.058-.234-.115-.988-.364-1.882-1.161-.695-.62-1.164-1.386-1.3-1.62-.136-.234-.014-.36.102-.476.104-.104.234-.271.351-.407.117-.135.156-.23.234-.384.078-.155.039-.29-.019-.406-.057-.116-.528-1.273-.724-1.744-.19-.457-.386-.395-.528-.403-.136-.007-.293-.009-.45-.009z"/>
          </svg>
        </a>
      </motion.div>
    </Router>
  );
}
export default App;