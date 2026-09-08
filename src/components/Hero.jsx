import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Code2, 
  TrendingUp,
  LayoutGrid,
  Laptop
} from 'lucide-react';

export default function Hero() {
  const highlights = [
    "Garansi Bebas Bug & Maintenance",
    "100% Hak Milik Source Code",
    "Arsitektur Skalabel & Keamanan Tinggi",
    "Kustomisasi Sesuai Alur Bisnis"
  ];

  const stats = [
    { value: "120+", label: "Proyek Selesai", sub: "Web, ERP & Mobile Apps" },
    { value: "99.9%", label: "SLA Uptime", sub: "Keandalan Sistem Cloud" },
    { value: "50+", label: "Klien Korporat & UMKM", sub: "Di Berbagai Sektor" },
    { value: "24/7", label: "Dedicated Support", sub: "Respon Cepat Tim Ahli" },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs sm:text-sm font-semibold mb-8 animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span>Mitra Transformasi Digital & Pengembangan Software Enterprise</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Solusi Pembuatan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-teal-300 to-cyan-400">
              Website, Sistem ERP
            </span>{' '}
            & Produk Digital Handal
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            <strong>DutaGlobalTech.com</strong> menghadirkan rekayasa perangkat lunak modern untuk akselerasi bisnis Anda. Mulai dari sistem ERP kustom, website berkonversi tinggi, aplikasi mobile iOS & Android, hingga otomatisasi proses bisnis terpadu.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Jelajahi Portofolio Kami</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#estimator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 hover:text-white transition-all duration-200 backdrop-blur-sm"
            >
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Hitung Estimasi Biaya</span>
            </a>
          </div>

          {/* Mini Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left max-w-4xl mx-auto mb-16">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/50">
                <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Hero Visual Mockup Dashboard Banner */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-gradient-to-b from-slate-900/90 to-slate-950 p-2 sm:p-4 shadow-2xl shadow-brand-500/10">
            {/* Top window bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">https://app.dutaglobaltech.com/erp-dashboard</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-400 font-mono">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                System Online
              </div>
            </div>

            {/* Simulated ERP / Web Platform Interface */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 sm:p-4">
              {/* Card 1 */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400 font-medium">Omset Terpadu (Realtime)</span>
                  <TrendingUp className="w-4 h-4 text-brand-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">Rp 1.482.900.000</div>
                <div className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                  <span>+28.4%</span> dari bulan lalu (Sync 14 Cabang)
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400 font-medium">Manajemen Stok & Gudang</span>
                  <Boxes className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">48.290 Item</div>
                <div className="text-xs text-cyan-400 flex items-center gap-1 font-medium">
                  <span>99.8%</span> Akurasi FIFO & Barcode Tracking
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400 font-medium">Status Server & API Cloud</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">99.98% SLA</div>
                <div className="text-xs text-slate-400 font-medium">
                  Auto-backup terenkripsi AES-256
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center hover:border-slate-700 transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
