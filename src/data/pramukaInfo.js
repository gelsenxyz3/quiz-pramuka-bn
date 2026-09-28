// Simpan sebagai: src/data/pramukaInfo.js

export const getPredikat = (score) => {
  if (score >= 90)
    return { label: "Istimewa", variant: "summary", saran: "Pemahaman Anda terhadap materi kepramukaan sangat baik. Bagikan pengetahuan ini kepada anggota regu lainnya." };
  if (score >= 80)
    return { label: "Sangat Baik", variant: "summary", saran: "Hasil sangat baik. Perdalam kembali materi yang masih keliru agar mencapai nilai maksimal." };
  if (score >= 60)
    return { label: "Baik", variant: "summary", saran: "Hasil baik. Tinjau kembali jawaban yang salah dan pelajari materi pendukungnya." };
  if (score >= 40)
    return { label: "Cukup", variant: "summary", saran: "Pemahaman masih perlu diperkuat. Pelajari materi pada bagian bawah, kemudian ulangi kuis." };
  return { label: "Perlu Ditingkatkan", variant: "summary", saran: "Silakan pelajari kembali materi pada halaman beranda dan bagian di bawah ini, lalu ulangi kuis." };
};

export const dasaDarma = [
  "Takwa kepada Tuhan Yang Maha Esa",
  "Cinta alam dan kasih sayang sesama manusia",
  "Patriot yang sopan dan kesatria",
  "Patuh dan suka bermusyawarah",
  "Rela menolong dan tabah",
  "Rajin, terampil, dan gembira",
  "Hemat, cermat, dan bersahaja",
  "Disiplin, berani, dan setia",
  "Bertanggung jawab dan dapat dipercaya",
  "Suci dalam pikiran, perkataan, dan perbuatan",
];

export const triSatya = [
  "Menjalankan kewajibanku terhadap Tuhan Yang Maha Esa, Negara Kesatuan Republik Indonesia, dan mengamalkan Pancasila.",
  "Menolong sesama hidup dan ikut serta membangun masyarakat.",
  "Menepati Dasa Darma.",
];

export const faktaPenting = [
  "Gerakan kepanduan dunia dipelopori oleh Robert Baden-Powell. Perkemahan percobaannya diadakan pada tahun 1907 di Pulau Brownsea, Inggris.",
  "Gerakan Pramuka Indonesia diresmikan pada 14 Agustus 1961. Tanggal tersebut diperingati sebagai Hari Pramuka.",
  "Tunas kelapa dipilih sebagai lambang karena kelapa mampu tumbuh di berbagai kondisi dan bermanfaat bagi kehidupan.",
  "Golongan anggota Pramuka: Siaga (7–10 tahun), Penggalang (11–15 tahun), Penegak (16–20 tahun), dan Pandega (21–25 tahun).",
  "Sandi Morse menggunakan kombinasi titik dan garis. Sandi SOS ditulis titik-titik-titik, garis-garis-garis, titik-titik-titik.",
  "Sandi semaphore menggunakan dua bendera yang digerakkan pada posisi tertentu untuk mewakili huruf.",
];
