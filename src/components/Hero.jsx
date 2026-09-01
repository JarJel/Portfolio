import React from 'react';
import avatarImg from '../assets/avatar.jpg';

/**
 * Hero Section Component
 * Features:
 * - Dark theme with abstract paint-splash background.
 * - Decorative animated glossy spheres in top-right and bottom-left.
 * - Text animations and responsive layout.
 * - Profile/avatar container on the right side.
 */
export default function Hero() {
  return (
    <section 
      id="home" 
      className="paint-splash-bg min-h-screen flex items-center relative pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative paint splash overlay for micro-texture */}
      <div className="paint-splash-overlay"></div>

      {/* GLOSSY SPHERE: Top-Right (Rose/Pink gradient, animated) */}
      <div className="absolute top-12 right-[-5%] md:right-[5%] w-60 h-60 md:w-80 md:h-80 glossy-sphere-orange animate-float-medium z-10 opacity-70 pointer-events-none"></div>

      {/* GLOSSY SPHERE: Bottom-Left (Blue/Indigo gradient, animated) */}
      <div className="absolute bottom-12 left-[-10%] md:left-[5%] w-56 h-56 md:w-72 md:h-72 glossy-sphere animate-float-slow z-10 opacity-75 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 w-full">
        
        {/* LEFT COLUMN: Texts and CTA */}
        <div className="lg:col-span-7 text-left space-y-6 flex flex-col justify-center">
          
          {/* Accent Line + Subtitle */}
          <div className="inline-flex items-center space-x-2">
            <span className="w-10 h-[2px] bg-indigo-500 rounded"></span>
            <span className="text-indigo-400 font-medium tracking-wider text-sm md:text-base uppercase">
              Hi, I'm Fajar,
            </span>
          </div>

          {/* Large Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none font-heading tracking-tighter">
            I'M A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              WEB DEVELOPER
            </span>
          </h1>

          {/* Short Bio */}
          <p className="text-slate-300 text-base md:text-lg max-w-xl font-normal leading-relaxed">
            Mahasiswa <span className="text-white font-semibold">Universitas Kebangsaan Republik Indonesia</span> yang fokus di web development. Terbiasa membangun aplikasi <span className="text-indigo-400 font-semibold">end-to-end</span> dari backend yang kokoh hingga frontend yang dinamis.
          </p>

          {/* CTA Button with custom underline style */}
          <div className="pt-4">
            <a 
              href="#projects" 
              className="inline-block text-white font-semibold text-lg tracking-wide group relative pb-2 transition-all duration-300 hover:text-indigo-300"
            >
              View My Projects
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500 transform scale-x-100 group-hover:scale-x-110 transition-transform duration-300 origin-left"></span>
              {/* Extra hover arrow effect */}
              <span className="inline-block ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                &rarr;
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Picture Area */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            
            {/* Glassmorphic border frame behind avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Avatar frame */}
            <div className="relative rounded-3xl overflow-hidden glass-card p-4 border border-white/10 shadow-2xl max-w-xs md:max-w-sm transition-all duration-500 transform group-hover:scale-[1.02] group-hover:border-indigo-500/35">
              <img 
                src={avatarImg} 
                alt="Muhammad Fajar Munandar" 
                className="w-full aspect-[3/4] rounded-2xl object-cover object-[center_70%] mix-blend-normal bg-gradient-to-b from-brand-gray/80 to-brand-dark/95" 
                loading="eager"
              />
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
