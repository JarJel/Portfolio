import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  User, 
  Code, 
  CheckCircle2, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  FolderKanban, 
  Zap, 
  ShieldCheck,
  Award,
  Globe
} from 'lucide-react';

// Import image assets
import bumdesmartImg1 from '../assets/bumdesmart/image.png';
import bumdesmartImg2 from '../assets/bumdesmart/image copy.png';
import bumdesmartImg3 from '../assets/bumdesmart/image copy 2.png';
import bumdesmartImg4 from '../assets/bumdesmart/image copy 3.png';

import simantapImg1 from '../assets/simantap/image.png';
import simantapImg2 from '../assets/simantap/image copy.png';
import simantapImg3 from '../assets/simantap/image copy 2.png';
import simantapImg4 from '../assets/simantap/image copy 3.png';

export const projectsData = {
  'bumdesmart-2': {
    id: 'bumdesmart-2',
    title: 'BUMDESMart 2.0',
    subtitle: 'Platform E-Commerce & Management Digital Usaha Desa Lengkong',
    category: 'Digital Transformation & E-Commerce',
    role: 'Full Stack Developer & Technical Lead',
    period: '2024 (Program Hibah Pengabdian Masyarakat)',
    icon: <Layers className="w-6 h-6 text-rose-400" />,
    badgeBg: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
    accentColor: 'from-rose-500 to-amber-500',
    accentText: 'text-rose-500',
    accentBg: 'bg-rose-500',
    stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'REST API'],
    images: [
      { url: bumdesmartImg1, title: 'Dashboard Utama BUMDESMart 2.0', desc: 'Antarmuka utama pengelolaan unit usaha BUMDes Desa Lengkong' },
      { url: bumdesmartImg2, title: 'Katalog Produk & Penjualan POS', desc: 'Sistem pencatatan transaksi toko & checkout digital produk UMKM' },
      { url: bumdesmartImg3, title: 'Laporan Keuangan & Neraca Usaha', desc: 'Rekapitulasi omset, margin keuntungan, dan data keuangan BUMDes' },
      { url: bumdesmartImg4, title: 'Manajemen Inventaris & Pelaku UMKM', desc: 'Kelola stok barang dan data pelaku usaha desa mitra BUMDes' },
    ],
    overview: `BUMDESMart 2.0 merupakan pengembangan tingkat lanjut dari ekosistem BUMDESMart untuk memenuhi program hibah pengabdian masyarakat di Desa Lengkong. Aplikasi ini hadir sebagai solusi konkret dalam mentransformasi operasional Badan Usaha Milik Desa (BUMDes) dan UMKM setempat yang sebelumnya tercatat secara konvensional menjadi serba terintegrasi dan transparan secara digital.`,
    highlights: [
      'Digitalisasi penuh 50+ UMKM desa terdaftar di Desa Lengkong.',
      'Sistem Kasir POS terhubung langsung dengan inventaris BUMDes.',
      'Peningkatan akurasi laporan keuangan & margin hingga 85%.',
      'Desain responsif yang mudah diakses dari perangkat smartphone maupun desktop.'
    ],
    features: [
      {
        title: 'Digital Marketplace & E-Commerce Desa',
        desc: 'Memasarkan produk-produk unggulan Desa Lengkong secara online dengan kategori pencarian terintegrasi dan sistem pesanan langsung.',
        icon: <Globe className="w-5 h-5 text-rose-400" />
      },
      {
        title: 'Sistem Kasir (POS) & Manajeman Inventaris',
        desc: 'Transaksi toko fisik BUMDes tercatat real-time, memperbarui stok barang secara otomatis dan mencegah selisih inventaris.',
        icon: <Zap className="w-5 h-5 text-amber-400" />
      },
      {
        title: 'Laporan Keuangan Automatis & Transparan',
        desc: 'Menghasilkan neraca saldo, rekap laba rugi, dan tren penjualan bulanan secara instan untuk transparansi pengurus desa.',
        icon: <Award className="w-5 h-5 text-rose-400" />
      },
      {
        title: 'Multi-Role User Authentication',
        desc: 'Akses bertingkat untuk Admin BUMDes, Mitra UMKM Desa, dan Pembeli umum dengan keamanan enkripsi data terjamin.',
        icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
      }
    ],
    challenges: 'Penyesuaian antarmuka pengguna agar sangat sederhana dan ramah bagi pelaku usaha desa dengan berbagai tingkat literasi digital.',
    solution: 'Merancang UI/UX modern berbasis Tailwind CSS dengan navigasi visual intuitif, petunjuk kontras tinggi, serta alur transaksi cepat.',
    liveUrl: '#',
    githubUrl: 'https://github.com/JarJel'
  },

  'simantap': {
    id: 'simantap',
    title: 'SIMANTAP',
    subtitle: 'Sistem Informasi Manajemen Kerja Praktek Terintegrasi',
    category: 'Academic Enterprise Software',
    role: 'Full Stack Developer / Module Contributor',
    period: '2023 - 2024',
    icon: <FolderKanban className="w-6 h-6 text-teal-400" />,
    badgeBg: 'bg-teal-500/10 border-teal-500/30 text-teal-400',
    accentColor: 'from-teal-500 to-indigo-500',
    accentText: 'text-teal-400',
    accentBg: 'bg-teal-500',
    stack: ['React', 'Laravel', 'PHP', 'Tailwind CSS', 'MySQL', 'RESTful API'],
    images: [
      { url: simantapImg1, title: 'Portal Utama SIMANTAP', desc: 'Ringkasan alur progres Kerja Praktek mahasiswa & pengumuman akademis' },
      { url: simantapImg2, title: 'Form Pengajuan & Pembimbing', desc: 'Pendaftaran tempat KP dan plotting dosen pembimbing otomatis' },
      { url: simantapImg3, title: 'Jadwal & Ruang Seminar KP', desc: 'Manajemen pendaftaran seminar KP, penguji, dan berita acara' },
      { url: simantapImg4, title: 'Input Nilai & Evaluasi Real-time', desc: 'Penginputan bobot nilai bimbingan, seminar, dan perusahaan secara instant' },
    ],
    overview: `SIMANTAP (Sistem Informasi Manajemen Kerja Praktek) adalah platform enterprise terpadu yang dirancang untuk mengelola seluruh siklus Kerja Praktek (KP) mahasiswa. Sistem ini mengintegrasikan seluruh pemangku kepentingan—mulai dari mahasiswa, dosen pembimbing, dosen penguji, hingga koordinator KP perguruan tinggi—dalam satu antarmuka terpusat.`,
    highlights: [
      'Memangkas waktu proses administrasi pengajuan KP dari 14 hari menjadi 2 hari kerja.',
      'Sistem penilaian otomatis yang memadukan nilai lapangan, bimbingan, dan seminar.',
      'Pengurangan penggunaan kertas (Paperless Workflow) hingga lebih dari 90%.',
      'Dukungan ekspor dokumen resmi PDF seperti Surat Tugas dan Berita Acara Seminar.'
    ],
    features: [
      {
        title: 'Workflow Pengajuan KP Digital',
        desc: 'Pengunggahan berkas proposal, surat pengantar, dan bukti penerimaan perusahaan secara terstruktur dengan penanda status verifikasi.',
        icon: <FolderKanban className="w-5 h-5 text-teal-400" />
      },
      {
        title: 'Plotting & Monitoring Pembimbing',
        desc: 'Penunjukan dosen pembimbing secara otomatis berdasarkan kuota dan konsentrasi keahlian, dilengkapi log bimbingan digital.',
        icon: <User className="w-5 h-5 text-indigo-400" />
      },
      {
        title: 'Pendaftaran & Jadwal Seminar KP',
        desc: 'Pendaftaran seminar interaktif, penentuan dosen penguji, alokasi ruang virtual/fisik, dan pengiriman undangan otomatis.',
        icon: <Calendar className="w-5 h-5 text-teal-400" />
      },
      {
        title: 'Kalkulasi Nilai & Transkrip Real-Time',
        desc: 'Form penilaian khusus dosen dan pembimbing lapangan yang secara otomatis merata-rata sesuai bobot persentase kurikulum.',
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />
      }
    ],
    challenges: 'Mengelola alur dokumen yang kompleks serta banyak tahap persetujuan multi-user secara simultan tanpa ada data yang tercecer.',
    solution: 'Membangun arsitektur REST API terstruktur di Laravel dipadukan antarmuka React yang cepat, dinamis, serta aman.',
    liveUrl: '#',
    githubUrl: 'https://github.com/JarJel'
  }
};

