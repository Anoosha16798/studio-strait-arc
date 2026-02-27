import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

  return (
    <Router>
      {showIntro && !hasSeenIntro && <LogoIntro onComplete={handleIntroComplete} />}
      <div className="min-h-screen bg-white flex flex-col">
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
      </div>
    </Router>
  );
}
export default App;