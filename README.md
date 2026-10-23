# Catalyst Coffee Roasters — Website Katalog Produk

> **Weekly Meet Catalyst - Final Assignment: Build Together (Collaborative Mini Project)**  
> Website katalog produk statis yang dibangun secara kolaboratif menggunakan HTML5, CSS3, dan Vanilla JavaScript.

---

## 📌 Ringkasan Project

**Catalyst Coffee Roasters** adalah website katalog produk interaktif untuk bisnis *specialty coffee & roastery*. Website ini menyajikan informasi lengkap mengenai biji kopi nusantara, seduhan siap minum (*ready-to-drink cold brew*), kantong seduh (*drip bag*), hingga peralatan seduh manual (*manual brew merchandise*).

Website ini dibangun dalam format **Single-Page Application (SPA)** dengan navigasi antarseksi yang mulus, responsif di berbagai ukuran layar (desktop & mobile), serta dilengkapi fitur katalog interaktif tanpa memerlukan backend atau database server.

---

## 👥 Profil Kelompok & Kontribusi Anggota

| No | Nama Lengkap | Username GitHub | Peran / Fokus Pekerjaan |
|---|---|---|---|
| 1 | [Zahid Al Mujaddid Giat Koentjoro] | `@zahidalmujadid-dev` | Hero Section, Navbar Responsif, & Setup Desain Dasar |
| 2 | [Nama Anggota 2] | `@username2` | About Section, Nilai Bisnis, & Profil Perusahaan |
| 3 | [Nama Anggota 3] | `@username3` | Main Content: Struktur Grid Produk, Data Objek (`data.js`) & Filter Kategori |
| 4 | [Nama Anggota 4] | `@username4` | Logika Live Search, Pop-up Modal Detail Produk, Kontak & Footer |

---

## 🎯 Tujuan & Latar Belakang

1. **Menerapkan Praktik Kolaborasi GitHub:** Mengaplikasikan *branching strategy*, penulisan *commit* yang deskriptif, pembuatan *Pull Request (PR)*, dan *peer code review* antaranggota kelompok.
2. **Katalog Produk Terstruktur:** Memudahkan calon pelanggan melihat varian produk, memeriksa harga, membaca profil rasa kopi, dan memesan secara langsung via WhatsApp.
3. **Optimasi Vanilla Web:** Membangun website yang cepat, ringan, dan elegan murni menggunakan fondasi HTML, CSS modern, dan JavaScript tanpa *framework* eksternal.

---

## 🌟 Fitur & Section Website

Website memiliki 4 section utama sesuai ketentuan tugas:

1. **Section 1: Home / Hero Section**
   * *Fixed / Sticky Navigation Bar* dengan logo brand dan efek *glassmorphism*.
   * Headline dan perkenalan singkat bisnis sangrai kopi nusantara.
   * Tombol *Call to Action* (CTA) *"Jelajahi Katalog"* dan *"Tentang Kami"*.
   * Statistik ringkas (15+ Varian, 100% Petani Lokal, 4.9/5 Rating).
   * Banner visual produk unggulan dengan lencana mengambang (*floating badge*).

2. **Section 2: About / Profile Section**
   * Narasi latar belakang dan filosofi kemitraan dengan petani kopi lokal.
   * 4 kartu keunggulan (*Value Propositions*): *Direct Trade*, *Fresh Roasted*, *Eco-Friendly Packaging*, dan *Q-Grader Certified*.

3. **Section 3: Main Content — Katalog Produk Interaktif**
   * **Pencarian Real-Time (*Live Search*):** Mencari produk secara instan berdasarkan nama atau deskripsi.
   * **Filter Kategori Dinamis:** Tombol filter kategori (*Semua*, *Biji Kopi*, *Ready to Drink*, *Drip Bag*, *Alat & Merch*).
   * **Grid Kartu Produk:** Menampilkan foto berkualitas tinggi, nama produk, kategori, harga dalam format Rupiah, dan tombol detail.
   * **Pop-up Modal Detail Produk:** Menampilkan spesifikasi mendalam (asal daerah/elevasi, tingkat *roasting*, berat bersih, dan tombol pemesanan WhatsApp langsung dengan pesan otomatis).
   * **State Kosong (*Empty State*):** Pesan informatif jika produk yang dicari tidak ditemukan.

4. **Section 4: Contact & Footer**
   * Informasi alamat fisik roastery di Jakarta Selatan.
   * Jadwal jam operasional toko.
   * Tautan direct WhatsApp Customer Service dan email resmi.
   * Tautan media sosial (Instagram, TikTok, Twitter).
   * Copyright dan kredit tim Catalyst.

---

## 🛠️ Teknologi yang Digunakan

* **HTML5:** Struktur semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **CSS3 (Vanilla):** CSS Custom Properties (Variables), Flexbox, CSS Grid, Glassmorphism, Micro-animations, Media Queries responsif.
* **JavaScript (Vanilla ES6+):** DOM Manipulation, Array Methods (`filter`, `map`, `find`), Event Listeners, Dynamic Modal Dialog, dan URL Encoding WhatsApp.
* **Google Fonts:** Plus Jakarta Sans & Playfair Display.

---

## 🚀 Cara Menjalankan Website Secara Lokal

Project ini adalah website statis murni sehingga tidak memerlukan instalasi `npm` atau konfigurasi server khusus:

### Opsi 1: Buka Langsung di Browser
1. *Clone* atau unduh repository ini ke komputer Anda:
   ```bash
   git clone https://github.com/zahidalmujadid-dev/Project-Website-Catalyst-.git
   ```
2. Buka folder project.
3. Klik dua kali (*double click*) file `index.html` (atau `main.html`) untuk membukanya di browser apa pun (Google Chrome, Edge, Firefox, Safari).

### Opsi 2: Menggunakan VS Code Live Server
1. Buka folder project di VS Code.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey) jika belum terpasang.
3. Klik kanan pada file `index.html` dan pilih **"Open with Live Server"**.
4. Website akan terbuka di alamat lokal `http://127.0.0.1:5500/index.html`.

---

## 🌿 Alur Kolaborasi Git & GitHub

Sesuai instruksi Catalyst Weekly Meet, pengembangan proyek mengikuti standar alur kerja tim developer:

1. **Issues:** Setiap fitur dicatat pada GitHub Issues sebelum dikerjakan.
2. **Branching:** Dilarang melakukan *direct push* ke branch `main`/`master`. Setiap anggota membuat branch fitur:
   * `feature/hero-navbar`
   * `feature/about-section`
   * `feature/catalog-data`
   * `feature/catalog-logic`
   * `feature/contact-footer`
   * `feature/documentation`
3. **Pull Request & Review:** Setiap perubahan diajukan melalui Pull Request (PR) dan wajib direview serta disetujui minimal oleh 1 anggota kelompok sebelum digabungkan (*merge*).

---

## 📁 Struktur Berkas

```text
Project-Catalyst/
├── index.html                   # Halaman utama website (Entry point)
├── main.html                    # Halaman alternatif
├── CSS/
│   └── style.css               # Seluruh aturan styling dan layout responsif
├── JavaScript/
│   ├── data.js                 # Dataset produk statis (Array of objects)
│   └── main.js                 # Interaktivitas (Filter, Search, Modal, Mobile Nav)
├── screenshots/                 # Dokumentasi tampilan layar website
├── Catalyst-for-Maba-Final-Assignment.pdf  # Dokumen panduan tugas
├── Command.txt                  # Catatan instruksi
└── README.md                    # Dokumentasi lengkap proyek
```

---

&copy; 2026 Tim Catalyst — Final Assignment Mini Project.
