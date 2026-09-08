import React from 'react';
import { 
  ShieldCheck, 
  Code2, 
  Workflow, 
  Users, 
  Cpu, 
  Rocket, 
  Sparkles,
  Server,
  Lock,
  GitBranch
} from 'lucide-react';

export default function TechStack() {
  const advantages = [
    {
      icon: Lock,
      title: "100% Kepemilikan Source Code",
      desc: "Setelah serah terima dan UAT selesai, seluruh kode sumber, arsitektur database, dan aset menjadi hak milik penuh perusahaan Anda."
    },
    {
      icon: ShieldCheck,
      title: "Garansi Bug & Pemeliharaan 6 Bulan",
      desc: "Dukungan teknis responsif gratis untuk perbaikan kendala teknis dan jaminan stabilitas sistem pasca peluncuran (Go-Live)."
    },
    {
      icon: Cpu,
      title: "Arsitektur Skalabel & Modern",
      desc: "Dibangun dengan standar microservices / clean architecture yang mudah dikembangkan seiring ekspansi skala bisnis Anda di masa depan."
    },
    {
      icon: Workflow,
      title: "Custom Sesuai SOP Perusahaan",
      desc: "Sistem dibangun menyesuaikan alur kerja unik Anda, bukan sebaliknya memaksa tim Anda menyesuaikan batasan software kaku."
    }
  ];

  const technologies = [
    { name: "React & Next.js", type: "Frontend & Web Apps" },
    { name: "Vue.js & Nuxt", type: "Frontend UI" },
    { name: "Flutter & React Native", type: "Cross-platform Mobile" },
    { name: "Node.js & Express", type: "Backend API" },
    { name: "Python & FastAPI", type: "AI & Data Pipeline" },
    { name: "Laravel & PHP 8", type: "Enterprise Backend" },
    { name: "PostgreSQL & MySQL", type: "Relational Database" },
    { name: "Redis Cache", type: "In-Memory Speed" },
    { name: "Docker & Kubernetes", type: "Containerization" },
    { name: "AWS & Google Cloud", type: "Cloud Infrastructure" },
    { name: "Tailwind CSS", type: "Modern Styling" },
    { name: "Payment Gateway APIs", type: "Midtrans & Xendit" }
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Discovery & Analisis SOP",
      desc: "Konsultasi mendalam mengenai alur bisnis, kendala operasional, dan pemetaan fitur prioritas."
    },
    {
      num: "02",
      title: "Prototyping & UI/UX Design",
      desc: "Merancang wireframe interaktif dan antarmuka sistem agar mudah dipelajari oleh staf operasional."
    },
    {
      num: "03",
      title: "Agile Development & Sprint",
      desc: "Pengkodean modular dengan demo bertahap setiap milestone sehingga Anda dapat menguji fitur langsung."
    },
    {
      num: "04",
      title: "Testing, QA & Security Audit",
      desc: "Pengujian fungsionalitas, uji beban (load test), serta verifikasi celah keamanan data."
    },
    {
      num: "05",
      title: "Deployment & Pelatihan Staf",
      desc: "Setup server cloud live, migrasi data lama, serta sesi training komprehensif bagi seluruh pengguna."
    },
    {
      num: "06",
      title: "Maintenance & SLA Support",
      desc: "Pemantauan performa berkala, backup database harian, dan bantuan teknis responsif 24/7."
    }
  ];

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Why Us */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mengapa DutaGlobalTech</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Standar Rekayasa Software Kelas Enterprise
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Kami menggabungkan keahlian teknis tinggi, pemahaman alur bisnis yang tajam, dan komitmen layanan purna jual untuk memastikan investasi digital Anda membuahkan hasil nyata.
          </p>
        </div>

        {/* 4 Key Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-brand-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Development Process / Workflow */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Alur Kerja Proyek yang Terstruktur & Transparan
            </h3>
            <p className="text-sm text-slate-300">
              Setiap tahapan memiliki target keluaran yang jelas dan melibatkan feedback Anda secara aktif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
              >
                <div className="text-3xl font-black font-mono text-cyan-500/30 mb-2">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Teknologi Modern, Cepat & Teruji
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Kami menggunakan stack teknologi mutakhir yang didukung ekosistem global untuk menjamin performa maksimal.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 text-center hover:border-brand-400/50 hover:bg-slate-900 transition-all"
              >
                <div className="text-xs sm:text-sm font-bold text-white mb-0.5">{tech.name}</div>
                <div className="text-[10px] text-brand-400 font-mono">{tech.type}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
