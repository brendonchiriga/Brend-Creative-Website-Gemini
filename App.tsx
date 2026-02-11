import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BackgroundAnimation from './components/BackgroundAnimation';
import WhatsAppButton from './components/WhatsAppButton';
import CursorFollower from './components/CursorFollower';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
        // Handle hash scrolling
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            // Small timeout to ensure rendering
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // Fallback if element not found immediately (e.g., loading)
             window.scrollTo(0, 0);
             setTimeout(() => {
                 const el = document.getElementById(id);
                 if (el) el.scrollIntoView({ behavior: 'smooth' });
             }, 500);
        }
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-white font-sans antialiased selection:bg-brand-purple selection:text-white relative cursor-default">
        <BackgroundAnimation />
        <CursorFollower />
        <ScrollToTop />
        <Navbar />
        <WhatsAppButton />
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;