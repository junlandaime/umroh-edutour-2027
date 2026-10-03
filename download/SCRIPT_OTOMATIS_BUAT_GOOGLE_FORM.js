/**
 * SCRIPT OTOMATIS PEMBUAT GOOGLE FORMS:
 * UMRAH EDUCAREER & RIHLAH ILMIAH 2027
 * Penyelenggara: KBIHU Salman ITB & Khalifah Tour
 *
 * CARA MENGGUNAKAN (Hanya Butuh 10 Detik):
 * 1. Buka https://script.new di browser laptop Anda.
 * 2. Hapus semua teks yang ada di editor, lalu PASTE seluruh kode ini.
 * 3. Klik tombol "Simpan" (ikon disket), lalu klik tombol "Jalankan" (Run).
 * 4. Berikan izin akses (Review Permissions -> Lanjutkan -> Izinkan).
 * 5. SELESAI! Link Google Form Anda beserta Google Sheets otomatis muncul di jendela Execution Log.
 */

function buatGoogleFormUmrahEduCareer() {
  // 1. Buat Google Form Baru
  var form = FormApp.create('Formulir Pendaftaran Resmi: Umrah EduCareer & Rihlah Ilmiah 2027');
  
  form.setDescription(
    "Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\n" +
    "Selamat datang di formulir pendaftaran resmi Program Umrah EduCareer & Rihlah Ilmiah 11 Hari (02 – 12 Januari 2027) " +
    "diselenggarakan oleh KBIHU Salman ITB bersama Khalifah Tour.\n\n" +
    "Program ekspedisi ini memadukan kekhusyukan ibadah di Dua Tanah Suci (Makkah & Madinah), eksplorasi kampus riset dunia " +
    "(KAUST Thuwal, Education City Doha, Umm Al-Qura, UIM Madinah), serta rintisan karier dan jejaring profesional global " +
    "bersama Diaspora Alumni ITB di Qatar dan Arab Saudi.\n\n" +
    "Mohon mengisi data berikut dengan lengkap dan benar untuk keperluan verifikasi berkas, pengajuan perizinan kunjungan " +
    "kampus/laboratorium internasional, dan penerbitan visa umrah resmi.\n\n" +
    "📞 Hotline WhatsApp Panitia: 0812-3456-7890 / 0811-1234-5678\n" +
    "🏢 Sekretariat: Kompleks Masjid Salman ITB, Jl. Ganesa No. 7, Bandung"
  );
  
  form.setIsQuiz(false);
  form.setProgressBar(true);

  // ==========================================
  // BAGIAN 1: IDENTITAS PRIBADI
  // ==========================================
  var sec1 = form.addPageBreakItem();
  sec1.setTitle('BAGIAN 1: Identitas & Data Pribadi Calon Peserta');
  sec1.setHelpText('Data legal sesuai KTP/Paspor untuk tiket penerbangan dan pengurusan visa umrah.');

  form.addTextItem()
    .setTitle('1. Nama Lengkap (Sesuai Paspor / KTP)')
    .setHelpText('Tulis nama lengkap tanpa disingkat.')
    .setRequired(true);

  form.addTextItem()
    .setTitle('2. Nama Panggilan / Gelar Akademik')
    .setHelpText('Contoh: Fulan / Dr. Ir. Ahmad, M.T.')
    .setRequired(false);

  form.addTextItem()
    .setTitle('3. Nomor Induk Kependudukan (NIK KTP)')
    .setHelpText('Masukkan 16 digit angka NIK KTP Anda.')
    .setRequired(true);

  form.addTextItem()
    .setTitle('4. Tempat & Tanggal Lahir')
    .setHelpText('Contoh: Bandung, 15 Juli 2002')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('5. Jenis Kelamin')
    .setHelpText('Diperlukan untuk pembagian kamar hotel & tasrih ibadah Raudhah Nabawi.')
    .setChoiceValues(['Laki-laki (Ikhwan)', 'Perempuan (Akhwat)'])
    .setRequired(true);

  form.addTextItem()
    .setTitle('6. Nomor WhatsApp Aktif')
    .setHelpText('Nomor utama untuk grup koordinasi dan briefing safar.')
    .setRequired(true);

  form.addTextItem()
    .setTitle('7. Alamat Email Aktif')
    .setHelpText('Untuk pengiriman e-ticket, invoice, dan berkas panduan.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('8. Alamat Domisili Sekarang')
    .setHelpText('Alamat tempat tinggal saat ini (Kelurahan, Kecamatan, Kota/Kab, Provinsi).')
    .setRequired(true);

  // ==========================================
  // BAGIAN 2: PROFIL AKADEMIK & EDUCAREER
  // ==========================================
  var sec2 = form.addPageBreakItem();
  sec2.setTitle('BAGIAN 2: Profil Akademik & Eksplorasi Karier');
  sec2.setHelpText('Diperlukan untuk perizinan ID delegasi KAUST Thuwal & kurasi sesi mentoring diaspora.');

  form.addMultipleChoiceItem()
    .setTitle('9. Kategori Peserta')
    .setChoiceValues([
      'Mahasiswa Aktif S1 / D4',
      'Mahasiswa Pascasarjana (S2 / S3)',
      'Alumni ITB (Fresh Graduate / Profesional)',
      'Dosen / Peneliti / Sivitas Akademika',
      'Orang Tua / Keluarga Mahasiswa',
      'Umum / Profesional & Eksekutif'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('10. Asal Kampus / Institusi / Perusahaan')
    .setHelpText('Contoh: Institut Teknologi Bandung / Universitas Indonesia / PT Pertamina')
    .setRequired(true);

  form.addTextItem()
    .setTitle('11. Fakultas / Program Studi & Angkatan (atau Jabatan)')
    .setHelpText('Contoh: STEI ITB - Teknik Informatika 2021 / Senior Data Scientist')
    .setRequired(true);

  form.addTextItem()
    .setTitle('12. Tautan Profil LinkedIn / Portofolio Online')
    .setHelpText('Opsional: Membantu narasumber diaspora IA-ITB Qatar & KAUST mengenali profil dan minat Anda.')
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('13. Fokus Minat Utama dalam Program Ini (Pilih 1 - 3)')
    .setChoiceValues([
      'Informasi & Bimbingan Beasiswa Riset S2/S3 (KAUST Fellowship, UIM, Qatar)',
      'Peluang Karier Global & Magang Industri (Saudi Vision 2030, Industri Migas & Tech Teluk)',
      'Eksplorasi Fasilitas Riset Canggih & Superkomputer (Shaheen KAUST, Core Labs)',
      'Studi Sejarah Peradaban, Manuskrip Kuno & Arsitektur Islam',
      'Penguatan Ibadah, Ruhiyah & Umrah Mandiri Khusyuk'
    ])
    .setRequired(true);

  // ==========================================
  // BAGIAN 3: DOKUMEN PASPOR
  // ==========================================
  var sec3 = form.addPageBreakItem();
  sec3.setTitle('BAGIAN 3: Dokumen Paspor & Pengalaman Ibadah');
  sec3.setHelpText('Syarat visa umrah Arab Saudi: Paspor aktif minimal s/d Juli 2027.');

  form.addMultipleChoiceItem()
    .setTitle('14. Status Kepemilikan Paspor')
    .setChoiceValues([
      'Sudah punya paspor aktif (Masa berlaku > Juli 2027)',
      'Sudah punya, tetapi perlu perpanjangan (masa berlaku < 6 bulan)',
      'Sedang dalam proses pembuatan di Imigrasi',
      'Belum punya (Memerlukan Surat Pengantar dari Salman ITB)'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('15. Nomor Paspor')
    .setHelpText('Kosongkan jika belum memiliki paspor.')
    .setRequired(false);

  form.addDateItem()
    .setTitle('16. Tanggal Habis Masa Berlaku Paspor (Expiry Date)')
    .setHelpText('Kosongkan jika belum memiliki paspor.')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('17. Pengalaman Ibadah ke Tanah Suci Sebelumnya')
    .setChoiceValues([
      'Pertama kali (Belum pernah ke Tanah Suci)',
      'Sudah pernah Umrah sebelumnya',
      'Sudah pernah Haji'
    ])
    .setRequired(true);

  // ==========================================
  // BAGIAN 4: PILIHAN PAKET & AKOMODASI
  // ==========================================
  var sec4 = form.addPageBreakItem();
  sec4.setTitle('BAGIAN 4: Pilihan Paket & Akomodasi Hotel (11 Hari Full Board)');
  sec4.setHelpText('Semua paket sudah all-inclusive: Tiket Qatar Airways, Kereta Cepat Haramain 300 km/jam, Hotel Bintang 3 & Bus AC Eksekutif.');

  form.addMultipleChoiceItem()
    .setTitle('18. Pilihan Tipe Kamar Hotel')
    .setChoiceValues([
      'Kamar Quad (Ber-4) - Rp 36.000.000,- / pax (Paling Populer)',
      'Kamar Triple (Ber-3) - Rp 37.500.000,- / pax (Lebih Lega)',
      'Kamar Double (Ber-2) - Rp 40.500.000,- / pax (Privat / Pasutri)'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('19. Permintaan Teman Sekamar (Roommate Request)')
    .setHelpText('Tuliskan nama rekan/keluarga jika mendaftar bersama dan ingin satu kamar.')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('20. Ukuran Jaket Kontingen Resmi Delegasi Salman ITB')
    .setChoiceValues(['S', 'M', 'L', 'XL', 'XXL', 'XXXL'])
    .setRequired(true);

  // ==========================================
  // BAGIAN 5: KESEHATAN & KONTAK DARURAT
  // ==========================================
  var sec5 = form.addPageBreakItem();
  sec5.setTitle('BAGIAN 5: Kesehatan & Kontak Darurat');
  sec5.setHelpText('Untuk keamanan dan antisipasi medis selama penerbangan dan safar.');

  form.addTextItem()
    .setTitle('21. Riwayat Penyakit Khusus / Alergi Makanan / Obat Rutin')
    .setHelpText('Tulis "Tidak Ada" jika kondisi fisik prima tanpa riwayat penyakit kronis.')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('22. Kebutuhan Bantuan Fisik & Mobilitas Ibadah')
    .setChoiceValues([
      'Tidak ada (Kondisi fisik prima untuk jalan mandiri)',
      'Membutuhkan bantuan kursi roda saat Thawaf & Sa\'i'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('23. Nama Lengkap Kontak Darurat (Emergency Contact)')
    .setHelpText('Keluarga terdekat di Indonesia yang tidak ikut berangkat.')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('24. Hubungan Kontak Darurat dengan Peserta')
    .setChoiceValues([
      'Orang Tua (Ayah / Ibu)',
      'Pasangan (Suami / Istri)',
      'Saudara Kandung',
      'Wali / Kerabat Dekat'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('25. Nomor Telepon / WhatsApp Kontak Darurat')
    .setRequired(true);

  // ==========================================
  // BAGIAN 6: KOMITMEN & PEMBAYARAN
  // ==========================================
  var sec6 = form.addPageBreakItem();
  sec6.setTitle('BAGIAN 6: Komitmen & Konfirmasi Pendaftaran');

  form.addMultipleChoiceItem()
    .setTitle('26. Rencana Pembayaran Uang Muka (Booking Seat / DP Rp 5.000.000,-)')
    .setChoiceValues([
      'Siap bayar DP dalam 1-3 hari setelah verifikasi',
      'Menunggu konfirmasi izin sponsor / beasiswa / kampus',
      'Ingin konsultasi langsung dengan panitia terlebih dahulu'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('27. Darimana Anda Mengetahui Program Umrah EduCareer Ini?')
    .setChoiceValues([
      'Masjid Salman ITB (Poster / Spanduk / Pengumuman)',
      'Grup WhatsApp (Alumni ITB / Himpunan / Unit)',
      'Media Sosial (Instagram / LinkedIn / Twitter)',
      'Rekomendasi Dosen / Teman / Rekan Kerja',
      'Website Resmi Salman ITB'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('28. Pernyataan Persetujuan & Komitmen Peserta')
    .setChoiceValues([
      'Saya menyatakan bahwa seluruh data yang diisikan adalah benar. Saya bersedia mengikuti tahapan verifikasi berkas, pengumpulan paspor, dan rangkaian briefing safar resmi KBIHU Salman ITB & Khalifah Tour.'
    ])
    .setRequired(true);

  // 2. Otomatis Hubungkan dengan Google Spreadsheet Baru
  var sheetRespon = SpreadsheetApp.create('Tabel Respon Pendaftaran: Umrah EduCareer 2027');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheetRespon.getId());

  // 3. Cetak Hasil Link di Log Eksekusi
  Logger.log('====================================================');
  Logger.log('🎉 ALHAMDULILLAH! GOOGLE FORM BERHASIL DIBUAT!');
  Logger.log('====================================================');
  Logger.log('📌 Link Edit Form (Untuk Panitia):');
  Logger.log(form.getEditUrl());
  Logger.log('----------------------------------------------------');
  Logger.log('🌐 Link Publik Form (Untuk Disebarkan ke Peserta):');
  Logger.log(form.getPublishedUrl());
  Logger.log('----------------------------------------------------');
  Logger.log('📊 Link Google Sheets (Tabel Hasil Jawaban Pendaftar):');
  Logger.log(sheetRespon.getUrl());
  Logger.log('====================================================');
}
