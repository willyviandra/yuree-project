export interface BrandContact {
  brandName: string;
  tagline: string;
  sinceYear: number;
  officialWA: {
    number: string;
    display: string;
  };
  partnershipWA: {
    number: string;
    display: string;
  };
  email: string;
  address: string;
  mapsEmbedUrl?: string;
  instagram: {
    url: string;
    handle: string;
  };
  facebook: {
    url: string;
    name: string;
  };
  threads: {
    url: string;
    handle: string;
  };
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
  subtext?: string;
}

export interface WorkshopItem {
  id: string;
  code: string;
  name: string;
  region: "Bandung" | "Bali" | "Parahyangan Timur";
  city: string;
  workers: number;
  capacityPerMonth: number; // in meters/month
  specialty?: string;
}

export interface ServiceItem {
  code: string;
  id: string;
  name: string;
  tagline: string;
  subtitle?: string;
  description: string;
  features: string[];
  specs: {
    material: string;
    hardware: string;
    finishings: string[];
    warranty: string;
  };
  startingPrice: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Kitchen Set" | "Bedroom" | "Living Room" | "Wardrobe" | "Under The Stairs" | "Lainnya";
  photoCount: number;
  location: string;
  dimensions: string;
  finishing: string;
  description: string;
  images: {
    url: string;
    caption: string;
  }[];
}

export interface WorkflowStep {
  step: string; // "01", "02", ...
  title: string;
  subtitle: string;
  details: string[];
  deliverable: string;
  duration: string;
}

