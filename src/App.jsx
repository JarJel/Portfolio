import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';

/**
 * Main Application Component
 * Assembles:
 * - Navbar (floating / sticky)
 * - Hero section (dark theme + splash + glossy spheres)
 * - About section (light contrast theme + stack badges)
 * - Projects section (light contrast theme + card grid + detail modal trigger)
 * - ProjectDetailModal (fullscreen detail page with gallery for BUMDESMart 2.0 & SIMANTAP)
 * - Contact section (light/soft theme + simple form)
 * - Footer (dark slate theme + socials + copy)
 */
function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);

  // Check URL hash on load or hash change to support direct linking (#bumdesmart, #simantap)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#bumdesmart' || hash === '#bumdesmart-2' || hash === '#project-bumdesmart') {
        setActiveProjectId('bumdesmart-2');
      } else if (hash === '#simantap' || hash === '#project-simantap') {
        setActiveProjectId('simantap');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenDetail = (projectId) => {
    setActiveProjectId(projectId);
  };

  const handleCloseDetail = () => {
    setActiveProjectId(null);
    if (window.location.hash.includes('project') || window.location.hash.includes('bumdesmart') || window.location.hash.includes('simantap')) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Sticky/Transparent Navbar at top */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        {/* Dark paint-textured hero banner */}
        <Hero />
        
        {/* Soft gray about info and tech stack */}
        <About />
        
        {/* White portfolio cards grid */}
        <Projects onOpenDetail={handleOpenDetail} />
        
        {/* Soft gray form and contacts detail */}
        <Contact />
      </main>
      
      {/* Dark slate footer */}
      <Footer />

      {/* Project Detail Modal Overlay for BUMDESMart 2.0 & SIMANTAP */}
      {activeProjectId && (
        <ProjectDetailModal 
          projectId={activeProjectId} 
          onClose={handleCloseDetail} 
          onSelectProject={setActiveProjectId} 
        />
      )}
    </div>
  );
}

export default App;

