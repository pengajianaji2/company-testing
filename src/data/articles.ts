import { Article } from '@/types';

export const articlesData: Article[] = [
  {
    id: 'art-1',
    slug: '5-kesalahan-saat-menyeduh-teh-yang-bikin-rasanya-pahit',
    title: '5 Kesalahan Saat Menyeduh Teh yang Bikin Rasanya Pahit',
    category: 'Tips Seduh',
    date: '12 Maret 2026',
    readTime: '4 menit baca',
    author: 'Tim Teh Nusantara',
    excerpt:
      'Pernah menyeduh teh yang rasanya terlalu pahit? Bisa jadi masalahnya bukan di tehnya, tetapi di cara menyeduhnya. Berikut lima kesalahan yang paling sering terjadi.',
    content: [
      'Pernah menyeduh teh yang rasanya terlalu pahit atau getir? Bisa jadi masalahnya bukan pada daun tehnya, tetapi pada cara dan teknik menyeduhnya. Banyak pecinta teh pemula yang menyamaratakan seluruh jenis teh dengan air mendidih golak dan perendaman berjam-jam.',
      'Berikut lima kesalahan paling umum saat menyeduh teh yang sering membuat cita rasanya menurun drastis:',
      '1. Air terlalu panas. Daun teh yang lembut, terutama teh hijau, sangat rentan terhadap air mendidih (100°C). Suhu ideal untuk teh hijau adalah 70 hingga 80 derajat Celsius agar asam amino manis tidak terbakar oleh tanin.',
      '2. Menyeduh terlalu lama. Membiarkan daun teh terendam lebih dari waktu yang disarankan (cukup 3 sampai 5 menit untuk teh hitam, dan 2 sampai 3 menit untuk teh hijau) akan mengekstraksi senyawa tanin berlebih yang pahit.',
      '3. Takaran tidak pas. Gunakan takaran proporsional sekitar 2 gram daun teh (setara satu sendok teh) untuk setiap 200 ml air bersih.',
      '4. Menekan kantong teh. Menekan kantong teh atau memeras daun teh dengan sendok justru memaksa keluar zat tanin pekat yang membuat tenggorokan terasa kering.',
      '5. Menyimpan teh sembarangan. Teh yang terpapar udara terbuka dan ruangan lembap akan menyerap bau lain serta kehilangan minyak atsirinya.',
      'Dengan sedikit perhatian ekstra pada suhu, waktu seduh, dan takaran yang pas, setiap tegukan teh Nusantara Anda akan terasa jauh lebih lembut, manis alami, dan menenangkan. Selamat mencoba!',
    ],
    image: '/images/articles/brew-mistakes.jpg',
    relatedSlugs: ['cara-menyimpan-teh-agar-aroma-tetap-terjaga', 'manfaat-teh-hijau-untuk-kesehatan-sehari-hari'],
  },
  {
    id: 'art-2',
    slug: 'manfaat-teh-hijau-untuk-kesehatan-sehari-hari',
    title: 'Manfaat Teh Hijau untuk Kesehatan Sehari-hari',
    category: 'Manfaat Teh',
    date: '08 Maret 2026',
    readTime: '3 menit baca',
    author: 'Damar Gilang',
    excerpt:
      'Kaya antioksidan epigallocatechin gallate (EGCG), teh hijau dipercaya menjaga metabolisme tubuh, kebugaran pikiran, dan kesehatan jantung.',
    content: [
      'Teh hijau telah dikonsumsi selama ribuan tahun sebagai minuman kesehatan alami. Rahasianya terletak pada proses pengolahan daun teh yang tidak melalui tahap fermentasi oksidatif, sehingga kandungan polifenol dan antioksidan tetap utuh.',
      'Zat aktif utama dalam teh hijau, yaitu EGCG (Epigallocatechin gallate), memiliki kemampuan melawan radikal bebas dalam tubuh secara efektif.',
      'Rutin meminum satu hingga dua cangkir teh hijau hangat setiap pagi dapat membantu menjaga konsentrasi berkat kombinasi asam amino L-theanine dan kafein alami yang seimbang.',
    ],
    image: '/images/articles/daun-teh-hijau.jpg',
    relatedSlugs: ['perbedaan-teh-hitam-hijau-dan-putih', '5-kesalahan-saat-menyeduh-teh-yang-bikin-rasanya-pahit'],
  },
  {
    id: 'art-3',
    slug: 'es-teh-melati-lemon-resep-segar-untuk-cuaca-panas',
    title: 'Es Teh Melati Lemon, Resep Segar untuk Cuaca Panas',
    category: 'Resep',
    date: '02 Maret 2026',
    readTime: '3 menit baca',
    author: 'Said Daffa',
    excerpt:
      'Paduan harum bunga melati asli Jawa Barat dengan kesegaran bulir lemon madu siap mengembalikan kesegaran di siang hari yang terik.',
    content: [
      'Cuaca panas di siang hari seringkali membuat tubuh terasa lelah dan haus. Daripada membeli minuman kemasan berpengawet, racikan Es Teh Melati Lemon buatan sendiri di rumah adalah pilihan yang jauh lebih sehat dan menyegarkan.',
      'Cukup seduh 4 gram Teh Melati Premium Teh Nusantara dalam 250 ml air panas bersuhu 85°C selama 4 menit, kemudian dinginkan.',
      'Tambahkan 2 sendok makan madu murni dan perasan setengah buah lemon segar. Aduk rata bersama es batu dan hias dengan potongan lemon.',
    ],
    image: '/images/articles/lemon-dan-melati.jpg',
    relatedSlugs: ['5-kesalahan-saat-menyeduh-teh-yang-bikin-rasanya-pahit', 'cara-menyimpan-teh-agar-aroma-tetap-terjaga'],
  },
  {
    id: 'art-4',
    slug: 'perbedaan-teh-hitam-hijau-dan-putih',
    title: 'Perbedaan Teh Hitam, Hijau, dan Putih',
    category: 'Manfaat Teh',
    date: '24 Februari 2026',
    readTime: '5 menit baca',
    author: 'Tim Teh Nusantara',
    excerpt:
      'Berasal dari spesies pohon yang sama (Camellia sinensis), mengapa warna, aroma, dan rasa teh bisa begitu berbeda? Simak penjelasannya.',
    content: [
      'Semua teh sejati—baik teh putih, teh hijau, teh oolong, hingga teh hitam—berasal dari tanaman yang sama: Camellia sinensis. Perbedaan utama yang menentukan warna, aroma, dan karakter seduhannya terletak pada tingkat oksidasi saat daun teh diolah.',
      'Teh putih merupakan jenis yang paling minim diproses; hanya dipetik pucuknya lalu dikeringkan perlahan di udara sejuk.',
      'Teh hijau melalui pemanasan cepat untuk menghentikan oksidasi sel daun, sementara teh hitam dioksidasi penuh hingga daun berwarna gelap kemerahan dengan aroma hangat pekat.',
    ],
    image: '/images/articles/perbedaan-daun-teh.jpg',
    relatedSlugs: ['manfaat-teh-hijau-untuk-kesehatan-sehari-hari', '5-kesalahan-saat-menyeduh-teh-yang-bikin-rasanya-pahit'],
  },
  {
    id: 'art-5',
    slug: 'cara-menyimpan-teh-agar-aroma-tetap-terjaga',
    title: 'Cara Menyimpan Teh agar Aroma Tetap Terjaga',
    category: 'Tips Seduh',
    date: '10 Februari 2026',
    readTime: '3 menit baca',
    author: 'Rinovan Jenner',
    excerpt:
      'Daun teh bersifat higroskopis dan mudah menyerap aroma di sekitarnya. Ketahui cara penyimpanan yang tepat agar kualitasnya awet hingga 1 tahun.',
    content: [
      'Seringkali daun teh yang tadinya harum perlahan kehilangan aromanya atau bahkan berbau apek. Hal ini terjadi karena daun teh sangat mudah menyerap kelembapan dan bau tajam dari lingkungan sekitarnya.',
      'Langkah pertama: selalu simpan teh dalam wadah kedap udara (airtight container), lebih baik kaleng berlapis gelap atau kaca berwarna.',
      'Langkah kedua: jauhkan dari bumbu dapur beraroma tajam seperti bawang dan rempah dapur basah. Simpan di tempat yang sejuk dan terlindung dari sinar matahari langsung.',
    ],
    image: '/images/articles/tea-storage.jpg',
    relatedSlugs: ['5-kesalahan-saat-menyeduh-teh-yang-bikin-rasanya-pahit', 'es-teh-melati-lemon-resep-segar-untuk-cuaca-panas'],
  },
];
