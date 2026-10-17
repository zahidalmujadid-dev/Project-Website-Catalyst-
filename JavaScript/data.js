/**
 * Catalyst Coffee Roasters - Product Catalog Data
 * File: JavaScript/data.js
 * Deskripsi: Data statis produk katalog (tanpa database backend)
 */

const productsData = [
  {
    id: 1,
    name: "Aceh Gayo Wine Process",
    category: "beans",
    categoryName: "Biji Kopi",
    price: 95000,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=600&auto=format&fit=crop&q=80",
    shortDesc: "Arabika fermentasi alami dengan aroma winey manis dan acidity anggur merah.",
    fullDesc: "Biji kopi pilihan dari dataran tinggi Takengon, Aceh Tengah pada elevasi 1.500 mdpl. Diproses dengan teknik fermentasi anaerobik terkontrol yang menghasilkan profil rasa kompleks dengan sentuhan dark cherries, winey aroma, dan aftertaste manis madu.",
    origin: "Takengon, Aceh (1500m)",
    roastLevel: "Medium Light",
    weight: "250 gram",
    stock: "Tersedia"
  },
  {
    id: 2,
    name: "Toraja Sapan Washed",
    category: "beans",
    categoryName: "Biji Kopi",
    price: 90000,
    badge: "Pilihan Barista",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&auto=format&fit=crop&q=80",
    shortDesc: "Kopi legendaris Toraja dengan body seimbang, floral jasmine, dan rempah herbal manis.",
    fullDesc: "Dipetik dari perkebunan Sapan, Toraja Utara. Melalui proses fully-washed higienis yang menonjolkan aroma melati yang bersih, keasaman sitrus segar, dan sentuhan kayu manis yang menenangkan di setiap sesapan.",
    origin: "Sapan, Tana Toraja (1700m)",
    roastLevel: "Medium",
    weight: "250 gram",
    stock: "Tersedia"
  },
  {
    id: 3,
    name: "Flores Bajawa Honey",
    category: "beans",
    categoryName: "Biji Kopi",
    price: 88000,
    badge: "Favorite",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&auto=format&fit=crop&q=80",
    shortDesc: "Karakter unik tanah vulkanik dengan kelembutan rasa dark chocolate & karamel tebal.",
    fullDesc: "Ditanam di lereng gunung berapi Inerie yang subur di Ngada, Flores. Proses honey mempertahankan lapisan musilase manis saat penjemuran sehingga menghasilkan seduhan dengan kepekatan cokelat hitam dan manis legit karamel mentega.",
    origin: "Ngada, Flores (1400m)",
    roastLevel: "Medium Roast",
    weight: "250 gram",
    stock: "Tersedia"
  },
  {
    id: 4,
    name: "Classic Cold Brew Signature",
    category: "brew",
    categoryName: "Ready to Drink",
    price: 32000,
    badge: "Dingin & Segar",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop&q=80",
    shortDesc: "Ekstraksi dingin 16 jam, super smooth, rendah asam, dan menyegarkan hari Anda.",
    fullDesc: "Diracik dari perpaduan biji Arabika Gayo & Mandheling yang diekstraksi perlahan menggunakan air bersuhu rendah selama 16 jam. Bebas pahit tajam, sangat ramah di lambung, dan kaya aroma kakao alami.",
    origin: "House Blend Roastery",
    roastLevel: "Steeped 16 Hours",
    weight: "250 ml (Botol Kaca)",
    stock: "Tersedia Dingin"
  },
  {
    id: 5,
    name: "Aren Latte Creamy Cold Brew",
    category: "brew",
    categoryName: "Ready to Drink",
    price: 35000,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&auto=format&fit=crop&q=80",
    shortDesc: "Paduan konsentrat cold brew artisanal, susu segar pasteurisasi, dan gula aren organik.",
    fullDesc: "Kombinasi sempurna rasa kopi yang mantap dengan kelembutan susu murni dan gurih legitnya gula aren murni dari perkebunan Banten. Disajikan dingin siap minum kapan pun Anda butuh suntikan energi.",
    origin: "House Blend + Susu Segar",
    roastLevel: "Creamy Brew",
    weight: "350 ml (Botol)",
    stock: "Tersedia Dingin"
  },
  {
    id: 6,
    name: "Artisan Drip Bag Box (Isi 5)",
    category: "drip",
    categoryName: "Drip Bag",
    price: 65000,
    badge: "Praktis",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    shortDesc: "Nikmati kopi filter kualitas kafe hanya dengan menuang air panas di mana saja.",
    fullDesc: "Solusi ngopi nikmat saat traveling, di kantor, atau camping. Setiap sachet berisi 12g bubuk kopi single origin fresh-grind yang dikemas nitrogen hermetis agar aromanya tetap terjaga seperti baru disangrai.",
    origin: "Multi-Origin Nusantara",
    roastLevel: "Medium Drip",
    weight: "5 Sachet x 12 gram",
    stock: "Tersedia"
  },
  {
    id: 7,
    name: "Barista V60 Glass Dripper Set",
    category: "merch",
    categoryName: "Alat & Merch",
    price: 145000,
    badge: "Alat Seduh",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80",
    shortDesc: "Dripper kaca borosilikat tahan panas dengan alur spiral untuk ekstraksi seduhan manual presisi.",
    fullDesc: "Perlengkapan wajib pecinta manual brew. Dibuat dari kaca borosilikat kokoh tahan perubahan suhu ekstrem, dilengkapi tatakan kayu akasia alami dan 40 lembar kertas filter V60 siap pakai.",
    origin: "Catalyst Hardware",
    roastLevel: "Tahan Panas 150°C",
    weight: "1 Set (Dripper + Filter)",
    stock: "Sisa 8 Unit"
  },
  {
    id: 8,
    name: "Catalyst Ceramic Coffee Mug 350ml",
    category: "merch",
    categoryName: "Alat & Merch",
    price: 75000,
    badge: "Merchandise",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    shortDesc: "Cangkir keramik matte tebal berlapis glasir alami dengan logo eksklusif tim Catalyst.",
    fullDesc: "Mug keramik buatan pengrajin lokal dengan ketebalan optimal untuk menjaga suhu minuman hangat lebih lama. Nyaman digenggam, dishwasher safe, dan microwave safe.",
    origin: "Handcrafted Ceramics",
    roastLevel: "Finishing Matte",
    weight: "350 ml (Keramik)",
    stock: "Tersedia"
  }
];
