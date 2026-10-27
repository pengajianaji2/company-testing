import { TeamMember, TimelineMilestone, ProcessStep, Testimonial, FAQItem } from '@/types';

export const companyProfile = {
  name: 'Teh Nusantara',
  tagline: 'Secangkir Ketenangan dari Kebun Nusantara',
  subtitle:
    'Teh pilihan dari dataran tinggi Jawa Barat, dipetik langsung oleh petani lokal dan diolah dengan sepenuh hati.',
  foundedYear: '2015',
  shortAbout:
    'Berdiri sejak 2015, Teh Nusantara mengolah daun teh terbaik dari perkebunan dataran tinggi Indonesia menjadi produk berkualitas. Kami percaya secangkir teh yang baik adalah soal rasa, kebersamaan, dan kepedulian pada petani serta lingkungan.',
  fullStory:
    'Teh Nusantara lahir pada 2015 dari kecintaan sekelompok sahabat di Lembang pada teh dan tanah kelahirannya. Berawal dari satu kebun kecil dan dua varian teh, kini kami bermitra dengan lebih dari 40 petani dan menghadirkan beragam teh khas Nusantara untuk pelanggan di seluruh Indonesia.',
  vision:
    'Menjadi merek teh Indonesia yang dikenal dan dicintai, baik di dalam maupun luar negeri.',
  missions: [
    'Menghadirkan teh berkualitas dari kebun terbaik Indonesia.',
    'Bermitra dan menyejahterakan petani teh lokal.',
    'Menjalankan produksi yang ramah lingkungan.',
    'Mengenalkan budaya minum teh Nusantara kepada generasi muda.',
  ],
  contact: {
    address: 'Jl. Perkebunan No. 15, Lembang, Bandung Barat, Jawa Barat 40391',
    whatsapp: '0812-3456-7890',
    whatsappFormatted: '+6281234567890',
    email: 'halo@tehnusantara.id',
    operatingHours: 'Senin - Sabtu, 08.00 - 17.00 WIB',
    socialMedia: {
      instagram: 'https://instagram.com/tehnusantara',
      facebook: 'https://facebook.com/tehnusantara',
      tiktok: 'https://tiktok.com/@tehnusantara',
    },
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.479520288827!2d107.61864197475626!3d-6.832962393165039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e1a87e07dd3b%3A0xeefb550239b4b09!2sLembang%2C%20West%20Bandung%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
  },
};

export const bentoFeatures = [
  {
    title: 'Petani Lokal',
    description: 'Bermitra langsung dengan 40+ petani lokal di dataran tinggi Jawa Barat untuk menjamin harga yang adil dan keberlanjutan.',
    badge: 'Kemitraan Adil',
    highlight: '40+ Petani',
  },
  {
    title: 'Ramah Lingkungan',
    description: 'Kebun dan produksi dikelola secara berkelanjutan dengan pupuk organik dan konservasi sumber daya air.',
    badge: 'Berkelanjutan',
    highlight: '100% Organik',
  },
  {
    title: 'Kualitas Pilihan',
    description: 'Hanya pucuk dan dua daun muda terbaik yang kami petik secara cermat pada pagi hari saat embun mengering.',
    badge: 'Grade Premium',
    highlight: 'Pucuk Daun Pilihan',
  },
  {
    title: 'Dikemas Segar',
    description: 'Kemasan berlapis foil kedap udara mengunci aroma atsiri dan kesegaran rasa teh hingga ke cangkir Anda.',
    badge: 'Kualitas Terkunci',
    highlight: 'Kedap Udara',
  },
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: '2015',
    description: 'Teh Nusantara berdiri di Lembang dengan dua produk awal: teh hitam dan teh hijau.',
  },
  {
    year: '2017',
    description: 'Meluncurkan varian teh melati dan herbal, memperluas kemitraan dengan 15 petani kebun lokal.',
  },
  {
    year: '2019',
    description: 'Membuka fasilitas pengolahan higienis modern dan standardisasi kemasan kedap udara.',
  },
  {
    year: '2021',
    description: 'Meluncurkan Gift Set Nusantara dan memperluas jaringan penjualan melalui kemitraan reseller.',
  },
  {
    year: '2024',
    description: 'Menginisiasi Program Kebun Lestari untuk konservasi lingkungan dan praktik perkebunan organik.',
  },
  {
    year: '2026',
    description: 'Melayani pecinta teh dan mitra kuliner di lebih dari 30 kota di seluruh Nusantara.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Andi Prasetyo',
    role: 'Pendiri & Direktur Utama',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    name: 'Siti Rahmawati',
    role: 'Kepala Produksi',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    name: 'Budi Hartono',
    role: 'Master Blender Teh',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    name: 'Nadia Putri',
    role: 'Manajer Pemasaran',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Petik',
    description: 'Hanya pucuk dan dua daun muda dipetik dengan tangan di pagi hari saat kesegaran daun berada di puncak.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&h=533&q=80',
  },
  {
    number: '02',
    title: 'Layu',
    description: 'Daun dihamparkan secara merata selama 12 sampai 18 jam agar kadar air berkurang dan daun menjadi lentur.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&h=533&q=80',
  },
  {
    number: '03',
    title: 'Giling',
    description: 'Daun digulung secara terkontrol untuk memecah dinding sel dan melepaskan minyak atsiri penghasil aroma.',
    image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=800&h=533&q=80',
  },
  {
    number: '04',
    title: 'Fermentasi',
    description: 'Khusus varian teh hitam, daun dioksidasi pada kelembapan presisi hingga warna merah kecokelatan dan profil rasa pekat terbentuk.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&h=533&q=80',
  },
  {
    number: '05',
    title: 'Pengeringan',
    description: 'Daun dikeringkan pada suhu yang stabil untuk menghentikan oksidasi serta mengunci cita rasa khas pegunungan.',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&h=533&q=80',
  },
  {
    number: '06',
    title: 'Kemas',
    description: 'Teh disortir berdasarkan ukuran partikel lalu dikemas kedap udara agar aroma harumnya tetap terjaga segar hingga dinikmati.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&h=533&q=80',
  },
];

