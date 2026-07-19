import React from 'react';
import { ShoppingCart, FolderKanban, MapPin, Layers, ExternalLink } from 'lucide-react';

/**
 * Projects Section Component
 * Features:
 * - Clean light background layout.
 * - Interactive hover effects on project cards.
 * - Project details, tech stack badges, and dummy CTA buttons.
 * - Custom icons based on the type of application.
 */
export default function Projects() {
  const projectsList = [
    {
      title: 'BUMDESMart',
      description: 'Aplikasi e-commerce dan marketplace khusus untuk mengelola unit usaha Desa (BUMDes) agar dapat memasarkan produk desa secara digital. Dibuat khusus untuk keikutsertaan kompetisi tingkat regional.',
      stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      icon: <ShoppingCart size={24} className="text-white" />,
      iconBg: 'bg-indigo-600',
      link: '#',
    },
    {
      title: 'SIMANTAP',
      description: 'Kontribusi pengembangan modul Kerja Praktek terintegrasi. Sistem mengelola proses pengajuan KP mahasiswa, penunjukan pembimbing, pendaftaran seminar KP, hingga penginputan nilai secara real-time.',
      stack: ['React', 'Laravel', 'PHP', 'CSS'],
      icon: <FolderKanban size={24} className="text-white" />,
      iconBg: 'bg-teal-600',
      link: '#',
    },
    {
      title: 'BUMDESMart 2.0',
      description: 'Pengembangan lanjutan aplikasi BUMDESMart untuk pemenuhan program hibah pengabdian masyarakat di Desa Lengkong. Berperan langsung sebagai motor penggerak digitalisasi UMKM desa setempat.',
      stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
      icon: <Layers size={24} className="text-white" />,
      iconBg: 'bg-rose-600',
      link: '#',
    },
    {
      title: 'CARI AMBULAN',
      description: 'Sistem pencari layanan ambulans darurat terdekat berbasis peta interaktif, radar geolokasi, dan navigasi rute tercepat secara real-time untuk penanganan insiden darurat medis.',
      stack: ['Laravel', 'React', 'MySQL', 'Leaflet API'],
      icon: <MapPin size={24} className="text-white" />,
      iconBg: 'bg-amber-600',
      link: '#',
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Beberapa karya dan kontribusi pengembangan perangkat lunak yang telah saya rancang dan kerjakan.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-50 border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white"
            >
              <div>
                {/* Header: Project Icon & Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3.5 rounded-2xl ${project.iconBg} shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-110`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base text-left leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Footer: Tech Stack Badges & CTA */}
              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6 justify-start">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link with hover styles */}
                <div className="border-t border-slate-200/60 pt-5 flex justify-end">
                  <a 
                    href={project.link}
                    className="inline-flex items-center space-x-1.5 font-bold text-sm tracking-wide text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <span>View Details</span>
                    <ExternalLink size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