export default function ProjectDetailModal({ projectId, onClose, onSelectProject }) {
  const project = projectsData[projectId] || projectsData['bumdesmart-2'];
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Reset active image index when switching projects
  useEffect(() => {
    setActiveImgIndex(0);
  }, [projectId]);

  const handleNextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setActiveImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const otherProjectId = projectId === 'bumdesmart-2' ? 'simantap' : 'bumdesmart-2';
  const otherProject = projectsData[otherProjectId];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-2 sm:p-4 md:p-6 transition-opacity duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-100 transform-gpu [transform:translateZ(0)]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* MODAL HEADER - Solid background for max scroll performance */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center space-x-1 text-sm font-medium"
              aria-label="Kembali"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Kembali</span>
            </button>
            <span className={`px-3 py-1 text-xs font-bold tracking-wide rounded-full border ${project.badgeBg}`}>
              {project.category}
            </span>
          </div>

          {/* Close & Project Switcher */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onSelectProject(otherProjectId)}
              className="hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700/60 hover:bg-slate-700 text-xs text-indigo-300 hover:text-white transition-colors"
            >
              <span>Lihat {otherProject.title}</span>
              <ChevronRight size={14} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-rose-500/20 hover:text-rose-400 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* MODAL SCROLLABLE CONTENT - Hardware accelerated scroll container */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar transform-gpu [will-change:scroll-position]">
          
          {/* HERO TITLE & BADGES */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700/60 shadow-md">
                {project.icon}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-white">
                  {project.title}
                </h1>
                <p className="text-slate-400 text-sm md:text-base font-medium">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
              <div className="bg-slate-800/60 border border-slate-800 p-3 rounded-2xl flex items-center space-x-3">
                <User className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Peran</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200 truncate">{project.role}</div>
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-800 p-3 rounded-2xl flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-teal-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Periode</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200 truncate">{project.period}</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-slate-800/60 border border-slate-800 p-3 rounded-2xl flex items-center space-x-3">
                <Code className="w-5 h-5 text-rose-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Teknologi Utama</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200 truncate">{project.stack.slice(0, 3).join(', ')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE GALLERY & SCREENSHOT SHOWCASE */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-heading text-white flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Tampilan & Antarmuka Aplikasi</span>
              </h3>
              <span className="text-xs text-slate-400">
                {activeImgIndex + 1} dari {project.images.length} Gambar
              </span>
            </div>

            {/* Main Featured Image Box */}
            <div className="relative group bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden aspect-video md:aspect-[16/9] flex items-center justify-center">
              <img
                src={project.images[activeImgIndex].url}
                alt={project.images[activeImgIndex].title}
                decoding="async"
                className="w-full h-full object-contain object-center"
              />

              {/* Gradient Overlay for Caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 md:p-6 flex items-end justify-between">
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white">
                    {project.images[activeImgIndex].title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-300">
                    {project.images[activeImgIndex].desc}
                  </p>
                </div>
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:bg-indigo-600 transition-colors shadow-md"
                  title="Perbesar Gambar"
                >
                  <Maximize2 size={18} />
                </button>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/90 border border-slate-700 text-white opacity-0 group-hover:opacity-100 hover:bg-indigo-600 transition-all shadow-lg"
                aria-label="Gambar Sebelumnya"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/90 border border-slate-700 text-white opacity-0 group-hover:opacity-100 hover:bg-indigo-600 transition-all shadow-lg"
                aria-label="Gambar Selanjutnya"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 gap-3">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all aspect-video ${
                    activeImgIndex === idx 
                      ? 'border-indigo-500 ring-2 ring-indigo-500/30' 
                      : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                  }`}
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </button>
              ))}
            </div>
          </div>

          {/* OVERVIEW & HIGHLIGHTS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Overview text */}
            <div className="lg:col-span-2 space-y-4 bg-slate-800/40 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold font-heading text-white">Deskripsi & Latar Belakang</h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {project.overview}
              </p>
              
              <div className="pt-2 border-t border-slate-800">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Tantangan & Solusi Teknikal</h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p><span className="font-semibold text-rose-400">Tantangan:</span> {project.challenges}</p>
                  <p><span className="font-semibold text-emerald-400">Solusi:</span> {project.solution}</p>
                </div>
              </div>
            </div>

            {/* Key Highlights Card */}
            <div className="bg-slate-800/40 border border-slate-800 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold font-heading text-white mb-4 flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Pencapaian Utama</span>
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs md:text-sm text-slate-300">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 mb-2">Tech Stack:</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-indigo-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* KEY FEATURES GRID */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-heading text-white">Fitur-Fitur Unggulan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="p-5 bg-slate-800/40 border border-slate-800 rounded-2xl space-y-2 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-700/50">
                      {feat.icon}
                    </div>
                    <h4 className="font-bold text-sm md:text-base text-white">{feat.title}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed pl-1">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SWITCHER FOOTER */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Menampilkan detail untuk <span className="text-white font-semibold">{project.title}</span>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={() => onSelectProject(otherProjectId)}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700/70 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <span>Project Lainnya: {otherProject.title}</span>
                <ChevronRight size={16} />
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs sm:text-sm font-bold text-white transition-colors shadow-md"
              >
                Tutup Detail
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 p-3 rounded-full bg-slate-800 text-white hover:bg-rose-600 transition-colors z-10"
          >
            <X size={24} />
          </button>
          <img
            src={project.images[activeImgIndex].url}
            alt={project.images[activeImgIndex].title}
            decoding="async"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 px-6 py-3 rounded-full text-center">
            <div className="text-sm font-bold text-white">{project.images[activeImgIndex].title}</div>
            <div className="text-xs text-slate-300">{project.images[activeImgIndex].desc}</div>
          </div>
        </div>
      )}

    </div>
  );
}
