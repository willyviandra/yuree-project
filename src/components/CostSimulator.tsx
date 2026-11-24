"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { companyData } from "@/data/companyData";
import {
  Send,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Building2,
  User,
  MapPin,
  UtensilsCrossed,
  Layers,
  Tv,
  Bed,
  Briefcase,
  History,
  Download,
  FileImage,
  FileText,
  Eye,
  Plus,
  Minus,
  Trash2,
  X,
  Printer,
  CheckCircle2,
  Flame,
} from "lucide-react";

// ─────────────────────────────────────────────
// Type Definitions
// ─────────────────────────────────────────────

export type ComponentItem = {
  id: string;
  name: string;
  unit: string;
  unitBadge: string;
  desc: string;
  pricePerUnit: number;
  defaultDim: number;
  minDim: number;
  maxDim: number;
};

export type CategoryData = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  components: ComponentItem[];
};

export type ApplianceItem = {
  id: string;
  name: string;
  brandSpec: string;
  price: number;
};

export type CustomAccessory = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

export type SavedSimulation = {
  id: string;
  date: string;
  clientName: string;
  accountName: string;
  location: string;
  total: number;
  itemCount: number;
};

// ─────────────────────────────────────────────
// Master Data: 5 Categories matching reference
// ─────────────────────────────────────────────

