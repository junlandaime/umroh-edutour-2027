function buatGoogleFormUmrahEduCareer() {
  var form = FormApp.create("Formulir Pendaftaran Resmi: Umrah EduCareer 2027");
  form.setDescription("Pendaftaran Program Umrah EduCareer & Rihlah Ilmiah 11 Hari (02 - 12 Jan 2027) KBIHU Salman ITB & Khalifah Tour. Hotline: 0812-3456-7890 / 0811-1234-5678.");

  // Helper agar kode ringkas dan bebas error
  function addText(title, help, req) {
    var item = form.addTextItem().setTitle(title).setRequired(req);
    if (help) item.setHelpText(help);
    return item;
  }
  function addParagraph(title, help, req) {
    var item = form.addParagraphTextItem().setTitle(title).setRequired(req);
    if (help) item.setHelpText(help);
    return item;
  }
  function addChoice(title, choices, req, help) {
    var item = form.addMultipleChoiceItem().setTitle(title).setChoiceValues(choices).setRequired(req);
    if (help) item.setHelpText(help);
    return item;
  }
  function addCheck(title, choices, req, help) {
    var item = form.addCheckboxItem().setTitle(title).setChoiceValues(choices).setRequired(req);
    if (help) item.setHelpText(help);
    return item;
  }
  function addSection(title, help) {
    var sec = form.addPageBreakItem().setTitle(title);
    if (help) sec.setHelpText(help);
    return sec;
  }

  // BAGIAN 1: IDENTITAS PRIBADI
  addSection("BAGIAN 1: Identitas & Data Pribadi", "Data legal sesuai Paspor/KTP untuk visa umrah & tiket pesawat.");
  addText("1. Nama Lengkap (Sesuai Paspor / KTP)", "Tulis lengkap tanpa disingkat", true);
  addText("2. Nama Panggilan / Gelar Akademik", "Contoh: Fulan / Dr. Ir. Ahmad, M.T.", false);
  addText("3. Nomor Induk Kependudukan (NIK KTP)", "16 digit angka NIK KTP", true);
  addText("4. Tempat & Tanggal Lahir", "Contoh: Bandung, 15 Juli 2002", true);
  addChoice("5. Jenis Kelamin", ["Laki-laki (Ikhwan)", "Perempuan (Akhwat)"], true, "Untuk pembagian kamar & tasrih Raudhah");
  addText("6. Nomor WhatsApp Aktif", "Nomor utama koordinasi safar", true);
  addText("7. Alamat Email Aktif", "Untuk pengiriman invoice & e-ticket", true);
  addParagraph("8. Alamat Domisili Sekarang", "Kota/Kabupaten dan Provinsi tempat tinggal saat ini", true);

  // BAGIAN 2: PROFIL AKADEMIK & KARIER
  addSection("BAGIAN 2: Profil Akademik & Eksplorasi Karier", "Untuk perizinan delegasi KAUST & kurasi sesi mentoring diaspora.");
  addChoice("9. Kategori Peserta", [
    "Mahasiswa Aktif S1 / D4",
    "Mahasiswa Pascasarjana (S2 / S3)",
    "Alumni ITB (Fresh Graduate / Profesional)",
    "Dosen / Peneliti / Sivitas Akademika",
    "Orang Tua / Keluarga Mahasiswa",
    "Umum / Profesional & Eksekutif"
  ], true);
  addText("10. Asal Kampus / Institusi / Perusahaan", "Contoh: Institut Teknologi Bandung / PT Pertamina", true);
  addText("11. Fakultas / Program Studi & Angkatan (atau Jabatan)", "Contoh: STEI ITB - Informatika 2021", true);
  addText("12. Tautan Profil LinkedIn / Portofolio", "Opsional: Untuk sesi mentoring diaspora", false);
  addCheck("13. Fokus Minat Utama dalam Program Ini (Pilih 1 - 3)", [
    "Beasiswa Riset S2/S3 (KAUST Fellowship, UIM, Qatar)",
    "Peluang Karier Global & Magang Industri (Saudi 2030 / Migas)",
    "Eksplorasi Lab Canggih & Superkomputer Shaheen",
    "Studi Sejarah Peradaban & Manuskrip Islam",
    "Penguatan Ibadah & Umrah Mandiri Khusyuk"
  ], true);

  // BAGIAN 3: DOKUMEN PASPOR
  addSection("BAGIAN 3: Dokumen Paspor & Pengalaman Ibadah", "Syarat visa umrah Arab Saudi: Paspor aktif minimal s/d Juli 2027.");
  addChoice("14. Status Kepemilikan Paspor", [
    "Sudah punya paspor aktif (Berlaku > Juli 2027)",
    "Sudah punya, tetapi perlu perpanjangan (< 6 bulan)",
    "Sedang dalam proses pembuatan di Imigrasi",
    "Belum punya (Butuh surat rekomendasi Salman ITB)"
  ], true);
  addText("15. Nomor Paspor", "Kosongkan jika belum ada", false);
  form.addDateItem().setTitle("16. Tanggal Habis Masa Berlaku Paspor").setHelpText("Kosongkan jika belum ada paspor").setRequired(false);
  addChoice("17. Pengalaman Ibadah ke Tanah Suci Sebelumnya", [
    "Pertama kali (Belum pernah ke Tanah Suci)",
    "Sudah pernah Umrah sebelumnya",
    "Sudah pernah Haji"
  ], true);

  // BAGIAN 4: PILIHAN PAKET & AKOMODASI
  addSection("BAGIAN 4: Pilihan Paket & Akomodasi Hotel", "Paket 11 Hari Full Board All-Inclusive: Qatar Airways, Kereta Cepat Haramain 300 km/jam, Hotel Bintang 3.");
  addChoice("18. Pilihan Tipe Kamar Hotel", [
    "Kamar Quad (Ber-4) - Rp 36.000.000,- / pax",
    "Kamar Triple (Ber-3) - Rp 37.500.000,- / pax",
    "Kamar Double (Ber-2) - Rp 40.500.000,- / pax"
  ], true);
  addText("19. Permintaan Teman Sekamar (Roommate)", "Tulis nama rekan jika mendaftar bersama", false);
  addChoice("20. Ukuran Jaket Kontingen Resmi Delegasi", ["S", "M", "L", "XL", "XXL", "XXXL"], true);

  // BAGIAN 5: KESEHATAN & KONTAK DARURAT
  addSection("BAGIAN 5: Kesehatan & Kontak Darurat", "Untuk keamanan dan kenyamanan medis selama safar.");
  addText("21. Riwayat Penyakit Khusus / Alergi / Obat Rutin", "Tulis Tidak Ada jika fisik prima", true);
  addChoice("22. Kebutuhan Bantuan Fisik & Mobilitas Ibadah", [
    "Tidak ada (Fisik prima jalan mandiri)",
    "Membutuhkan bantuan kursi roda saat Thawaf dan Sa'i"
  ], true);
  addText("23. Nama Lengkap Kontak Darurat", "Keluarga terdekat di Indonesia", true);
  addChoice("24. Hubungan Kontak Darurat dengan Peserta", [
    "Orang Tua (Ayah / Ibu)",
    "Pasangan (Suami / Istri)",
    "Saudara Kandung",
    "Wali / Kerabat Dekat"
  ], true);
  addText("25. Nomor Telepon / WhatsApp Kontak Darurat", "Contoh: 08123456789", true);

  // BAGIAN 6: KOMITMEN & PEMBAYARAN
  addSection("BAGIAN 6: Komitmen & Konfirmasi Pendaftaran", "Booking seat resmi dengan DP Rp 5.000.000,-.");
  addChoice("26. Rencana Pembayaran Uang Muka (DP Rp 5 Juta)", [
    "Siap bayar DP dalam 1-3 hari setelah verifikasi",
    "Menunggu konfirmasi izin sponsor / beasiswa / kampus",
    "Ingin konsultasi langsung dengan panitia terlebih dahulu"
  ], true);
  addCheck("27. Darimana Anda Mengetahui Program Umrah EduCareer Ini?", [
    "Masjid Salman ITB (Poster / Spanduk)",
    "Grup WhatsApp (Alumni ITB / Himpunan / Unit)",
    "Media Sosial (Instagram / LinkedIn / Twitter)",
    "Rekomendasi Teman / Dosen / Rekan Kerja",
    "Website Resmi Salman ITB"
  ], true);
  addCheck("28. Pernyataan Persetujuan & Komitmen Peserta", [
    "Saya menyatakan bahwa seluruh data yang diisikan adalah benar. Saya bersedia mengikuti tahapan verifikasi berkas, pengumpulan paspor, dan rangkaian briefing safar resmi KBIHU Salman ITB & Khalifah Tour."
  ], true);

  // Hubungkan ke Google Sheets
  var sheet = SpreadsheetApp.create("Tabel Respon Pendaftaran: Umrah EduCareer 2027");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  Logger.log("====================================================");
  Logger.log("BERHASIL DIBUAT!");
  Logger.log("Link Edit Form: " + form.getEditUrl());
  Logger.log("Link Publik Form: " + form.getPublishedUrl());
  Logger.log("Link Google Sheets: " + sheet.getUrl());
  Logger.log("====================================================");
}