export const gardenGallery = [
  {
    title: 'Hamparan Perkebunan Priangan',
    description: 'Dataran tinggi 1.200 mdpl berselimut kabut pagi di Lembang.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=800&q=80',
  },
  {
    title: 'Aktivitas Petik Pagi',
    description: 'Petani mitra memetik pucuk daun teh terbaik dengan penuh kehati-hatian.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&h=800&q=80',
  },
  {
    title: 'Fasilitas Pengeringan Alami',
    description: 'Proses pengeringan daun teh dengan sirkulasi udara bersih pegunungan.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&h=800&q=80',
  },
  {
    title: 'Secangkir Seduhan Hangat',
    description: 'Hasil seduhan merah keemasan penuh ketenangan.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&h=800&q=80',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Aroma melatinya harum alami, bukan pewangi buatan. Sekarang jadi teh wajib seduh setiap pagi di rumah.',
    author: 'Rina',
    city: 'Bandung',
    rating: 5,
  },
  {
    quote: 'Kemasan gift setnya cantik dan elegan. Pernah saya pakai untuk hadiah klien korporat dan semuanya sangat puas.',
    author: 'Dimas',
    city: 'Jakarta',
    rating: 5,
  },
  {
    quote: 'Teh hitamnya pekat berkarakter tapi tidak getir atau pahit menusuk. Enak dinikmati polos maupun ditambah madu.',
    author: 'Sari',
    city: 'Surabaya',
    rating: 5,
  },
];

export const farmerPartnership = {
  description:
    'Kami bermitra secara erat dengan kelompok tani mandiri di Lembang, Pangalengan, Garut, dan Puncak. Setiap petani mitra mendapatkan jaminan harga beli yang adil, pelatihan budidaya berkelanjutan, serta kepastian pasar jangka panjang.',
  regions: ['Lembang', 'Pangalengan', 'Garut', 'Puncak'],
};

export const certifications = [
  { title: 'Sertifikasi PIRT & Halal Indonesia', description: 'Standar keamanan pangan & kehalalan terjamin' },
  { title: 'Penghargaan UMKM Berkelanjutan Jawa Barat 2023', description: 'Apresiasi komitmen praktik hijau & pemberdayaan lokal' },
  { title: 'Finalis Produk Teh Terbaik Pameran Kuliner Nusantara 2024', description: 'Pengakuan mutu rasa di kancah nasional' },
];

export const faqList: FAQItem[] = [
  {
    question: 'Bagaimana cara memesan produk Teh Nusantara?',
    answer:
      'Klik tombol "Pesan via WhatsApp" pada produk yang Anda inginkan di halaman katalog. Anda akan langsung diarahkan ke chat admin WhatsApp kami dengan pesan pemesanan otomatis.',
  },
  {
    question: 'Apakah bisa kirim ke luar kota atau luar pulau?',
    answer:
      'Bisa. Kami melayani pengiriman ke seluruh penjuru Indonesia menggunakan jasa ekspedisi terpercaya dengan kemasan pelindung aman.',
  },
  {
    question: 'Apakah tersedia pembelian grosir, hampers custom, atau reseller?',
    answer:
      'Tentu tersedia. Kami membuka peluang kemitraan reseller dan pengadaan souvenir kantor/hampers. Silakan hubungi kami via formulir kontak atau WhatsApp bisnis kami.',
  },
  {
    question: 'Berapa lama daun teh dapat disimpan?',
    answer:
      'Teh Nusantara dapat disimpan dengan baik hingga 12 bulan selama berada di wadah kedap udara, di tempat sejuk, kering, dan terhindar dari paparan sinar matahari langsung.',
  },
];

