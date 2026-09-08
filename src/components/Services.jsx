import React from 'react';
import { services } from '../data/servicesData';
import { 
  Globe, 
  Boxes, 
  Smartphone, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Check, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Globe: Globe,
  Boxes: Boxes,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Cloud: Cloud,
  ShieldCheck: ShieldCheck
};

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      {/* Background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Solusi Komprehensif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Layanan Unggulan & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">
              Produk Digital Inovatif
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Kami menghadirkan solusi teknologi mutakhir dengan standar rekayasa software enterprise terbaik untuk mendorong efisiensi dan ekspansi bisnis Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 flex flex-col justify-between"
              >
                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top row with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/90 text-brand-300 border border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="text-xs font-mono text-cyan-400 mb-1 font-semibold uppercase tracking-wider">
                    {service.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="relative z-10 pt-4">
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20DutaGlobalTech,%20saya%20ingin%20tanya%20detail%20mengenai%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-brand-500 hover:text-slate-950 border border-slate-700 transition-all duration-200"
                  >
                    <span>Konsultasikan Layanan Ini</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
