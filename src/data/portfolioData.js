export const portfolioCategories = [
  { id: "all", label: "Semua Proyek" },
  { id: "web", label: "Website & Web Apps" },
  { id: "erp", label: "Sistem ERP" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "digital", label: "Produk Digital & SaaS" }
];

export const portfolioProjects = [
  {
    id: "nusantara-erp",
    title: "Nusantara Logistics ERP System",
    category: "erp",
    categoryLabel: "Sistem ERP",
    client: "PT Nusantara Prima Logistik",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    summary: "Sistem ERP terpadu untuk armada logistik 500+ truk, manajemen 14 pergudangan nasional, dan kalkulasi ongkos muat otomatis.",
    tags: ["ERP System", "React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    problem: "Pencatatan manual di spreadsheet menyebabkan selisih inventaris stok antar cabang mencapai 8% dan keterlambatan pengiriman armada karena ketiadaan tracking terpusat.",
    solution: "DutaGlobalTech membangun sistem ERP multi-tenant dengan modul Dispatching Realtime, Integrasi GPS Fleet, Manajemen Multi-Gudang, dan Dashboard Finansial Eksekutif.",
    results: [
      "Mengurangi selisih stok gudang dari 8% menjadi 0.2%",
      "Waktu proses dispatching armada 70% lebih cepat",
      "Visibilitas posisi dan status armada secara 100% realtime"
    ],
    liveUrl: "#",
    metrics: "500+ Armada Terintegrasi"
  },
  {
    id: "artha-fintech-portal",
    title: "Artha Mandiri B2B Financing Portal",
    category: "web",
    categoryLabel: "Website & Web Apps",
    client: "PT Artha Ventura Digital",
    year: "2024",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    summary: "Web platform pengajuan pendanaan modal kerja B2B dengan scoring kredit otomatis dan integrasi e-KYC Dukcapil.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    problem: "Proses verifikasi pengajuan pinjaman UMKM membutuhkan waktu 5 hari kerja manual dengan tingkat kesalahan input data berkas tinggi.",
    solution: "Membangun portal web perbankan modern dengan upload dokumen drag-and-drop OCR, verifikasi biometrik e-KYC, dan algoritma credit scoring berbasis data transaksi.",
    results: [
      "Waktu approval dipangkas dari 5 hari menjadi hanya 15 menit",
      "Peningkatan 300% volume pengajuan nasabah baru",
      "Skor kepuasan pengguna (CSAT) mencapai 4.9/5.0"
    ],
    liveUrl: "#",
    metrics: "Disbursement Rp 120M+"
  },
  {
    id: "medika-health-app",
    title: "MedikaCare Telemedicine Mobile App",
    category: "mobile",
    categoryLabel: "Mobile Apps",
    client: "Medika Sehat Indonesia",
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    summary: "Aplikasi mobile konsultasi dokter spesialis, tebus resep obat online, dan booking antrian rumah sakit terdekat.",
    tags: ["Flutter", "Firebase", "WebRTC", "Go / Golang", "Midtrans"],
    problem: "Pasien mengantri lebih dari 2 jam di klinik dan kesulitan mendapatkan obat resep langsung ke rumah.",
    solution: "Aplikasi Android & iOS dengan video call HD terenkripsi, integrasi kurir pengiriman obat on-demand, dan rekam medis elektronik (EHR).",
    results: [
      "Lebih dari 100.000+ unduhan di Google Play & Apple App Store",
      "Waktu tunggu pasien berkurang hingga 85%",
      "Rating aplikasi 4.8 bintang di Play Store"
    ],
    liveUrl: "#",
    metrics: "100k+ Active Users"
  },
  {
    id: "samudra-heavy-erp",
    title: "Samudra Heavy Machinery ERP & Maintenance",
    category: "erp",
    categoryLabel: "Sistem ERP",
    client: "PT Samudra Teknik Perkasa",
    year: "2023",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    summary: "ERP manajemen alat berat, suku cadang, jadwal preventive maintenance, dan penyewaan alat konstruksi proyek.",
    tags: ["Vue.js", "Laravel", "MySQL", "PWA", "AWS S3"],
    problem: "Kerusakan alat berat mendadak di lokasi tambang menyebabkan downtime kerugian ratusan juta rupiah per hari akibat jadwal servis terlambat.",
    solution: "Implementasi ERP dengan peringatan jam kerja mesin (engine hour telemetry), katalog sparepart interaktif, dan modul kontrak sewa alat.",
    results: [
      "Menurunkan insiden downtime alat tak terduga sebesar 42%",
      "Penghematan biaya pembelian suku cadang sebesar Rp 450 Juta/tahun",
      "Efisiensi jadwal servis preventif 98%"
    ],
    liveUrl: "#",
    metrics: "Downtime Turun 42%"
  },
  {
    id: "kopi-nusantara-pos",
    title: "Kopi Crafted Omni-Channel POS & CRM",
    category: "digital",
    categoryLabel: "Produk Digital & SaaS",
    client: "Crafted Coffee Chain",
    year: "2024",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    summary: "Aplikasi POS kasir multi-outlet dengan program loyalti pelanggan, self-order QR table, dan integrasi pesanan online.",
    tags: ["React Native", "Node.js", "WebSockets", "MongoDB", "QRIS API"],
    problem: "Antrian kasir panjang saat jam sibuk dan kesulitan mengelola database poin loyalty antar 30 cabang.",
    solution: "Aplikasi kasir berbasis cloud dengan fitur order mandiri via QR Code meja dan sinkronisasi saldo poin member instan.",
    results: [
      "Mengurangi antrian kasir jam sibuk hingga 50%",
      "Meningkatkan repeat order pelanggan loyal sebesar 40%",
      "Koneksi realtime ke 35 outlet cabang di 5 kota besar"
    ],
    liveUrl: "#",
    metrics: "35+ Cabang Terhubung"
  },
  {
    id: "grand-safira-prop",
    title: "Grand Safira Luxury Property Hub",
    category: "web",
    categoryLabel: "Website & Web Apps",
    client: "Safira Land Development",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    summary: "Website interaktif properti premium dengan 3D Virtual Tour 360°, kalkulator simulasi KPR realtime, dan live lead capture.",
    tags: ["React", "Three.js", "Tailwind CSS", "Supabase", "WhatsApp API"],
    problem: "Brosur cetak konvensional tidak mampu menampilkan kemegahan proyek properti kepada calon pembeli luar kota dan luar negeri.",
    solution: "Website eksklusif dengan visual 360 tour interaktif, simulasi cicilan KPR dari 6 bank nasional, dan tombol konsultasi sales otomatis via WA.",
    results: [
      "Kenaikan leads prospektif berkualitas sebesar 180%",
      "40% unit terjual melalui interaksi awal website",
      "Page load speed 1.2 detik dengan aset 3D teroptimasi"
    ],
    liveUrl: "#",
    metrics: "180% Kenaikan Leads"
  }
];
