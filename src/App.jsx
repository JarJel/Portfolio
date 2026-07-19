import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main Application Component
 * Assembles:
 * - Navbar (floating / sticky)
 * - Hero section (dark theme + splash + glossy spheres)
 * - About section (light contrast theme + stack badges)
 * - Projects section (light contrast theme + card grid)
 * - Contact section (light/soft theme + simple form)
 * - Footer (dark slate theme + socials + copy)
 */
function App() {
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
        <Projects />
        
        {/* Soft gray form and contacts detail */}
        <Contact />
      </main>
      
      {/* Dark slate footer */}
      <Footer />
    </div>
  );
}

export default App;