const CATEGORIES: CategoryData[] = [
  {
    id: "kitchen-set",
    label: "Kitchen Set Custom",
    icon: UtensilsCrossed,
    components: [
      {
        id: "kc-bawah",
        name: "Kabinet Bawah",
        unit: "m'",
        unitBadge: "Meter Lari (M1 / Layout)",
        desc: "Tinggi standar ~80–85 cm, kedalaman ~60 cm. Sudah termasuk engsel slow-motion & rel laci standar.",
        pricePerUnit: 2100000,
        defaultDim: 2,
        minDim: 0.5,
        maxDim: 10,
      },
      {
        id: "kc-atas",
        name: "Kabinet Atas",
        unit: "m'",
        unitBadge: "Meter Lari (M1 / Layout)",
        desc: "Tinggi standar ~70–80 cm, kedalaman ~35 cm. Menggantung di dinding, rak piring/gelas bumbu.",
        pricePerUnit: 1800000,
        defaultDim: 2,
        minDim: 0.5,
        maxDim: 10,
      },
      {
        id: "kc-atas-full",
        name: "Kabinet Atas Full Plafond",
        unit: "m²",
        unitBadge: "Rumus Khusus: (P x 2) x Tarif",
        desc: "Tinggi penuh hingga plafon (~100–120+ cm), memaksimalkan kapasitas penyimpanan atas. Rumus hitung khusus workshop: (Panjang x 2) x Tarif.",
        pricePerUnit: 1950000,
        defaultDim: 2,
        minDim: 0.5,
        maxDim: 10,
      },
      {
        id: "kc-island",
        name: "Meja Island Kitchen",
        unit: "m'",
        unitBadge: "Rumus Khusus: (P : 0,6) x Tarif",
        desc: "Meja tengah dapur serbaguna. Rumus hitung khusus workshop: (Panjang : 0,6) x Tarif.",
        pricePerUnit: 2400000,
        defaultDim: 1.5,
        minDim: 0.6,
        maxDim: 5,
      },
      {
        id: "kc-toptable",
        name: "Top Table (Meja Kerja Dapur)",
        unit: "m'",
        unitBadge: "Meter Lari (M1 / Layout)",
        desc: "Permukaan meja atas kabinet bawah, tahan panas dan goresan saat memasak.",
        pricePerUnit: 850000,
        defaultDim: 2,
        minDim: 0.5,
        maxDim: 10,
      },
      {
        id: "kc-backsplash",
        name: "Backsplash Dinding Kitchen",
        unit: "m'",
        unitBadge: "Meter Lari (M1 / Layout)",
        desc: "Pelapis dinding antara kabinet atas dan bawah untuk melindungi dari cipratan minyak & air.",
        pricePerUnit: 600000,
        defaultDim: 2,
        minDim: 0.5,
        maxDim: 10,
      },
      {
        id: "kc-topbar",
        name: "Topi Bar / Plafon Drop Bar",
        unit: "m'",
        unitBadge: "Meter Lari (M1)",
        desc: "Dekorasi kanopi gantung di atas mini bar atau island untuk dudukan lampu gantung.",
        pricePerUnit: 750000,
        defaultDim: 1.5,
        minDim: 0.5,
        maxDim: 6,
      },
      {
        id: "kc-rakopen",
        name: "Rak Terbuka (Open Shelf Kitchen)",
        unit: "m'",
        unitBadge: "Meter Lari (M1)",
        desc: "Ambalan gantung terbuka untuk bumbu, toples, atau cangkir estetik.",
        pricePerUnit: 550000,
        defaultDim: 1,
        minDim: 0.3,
        maxDim: 5,
      },
      {
        id: "kc-boxkulkas",
        name: "Box Kulkas & Microwave / Dispenser",
        unit: "m²",
        unitBadge: "Rumus Khusus: P (min. 1m) x T x Tarif",
        desc: "Kabinet framed untuk menutupi kulkas, microwave oven, dan dispenser agar rapi seirama.",
        pricePerUnit: 1750000,
        defaultDim: 2,
        minDim: 0.5,
        maxDim: 8,
      },
    ],
  },
  {
    id: "lemari-partisi",
    label: "Lemari & Partisi",
    icon: Layers,
    components: [
      {
        id: "lm-wardrobe",
        name: "Wardrobe / Lemari Custom",
        unit: "m²",
        unitBadge: "Meter Persegi (M2 / Tampak Depan)",
        desc: "Lemari pakaian custom ukuran penuh, termasuk rel gantung, laci dalam, dan cermin jika diminta.",
        pricePerUnit: 2250000,
        defaultDim: 4,
        minDim: 1,
        maxDim: 20,
      },
      {
        id: "lm-partisi",
        name: "Partisi Ruangan",
        unit: "m²",
        unitBadge: "Meter Persegi (M2)",
        desc: "Partisi vertikal berbahan multipleks HPL atau Duco, untuk pembagi ruang fungsional dan estetis.",
        pricePerUnit: 1950000,
        defaultDim: 3,
        minDim: 1,
        maxDim: 15,
      },
      {
        id: "lm-rak-buku",
        name: "Rak Buku / Display Shelf",
        unit: "m²",
        unitBadge: "Meter Persegi (M2)",
        desc: "Rak built-in untuk buku, koleksi, dan dekorasi ruang tamu atau ruang kerja.",
        pricePerUnit: 1750000,
        defaultDim: 2,
        minDim: 0.5,
        maxDim: 10,
      },
      {
        id: "lm-pintu-geser",
        name: "Pintu Geser Custom",
        unit: "m²",
        unitBadge: "Meter Persegi (M2 / Daun Pintu)",
        desc: "Pintu geser berbahan HPL, kaca tinted, atau frame aluminium — termasuk rel geser standar.",
        pricePerUnit: 2100000,
        defaultDim: 2,
        minDim: 0.5,
        maxDim: 10,
      },
      {
        id: "lm-bawah-tangga",
        name: "Lemari Bawah Tangga",
        unit: "m'",
        unitBadge: "Meter Lari (M1)",
        desc: "Kabinet miring custom pemanfaatan cerdas ruang bawah tangga untuk sepatu, storage, atau koper.",
        pricePerUnit: 2050000,
        defaultDim: 2.5,
        minDim: 1,
        maxDim: 8,
      },
    ],
  },
  {
    id: "backdrop-tv",
    label: "Backdrop TV & Wallpanel",
    icon: Tv,
    components: [
      {
        id: "bd-backdrop",
        name: "Backdrop TV Minimalis",
        unit: "m²",
        unitBadge: "Meter Persegi (M2 / Tampak Depan)",
        desc: "Panel backdrop TV dengan kombinasi finishing HPL, Duco, atau wallpanel kayu estetis.",
        pricePerUnit: 1850000,
        defaultDim: 6,
        minDim: 1,
        maxDim: 20,
      },
      {
        id: "bd-wallpanel",
        name: "Wall Panel Dekoratif / Fluted",
        unit: "m²",
        unitBadge: "Meter Persegi (M2)",
        desc: "Panel dinding dari multipleks dengan finishing slat kayu, fluted, atau motif 3D estetis.",
        pricePerUnit: 1650000,
        defaultDim: 4,
        minDim: 1,
        maxDim: 20,
      },
      {
        id: "bd-meja-tv",
        name: "Meja TV / Console Custom",
        unit: "m'",
        unitBadge: "Meter Lari (M1)",
        desc: "Meja TV gantung rendah custom dengan laci dan kompartemen peralatan elektronik tersembunyi.",
        pricePerUnit: 1750000,
        defaultDim: 2,
        minDim: 0.5,
        maxDim: 6,
      },
      {
        id: "bd-slat-wood",
        name: "Wood Slat Kisi-Kisi Panel",
        unit: "m²",
        unitBadge: "Meter Persegi (M2)",
        desc: "Kisi-kisi bilah kayu solid / HPL vertikal dengan backlight LED warm white terintegrasi.",
        pricePerUnit: 1900000,
        defaultDim: 3,
        minDim: 1,
        maxDim: 15,
      },
    ],
  },
  {
    id: "kamar-tidur",
    label: "Kamar Tidur (Dipan/Rias)",
    icon: Bed,
    components: [
      {
        id: "kt-dipan",
        name: "Dipan Tempat Tidur Custom",
        unit: "m²",
        unitBadge: "Meter Persegi (M2 / Ukuran Kasur)",
        desc: "Ranjang custom berbasis ukuran kasur (Queen/King) dengan laci bawah tersembunyi.",
        pricePerUnit: 2300000,
        defaultDim: 3.5,
        minDim: 1.5,
        maxDim: 6,
      },
      {
        id: "kt-headboard",
        name: "Headboard Panel",
        unit: "m²",
        unitBadge: "Meter Persegi (M2 / Tampak Depan)",
        desc: "Panel kepala ranjang finishing Duco, HPL, kain bludru busa empuk, atau fluted panel.",
        pricePerUnit: 1800000,
        defaultDim: 2,
        minDim: 0.5,
        maxDim: 6,
      },
      {
        id: "kt-meja-rias",
        name: "Meja Rias / Vanity Table",
        unit: "unit",
        unitBadge: "Per Unit / Set",
        desc: "Meja rias custom dengan cermin duduk LED dan laci dalam penyimpanan kosmetik.",
        pricePerUnit: 3500000,
        defaultDim: 1,
        minDim: 1,
        maxDim: 3,
      },
      {
        id: "kt-nakas",
        name: "Nakas Samping Ranjang",
        unit: "unit",
        unitBadge: "Per Unit (1 atau 2 Sisi)",
        desc: "Nakas samping ranjang custom dengan laci soft-close dan stop kontak charger terintegrasi.",
        pricePerUnit: 1200000,
        defaultDim: 1,
        minDim: 1,
        maxDim: 2,
      },
    ],
  },
  {
    id: "ruang-kerja",
    label: "Ruang Kerja (Office)",
    icon: Briefcase,
    components: [
      {
        id: "of-meja-staff",
        name: "Meja Kerja Staff / Workstation",
        unit: "m'",
        unitBadge: "Meter Lari (M1 / Modul)",
        desc: "Meja kerja modular lengkap dengan grommet kabel, laci gantung, dan divider partisi.",
        pricePerUnit: 1850000,
        defaultDim: 2,
        minDim: 1,
        maxDim: 12,
      },
      {
        id: "of-meja-direktur",
        name: "Meja Direktur / Meja Pimpinan",
        unit: "m²",
        unitBadge: "Meter Persegi (M2)",
        desc: "Meja pimpinan eksekutif dengan laci samping, modesty panel, dan finishing HPL premium serat kayu.",
        pricePerUnit: 2500000,
        defaultDim: 3,
        minDim: 1.5,
        maxDim: 6,
      },
      {
        id: "of-lemari-arsip",
        name: "Lemari Arsip & File Cabinet",
        unit: "m²",
        unitBadge: "Meter Persegi (M2 / Tampak Depan)",
        desc: "Lemari penyimpanan dokumen kantor dengan kunci sentral, pintu ayun, dan rak beban berat.",
        pricePerUnit: 1950000,
        defaultDim: 4,
        minDim: 1,
        maxDim: 15,
      },
      {
        id: "of-credenza",
        name: "Credenza / Side Cabinet Kantor",
        unit: "m'",
        unitBadge: "Meter Lari (M1)",
        desc: "Kabinet rendah penyimpan printer, map, dan dekorasi kantor dengan pintu geser/ayun.",
        pricePerUnit: 1750000,
        defaultDim: 2,
        minDim: 1,
        maxDim: 6,
      },
      {
        id: "of-wall-akustik",
        name: "Wall Slat Panel Akustik Kantor",
        unit: "m²",
        unitBadge: "Meter Persegi (M2)",
        desc: "Panel dinding peredam akustik ruang meeting dengan aksen bilah kayu elegan.",
        pricePerUnit: 1950000,
        defaultDim: 4,
        minDim: 1,
        maxDim: 20,
      },
    ],
  },
];

