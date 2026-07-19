import React from 'react';
import { Briefcase, GraduationCap, User, Code } from 'lucide-react';

/**
 * About Section Component
 * Features:
 * - Soft/light theme for contrast against the dark Hero section.
 * - Profile details card (Name, Career, Education).
 * - Tech stack icon grid featuring custom SVG brand icons with hover interactions.
 */
export default function About() {
  const techStack = [
    {
      name: 'Laravel',
      color: 'hover:text-red-500 hover:border-red-500/30',
      bgColor: 'hover:bg-red-50',
      icon: (
        <svg className="w-8 h-8 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.25 15.75L12 20.25L3.75 15.75V8.25L12 3.75L20.25 8.25V15.75Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3.75V20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.75 8.25L12 12.75L20.25 8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'React',
      color: 'hover:text-cyan-500 hover:border-cyan-500/30',
      bgColor: 'hover:bg-cyan-50',
      icon: (
        <svg className="w-8 h-8 transition-transform group-hover:scale-110 animate-spin" style={{ animationDuration: '12s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse rx="10" ry="4.5" transform="rotate(0)" cx="12" cy="12" />
          <ellipse rx="10" ry="4.5" transform="rotate(60)" cx="12" cy="12" />
          <ellipse rx="10" ry="4.5" transform="rotate(120)" cx="12" cy="12" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'HTML',
      color: 'hover:text-orange-500 hover:border-orange-500/30',
      bgColor: 'hover:bg-orange-50',
      icon: (
        <svg className="w-8 h-8 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 19.143L12 24l-8.6-4.857L1.5 0z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 4.5H7.5l.5 5.5h8l-.5 5-3.5 2-3.5-2-.3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'CSS',
      color: 'hover:text-blue-500 hover:border-blue-500/30',
      bgColor: 'hover:bg-blue-50',
      icon: (
        <svg className="w-8 h-8 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 19.143L12 24l-8.6-4.857L1.5 0z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16.5 7.5H8l.5 5.5h7.5l-.8 7.5-3.2 1.5-3.2-1.5-.2-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'PHP',
      color: 'hover:text-indigo-500 hover:border-indigo-500/30',
      bgColor: 'hover:bg-indigo-50',
      icon: (
        <svg className="w-8 h-8 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="6" />
          <path d="M8 9.5v5M8 12h3M11 9.5v5M14 9.5v3a2 2 0 0 0 4 0v-3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'MySQL',
      color: 'hover:text-amber-500 hover:border-amber-500/30',
      bgColor: 'hover:bg-amber-50',
      icon: (
        <svg className="w-8 h-8 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.5 2 2 4.2 2 7s4.5 5 10 5 10-2.2 10-5-4.5-5-10-5zM2 7v5c0 2.8 4.5 5 10 5s10-2.2 10-5V7" />
          <path d="M2 12v5c0 2.8 4.5 5 10 5s10-2.2 10-5v-5" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-soft text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 tracking-tight">
            Background & Skillset
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Kenali lebih dekat latar belakang akademis saya serta keahlian teknis yang saya gunakan untuk mewujudkan ide menjadi aplikasi web yang nyata.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Identity Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col space-y-6">
            <h3 className="text-2xl font-bold font-heading text-slate-900 border-b border-slate-100 pb-4">
              Profil Pengembang
            </h3>
            
            {/* Field: Name */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                <User size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Nama Lengkap</p>
                <p className="text-lg font-bold text-slate-800">Muhammad Fajar Munandar</p>
              </div>
            </div>

            {/* Field: Career */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                <Briefcase size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Fokus Karir</p>
                <p className="text-lg font-bold text-slate-800">Web Development</p>
              </div>
            </div>

            {/* Field: Education */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                <GraduationCap size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Pendidikan</p>
                <p className="text-lg font-bold text-slate-800">Universitas Kebangsaan Republik Indonesia</p>
              </div>
            </div>

            <p className="text-sm text-slate-500 italic leading-relaxed pt-2">
              "Mengintegrasikan logika pemrograman backend dengan keindahan antarmuka frontend untuk menciptakan pengalaman digital terbaik bagi pengguna."
            </p>
          </div>

          {/* RIGHT: Tech Stack Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 text-left">
              <div className="p-2 bg-slate-900 text-white rounded-lg">
                <Code size={18} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Tech Stack Utama
              </h3>
            </div>
            
            <p className="text-slate-600 text-left text-sm md:text-base leading-relaxed">
              Berikut adalah beberapa bahasa pemrograman, framework, dan teknologi basis data yang biasa saya gunakan untuk membangun proyek-proyek web profesional:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className={`group bg-white border border-slate-200/80 rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-slate-600 cursor-pointer ${tech.color} ${tech.bgColor}`}
                >
                  <div className="mb-1 text-slate-400 group-hover:text-inherit transition-colors duration-200">
                    {tech.icon}
                  </div>
                  <span className="font-semibold text-slate-800 text-sm group-hover:text-slate-900">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
