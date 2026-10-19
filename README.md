# Tugas 2 Pemrograman Web - Aplikasi Katalog Film

Aplikasi web sederhana berbasis **Node.js**, **Express.js**, dan **EJS** yang menampilkan katalog film dengan fitur filter genre, halaman detail item, serta formulir penambahan film baru. Project ini dibuat untuk memenuhi tugas mata kuliah Pemrograman Web (Tema B: Katalog Film).

*YOUTUBE*
=> https://youtu.be/F7ohA2wbwDI
---

## 👤 Identitas Mahasiswa
* **Nama**: I Gede Dika Mahendra Putra
* **NIM**: 42530027
* **Program Studi**: Teknologi Informasi - Universitas Pendidikan Nasional (Undiknas)

---

## 🚀 Fitur & Kemampuan Utama
1. **Filtering Genre (Query Parameter)**: Memfilter daftar film berdasarkan genre via `req.query.genre`.
2. **Detail Film (Route Parameter)**: Menampilkan informasi lengkap film berdasarkan ID unik via `req.params.id`.
3. **EJS Partials**: Struktur tampilan yang modular menggunakan komponen terpisah (`header.ejs` & `footer.ejs`).
4. **Server-Side Rendering (SSR)**: Penggabungan data dan template HTML yang diproses penuh di sisi server (`res.render()`).
5. **Tambah Film Baru**: Form interaktif dengan metode `GET` dan `POST` untuk menambahkan item film baru.

---

## 🛠️ Teknologi yang Digunakan
* **Backend**: Node.js & Express.js
* **Template Engine**: EJS (Embedded JavaScript)
* **Styling**: CSS3 (Vanilla)

---

## 💻 Cara Menjalankan Project di Lokal

1. **Clone repositori ini:**
   ```bash
   git clone [https://github.com/DikaMahendraa/pemweb-tugas2-42530027.git](https://github.com/DikaMahendraa/pemweb-tugas2-42530027.git)
   cd pemweb-tugas2-42530027