// ─────────────────────────────────────────────
// Kitchen Appliances Data
// ─────────────────────────────────────────────

const APPLIANCES_DATA: ApplianceItem[] = [
  {
    id: "app-1",
    name: "Kompor Tanam Gas (2 Tungku)",
    brandSpec: "Modena / Rinnai Garansi Resmi",
    price: 2450000,
  },
  {
    id: "app-2",
    name: "Cooker Hood Slim Exhaust",
    brandSpec: "Modena 60cm Stainless",
    price: 1850000,
  },
  {
    id: "app-3",
    name: "Kitchen Sink Stainless 304 + Kran Fleksibel",
    brandSpec: "Tebal 3mm + Afur & Selang Pembuangan",
    price: 1350000,
  },
  {
    id: "app-4",
    name: "Paket Bundling Hemat (Kompor + Hood + Sink)",
    brandSpec: "Paket Lengkap Best Seller (Hemat Rp 450.000)",
    price: 5200000,
  },
  {
    id: "app-5",
    name: "Grease Trap Stainless / Filter Lemak Pipa",
    brandSpec: "Mencegah Bau & Penyumbatan Pipa Dapur",
    price: 650000,
  },
];

// ─────────────────────────────────────────────
// Regional Location Data
// ─────────────────────────────────────────────

const LOCATION_OPTIONS: Record<string, { cities: string[]; surchargeRatio: number }> = {
  "Jawa Barat": {
    cities: [
      "Kota Bandung",
      "Kota Cimahi",
      "Kab. Bandung",
      "Kab. Bandung Barat",
      "Kab. Garut",
      "Kab. Tasikmalaya",
      "Kota Tasikmalaya",
      "Kab. Ciamis",
      "Kota Banjar",
      "Kab. Sumedang",
      "Kab. Cirebon",
      "Kab. Karawang",
      "Kab. Purwakarta",
      "Kab. Bogor",
      "Kota Bogor",
      "Kota Depok",
      "Kota Bekasi",
      "Kab. Bekasi",
    ],
    surchargeRatio: 0, // Dalam kota / base
  },
  "DKI Jakarta & Banten": {
    cities: [
      "Jakarta Selatan",
      "Jakarta Barat",
      "Jakarta Pusat",
      "Jakarta Timur",
      "Jakarta Utara",
      "Kota Tangerang",
      "Kota Tangerang Selatan",
      "Kab. Tangerang",
    ],
    surchargeRatio: 0.05, // +5% biaya logistik / instalasi
  },
  "Provinsi Bali": {
    cities: [
      "Kota Denpasar",
      "Kab. Badung",
      "Kab. Gianyar",
      "Kab. Tabanan",
      "Kab. Buleleng",
    ],
    surchargeRatio: 0.08, // +8% biaya instalasi antar-pulau
  },
  "Jawa Tengah & DIY": {
    cities: [
      "Kota Semarang",
      "Kota Surakarta (Solo)",
      "Kota Yogyakarta",
      "Kab. Sleman",
    ],
    surchargeRatio: 0.06,
  },
};

// ─────────────────────────────────────────────
// Format Currency Helper
// ─────────────────────────────────────────────

function formatRp(val: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(val);
}

// ─────────────────────────────────────────────
// Component Props
// ─────────────────────────────────────────────

type ComponentState = {
  checked: boolean;
  dim: number;
};

