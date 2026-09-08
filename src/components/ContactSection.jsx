import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Sparkles, 
  MessageSquare,
  Clock,
  Building
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Jasa Pembuatan Website & Web App',
    budget: 'Rp 10 Juta - Rp 25 Juta',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message URL
    const text = `Halo DutaGlobalTech.com,%0A%0ASaya ingin konsultasi proyek baru:%0A- *Nama*: ${encodeURIComponent(formData.name)}%0A- *Perusahaan*: ${encodeURIComponent(formData.company || '-')}%0A- *Email*: ${encodeURIComponent(formData.email)}%0A- *No. WhatsApp*: ${encodeURIComponent(formData.phone)}%0A- *Layanan*: ${encodeURIComponent(formData.service)}%0A- *Estimasi Anggaran*: ${encodeURIComponent(formData.budget)}%0A- *Kebutuhan Proyek*: ${encodeURIComponent(formData.message)}%0A%0AMohon dihubungi kembali untuk jadwal diskusi. Terima kasih!`;
    
    setSubmitted(true);
    
    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Mulai Transformasi Digital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Konsultasikan Kebutuhan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">
              Teknologi Bisnis Anda
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Diskusikan visi proyek Anda bersama tim ahli kami. Kami siap memberikan solusi arsitektur terbaik dan estimasi biaya yang transparan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Kontak Resmi DutaGlobalTech</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Telepon & WhatsApp Konsultasi</span>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-brand-400 transition-colors">
                    +62 812-3456-7890
                  </a>
                  <p className="text-[11px] text-brand-400 mt-0.5">Online Respon Cepat (08:00 - 21:00 WIB)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Email Bisnis & Tender</span>
                  <a href="mailto:info@dutaglobaltech.com" className="text-base font-bold text-white hover:text-cyan-400 transition-colors">
                    info@dutaglobaltech.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Penawaran resmi & proposal dikirim dalam 1x24 jam</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Kantor Operasional</span>
                  <div className="text-sm font-semibold text-white">
                    Cyber Tower Technology Hub, Lt. 8
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Jl. HR Rasuna Said, Jakarta Selatan, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Jam Operasional & SLA</span>
                  <div className="text-sm font-semibold text-white">
                    Senin - Sabtu: 08.30 - 18.00 WIB
                  </div>
                  <p className="text-xs text-emerald-400 mt-0.5">24/7 Monitoring Server & Critical Support</p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-600/20 to-emerald-600/10 border border-brand-500/30">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-brand-400" />
                <h4 className="text-sm font-bold text-white">Butuh Respon Cepat?</h4>
              </div>
              <p className="text-xs text-slate-300 mb-4">
                Hubungi konsultan teknis kami langsung melalui WhatsApp untuk konsultasi instan tanpa formulir rumit.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20DutaGlobalTech,%20saya%20ingin%20konsultasi%20layanan%20IT%20secara%20langsung."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <span>Chat WhatsApp Sekarang</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Formulir Pengajuan Proyek</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Isi rincian kebutuhan sistem Anda dan tim kami akan segera menghubungi untuk tindak lanjut.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-brand-500/10 border border-brand-500/40 text-center space-y-3 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Terima Kasih!</h4>
                  <p className="text-sm text-slate-300">
                    Pengajuan proyek Anda telah tercatat. Halaman WhatsApp akan terbuka secara otomatis untuk melanjutkan diskusi langsung dengan konsultan kami.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
                  >
                    Kirim Form Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nama Lengkap *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nama Perusahaan / Bisnis</label>
                      <input
                        type="text"
                        placeholder="Contoh: PT Maju Bersama"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Bisnis *</label>
                      <input
                        type="email"
                        required
                        placeholder="nama@perusahaan.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">No. WhatsApp Aktif *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Kebutuhan Layanan *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-400 transition-colors"
                      >
                        <option value="Jasa Pembuatan Website & Web App">Jasa Pembuatan Website & Web App</option>
                        <option value="Sistem ERP & Manajemen Bisnis">Sistem ERP & Manajemen Bisnis</option>
                        <option value="Produk Digital & Mobile Apps">Produk Digital & Mobile Apps (Android/iOS)</option>
                        <option value="Custom Software & Otomasi AI">Custom Software & Otomasi AI</option>
                        <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                        <option value="IT Maintenance & SLA Support">IT Maintenance & SLA Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Estimasi Anggaran Proyek</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-400 transition-colors"
                      >
                        <option value="Di bawah Rp 10 Juta">&lt; Rp 10 Juta</option>
                        <option value="Rp 10 Juta - Rp 25 Juta">Rp 10 Juta - Rp 25 Juta</option>
                        <option value="Rp 25 Juta - Rp 50 Juta">Rp 25 Juta - Rp 50 Juta</option>
                        <option value="Rp 50 Juta - Rp 150 Juta">Rp 50 Juta - Rp 150 Juta</option>
                        <option value="Di atas Rp 150 Juta (Enterprise Scale)">&gt; Rp 150 Juta (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Deskripsi Singkat Proyek / Fitur yang Diinginkan *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Jelaskan gambaran sistem yang ingin dibangun, jumlah pengguna, modul khusus, atau kendala bisnis saat ini..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-400 transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pengajuan & Konsultasi Sekarang</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
