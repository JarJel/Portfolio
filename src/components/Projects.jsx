import React from 'react';
import { ShoppingCart, FolderKanban, MapPin, Layers, ArrowRight, Eye } from 'lucide-react';

/**
 * Projects Section Component
 * Features:
 * - Clean light background layout.
 * - Interactive hover effects on project cards.
 * - Project details, tech stack badges, and detail page CTA buttons.
 * - Custom icons based on the type of application.
 */
export default function Projects({ onOpenDetail }) {
  const projectsList = [
    {
      id: 'bumdesmart-2',
      title: 'BUMDESMart 2.0',
      description: 'Pengembangan lanjutan aplikasi BUMDESMart untuk pemenuhan program hibah pengabdian masyarakat di Desa Lengkong. Berperan langsung sebagai motor penggerak digitalisasi UMKM desa setempat.',
      stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
      icon: <Layers size={24} className="text-white" />,
      iconBg: 'bg-rose-600',
      hasDetail: true,
      badgeText: 'Gallery & Screenshot Ready',
    },
    {
      id: 'simantap',
      title: 'SIMANTAP',
      description: 'Kontribusi pengembangan modul Kerja Praktek terintegrasi. Sistem mengelola proses pengajuan KP mahasiswa, penunjukan pembimbing, pendaftaran seminar KP, hingga penginputan nilai secara real-time.',
      stack: ['React', 'Laravel', 'PHP', 'CSS'],
      icon: <FolderKanban size={24} className="text-white" />,
      iconBg: 'bg-teal-600',
      hasDetail: true,
      badgeText: 'Gallery & Screenshot Ready',
    },
    {
      id: 'bumdesmart-2',
      title: 'BUMDESMart',
      description: 'Aplikasi e-commerce dan marketplace khusus untuk mengelola unit usaha Desa (BUMDes) agar dapat memasarkan produk desa secara digital. Dibuat khusus untuk keikutsertaan kompetisi tingkat regional.',
      stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      icon: <ShoppingCart size={24} className="text-white" />,
      iconBg: 'bg-indigo-600',
      hasDetail: true,
      badgeText: 'Explore Version 2.0',
    },
    {
      id: 'cari-ambulan',
      title: 'CARI AMBULAN',
      description: 'Sistem pencari layanan ambulans darurat terdekat berbasis peta interaktif, radar geolokasi, dan navigasi rute tercepat secara real-time untuk penanganan insiden darurat medis.',
      stack: ['Laravel', 'React', 'MySQL', 'Leaflet API'],
      icon: <MapPin size={24} className="text-white" />,
      iconBg: 'bg-amber-600',
      hasDetail: false,
      badgeText: 'Map & Geolocator System',
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
            Beberapa karya dan kontribusi pengembangan perangkat lunak yang telah saya rancang dan kerjakan. Klik tombol detail untuk melihat galeri tangkapan layar & dokumentasi lengkap.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white relative overflow-hidden"
            >
              <div>
                {/* Top Badge if Detail Available */}
                {project.hasDetail && (
                  <div className="mb-4">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">
                      <Eye size={12} />
                      <span>{project.badgeText}</span>
                    </span>
                  </div>
                )}

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

                {/* Action Link / Button */}
                <div className="border-t border-slate-200/60 pt-5 flex justify-end">
                  <button 
                    onClick={() => project.hasDetail && onOpenDetail(project.id)}
                    className={`inline-flex items-center space-x-2 font-bold text-sm tracking-wide px-4 py-2 rounded-xl transition-all ${
                      project.hasDetail 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-indigo-600/20' 
                        : 'text-slate-500 bg-slate-200/50 cursor-default'
                    }`}
                  >
                    <span>{project.hasDetail ? 'Lihat Detail & Galeri' : 'Project Detail'}</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

