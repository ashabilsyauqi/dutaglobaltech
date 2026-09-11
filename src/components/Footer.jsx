import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck,
  Heart
} from 'lucide-react';

export default function Footer({ onOpenLocations }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A10] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-emerald-500 to-cyan-400 p-[2px] shadow-lg shadow-brand-500/20">
                <div className="w-full h-full bg-[#0A0E17] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300 text-lg">
                    D
                  </span>
                  <span className="text-white font-bold text-xs -ml-0.5">GT</span>
                </div>
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white">
                  DutaGlobal<span className="text-brand-400">Tech</span>
                  <span className="text-xs font-semibold text-slate-400 ml-1">.com</span>
                </span>
                <p className="text-[11px] text-slate-400">PT Duta Global Teknologi Solusindo</p>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Perusahaan penyedia solusi teknologi digital, jasa pembuatan website berkinerja tinggi, sistem ERP enterprise kustom, dan aplikasi mobile handal di Indonesia.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Jl. Percetakan Negara Raya No. 128, Cempaka Putih, Jakarta Pusat 10570</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                <span>021-4288-9999 / +62 812-3456-7890</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {onOpenLocations && (
                <button
                  type="button"
                  onClick={onOpenLocations}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-800 hover:bg-cyan-900 transition-colors"
                >
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>Lihat Google Maps & Cabang</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Layanan */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Layanan Kami</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Jasa Pembuatan Website</a></li>
              <li><a href="#erp" className="hover:text-brand-400 transition-colors">Sistem ERP & Keuangan</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Aplikasi Mobile Android & iOS</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Custom SaaS & API Integrasi</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Cloud Server & DevOps</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">IT Maintenance & SLA</a></li>
            </ul>
          </div>

          {/* Col 3: Solusi ERP */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Modul ERP</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#erp" className="hover:text-cyan-400 transition-colors">Akuntansi & Finansial</a></li>
              <li><a href="#erp" className="hover:text-cyan-400 transition-colors">Manajemen Gudang & Stok</a></li>
              <li><a href="#erp" className="hover:text-cyan-400 transition-colors">HRMS & Payroll PPh 21</a></li>
              <li><a href="#erp" className="hover:text-cyan-400 transition-colors">Sales Pipeline & CRM</a></li>
              <li><a href="#erp" className="hover:text-cyan-400 transition-colors">Modul Manufaktur & BOM</a></li>
              <li><a href="#erp" className="hover:text-cyan-400 transition-colors">Point of Sale (POS) Cloud</a></li>
            </ul>
          </div>

          {/* Col 4: Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Perusahaan</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#hero" className="hover:text-brand-400 transition-colors">Beranda</a></li>
              <li><a href="#portfolio" className="hover:text-brand-400 transition-colors">Portofolio & Studi Kasus</a></li>
              <li><a href="#estimator" className="hover:text-brand-400 transition-colors">Kalkulator Estimasi Biaya</a></li>
              <li><a href="#tech-stack" className="hover:text-brand-400 transition-colors">Proses Pengerjaan & Tim</a></li>
              <li><a href="#faq" className="hover:text-brand-400 transition-colors">Tanya Jawab (FAQ)</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} DutaGlobalTech.com (PT Duta Global Teknologi). All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <span>Standar Keamanan ISO 27001 Ready</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-500 transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5 text-brand-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