export function CostSimulator({ isStandalone = false }: { isStandalone?: boolean } = {}) {
  const { brand } = companyData;

  // Form States (Identity & Location)
  const [accountName, setAccountName] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [clientAddress, setClientAddress] = useState<string>("");
  const [selectedProvince, setSelectedProvince] = useState<string>("Jawa Barat");
  const [selectedCity, setSelectedCity] = useState<string>("Kota Bandung");

  // Category & Components
  const [activeCategoryId, setActiveCategoryId] = useState<string>("kitchen-set");
  const [compStates, setCompStates] = useState<Record<string, ComponentState>>({});

  // Appliances & Custom Accessories
  const [selectedAppliances, setSelectedAppliances] = useState<Record<string, boolean>>({});
  const [appliancesOpen, setAppliancesOpen] = useState<boolean>(false);
  const [accessoriesOpen, setAccessoriesOpen] = useState<boolean>(false);
  const [customAccessories, setCustomAccessories] = useState<CustomAccessory[]>([
    { id: "acc-1", name: "Rak Piring Tarik Stainless", price: 650000, qty: 1 },
  ]);
  const [unitsHelpOpen, setUnitsHelpOpen] = useState<boolean>(false);

  // History & Modal states
  const [historyModalOpen, setHistoryModalOpen] = useState<boolean>(false);
  const [previewModalOpen, setPreviewModalOpen] = useState<boolean>(false);
  const [savedSimulations, setSavedSimulations] = useState<SavedSimulation[]>([]);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState<string | null>(null);

  // Entrance visibility
  const [visible, setVisible] = useState(isStandalone);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || isStandalone) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [isStandalone]);

  // Load saved history on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("yuree_simulation_history");
      if (stored) {
        setSavedSimulations(JSON.parse(stored));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const activeCategory = CATEGORIES.find((c) => c.id === activeCategoryId) || CATEGORIES[0];

  // Helper for component state
  const getState = (comp: ComponentItem): ComponentState => {
    return compStates[comp.id] ?? { checked: false, dim: comp.defaultDim };
  };

  const setChecked = (id: string, val: boolean) => {
    setCompStates((prev) => ({
      ...prev,
      [id]: {
        ...(prev[id] ?? {
          dim: activeCategory.components.find((c) => c.id === id)?.defaultDim ?? 1,
        }),
        checked: val,
      },
    }));
  };

  const setDim = (comp: ComponentItem, val: number) => {
    setCompStates((prev) => ({
      ...prev,
      [comp.id]: { ...(prev[comp.id] ?? { checked: false }), dim: val },
    }));
  };

  // Add / delete custom accessory
  const addAccessoryRow = () => {
    const newId = `acc-${Date.now()}`;
    setCustomAccessories((prev) => [
      ...prev,
      { id: newId, name: "", price: 0, qty: 1 },
    ]);
  };

  const updateAccessory = (id: string, field: keyof CustomAccessory, val: string | number) => {
    setCustomAccessories((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  const removeAccessory = (id: string) => {
    setCustomAccessories((prev) => prev.filter((item) => item.id !== id));
  };

  // Reset entire simulator
  const resetSimulator = () => {
    setCompStates({});
    setSelectedAppliances({});
    setCustomAccessories([]);
    setAccountName("");
    setClientName("");
    setClientAddress("");
  };

  // Price calculation
  const { subtotalBase, surchargeAmount, totalPrice, activeItems, breakdown } = useMemo(() => {
    let base = 0;
    let count = 0;
    const bd: { name: string; qtyLabel: string; subtotal: number }[] = [];

    // 1. Components
    CATEGORIES.forEach((cat) => {
      cat.components.forEach((comp) => {
        const st = compStates[comp.id];
        if (st?.checked) {
          const sub = Math.round(comp.pricePerUnit * (st.dim || 1));
          base += sub;
          count++;
          bd.push({
            name: `${comp.name} (${cat.label})`,
            qtyLabel: `${st.dim} ${comp.unit}`,
            subtotal: sub,
          });
        }
      });
    });

    // 2. Appliances
    APPLIANCES_DATA.forEach((app) => {
      if (selectedAppliances[app.id]) {
        base += app.price;
        count++;
        bd.push({
          name: app.name,
          qtyLabel: "1 unit",
          subtotal: app.price,
        });
      }
    });

    // 3. Custom Accessories
    customAccessories.forEach((acc) => {
      if (acc.name.trim() && acc.price > 0 && acc.qty > 0) {
        const sub = Math.round(acc.price * acc.qty);
        base += sub;
        count++;
        bd.push({
          name: `Aksesoris: ${acc.name}`,
          qtyLabel: `${acc.qty} item`,
          subtotal: sub,
        });
      }
    });

    // Regional surcharge
    const locConfig = LOCATION_OPTIONS[selectedProvince];
    const ratio = locConfig ? locConfig.surchargeRatio : 0;
    const surcharge = Math.round(base * ratio);
    const grandTotal = base + surcharge;

    return {
      subtotalBase: base,
      surchargeAmount: surcharge,
      totalPrice: grandTotal,
      activeItems: count,
      breakdown: bd,
    };
  }, [compStates, selectedAppliances, customAccessories, selectedProvince]);

  // Save current simulation to history
  const saveToHistory = () => {
    if (activeItems === 0) return;
    const newSim: SavedSimulation = {
      id: `sim-${Date.now()}`,
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      clientName: clientName.trim() || "Klien Umum",
      accountName: accountName.trim() || "Akun Yuree",
      location: `${selectedCity}, ${selectedProvince}`,
      total: totalPrice,
      itemCount: activeItems,
    };

    const updated = [newSim, ...savedSimulations.slice(0, 9)];
    setSavedSimulations(updated);
    try {
      localStorage.setItem("yuree_simulation_history", JSON.stringify(updated));
    } catch {
      // Ignore
    }

    setSaveSuccessNotice("Estimasi berhasil disimpan ke Riwayat!");
    setTimeout(() => setSaveSuccessNotice(null), 3000);
  };

  // WhatsApp Message Formatter
  const waMessage = useMemo(() => {
    const lines = breakdown
      .map((b) => `• ${b.name} (${b.qtyLabel}): ${formatRp(b.subtotal)}`)
      .join("\n");

    return `Halo Yuree Project, saya ingin konsultasi hasil SIMULASI BIAYA INTERIOR:

📋 IDENTITAS PROYEK:
- Nama Akun: ${accountName.trim() || "-"}
- Nama Klien: ${clientName.trim() || "-"}
- Alamat: ${clientAddress.trim() || "-"}
- Area Pemasangan: ${selectedCity}, ${selectedProvince}

📦 RINCIAN ESTIMASI KOMPONEN:
${lines || "- Belum ada komponen dipilih"}

💰 ESTIMASI TOTAL BIAYA: ${formatRp(totalPrice)}
(Sudah termasuk penyesuaian tarif wilayah pemasangan)

Mohon info ketersediaan jadwal survei lokasi dan konsultasi teknisnya. Terima kasih.`;
  }, [accountName, clientName, clientAddress, selectedCity, selectedProvince, breakdown, totalPrice]);

  const waUrl = `https://wa.me/${brand.officialWA.number}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section
      id="simulasi-biaya"
      ref={sectionRef}
      className={`relative ${isStandalone ? "py-4 sm:py-6" : "py-16 lg:py-24"} bg-[#09090b] text-[#f4f4f5] overflow-hidden`}
    >
      {/* Ambient warm orange glow matching brand logo */}
      <div
        className="absolute top-0 left-1/4 -translate-x-1/2 -top-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{ background: "rgba(242,104,44,0.12)", filter: "blur(140px)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[520px] right-0 translate-x-1/3 w-[520px] h-[520px] rounded-full pointer-events-none opacity-30"
        style={{ background: "rgba(245,158,11,0.08)", filter: "blur(130px)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Save success toast alert */}
        {saveSuccessNotice && (
          <div className="mb-4 p-3.5 rounded-xl bg-[#f2682c]/20 border border-[#f2682c]/50 text-white text-xs font-semibold flex items-center justify-between shadow-lg backdrop-blur-md animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#f2682c]" />
              <span>{saveSuccessNotice}</span>
            </div>
            <button
              onClick={() => setSaveSuccessNotice(null)}
              className="text-white/60 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ── TOP HERO CARD: Identitas Klien, Area, dan 5 Kategori Tabs ────────────── */}
        {/* Pure brand theme: Warm dark carbon with glowing orange/amber border (NO green) */}
        <div
          className="rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 shadow-2xl relative overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            background: "linear-gradient(145deg, #18130e 0%, #14100c 50%, #0d0a08 100%)",
            border: "1px solid rgba(242,104,44,0.35)",
            boxShadow: "0 20px 60px rgba(242,104,44,0.10), 0 0 0 1px rgba(242,104,44,0.15)",
          }}
        >
          {/* Top badges bar */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 pb-5"
            style={{ borderBottom: "1px solid rgba(242,104,44,0.20)" }}
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm"
                style={{
                  background: "rgba(242,104,44,0.15)",
                  borderColor: "rgba(242,104,44,0.40)",
                  color: "#f59e0b",
                }}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#f2682c]" />
                <span>Kalkulator Biaya Custom Transparan</span>
              </div>
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "#e4e4e7",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#f2682c] animate-pulse" />
                <span>Harga Terbaru - 13.31</span>
              </div>
            </div>

            <div className="text-[11px] text-zinc-400 font-mono-num hidden sm:block">
              23 Workshop Aktif · Kapasitas 2.690m/bln
            </div>
          </div>

          {/* Dual subcard: Identitas Klien & Area Pemasangan */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Subcard: Identitas Akun & Klien */}
            <div
              className="lg:col-span-7 rounded-2xl p-4 sm:p-5 border flex flex-col justify-between"
              style={{
                background: "rgba(0,0,0,0.40)",
                borderColor: "rgba(255,255,255,0.10)",
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Building2 className="w-4 h-4 text-[#f2682c]" />
                    <span>Identitas Akun &amp; Klien:</span>
                  </div>
                  <span className="text-[11px] text-[#f59e0b] font-medium">
                    Tampil di Ekspor JPG / PDF
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-300 mb-1">
                      <User className="w-3 h-3 text-[#f2682c]" />
                      <span>Nama Akun / Mitra:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama akun / studio mitra..."
                      value={accountName}
                      onChange={(e) => setAccountName(e.target.value)}
                      className="w-full h-9 px-3 rounded-xl border bg-black/60 text-white placeholder:text-zinc-500 text-xs focus:outline-none focus:border-[#f2682c] transition-colors"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-300 mb-1">
                      <User className="w-3 h-3 text-[#f2682c]" />
                      <span>Nama Client:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama pemilik proyek..."
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full h-9 px-3 rounded-xl border bg-black/60 text-white placeholder:text-zinc-500 text-xs focus:outline-none focus:border-[#f2682c] transition-colors"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-300 mb-1">
                      <MapPin className="w-3 h-3 text-[#f2682c]" />
                      <span>Alamat Client:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Jl. Dago Atas No. 88..."
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                      className="w-full h-9 px-3 rounded-xl border bg-black/60 text-white placeholder:text-zinc-500 text-xs focus:outline-none focus:border-[#f2682c] transition-colors"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Subcard: Area Pemasangan */}
            <div
              className="lg:col-span-5 rounded-2xl p-4 sm:p-5 border flex flex-col justify-between"
              style={{
                background: "rgba(0,0,0,0.40)",
                borderColor: "rgba(255,255,255,0.10)",
              }}
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-3">
                  <MapPin className="w-4 h-4 text-[#f2682c]" />
                  <span>Pilih Area Pemasangan:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                      Provinsi:
                    </label>
                    <select
                      value={selectedProvince}
                      onChange={(e) => {
                        const newProv = e.target.value;
                        setSelectedProvince(newProv);
                        const firstCity = LOCATION_OPTIONS[newProv]?.cities[0] || "Kota Bandung";
                        setSelectedCity(firstCity);
                      }}
                      className="w-full h-9 px-3 rounded-xl border bg-black/60 text-white text-xs focus:outline-none focus:border-[#f2682c] cursor-pointer"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    >
                      {Object.keys(LOCATION_OPTIONS).map((prov) => (
                        <option key={prov} value={prov} className="bg-[#121216] text-white">
                          {prov}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                      Kota / Kabupaten:
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full h-9 px-3 rounded-xl border bg-black/60 text-white text-xs focus:outline-none focus:border-[#f2682c] cursor-pointer"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    >
                      {(LOCATION_OPTIONS[selectedProvince]?.cities || []).map((city) => (
                        <option key={city} value={city} className="bg-[#121216] text-white">
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-zinc-400 leading-normal">
                Tarif wilayah otomatis disesuaikan (Dalam Kota / Luar Kota).
              </p>
            </div>
          </div>

          {/* ── 5 Category Tabs inside Card ────────────────────────────────────── */}
          <div
            className="mt-6 pt-5 flex flex-wrap gap-2 sm:gap-2.5"
            style={{ borderTop: "1px solid rgba(242,104,44,0.20)" }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              const IconC = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer select-none font-semibold ${
                    isActive
                      ? "text-black font-extrabold shadow-lg scale-[1.02]"
                      : "text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 bg-black/40 hover:bg-black/60"
                  }`}
                  style={
                    isActive
                      ? {
                          background: "linear-gradient(135deg, #f2682c 0%, #f59e0b 100%)",
                          boxShadow: "0 4px 20px rgba(242,104,44,0.35)",
                        }
                      : {}
                  }
                >
                  <IconC className={`w-4 h-4 shrink-0 ${isActive ? "text-black" : "text-[#f2682c]"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── MAIN GRID: Checklist Komponen (Kiri) & Ringkasan Estimasi (Kanan) ─ */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
          }}
        >
          {/* Left Column: Components Checklist + Collapsible Sections */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            {/* Action Bar: Pilihan Komponen Title + History + Reset */}
            <div className="flex items-center justify-between flex-wrap gap-3 pb-2">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Pilihan Komponen: <span className="text-[#f59e0b]">{activeCategory.label}</span>
              </h3>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setHistoryModalOpen(true)}
                  className="text-xs text-[#f2682c] hover:text-[#fbbf24] inline-flex items-center gap-1.5 font-bold transition-colors cursor-pointer"
                >
                  <History className="w-3.5 h-3.5" />
                  <span>Riwayat ({savedSimulations.length})</span>
                </button>
                <span className="text-white/20 select-none">|</span>
                <button
                  type="button"
                  onClick={resetSimulator}
                  className="text-xs text-zinc-400 hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Simulasi</span>
                </button>
              </div>
            </div>

            {/* Checklist of Components */}
            <div className="space-y-3.5">
              {activeCategory.components.map((comp) => {
                const st = getState(comp);
                const sub = st.checked ? Math.round(comp.pricePerUnit * (st.dim || 1)) : 0;
                return (
                  <div
                    key={comp.id}
                    className="rounded-2xl border transition-all duration-200"
                    style={{
                      background: st.checked
                        ? "rgba(242,104,44,0.08)"
                        : "rgba(18,18,22,0.60)",
                      borderColor: st.checked
                        ? "rgba(242,104,44,0.40)"
                        : "rgba(255,255,255,0.08)",
                      boxShadow: st.checked ? "0 4px 20px rgba(242,104,44,0.08)" : "none",
                    }}
                  >
                    <div className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4">
                      <label className="flex items-start sm:items-center gap-3.5 cursor-pointer select-none flex-1">
                        <div className="pt-0.5 sm:pt-0">
                          <input
                            type="checkbox"
                            checked={st.checked}
                            onChange={(e) => setChecked(comp.id, e.target.checked)}
                            className="w-5 h-5 rounded-md cursor-pointer"
                            style={{ accentColor: "#f2682c" }}
                          />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-bold text-sm sm:text-base text-white">
                              {comp.name}
                            </span>
                            <span
                              className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                              style={{
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "#d4d4d8",
                              }}
                            >
                              {comp.unitBadge}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                            {comp.desc}
                          </p>
                        </div>
                      </label>

                      <div className="flex items-center gap-2 shrink-0">
                        {/* Number input when checked */}
                        {st.checked && (
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              step="0.1"
                              min={comp.minDim}
                              max={comp.maxDim}
                              value={st.dim}
                              onChange={(e) => {
                                const v = parseFloat(e.target.value);
                                if (!isNaN(v)) setDim(comp, v);
                              }}
                              className="w-16 px-2 py-1 text-right rounded-lg text-white text-xs font-bold focus:outline-none"
                              style={{
                                background: "rgba(0,0,0,0.60)",
                                border: "1px solid rgba(242,104,44,0.50)",
                              }}
                            />
                            <span className="text-xs text-zinc-400">{comp.unit}</span>
                          </div>
                        )}
                        <div className="text-right min-w-[80px]">
                          <div className="text-xs text-zinc-500">Subtotal</div>
                          <div
                            className={`text-sm sm:text-base font-bold ${
                              st.checked ? "text-[#f59e0b]" : "text-zinc-600"
                            }`}
                          >
                            {st.checked ? formatRp(sub) : "Rp 0"}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dimension slider when checked */}
                    {st.checked && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1">
                        <input
                          type="range"
                          min={comp.minDim}
                          max={comp.maxDim}
                          step="0.1"
                          value={st.dim}
                          onChange={(e) => setDim(comp, parseFloat(e.target.value))}
                          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                          style={{
                            background: "rgba(255,255,255,0.12)",
                            accentColor: "#f2682c",
                          }}
                        />
                        <div className="flex justify-between text-[11px] font-mono-num text-zinc-400 mt-1">
                          <span>Min: {comp.minDim}</span>
                          <span className="text-[#f2682c] font-bold">
                            Ukuran Dipilih: {st.dim} {comp.unit}
                          </span>
                          <span>Max: {comp.maxDim}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ── ACCORDION 1: Peralatan Elektronik & Kitchen Appliances ───────── */}
            <div
              className="rounded-2xl overflow-hidden border transition-all"
              style={{
                background: "rgba(18,18,22,0.70)",
                borderColor: "rgba(242,104,44,0.25)",
              }}
            >
              <button
                type="button"
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors cursor-pointer"
                onClick={() => setAppliancesOpen((o) => !o)}
              >
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 flex-wrap">
                    <span className="flex size-6 items-center justify-center rounded-md bg-[#f2682c]/15 text-[#f2682c]">
                      <Flame className="size-3.5" />
                    </span>
                    <span>Peralatan Elektronik &amp; Kitchen Appliances</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#f2682c]/15 text-[#f59e0b] border border-[#f2682c]/30">
                      Kompor, Hood, Sink, Paket Hemat
                    </span>
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Peralatan dapur standar Modena / Rinnai bergaransi resmi. Bisa pilih satuan atau paket bundling hemat.
                  </p>
                </div>
                <ChevronDown
                  className="w-5 h-5 text-zinc-400 transition-transform duration-200 shrink-0 ml-2"
                  style={{ transform: appliancesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {appliancesOpen && (
                <div
                  className="p-5 border-t space-y-3"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  {APPLIANCES_DATA.map((app) => {
                    const isChecked = !!selectedAppliances[app.id];
                    return (
                      <label
                        key={app.id}
                        className="flex items-center justify-between gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors"
                        style={{
                          background: isChecked ? "rgba(242,104,44,0.10)" : "rgba(0,0,0,0.30)",
                          borderColor: isChecked ? "rgba(242,104,44,0.40)" : "rgba(255,255,255,0.06)",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) =>
                              setSelectedAppliances((prev) => ({
                                ...prev,
                                [app.id]: e.target.checked,
                              }))
                            }
                            className="w-4 h-4 rounded cursor-pointer"
                            style={{ accentColor: "#f2682c" }}
                          />
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-white">
                              {app.name}
                            </div>
                            <div className="text-[11px] text-zinc-400 mt-0.5">
                              {app.brandSpec}
                            </div>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs sm:text-sm font-bold text-[#f59e0b]">
                            {formatRp(app.price)}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ── ACCORDION 2: Aksesoris & Fitting Tambahan (Custom Input) ─────── */}
            <div
              className="rounded-2xl overflow-hidden border transition-all"
              style={{
                background: "rgba(18,18,22,0.70)",
                borderColor: "rgba(255,255,255,0.10)",
              }}
            >
              <button
                type="button"
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors cursor-pointer"
                onClick={() => setAccessoriesOpen((o) => !o)}
              >
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span>Aksesoris &amp; Fitting Tambahan</span>
                    <span className="text-xs text-zinc-400 font-normal">(Input Kustom Bebas)</span>
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Tuliskan nama aksesoris, harga satuan, dan jumlah (qty) sesuai kebutuhan interior Anda.
                  </p>
                </div>
                <ChevronDown
                  className="w-5 h-5 text-zinc-400 transition-transform duration-200 shrink-0 ml-2"
                  style={{ transform: accessoriesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {accessoriesOpen && (
                <div
                  className="p-5 border-t space-y-4"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  {customAccessories.map((acc, idx) => (
                    <div
                      key={acc.id}
                      className="p-4 rounded-xl border space-y-3"
                      style={{
                        background: "rgba(0,0,0,0.40)",
                        borderColor: "rgba(242,104,44,0.30)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#f59e0b] uppercase">
                          Item Aksesoris #{idx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeAccessory(acc.id)}
                          className="text-zinc-500 hover:text-red-400 transition-colors"
                          title="Hapus baris"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                        <div className="sm:col-span-6">
                          <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                            Nama Item Aksesoris:
                          </label>
                          <input
                            type="text"
                            placeholder="Contoh: Rak Piring Tarik / Lampu LED Strip"
                            value={acc.name}
                            onChange={(e) => updateAccessory(acc.id, "name", e.target.value)}
                            className="w-full text-xs font-medium rounded-xl border bg-black/60 px-3 py-2 text-white focus:border-[#f2682c] focus:outline-none"
                            style={{ borderColor: "rgba(255,255,255,0.15)" }}
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                            Harga Satuan (Rp):
                          </label>
                          <input
                            type="number"
                            placeholder="0"
                            value={acc.price || ""}
                            onChange={(e) =>
                              updateAccessory(acc.id, "price", parseFloat(e.target.value) || 0)
                            }
                            className="w-full text-xs font-bold text-center rounded-xl border bg-black/60 px-3 py-2 text-white focus:border-[#f2682c] focus:outline-none"
                            style={{ borderColor: "rgba(255,255,255,0.15)" }}
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                            Jumlah (QTY):
                          </label>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                updateAccessory(acc.id, "qty", Math.max(1, acc.qty - 1))
                              }
                              className="size-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <input
                              type="number"
                              value={acc.qty}
                              onChange={(e) =>
                                updateAccessory(acc.id, "qty", Math.max(1, parseInt(e.target.value) || 1))
                              }
                              className="w-full text-center font-bold text-xs rounded-lg border bg-black/60 py-1.5 text-white focus:border-[#f2682c] focus:outline-none"
                              style={{ borderColor: "rgba(255,255,255,0.15)" }}
                            />
                            <button
                              type="button"
                              onClick={() => updateAccessory(acc.id, "qty", acc.qty + 1)}
                              className="size-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addAccessoryRow}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border"
                    style={{
                      background: "rgba(242,104,44,0.15)",
                      borderColor: "rgba(242,104,44,0.35)",
                      color: "#f59e0b",
                    }}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Tambah Baris Aksesoris</span>
                  </button>
                </div>
              )}
            </div>

            {/* ── ACCORDION 3: Panduan Membaca Satuan ──────────────────────────── */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                background: "rgba(18,18,22,0.50)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <button
                type="button"
                className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
                onClick={() => setUnitsHelpOpen((o) => !o)}
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-zinc-300">
                    Cara Membaca Satuan Perhitungan (M1, M2, Unit)
                  </h4>
                </div>
                <ChevronDown
                  className="w-4 h-4 text-zinc-500 transition-transform duration-200 shrink-0"
                  style={{ transform: unitsHelpOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {unitsHelpOpen && (
                <div
                  className="px-5 pb-4 pt-1 text-xs text-zinc-400 space-y-2 leading-relaxed border-t"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <p>
                    <strong className="text-zinc-200">Meter Lari (M1):</strong> Dihitung berdasarkan panjang bentangan furniture dengan kedalaman dan tinggi standar ergonomis (contoh: kabinet bawah tinggi ~85cm kedalaman ~60cm).
                  </p>
                  <p>
                    <strong className="text-zinc-200">Meter Persegi (M2):</strong> Dihitung berdasarkan luas tampak depan (Panjang x Tinggi), cocok untuk lemari full-plafon atau backdrop panel dinding.
                  </p>
                  <p>
                    <strong className="text-zinc-200">Unit:</strong> Dihitung per buah atau per set aksesoris pelengkap interior (kompor, sink, meja rias, nakas).
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Sticky Summary Card ───────────────────────────── */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 space-y-6 scroll-mt-24">
            <div
              className="relative overflow-hidden rounded-3xl p-6 sm:p-7 shadow-2xl"
              style={{
                background: "linear-gradient(160deg, #18130e 0%, #120e0a 60%, #0d0a08 100%)",
                border: "2px solid rgba(242,104,44,0.35)",
                boxShadow: "0 16px 50px rgba(242,104,44,0.12)",
              }}
            >
              {/* Top orange gradient accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ background: "linear-gradient(90deg, #f2682c, #f59e0b, #fbbf24)" }}
              />

              {/* Summary Header */}
              <div
                className="flex items-center justify-between pb-4 mb-4"
                style={{ borderBottom: "1px solid rgba(242,104,44,0.20)" }}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f2682c]">
                    Ringkasan Estimasi
                  </span>
                  <h4 className="text-lg font-bold text-white mt-0.5">Total Perkiraan Biaya</h4>
                </div>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    background: "rgba(242,104,44,0.15)",
                    borderColor: "rgba(242,104,44,0.30)",
                    color: "#f59e0b",
                  }}
                >
                  {selectedCity}
                </span>
              </div>

              {/* Large Total Amount */}
              <div className="mb-6">
                <div className="text-xs text-zinc-400 mb-1 font-medium">
                  Estimasi Total ({activeItems} Item Aktif):
                </div>
                <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#f2682c] font-mono-num">
                  {formatRp(totalPrice)}
                </div>
                {surchargeAmount > 0 && (
                  <div className="text-[11px] text-zinc-400 mt-1">
                    Termasuk penyesuaian wilayah: +{formatRp(surchargeAmount)}
                  </div>
                )}
              </div>

              {/* Breakdown List */}
              <div
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                className="pt-4 mb-5"
              >
                <div className="text-xs font-semibold text-white mb-3 flex items-center justify-between">
                  <span>Rincian Komponen Terpilih</span>
                  <span className="text-[#f59e0b] font-bold">Subtotal</span>
                </div>

                {breakdown.length === 0 ? (
                  <div
                    className="py-6 text-center text-xs text-zinc-500 italic rounded-xl"
                    style={{
                      background: "rgba(0,0,0,0.30)",
                      border: "1px dashed rgba(255,255,255,0.10)",
                    }}
                  >
                    Belum ada komponen aktif. Centang komponen di sebelah kiri dan tentukan ukuran dimensinya.
                  </div>
                ) : (
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {breakdown.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs py-1"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                      >
                        <div className="flex flex-col pr-2">
                          <span className="text-zinc-200 font-medium">{b.name}</span>
                          <span className="text-[10px] text-zinc-500">{b.qtyLabel}</span>
                        </div>
                        <span className="text-white font-bold shrink-0 font-mono-num">
                          {formatRp(b.subtotal)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Save & Export Actions */}
              <div
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                className="pt-4 mb-4 space-y-2"
              >
                <div className="text-xs font-semibold text-zinc-300 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-[#f2682c]" />
                    <span>Dokumen &amp; Ekspor:</span>
                  </span>
                  <button
                    type="button"
                    onClick={saveToHistory}
                    disabled={activeItems === 0}
                    className="text-[11px] font-bold text-[#f59e0b] hover:underline disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    + Simpan ke Riwayat
                  </button>
                </div>

                {/* Preview Document Button */}
                <button
                  type="button"
                  onClick={() => setPreviewModalOpen(true)}
                  disabled={activeItems === 0}
                  className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all border border-white/15 bg-white/5 hover:bg-white/10 text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#f2682c]" />
                  <span>Live Preview Dokumen (RAB / Surat Penawaran)</span>
                </button>

                {/* Export JPG & PDF format */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewModalOpen(true)}
                    disabled={activeItems === 0}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-white/10 bg-black/40 hover:bg-white/5 text-zinc-300 hover:text-white text-xs font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <FileImage className="w-3.5 h-3.5 text-[#f2682c]" />
                    <span>Format JPG</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewModalOpen(true)}
                    disabled={activeItems === 0}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-[#f2682c]/40 bg-[#f2682c]/10 hover:bg-[#f2682c]/20 text-[#f59e0b] text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#f2682c]" />
                    <span>Format PDF</span>
                  </button>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-zinc-500 leading-relaxed italic mb-5">
                *Harga final ditentukan setelah tim teknis melakukan pengukuran aktual di lokasi dan menyepakati spesifikasi material.
              </p>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider text-black transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-[#f2682c]/20 cursor-pointer"
                style={{ background: "linear-gradient(135deg, #f2682c 0%, #f59e0b 100%)" }}
              >
                <Send className="w-4 h-4" />
                <span>Kirim Hasil Simulasi ke WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FLOATING RIWAYAT BUTTON (Matches reference bottom right) ──────── */}
      <button
        type="button"
        onClick={() => setHistoryModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-xl"
        style={{
          background: "rgba(24,19,14,0.95)",
          color: "#f59e0b",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(242,104,44,0.2)",
        }}
      >
        <History className="w-4 h-4 text-[#f2682c]" />
        <span className="text-xs font-bold text-white">
          Riwayat ({savedSimulations.length})
        </span>
      </button>

      {/* ── MODAL 1: RIWAYAT ESTIMASI ───────────────────────────────────────── */}
      {historyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div
            className="w-full max-w-lg rounded-2xl border p-6 space-y-4 shadow-2xl relative"
            style={{
              background: "#14100c",
              borderColor: "rgba(242,104,44,0.30)",
            }}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-[#f2682c]" />
                <h4 className="text-base font-bold text-white">Riwayat Estimasi Disimpan</h4>
              </div>
              <button
                onClick={() => setHistoryModalOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {savedSimulations.length === 0 ? (
              <div className="py-10 text-center text-xs text-zinc-500 italic">
                Belum ada riwayat estimasi yang disimpan. Klik tombol &ldquo;Simpan ke Riwayat&rdquo; pada panel ringkasan untuk menyimpan estimasi aktif.
              </div>
            ) : (
              <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                {savedSimulations.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl border border-white/10 bg-black/40 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{item.clientName}</div>
                      <div className="text-[11px] text-zinc-400">
                        {item.accountName} · {item.location}
                      </div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">{item.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#f59e0b] font-mono-num">
                        {formatRp(item.total)}
                      </div>
                      <div className="text-[10px] text-zinc-400">{item.itemCount} item aktif</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2 flex justify-between items-center border-t border-white/10">
              {savedSimulations.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setSavedSimulations([]);
                    try {
                      localStorage.removeItem("yuree_simulation_history");
                    } catch {
                      // Ignore
                    }
                  }}
                  className="text-xs text-red-400 hover:underline"
                >
                  Hapus Semua Riwayat
                </button>
              )}
              <button
                type="button"
                onClick={() => setHistoryModalOpen(false)}
                className="ml-auto px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL 2: LIVE PREVIEW DOKUMEN / RAB CETAK ──────────────────────── */}
      {previewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div
            className="w-full max-w-2xl rounded-2xl border p-6 sm:p-8 space-y-6 shadow-2xl relative my-8"
            style={{
              background: "#181410",
              borderColor: "rgba(242,104,44,0.40)",
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#f2682c]" />
                <h4 className="text-base font-bold text-white">
                  Pratinjau Dokumen Estimasi Interior (RAB)
                </h4>
              </div>
              <button
                onClick={() => setPreviewModalOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Printable Document Sheet */}
            <div
              id="printable-rab"
              className="p-6 rounded-xl bg-black/60 border border-white/15 space-y-5 text-zinc-200"
            >
              {/* Header Surat */}
              <div className="flex justify-between items-start pb-4 border-b border-white/10">
                <div>
                  <div className="text-lg font-black text-white tracking-wider">
                    YUREE <span className="text-[#f59e0b]">PROJECT</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    Interior Manufacturing &amp; Execution Partner
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono-num">
                    Hotline: {brand.officialWA.display}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#f59e0b] uppercase font-mono-num">
                    RAB ESTIMASI BIAYA
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">
                    Tanggal: {new Date().toLocaleDateString("id-ID")}
                  </div>
                  <div className="text-[10px] text-zinc-500">Status: Estimasi Awal</div>
                </div>
              </div>

              {/* Data Klien */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase font-semibold">
                    Akun / Mitra:
                  </div>
                  <div className="font-bold text-white">{accountName || "Umum"}</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase font-semibold">
                    Nama Klien:
                  </div>
                  <div className="font-bold text-white">{clientName || "Klien Yuree Project"}</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase font-semibold">
                    Alamat Proyek:
                  </div>
                  <div className="text-zinc-300">{clientAddress || "-"}</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase font-semibold">
                    Wilayah Pemasangan:
                  </div>
                  <div className="text-zinc-300">
                    {selectedCity}, {selectedProvince}
                  </div>
                </div>
              </div>

              {/* Tabel Rincian */}
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-zinc-400 text-[11px] font-bold border-b border-white/10">
                    <tr>
                      <th className="p-2.5">Item Komponen</th>
                      <th className="p-2.5 text-center">Ukuran / Qty</th>
                      <th className="p-2.5 text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono-num">
                    {breakdown.map((item, idx) => (
                      <tr key={idx}>
                        <td className="p-2.5 text-zinc-300">{item.name}</td>
                        <td className="p-2.5 text-center text-zinc-400">{item.qtyLabel}</td>
                        <td className="p-2.5 text-right font-bold text-white">
                          {formatRp(item.subtotal)}
                        </td>
                      </tr>
                    ))}
                    {surchargeAmount > 0 && (
                      <tr>
                        <td className="p-2.5 text-zinc-400 italic">Penyesuaian Wilayah Luar Kota</td>
                        <td className="p-2.5 text-center text-zinc-500">-</td>
                        <td className="p-2.5 text-right font-bold text-zinc-300">
                          {formatRp(surchargeAmount)}
                        </td>
                      </tr>
                    )}
                  </tbody>
                  <tfoot className="bg-white/5 border-t border-white/15">
                    <tr>
                      <td colSpan={2} className="p-3 font-bold text-white text-right">
                        GRAND TOTAL PERKIRAAN:
                      </td>
                      <td className="p-3 font-black text-[#f2682c] text-sm text-right font-mono-num">
                        {formatRp(totalPrice)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Catatan Standar */}
              <div className="text-[10px] text-zinc-400 space-y-1 leading-normal border-t border-white/10 pt-3">
                <p>1. Perhitungan menggunakan standar bahan Plywood Meranti 18mm &amp; HPL High Pressure Laminate.</p>
                <p>2. Sudah termasuk hardware engsel slow-motion &amp; rel laci standar workshop.</p>
                <p>3. Harga final akan dikonfirmasi setelah tim teknis survei fisik dan pengukuran presisi di lokasi.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => setPreviewModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-bold transition-colors"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f2682c] hover:bg-[#d97706] text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#f2682c]/20"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / Simpan PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
