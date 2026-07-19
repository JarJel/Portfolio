import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquareText } from 'lucide-react';

/**
 * Contact Section Component
 * Features:
 * - Simple contact form (Name, Email, Message) with React useState hooks.
 * - Dynamic submit success feedback.
 * - Multi-column layout with contact details.
 * - Interactive input focus borders.
 */
export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate submission process
    if (formState.name && formState.email && formState.message) {
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear success alert after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-brand-soft text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full">
            Contact Me
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Apakah Anda memiliki proyek menarik atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Contact Information Details */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-xl">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-heading">
                Hubungi Saya Secara Langsung
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Anda juga dapat berinteraksi dengan saya melalui email resmi atau mendatangi lokasi kampus tempat saya menimba ilmu.
              </p>
            </div>

            <div className="space-y-6 my-10 text-left">
              {/* Item: Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-2xl text-indigo-400">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email</p>
                  <a href="mailto:mf4997537@gmail.com" className="text-base font-medium hover:text-indigo-300 transition-colors">
                    mf4997537@gmail.com
                  </a>
                </div>
              </div>

              {/* Item: Location */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-2xl text-indigo-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Lokasi Kampus</p>
                  <p className="text-base font-medium text-slate-200">
                    Bandung, Jawa Barat, Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-xs text-slate-400">
                Respon biasanya diberikan dalam kurun waktu kurang dari 24 jam kerja.
              </p>
            </div>

          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 flex flex-col justify-center">
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-sm font-semibold text-left flex items-center space-x-2 animate-pulse">
                <span>&nbsp;✓ Pesan Anda berhasil dikirim! Saya akan segera menghubungi Anda kembali.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* Field: Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Nama Anda
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Masukkan nama lengkap" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Field: Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Alamat Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Masukkan email Anda" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Field: Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Pesan Anda
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows="4" 
                  placeholder="Tulis pesan atau tawaran kerja sama..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold text-base py-4 px-6 rounded-2xl shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 hover:shadow-indigo-700/35 hover:-translate-y-0.5 active:translate-y-0 active:shadow-indigo-600/25 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer group"
              >
                <span>Kirim Pesan</span>
                <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