export interface PartnerItem {
  name: string;
  role: string;
  type: "Strategic Partner" | "Interior Account" | "Interior Network" | "Brand Partner" | "Kitchen Set Account" | "Interior Partner" | "Premium Interior Account" | "Design Partner" | "Business Partner" | "Furniture Account";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface PartnerPillar {
  title: string;
  description: string;
  metric: string;
}

export interface PartnerSegment {
  id: "architect" | "agency" | "influencer";
  label: string;
  badge: string;
  title: string;
  description: string;
  valueProps: string[];
  deliverables: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

// SINGLE SOURCE OF TRUTH
export const companyData = {
  brand: {
    brandName: "Yuree Project",
    tagline: "Interior Manufacturing & Execution Partner",
    sinceYear: 2018,
    officialWA: {
      number: "6285188209030",
      display: "0851-8820-9030",
    },
    partnershipWA: {
      number: "6285188209030",
      display: "0851-8820-9030",
    },
    email: "info@yureeproject.id",
    address: "Jl. Nasional III, Citatah, Kec. Cipatat, Kabupaten Bandung Barat, Jawa Barat 40554",
    instagram: {
      url: "https://www.instagram.com/yuree.project/",
      handle: "yuree.project",
    },
    facebook: {
      url: "https://www.facebook.com/yureeproject",
      name: "Yuree Project dan 1 lainnya",
    },
    threads: {
      url: "https://www.threads.net/@yuree.project",
      handle: "yuree.project",
    },
  } as BrandContact,

  hero: {
    badge: "Since 2018 · Interior Manufacturing & Execution Partner",
    headline: "Wujudkan Interior Premium Terukur",
    subheadline:
      "Membantu klien hunian, arsitek, agensi, dan influencer merealisasikan proyek interior presisi dengan dukungan 23 workshop aktif, 150+ tenaga ahli berpengalaman, dan kontrol kualitas terstandarisasi.",
    ctaPrimary: "Konsultasi Sekarang",
    ctaSecondary: "Hitung Simulasi Biaya",
    metrics: [
      {
        value: "4.048+",
        label: "Project Selesai",
        description: "Rekam jejak 2018–2026",
      },
      {
        value: "23",
        label: "Workshop Aktif",
        description: "Jaringan produksi terintegrasi",
      },
      {
        value: "150+",
        label: "Tenaga Ahli",
        description: "Produksi, finishing & instalasi",
      },
      {
        value: "2.690m",
        label: "Kapasitas / bln",
        description: "Meter lari kapasitas produksi",
      },
    ],
  },

  aboutStats: {
    historyTitle: "Rekam Jejak & Kapasitas Manufaktur (2018–2026)",
    historyNarrative:
      "Berdiri sejak 2018, Yuree Project berkembang menjadi ekosistem manufaktur interior terintegrasi di Indonesia. Rekam jejak 2021–2026 mencatat 3.895 project berjalan ditambah 153 project baru pada periode Januari–Februari 2026, membukukan total lebih dari 4.048+ project terselesaikan dengan presisi terukur.",
    secondaryNarrative:
      "Didukung 23 workshop aktif dengan 156 personel workshop terdata dan lebih dari 150 tenaga ahli di bidang fabrikasi kayu, finishing HPL/Duco/PVC, serta instalasi lapangan presisi di 3 provinsi dan 28 kota/kabupaten.",
    sixStats: [
      {
        value: "4.048+",
        label: "Total Project",
        description: "Rekam jejak project selesai sejak 2018 hingga awal 2026",
      },
      {
        value: "23",
        label: "Workshop Aktif",
        description: "Jaringan produksi aktif untuk kapasitas scalable bebas antre",
      },
      {
        value: "156",
        label: "Personel WS",
        description: "Tim produksi inti terdata resmi di seluruh unit workshop",
      },
      {
        value: "150+",
        label: "Tenaga Ahli",
        description: "Tim produksi, finishing presisi, dan instalasi berpengalaman",
      },
      {
        value: "28 Kota",
        label: "Jangkauan Project",
        description: "Cakupan operasional di berbagai area strategis Jabodetabek, Jabar, & Bali",
      },
      {
        value: "3 Provinsi",
        label: "Area Operasional",
        description: "Sentra manufaktur di Jawa Barat, DKI Jakarta, dan Bali",
      },
    ],
  },

  // 23 Workshop Aktif
  workshops: [
    // Bandung (13 WS · 93 Pekerja · 1.560 meter/bulan)
    { id: "ws-ap", code: "WS AP", name: "Workshop AP Bandung", region: "Bandung", city: "Bandung", workers: 11, capacityPerMonth: 200, specialty: "Kitchen Set & Architectural Panel" },
    { id: "ws-eg", code: "WS EG", name: "Workshop EG Bandung", region: "Bandung", city: "Bandung", workers: 5, capacityPerMonth: 70, specialty: "Custom Storage & Compact Furniture" },
    { id: "ws-ey", code: "WS EY", name: "Workshop EY Bandung", region: "Bandung", city: "Bandung", workers: 8, capacityPerMonth: 150, specialty: "Master Bedroom & Headboard" },
    { id: "ws-ac", code: "WS AC", name: "Workshop AC Bandung", region: "Bandung", city: "Bandung", workers: 4, capacityPerMonth: 60, specialty: "Under Stairs & Compact Modules" },
    { id: "ws-ba", code: "WS BA", name: "Workshop BA Bandung", region: "Bandung", city: "Bandung", workers: 7, capacityPerMonth: 100, specialty: "Living Room Display & Backdrop TV" },
    { id: "ws-ia", code: "WS IA", name: "Workshop IA Bandung", region: "Bandung", city: "Bandung", workers: 12, capacityPerMonth: 250, specialty: "High-Volume Kitchen & Wardrobe Systems" },
    { id: "ws-in", code: "WS IN", name: "Workshop IN Bandung", region: "Bandung", city: "Bandung", workers: 6, capacityPerMonth: 80, specialty: "Wardrobe & Built-in Closets" },
    { id: "ws-un", code: "WS UN", name: "Workshop UN Bandung", region: "Bandung", city: "Bandung", workers: 7, capacityPerMonth: 150, specialty: "Wall Paneling & Duco Finishing" },
    { id: "ws-bl", code: "WS BL", name: "Workshop BL Bandung", region: "Bandung", city: "Bandung", workers: 4, capacityPerMonth: 100, specialty: "Modular Kitchen & Cabinetry" },
    { id: "ws-sp", code: "WS SP", name: "Workshop SP Bandung", region: "Bandung", city: "Bandung", workers: 7, capacityPerMonth: 100, specialty: "Commercial Furniture & Display" },
    { id: "ws-up", code: "WS UP", name: "Workshop UP Bandung", region: "Bandung", city: "Bandung", workers: 5, capacityPerMonth: 50, specialty: "Custom Bench & Foyer Interior" },
    { id: "ws-bi", code: "WS BI", name: "Workshop BI Bandung", region: "Bandung", city: "Bandung", workers: 8, capacityPerMonth: 100, specialty: "Luxury Bedroom & Walk-in Closet" },
    { id: "ws-fy", code: "WS FY", name: "Workshop FY Bandung", region: "Bandung", city: "Bandung", workers: 9, capacityPerMonth: 150, specialty: "Backdrop TV & Architectural Woodwork" },

    // Bali (5 WS · 34 Pekerja · 630 meter/bulan)
    { id: "ws-an", code: "WS AN", name: "Workshop AN Bali", region: "Bali", city: "Denpasar", workers: 5, capacityPerMonth: 80, specialty: "Villa Kitchen & Tropical Hardwood Fit" },
    { id: "ws-ib", code: "WS IB", name: "Workshop IB Bali", region: "Bali", city: "Badung", workers: 6, capacityPerMonth: 150, specialty: "Villa Interior & Resort Furniture" },
    { id: "ws-no", code: "WS NO", name: "Workshop NO Bali", region: "Bali", city: "Denpasar", workers: 10, capacityPerMonth: 200, specialty: "Hospitality & High-End Residence" },
    { id: "ws-ri", code: "WS RI", name: "Workshop RI Bali", region: "Bali", city: "Gianyar", workers: 10, capacityPerMonth: 150, specialty: "Artisan Woodcraft & Wall Paneling" },
    { id: "ws-nk", code: "WS NK", name: "Workshop NK Bali", region: "Bali", city: "Tabanan", workers: 3, capacityPerMonth: 50, specialty: "Custom Cabinetry & Villa Fitting" },

    // Parahyangan Timur (5 WS · 29 Pekerja · 500 meter/bulan)
    { id: "ws-ad", code: "WS AD", name: "Workshop AD Garut", region: "Parahyangan Timur", city: "Garut", workers: 5, capacityPerMonth: 50, specialty: "Residential Storage & Kitchen" },
    { id: "ws-rt", code: "WS RT", name: "Workshop RT Tasikmalaya", region: "Parahyangan Timur", city: "Tasikmalaya", workers: 9, capacityPerMonth: 150, specialty: "Full Residence Custom Interior" },
    { id: "ws-as", code: "WS AS", name: "Workshop AS Banjar", region: "Parahyangan Timur", city: "Banjar", workers: 6, capacityPerMonth: 100, specialty: "Wardrobe & Bedroom Modules" },
    { id: "ws-ha", code: "WS HA", name: "Workshop HA Garut", region: "Parahyangan Timur", city: "Garut", workers: 3, capacityPerMonth: 50, specialty: "Compact Kitchen & Fitting" },
    { id: "ws-ur", code: "WS UR", name: "Workshop UR Garut", region: "Parahyangan Timur", city: "Garut", workers: 6, capacityPerMonth: 150, specialty: "Backdrop TV & Architectural Paneling" },
  ] as WorkshopItem[],

  workshopSummary: {
    totalWorkshops: 23,
    totalWorkers: 156,
    totalCapacity: 2690, // m/bulan
    regions: [
      { name: "Bandung", workshops: 13, workers: 93, capacity: 1560 },
      { name: "Bali", workshops: 5, workers: 34, capacity: 630 },
      { name: "Parahyangan Timur", workshops: 5, workers: 29, capacity: 500 },
    ],
  },

  // 5 Layanan Interior Custom
  services: [
    {
      code: "01",
      id: "kitchen-set",
      name: "Kitchen Set",
      tagline: "Interior Dapur Modern, Higienis & Ergonomis",
      description:
        "Interior dapur custom modern, rapi, fungsional, dan premium. Dirancang dengan alur kerja ergonomis (segitiga dapur), sirkulasi udara optimal, dan ketahanan terhadap kelembapan tinggi.",
      features: [
        "Kabinet atas dan bawah modular presisi",
        "Kitchen island fungsional dengan bar seating",
        "Storage efisien dengan rak bumbu & piring tarik",
        "Finishing premium HPL Taco / Duco PU / Edging PVC 2mm",
      ],
      specs: {
        material: "Multipleks / Plywood Meranti Grade A 18mm",
        hardware: "Engsel Slow-Motion Soft Close & Rel Drawer Double Track",
        finishings: ["HPL Taco / Carta / Aica Matte & Woodgrain", "Duco Polyurethane Gloss / Satin", "Edging PVC 2mm Mesin Press"],
        warranty: "Garansi Konstruksi 2 Tahun & Fitting Seumur Hidup",
      },
      startingPrice: "Rp 2.100.000 / m'",
    },
    {
      code: "02",
      id: "bedroom-interior",
      name: "Bedroom Interior",
      tagline: "Kenyamanan Istirahat Tertinggi dengan Ruang Terorganisir",
      description:
        "Interior kamar tidur custom, headboard, backdrop, storage, dan furniture built-in. Menciptakan atmosfer relaksasi mewah dengan pemanfaatan ruang kamar secara maksimal.",
      features: [
        "Headboard custom dengan padded fabric atau panel aksen kayu",
        "Backdrop panel elegan dengan hidden warm LED strip",
        "Built-in storage di bawah ranjang (hydraulic bed lift option)",
        "Meja rias compact dan bedside floating table terintegrasi",
      ],
      specs: {
        material: "Plywood 18mm anti-rayap & MDF grade E1 untuk panel aksen",
        hardware: "Sistem hidrolik ranjang Jerman & kabel tersembunyi (conduit)",
        finishings: ["HPL Supermatte Anti-Fingerprint", "Kain Fabric Velvet / Suede Water-Repellent", "Aksen Gold Brass List Metal"],
        warranty: "Garansi Konstruksi 2 Tahun",
      },
      startingPrice: "Rp 1.950.000 / m²",
    },
    {
      code: "03",
      id: "living-room",
      name: "Living Room",
      tagline: "Pusat Estetika & Kehangatan Keluarga",
      description:
        "Backdrop TV, wall panel, cabinet display, dan interior ruang keluarga premium. Dirancang menjadi focal point hunian dengan sistem manajemen kabel tersembunyi yang rapi.",
      features: [
        "Backdrop TV floating dengan hidden cable management system",
        "Wall panel aksen kombinasi motif kayu, marmer PVC, dan acoustic slat",
        "Display cabinet dengan rak kaca tempered & pencahayaan terarah",
        "Detail pencahayaan ambient warm LED COB yang menenangkan",
      ],
      specs: {
        material: "Blockboard Grade A & Plywood 18mm kokoh tahan beban TV hingga 85 inch",
        hardware: "Bracket TV tilt heavy duty & push-to-open latch tanpa handle",
        finishings: ["UV Marble Board Sheet", "Acoustic Fluted Wood Slat", "HPL Textured Slate & Marble"],
        warranty: "Garansi Konstruksi 2 Tahun",
      },
      startingPrice: "Rp 1.850.000 / m²",
    },
    {
      code: "04",
      id: "wardrobe",
      name: "Wardrobe",
      tagline: "Penyimpanan Busana & Aksesori Kelas Butik",
      description:
        "Lemari pakaian custom, walk-in closet, dan storage system. Tata letak kompartemen disesuaikan dengan koleksi pakaian panjang, jas, drawer perhiasan, dan tas berharga.",
      features: [
        "Walk-in closet floor-to-ceiling memaksimalkan tinggi plafon",
        "Modul gantung, rak lipat, dan drawer dengan velvet organizer",
        "Rak aksesori transparan dengan divider jam tangan & perhiasan",
        "Lighting cabinet pintar dengan sensor gerak otomatis (PIR)",
      ],
      specs: {
        material: "Plywood Meranti 18mm tahan lembap & pintu kaca tempered frame aluminium",
        hardware: "Rel gantung aluminium heavy duty & drawer slide soft-close undermount",
        finishings: ["Kaca Tinted Bronze / Grey / Fluted Glass", "HPL Grey Linen Textured Interior", "Aluminium Profile Black Anodized"],
        warranty: "Garansi Konstruksi 2 Tahun & Rel Drawer 1 Tahun",
      },
      startingPrice: "Rp 2.250.000 / m²",
    },
    {
      code: "05",
      id: "under-the-stairs",
      name: "Under The Stairs",
      tagline: "Transformasi Sudut Mati Menjadi Ruang Multifungsi",
      description:
        "Pemanfaatan area bawah tangga menjadi storage, cabinet, atau display fungsional. Solusi cerdas untuk rumah compact modern agar setiap sudut bernilai guna tinggi.",
      features: [
        "Shoe rack tarik bertingkat dengan kapasitas puluhan pasang sepatu",
        "Storage tertutup untuk peralatan kebersihan atau koper besar",
        "Display shelf buku, artwork, atau tanaman hias indoor",
        "Cabinet compact dengan potongan sudut presisi mengikuti kemiringan tangga",
      ],
      specs: {
        material: "Plywood 18mm presisi CNC cutting sesuai sudut miring tangga",
        hardware: "Heavy duty bottom pull-out slide mampu menahan beban hingga 45kg",
        finishings: ["HPL Duotone Match Flooring", "Push-to-open seamless flush doors", "Edging PVC 2mm"],
        warranty: "Garansi Konstruksi 2 Tahun",
      },
      startingPrice: "Rp 2.050.000 / m'",
    },
  ] as ServiceItem[],

  // Portfolio Proyek Lengkap (16 Proyek Sesuai Katalog Resmi menujukeindahan.id/portfolio/)
  portfolio: [
    {
      id: "p-01",
      title: "Backdrop TV 01",
      category: "Living Room",
      photoCount: 5,
      location: "Kota Bandung",
      dimensions: "P: 3.4m × T: 2.7m",
      finishing: "HPL Walnut Warm & Fluted Panel + Warm LED",
      description:
        "Backdrop TV minimalis dengan rak penyimpanan terintegrasi dan pencahayaan LED yang elegan.",
      images: [
        { url: "/images/portfolio/IMG_20260513_213439.webp", caption: "Perspektif Utama Backdrop TV dengan Pencahayaan Warm LED" },
        { url: "/images/portfolio/living-room-01a.jpg", caption: "Detail Floating Credenza dan Cable Management" },
        { url: "/images/portfolio/IMG_20260513_213540.webp", caption: "Close-up Tekstur HPL Walnut & Acoustic Slat" },
      ],
    },
    {
      id: "p-02",
      title: "Backdrop TV 02",
      category: "Living Room",
      photoCount: 4,
      location: "Jakarta Selatan",
      dimensions: "P: 4.2m × T: 3.0m",
      finishing: "UV Marble Sheet Statuario & Gold Titanium Trim",
      description:
        "Backdrop TV minimalis dengan rak penyimpanan terintegrasi dan pencahayaan LED yang elegan.",
      images: [
        { url: "/images/portfolio/IMG_20260513_213540.webp", caption: "Tampilan Frontal UV Marble Statuario dan Hidden Soundbar Slot" },
        { url: "/images/portfolio/living-room-02a.jpg", caption: "Aksen List Gold Titanium pada Sambungan Panel" },
        { url: "/images/portfolio/IMG_20260513_213439.webp", caption: "Integrasi Lemari Hias Display Kaca Tinted Grey" },
      ],
    },
    {
      id: "p-03",
      title: "Bench Cabinet 01",
      category: "Lainnya",
      photoCount: 3,
      location: "Garut",
      dimensions: "P: 2.6m × T: 2.2m (Mengikuti Sudut Tangga)",
      finishing: "HPL Light Oak & Cushion Busa Rebonded",
      description:
        "Kabinet duduk fungsional yang menggabungkan tempat penyimpanan sepatu dan dekorasi.",
      images: [
        { url: "/images/portfolio/IMG_20260513_213555.webp", caption: "Bench Duduk & Shoe Storage Pas Bawah Tangga" },
      ],
    },
    {
      id: "p-04",
      title: "Kamar Set 01",
      category: "Bedroom",
      photoCount: 5,
      location: "Bandung Barat",
      dimensions: "P: 4.0m × L: 3.5m",
      finishing: "HPL Supermatte Sand Grey & Fabric Upholstered",
      description:
        "Interior kamar tidur lengkap dengan ranjang custom, backdrop panel, meja rias, dan pencahayaan tidur yang nyaman.",
      images: [
        { url: "/images/portfolio/IMG_20260513_213316.webp", caption: "Master Bedroom View dengan Ranjang Floating Custom" },
        { url: "/images/portfolio/bedroom-01a.jpg", caption: "Headboard Upholstered Fabric Beludru dengan Aksen Garis" },
        { url: "/images/portfolio/IMG_20260513_213423.webp", caption: "Meja Rias Gantung Compact dengan Cermin LED Sentuh" },
      ],
    },
    {
      id: "p-05",
      title: "Kamar Set 02",
      category: "Bedroom",
      photoCount: 4,
      location: "Denpasar, Bali",
      dimensions: "P: 4.5m × L: 3.8m",
      finishing: "Duco Warm White Satin & Natural Teak Wood",
      description:
        "Interior kamar tidur lengkap dengan ranjang custom, backdrop panel, meja rias, dan pencahayaan tidur yang nyaman.",
      images: [
        { url: "/images/portfolio/IMG_20260513_213423.webp", caption: "Panoramic View Kamar Tidur Villa Bernuansa Kayu Jati" },
        { url: "/images/portfolio/bedroom-02a.jpg", caption: "Headboard Plywood Jati Finishing Melamic Doff" },
        { url: "/images/portfolio/IMG_20260513_213316.webp", caption: "Area Duduk Santai Bench Bawah Jendela Kaca" },
      ],
    },
    {
      id: "p-06",
      title: "Kitchen Set 01",
      category: "Kitchen Set",
      photoCount: 5,
      location: "Kota Bandung",
      dimensions: "P: 3.6m + Island 1.8m",
      finishing: "HPL Charcoal Grey Matte & Top Table Solid Surface",
      description:
        "Kitchen set custom dengan kabinet penyimpanan yang rapi, island table, dan perpaduan warna modern.",
      images: [
        { url: "/images/portfolio/KITCHENSET_COUNTER_ABU_ORANGE_001.webp", caption: "Full View Kitchen Set L-Shape dengan Island Table" },
        { url: "/images/portfolio/kitchen-01a.jpg", caption: "Top Table Solid Surface Putih Marmer Tahan Noda & Panas" },
      ],
    },
    {
      id: "p-07",
      title: "Kitchen Set 02",
      category: "Kitchen Set",
      photoCount: 5,
      location: "Jakarta Barat",
      dimensions: "P: 3.2m × 2.4m (L-Shape)",
      finishing: "HPL Warm White & Backsplash Subway Tile",
      description:
        "Kitchen set custom dengan kabinet penyimpanan yang rapi, island table, dan perpaduan warna modern.",
      images: [
        { url: "/images/portfolio/IMG_20260513_213030.webp", caption: "L-Shape Kitchen Set Modern Putih Minimalis" },
      ],
    },
    {
      id: "p-08",
      title: "Kitchen Set 03",
      category: "Kitchen Set",
      photoCount: 5,
      location: "Tangerang Selatan",
      dimensions: "P: 4.0m Straight Line",
      finishing: "HPL Natural Oak Woodgrain & Granit Nero Marquina",
      description:
        "Kitchen set custom dengan kabinet penyimpanan yang rapi, island table, dan perpaduan warna modern.",
      images: [
        { url: "/images/portfolio/IMG_20260513_212524.webp", caption: "Straight-Line Dapur Bersih Kayu Oak & Granit" },
      ],
    },
    {
      id: "p-09",
      title: "Kitchen Set 04",
      category: "Kitchen Set",
      photoCount: 5,
      location: "Bogor",
      dimensions: "P: 3.8m + Island 2.0m",
      finishing: "Duco Sage Green Doff & Brass Gold Hardware",
      description:
        "Kitchen set custom dengan kabinet penyimpanan yang rapi, island table, dan perpaduan warna modern.",
      images: [
        { url: "/images/portfolio/KITCHENSET_COUNTER_ABU_TANAMAN_016.webp", caption: "Kitchen Set Modern dengan Aksen Tanaman Segar" },
      ],
    },
    {
      id: "p-10",
      title: "Kitchen Set 05",
      category: "Kitchen Set",
      photoCount: 5,
      location: "Bekasi",
      dimensions: "P: 2.8m Compact Kitchen",
      finishing: "HPL Matte Black & Terrazzo Countertop",
      description:
        "Kitchen set custom dengan kabinet penyimpanan yang rapi, island table, dan perpaduan warna modern.",
      images: [
        { url: "/images/portfolio/IMG_20260513_212433.webp", caption: "Dapur Compact Desain Industrial Minimalis" },
      ],
    },
    {
      id: "p-11",
      title: "Kitchen Set 06",
      category: "Kitchen Set",
      photoCount: 4,
      location: "Kota Bandung",
      dimensions: "P: 4.5m U-Shape",
      finishing: "HPL Concrete Grey & Solid Surface White Carara",
      description:
        "Kitchen set custom dengan kabinet penyimpanan yang rapi, island table, dan perpaduan warna modern.",
      images: [
        { url: "/images/portfolio/IMG_20260513_212257.webp", caption: "U-Shape Kitchen Layout dengan Full Storage Kabinet" },
      ],
    },
    {
      id: "p-12",
      title: "Lemari Bawah Tangga 01",
      category: "Under The Stairs",
      photoCount: 5,
      location: "Kota Bandung",
      dimensions: "P: 3.1m Mengikuti Sudut Tangga",
      finishing: "HPL Warm White Matte & Push-to-Open Door",
      description:
        "Pemanfaatan area bawah tangga secara optimal dengan sistem penyimpanan terintegrasi dan finishing rapi.",
      images: [
        { url: "/images/portfolio/IMG_20260513_213117.webp", caption: "Pemanfaatan Maksimal Ruang Vertikal Bawah Tangga" },
      ],
    },
    {
      id: "p-13",
      title: "Lemari Bawah Tangga 02",
      category: "Under The Stairs",
      photoCount: 4,
      location: "Tasikmalaya",
      dimensions: "P: 2.8m Sudut Miring",
      finishing: "HPL Natural Walnut & Rak Terbuka Aksen LED",
      description:
        "Pemanfaatan area bawah tangga secara optimal dengan sistem penyimpanan terintegrasi dan finishing rapi.",
      images: [
        { url: "/images/portfolio/IMG_20260513_213258.webp", caption: "Display Rak Hias & Storage Rahasia Bawah Tangga" },
      ],
    },
    {
      id: "p-14",
      title: "Living Room Backdrop 01",
      category: "Living Room",
      photoCount: 4,
      location: "Kota Cimahi",
      dimensions: "P: 3.8m × T: 2.8m",
      finishing: "Acoustic Wall Slat & Smoked Grey Mirror",
      description:
        "Desain interior ruang keluarga modern dengan kabinet display dan wall panel estetis.",
      images: [
        { url: "/images/portfolio/IMG_20260513_213214.webp", caption: "Tampilan Utama Living Room Wall Panel & Display" },
        { url: "/images/portfolio/IMG_20260513_213439.webp", caption: "Detail Pencahayaan Tersembunyi Kabinet TV" },
      ],
    },
    {
      id: "p-15",
      title: "Mini Bar 01",
      category: "Under The Stairs",
      photoCount: 4,
      location: "Seminyak, Bali",
      dimensions: "P: 2.4m × L: 0.7m × T: 1.1m",
      finishing: "Wood Slat Teak & Glass Rack Gantung",
      description:
        "Pemanfaatan area bawah tangga secara optimal dengan sistem penyimpanan terintegrasi dan finishing rapi.",
      images: [
        { url: "/images/portfolio/IMG_20260513_213049.webp", caption: "Sudut Mini Bar Bersantai dengan Lighting Eksklusif" },
      ],
    },
    {
      id: "p-16",
      title: "Wardrobe Custom 01",
      category: "Wardrobe",
      photoCount: 3,
      location: "Kota Cimahi",
      dimensions: "P: 3.0m × T: 2.9m × L: 0.6m",
      finishing: "Frame Aluminium Black & Tinted Glass + Sensor LED",
      description:
        "Lemari pakaian custom dengan kompartemen fungsional, rel gantung halus, dan finishing berkualitas.",
      images: [
        { url: "/images/portfolio/IMG_20260513_213230.webp", caption: "Lemari Pakaian Plafon Penuh Pintu Kaca Modern" },
      ],
    },
  ] as PortfolioItem[],

  // Simulasi Biaya (Parameter Calculation)
  costSimulator: {
    serviceOptions: [
      { id: "kitchen-set", name: "Kitchen Set", unit: "meter lari (m')", defaultDim: 3.5, minDim: 1.5, maxDim: 15.0, basePrice: 2100000, daysPerMeter: 3 },
      { id: "wardrobe", name: "Wardrobe / Lemari Custom", unit: "meter persegi (m²)", defaultDim: 4.5, minDim: 2.0, maxDim: 20.0, basePrice: 2250000, daysPerMeter: 3 },
      { id: "living-room", name: "Backdrop TV & Living Room", unit: "meter persegi (m²)", defaultDim: 6.0, minDim: 2.0, maxDim: 25.0, basePrice: 1850000, daysPerMeter: 2.5 },
      { id: "bedroom", name: "Kamar Set & Headboard", unit: "meter persegi (m²)", defaultDim: 5.0, minDim: 2.0, maxDim: 25.0, basePrice: 1950000, daysPerMeter: 2.5 },
      { id: "under-stairs", name: "Kabinet Bawah Tangga", unit: "meter lari (m')", defaultDim: 2.8, minDim: 1.0, maxDim: 8.0, basePrice: 2050000, daysPerMeter: 3.5 },
    ],
    materialGrades: [
      { id: "standard-hpl", name: "Standard HPL (Taco Matte / Woodgrain)", multiplier: 1.0, desc: "Plywood Meranti 18mm + HPL Taco Standar + Edging PVC 1mm" },
      { id: "premium-hpl", name: "Premium HPL + Edging PVC 2mm (Rekomendasi)", multiplier: 1.2, desc: "Plywood Meranti Super 18mm + HPL Aica/Carta Supermatte + Edging 2mm Mesin Press" },
      { id: "duco-luxury", name: "Duco PU / Kaca Tinted / Luxury Mix", multiplier: 1.45, desc: "Finishing Cat Duco Polyurethane Oven / Pintu Frame Aluminium Kaca Tinted" },
    ],
    locations: [
      { id: "bandung-raya", name: "Bandung Raya (Kota Bandung, Cimahi, Kab. Bandung)", surcharge: 0 },
      { id: "jabodetabek", name: "Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)", surcharge: 100000 },
      { id: "parahyangan-timur", name: "Parahyangan Timur (Garut, Tasikmalaya, Ciamis, Banjar)", surcharge: 50000 },
      { id: "bali", name: "Provinsi Bali (Denpasar, Badung, Gianyar, Tabanan)", surcharge: 150000 },
    ],
  },

  // Ekosistem Kemitraan
  partnership: {
    badge: "B2B Strategic Partnership Ecosystem",
    headline: "Bermitra dengan Jaringan 23 Workshop Aktif",
    subheadline:
      "Tingkatkan kapasitas pengerjaan proyek interior Anda tanpa perlu modal mesin, workshop fisik, atau pusing manajemen tukang. Jadikan Yuree Project perpanjangan tangan eksekusi Anda.",
    segments: [
      {
        id: "architect",
        label: "Architect & Designer",
        badge: "Mitra Desain & Arsitek",
        title: "Extension of Execution Team untuk Arsitek & Desainer Interior",
        description:
          "Anda fokus pada eksplorasi konsep, estetika gambar kerja, dan relasi klien. Serahkan seluruh tantangan fabrikasi, presisi ukuran lapangan, dan instalasi detail kepada jaringan 23 workshop Yuree Project.",
        valueProps: [
          "Menerjemahkan 3D & DED (Detailed Engineering Design) dengan toleransi milimeter",
          "Akses katalog sample material lengkap (HPL, Taco, Solid Surface, Kaca, Duco)",
          "Dedicated Project Manager untuk update berkala setiap tahap produksi",
          "Komisi kemitraan transparan atau harga B2B contract khusus",
        ],
        deliverables: [
          "Laporan QC workshop dengan dokumentasi foto/video sebelum kirim",
          "Mockup & sample board material ke studio arsitek",
          "Survei lokasi bersama tim teknis Yuree Project",
          "Garansi konstruksi 2 tahun atas nama proyek bersama",
        ],
        ctaLabel: "Daftar Mitra Arsitek",
        whatsappMessage: "Halo Yuree Project, saya Arsitek/Desainer Interior ingin berdiskusi mengenai skema Kemitraan Eksekusi Proyek.",
      },
      {
        id: "agency",
        label: "Agency & Business",
        badge: "Mitra Korporat & Agensi",
        title: "Dukungan Manufaktur Skala Masal untuk Agensi & Commercial Brand",
        description:
          "Bagi agensi kreatif, konsultan properti, dan kontraktor komersial yang membutuhkan produksi display store, tenant mal, kantor, atau multi-unit apartemen secara simultan.",
        valueProps: [
          "Kapasitas 2.690 meter/bulan mampu menangani tender proyek berskala besar",
          "Distribusi kerja paralel ke beberapa workshop untuk memotong lead time 40%",
          "Dokumentasi legalitas, invoice resmi, dan termin pembayaran fleksibel",
          "Standar keselamatan kerja & perlindungan instalasi di area komersial",
        ],
        deliverables: [
          "Production timeline schedule (Gantt Chart terukur)",
          "Laporan kapasitas workshop dialokasikan khusus per proyek",
          "Sertifikat garansi instalasi komersial",
          "Dukungan tim darurat instalasi malam untuk toko/mal",
        ],
        ctaLabel: "Daftar Mitra Agensi",
        whatsappMessage: "Halo Yuree Project, kami dari Agensi/Perusahaan ingin mengajukan kemitraan produksi interior komersial skala masal.",
      },
      {
        id: "influencer",
        label: "Influencer & Area Partner",
        badge: "Kreator & Exclusive Area",
        title: "Program Kolaborasi Konten & Hak Kemitraan Exclusive Area",
        description:
          "Bagi konten kreator home living/arsitektur atau pengusaha lokal yang ingin memiliki bisnis interior di kotanya dengan dukungan penuh operasional dari pusat.",
        valueProps: [
          "Dukungan room makeover / renovasi interior bersubsidi untuk materi konten viral",
          "Peluang lisensi 'Exclusive Area Partner' untuk mengelola leads di kota tertentu",
          "Bahan materi konten visual 4K & studio tour 23 workshop aktif",
          "Bagi hasil kompetitif per deal yang terealisasi dari audiens Anda",
        ],
        deliverables: [
          "Creative brief & timeline sinkronisasi produksi dengan jadwal konten",
          "Akses rekaman behind-the-scene tukang & mesin workshop",
          "Dashboard tracking prospek & transparansi closing deal",
          "Hak guna aset foto/video 4.048+ portfolio Yuree Project",
        ],
        ctaLabel: "Ajukan Kolaborasi Kreator",
        whatsappMessage: "Halo Yuree Project, saya ingin mendiskusikan peluang Kemitraan Influencer / Exclusive Area Partner.",
      },
    ] as PartnerSegment[],

    pillars: [
      {
        title: "Sistem Teruji",
        description: "Alur manufaktur terstandarisasi sejak 2018 dengan jam terbang 4.048+ proyek.",
        metric: "8+ Tahun Beroperasi",
      },
      {
        title: "Laporan Transparan",
        description: "Monitoring progres harian via WhatsApp group dan data kapasitas workshop terbuka.",
        metric: "100% Real-Time Update",
      },
      {
        title: "Risiko Terkontrol",
        description: "Bebas biaya sewa bengkel, mesin jutaan rupiah, maupun gaji tetap puluhan tukang.",
        metric: "0 Biaya Investasi Workshop",
      },
      {
        title: "Skala Nasional",
        description: "Jaringan terhubung di Jawa Barat, DKI Jakarta, dan Bali siap melayani proyek lintas pulau.",
        metric: "28 Kota Terkoneksi",
      },
    ] as PartnerPillar[],

    strengths: [
      { title: "Sistem Produksi Terstruktur", desc: "Dari drafting teknis hingga pemotongan presisi mengikuti SOP ketat terukur." },
      { title: "Kontrol Kualitas Premium", desc: "QC 2 tahap di bengkel sebelum pengiriman dan final inspection setelah instalasi." },
      { title: "Jaringan 23 Workshop Aktif", desc: "Tidak ada bottleneck pesanan; proyek dibagi secara proporsional ke sentra terdekat." },
      { title: "150+ Tenaga Ahli", desc: "Tukang kayu berpengalaman belasan tahun dengan etos kerja rapi dan tepat waktu." },
      { title: "Eksekusi Lebih Efisien", desc: "Waktu pengerjaan lebih terprediksi berkat kapasitas 2.690 meter per bulan." },
      { title: "Siap untuk Kemitraan", desc: "Sistem margin sehat, NDA, dan perlindungan hubungan klien dengan arsitek mitra." },
    ],
  },

  // 10 Tahap Alur Kerja Project
  workflowSteps: [
    {
      step: "01",
      title: "Konsultasi Kebutuhan",
      subtitle: "Menggali kebutuhan, gaya, anggaran, dan target ruang Anda",
      details: [
        "Diskusi preferensi desain (Modern Minimalis, Japandi, Industrial, Luxury)",
        "Identifikasi fungsi ruang dan kebutuhan anggota keluarga/pengguna",
        "Penentuan batas anggaran (budget target) dan estimasi awal",
      ],
      deliverable: "Summary Kebutuhan Klien & Rekomendasi Awal",
      duration: "1 - 2 Hari",
    },
    {
      step: "02",
      title: "Survey Lokasi",
      subtitle: "Peninjauan kondisi lapangan secara langsung",
      details: [
        "Kunjungan tim teknis ke rumah, apartemen, atau ruang komersial",
        "Inspeksi kondisi dinding, kelembapan, jalur kelistrikan, dan pipa air",
        "Pengecekan akses masuk (lift barang, tangga sempit, atau koridor)",
      ],
      deliverable: "Data Lapangan & Catatan Kondisi Existing Ruang",
      duration: "1 Hari",
    },
    {
      step: "03",
      title: "Pengukuran & Analisis Ruang",
      subtitle: "Pengukuran presisi dan analisis potensi ruang",
      details: [
        "Pengukuran laser meter dengan toleransi akurasi hingga milimeter",
        "Pencatatan elevasi lantai, kedataran dinding, dan letak stop kontak",
        "Analisis pencahayaan alami dan sirkulasi pergerakan pengguna",
      ],
      deliverable: "Sketsa Ukuran Lapangan / As-Built Dimension Sheet",
      duration: "1 Hari",
    },
    {
      step: "04",
      title: "Desain atau Validasi Desain",
      subtitle: "Penyusunan atau validasi desain agar sesuai konsep",
      details: [
        "Pembuatan layout 2D dan visualisasi 3D fotorealistik",
        "Validasi DED arsitek mitra agar 100% siap difabrikasi di workshop",
        "Penentuan sample swatch material (HPL, warna Duco, jenis handle)",
      ],
      deliverable: "Gambar Kerja Produksi & 3D Render Final",
      duration: "3 - 7 Hari",
    },
    {
      step: "05",
      title: "Penawaran & Persetujuan RAB",
      subtitle: "Rincian biaya, material, dan persetujuan lingkup kerja",
      details: [
        "Penyusunan Rencana Anggaran Biaya (RAB) transparan tanpa biaya tersembunyi",
        "Pilihan grade material dan aksesoris hardware yang disepakati",
        "Penandatanganan SPK (Surat Perjanjian Kerja) dan pembayaran uang muka",
      ],
      deliverable: "Kontrak Kerja (SPK) & Dokumen Jadwal Pengerjaan",
      duration: "1 - 2 Hari",
    },
    {
      step: "06",
      title: "Produksi Workshop",
      subtitle: "Pengerjaan presisi di jaringan workshop aktif Yuree Project",
      details: [
        "Pemotongan panel multipleks presisi sesuai cutting list optimasi",
        "Pelapisan HPL dengan lem thermo-active dan pengepresan rata",
        "Pemasangan edging PVC 2mm dengan mesin edge-bander rapi halus",
        "Pengecatan finishing Duco PU bertahap di ruang spray steril",
      ],
      deliverable: "Modul Furniture Siap Rakit & Update Foto Fabrikasi",
      duration: "14 - 25 Hari Kerja",
    },
    {
      step: "07",
      title: "Quality Control (QC)",
      subtitle: "Pemeriksaan kualitas sebelum keluar dari workshop",
      details: [
        "Dry assembly (uji pasang modul di workshop) untuk memastikan presisi",
        "Pengecekan fungsi engsel soft-close dan kelancaran rel drawer",
        "Inspeksi kerapian permukaan, sambungan sudut, dan kebersihan modul",
        "Pengemasan aman menggunakan bubble wrap dan corner protector kardus",
      ],
      deliverable: "Checklist Kelulusan QC & Foto Modul Terbungkus Rapi",
      duration: "1 - 2 Hari",
    },
    {
      step: "08",
      title: "Pengiriman & Instalasi",
      subtitle: "Distribusi dan pemasangan yang rapi di lokasi",
      details: [
        "Pengiriman armada khusus dari workshop terdekat ke lokasi proyek",
        "Proteksi lantai dan dinding ruangan eksisting sebelum instalasi",
        "Pemasangan modul oleh tim instalasi spesialis Yuree Project",
        "Koneksi kelistrikan lampu LED, kompor, dan sanitasi kitchen sink",
      ],
      deliverable: "Furniture Terpasang Sempurna di Lokasi Klien",
      duration: "2 - 5 Hari",
    },
    {
      step: "09",
      title: "Final Checking",
      subtitle: "Pengecekan akhir detail, fungsi, dan finishing",
      details: [
        "Inspeksi bersama klien atau arsitek pengawas di lokasi",
        "Penyetelan celah pintu kabinet (gap alignment) agar presisi simetris",
        "Pembersihan sisa debu konstruksi dan pemolesan permukaan interior",
      ],
      deliverable: "Berita Acara Pengecekan Lapangan",
      duration: "1 Hari",
    },
    {
      step: "10",
      title: "Serah Terima Project",
      subtitle: "Serah terima hasil akhir dan dokumentasi ke klien",
      details: [
        "Penandatanganan BAST (Berita Acara Serah Terima)",
        "Penyerahan kartu garansi resmi konstruksi dan fitting",
        "Panduan perawatan material interior agar awet puluhan tahun",
        "Sesi dokumentasi foto dan video hasil akhir proyek",
      ],
      deliverable: "Dokumen BAST, Sertifikat Garansi & Hasil Foto High-Res",
      duration: "Hari H Penyelesaian",
    },
  ] as WorkflowStep[],

  // Jangkauan & Mitra
  coverage: {
    provincesCount: 3,
    citiesCount: 28,
    provinces: [
      {
        name: "Jawa Barat",
        cities: [
          "Kab. Bandung", "Kota Cimahi", "Kab. Bandung Barat", "Kab. Garut", "Kab. Tasikmalaya",
          "Kab. Ciamis", "Kota Banjar", "Kab. Sumedang", "Kab. Majalengka", "Kab. Majalaya",
          "Kab. Cirebon", "Kab. Indramayu", "Kab. Subang", "Kab. Purwakarta", "Kab. Karawang",
          "Kab. Sukabumi", "Kab. Cianjur", "Kab. Bogor", "Kota Depok", "Kota Bekasi", "Kab. Bekasi"
        ],
      },
      {
        name: "DKI Jakarta & Banten",
        cities: [
          "Kota Jakarta", "Kota Jakarta Barat", "Kota Jakarta Selatan", "Kota Jakarta Timur", "Kota Jakarta Utara",
          "Kota Tangerang", "Kota Tangerang Selatan", "Kab. Tangerang"
        ],
      },
      {
        name: "Bali",
        cities: [
          "Kota Denpasar", "Kab. Badung", "Kab. Gianyar", "Kab. Tabanan", "Seluruh Area Bali"
        ],
      },
    ],
    allCities: [
      "Kab. Indramayu", "Kab. Bandung", "Kab. Bandung Barat", "Kab. Bekasi", "Kab. Bogor", "Kab. Cianjur",
      "Kab. Cirebon", "Kab. Garut", "Kab. Karawang", "Kab. Majalaya", "Kab. Majalengka", "Kab. Purwakarta",
      "Kab. Subang", "Kab. Sukabumi", "Kab. Sumedang", "Kab. Tangerang", "Kab. Tasikmalaya", "Kab. Ciamis",
      "Kota Banjar", "Kota Bekasi", "Kota Cimahi", "Kota Depok", "Kota Jakarta", "Kota Jakarta Barat",
      "Kota Jakarta Selatan", "Kota Jakarta Timur", "Kota Jakarta Utara", "Kota Tangerang", "Kota Tangerang Selatan",
      "Area Bali (Denpasar, Badung, Gianyar, Tabanan)"
    ],
    partners: [
      { name: "Home Putra Interior", role: "Strategic Partner", type: "Strategic Partner" },
      { name: "Home Interior Bandung", role: "Interior Account", type: "Interior Account" },
      { name: "Savoy Interior", role: "Interior Network", type: "Interior Network" },
      { name: "Patner Interior", role: "Brand Partner", type: "Brand Partner" },
      { name: "Kitchenset Bandung Barat", role: "Kitchen Set Account", type: "Kitchen Set Account" },
      { name: "Akbar Interior", role: "Interior Partner", type: "Interior Partner" },
      { name: "Mewah Interior", role: "Premium Interior Account", type: "Premium Interior Account" },
      { name: "Garis Interior", role: "Design Partner", type: "Design Partner" },
      { name: "Porto Interior", role: "Business Partner", type: "Business Partner" },
      { name: "Pusat Interior", role: "Interior Account", type: "Interior Account" },
      { name: "Furniture Cimahi", role: "Furniture Account", type: "Furniture Account" },
      { name: "Argo Interior", role: "Interior Partner", type: "Interior Partner" },
      { name: "Dekor Interior", role: "Interior Partner", type: "Interior Partner" },
      { name: "Broto Interior", role: "Interior Partner", type: "Interior Partner" },
    ] as PartnerItem[],
  },

  // 8 Pertanyaan FAQ
  faqs: [
    {
      id: "faq-1",
      question: "Apakah Yuree Project melayani custom interior?",
      answer:
        "Ya, 100% custom. Kami mengkhususkan diri dalam manufaktur interior berbasis ukuran nyata ruangan dan preferensi personal klien—mulai dari Kitchen Set, Lemari Pakaian (Wardrobe), Kamar Tidur, Ruang Tamu / Backdrop TV, hingga pemanfaatan cerdas Bawah Tangga. Setiap modul diproduksi dengan toleransi presisi tinggi di jaringan workshop kami.",
    },
    {
      id: "faq-2",
      question: "Apakah bisa bekerja sama dengan arsitek?",
      answer:
        "Sangat bisa. Kami memiliki skema khusus 'Extension of Execution Team' untuk Arsitek dan Desainer Interior. Anda cukup menyediakan konsep 3D dan Detailed Engineering Drawing (DED), tim workshop Yuree Project akan memfabrikasi dan memasangnya di lapangan dengan standar QC ketat. Hubungan profesional dengan klien Anda tetap terjaga dengan integritas penuh.",
    },
    {
      id: "faq-3",
      question: "Apakah Yuree Project menerima kemitraan agensi atau influencer?",
      answer:
        "Ya. Kami membuka pintu kolaborasi luas untuk Agensi komersial (proyek kantor/toko retail berskala masal) serta Konten Kreator & Influencer home-living. Kami menyediakan materi konten visual 4K, dukungan makeover interior bersubsidi untuk konten viral, sistem komisi bagi hasil transparan, hingga hak exclusive area.",
    },
    {
      id: "faq-4",
      question: "Apakah bisa survey lokasi?",
      answer:
        "Tentu saja. Setelah konsultasi awal dan estimasi rancangan anggaran disetujui secara garis besar, tim teknis surveyor kami akan datang langsung ke lokasi proyek Anda untuk melakukan pengukuran laser presisi, cek elevasi lantai, kedataran dinding, titik pipa air, serta jalur kelistrikan.",
    },
    {
      id: "faq-5",
      question: "Area mana saja yang dilayani?",
      answer:
        "Saat ini cakupan operasional kami mencakup 3 provinsi utama dan 28 kota/kabupaten di Indonesia: seluruh area Jawa Barat (Bandung Raya, Priangan Timur seperti Garut, Tasikmalaya, Ciamis, Banjar, serta Pantura), seluruh area DKI Jakarta, Bogor, Depok, Tangerang, Bekasi (Jabodetabek), hingga Pulau Bali (Denpasar, Badung, Gianyar, dan sekitarnya).",
    },
    {
      id: "faq-6",
      question: "Apa itu kemitraan exclusive area?",
      answer:
        "Kemitraan Exclusive Area adalah program kemitraan bisnis di mana mitra lokal diberikan hak eksklusif untuk menangani dan mengonversi seluruh leads proyek interior di kota tertentu. Mitra tidak perlu mendirikan pabrik sendiri karena seluruh pesanan difabrikasi langsung oleh 23 jaringan workshop Yuree Project dengan kapasitas 2.690 meter/bulan.",
    },
    {
      id: "faq-7",
      question: "Seberapa besar kapasitas produksi Yuree Project?",
      answer:
        "Kapasitas produksi gabungan kami saat ini mencapai 2.690 meter per bulan, didukung oleh 23 unit workshop aktif dan 156 personel workshop inti terdata (serta 150+ tenaga ahli spesialis finishing dan instalasi). Dengan skala jaringan ini, kami mampu melayani puluhan proyek residensial dan proyek komersial secara paralel tanpa kendala antrean.",
    },
    {
      id: "faq-8",
      question: "Apakah Yuree Project mendukung strategi konten influencer?",
      answer:
        "Ya, kami sangat memahami dinamika digital marketing arsitektur dan interior. Kami menyediakan materi behind-the-scene proses fabrikasi kayu asli, studio visual tour, sampel material inovatif, hingga tim dokumentasi proyek untuk membantu kreator memproduksi konten video berkualitas tinggi yang mengedukasi audiens sekaligus menghasilkan konversi kemitraan.",
    },
  ] as FaqItem[],
};
