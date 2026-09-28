/** @format */

import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Card from "../components/Card";
import { TabelMorse, DiagramGolongan } from "../components/Illustrations";

const petunjuk = [
  "Tekan tombol Mulai Kuis untuk memulai.",
  "Setiap soal berupa pilihan ganda dengan satu jawaban benar.",
  "Jawaban harus dipilih sebelum waktu habis. Bila waktu habis, soal dianggap tidak terjawab.",
  "Setelah memilih, jawaban yang benar akan ditampilkan sebelum berpindah ke soal berikutnya.",
  "Skor akhir, jumlah jawaban benar, dan jumlah jawaban salah ditampilkan pada halaman hasil.",
];

function Materi({ judul, children, gambar }) {
  return (
    <Card className='space-y-3'>
      <h3 className='text-lg font-bold text-brown'>{judul}</h3>
      <div className='mx-auto max-w-xs'>{gambar}</div>
      <div className='text-sm leading-relaxed'>{children}</div>
    </Card>
  );
}

export default function HomePage({ total, seconds, onStart }) {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className='space-y-8'>
      <section className='animate-fade-up space-y-3 text-center'>
        <img
          src='/bnm.jpg'
          alt='Foto Pramuka'
          className='animate-float mx-auto h-40 w-40 rounded-full border-4 border-brown object-cover object-top shadow-md'
        />
        <h1 className='text-3xl font-extrabold text-brown sm:text-4xl'>
          Quiz Pramuka <span className='text-accent'>Interaktif BN</span>
        </h1>
        <p className='text-brown/80'>
          Sarana evaluasi pengetahuan kepramukaan.
        </p>
        <div className='flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <Button size='lg' variant='accent' onClick={onStart}>
            Mulai Kuis
          </Button>
          <Button
            size='lg'
            variant='outline'
            onClick={() => setShowAbout(true)}>
            Tentang Saya
          </Button>
        </div>
      </section>

      <section
        className='animate-fade-up space-y-3'
        style={{ animationDelay: "0.1s" }}>
        <h2 className='text-xl font-extrabold text-brown'>Informasi Kuis</h2>
        <Card>
          <p className='text-sm'>
            Kuis terdiri atas <b>{total} soal</b> pilihan ganda dengan alokasi
            waktu <b>{seconds} detik</b> untuk setiap soal. Materi mencakup
            sejarah, golongan, lambang, dan sandi Pramuka.
          </p>
        </Card>
      </section>

      <section
        className='animate-fade-up space-y-3'
        style={{ animationDelay: "0.2s" }}>
        <h2 className='text-xl font-extrabold text-brown'>Cara Bermain</h2>
        <Card>
          <ol className='list-decimal space-y-2 pl-5 text-sm'>
            {petunjuk.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
        </Card>
      </section>

      <section
        className='animate-fade-up space-y-3'
        style={{ animationDelay: "0.3s" }}>
        <h2 className='text-xl font-extrabold text-brown'>Materi Singkat</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Materi
            judul='Lambang Gerakan Pramuka'
            gambar={
              <img
                src='/lambang.jpg'
                alt='Lambang Gerakan Pramuka'
                className='mx-auto h-32 w-32 object-contain'
              />
            }>
            Lambang Gerakan Pramuka Indonesia adalah tunas kelapa. Tunas kelapa
            dipilih karena melambangkan kemampuan bertahan hidup dan tumbuh di
            berbagai kondisi. Hari Pramuka diperingati setiap 14 Agustus.
          </Materi>
          <Materi judul='Golongan Anggota' gambar={<DiagramGolongan />}>
            Anggota Pramuka dibagi menurut usia: Siaga, Penggalang, Penegak, dan
            Pandega. Setiap golongan memiliki bentuk kegiatan yang disesuaikan
            dengan perkembangan usianya.
          </Materi>
          <Materi judul='Sandi Morse' gambar={<TabelMorse />}>
            Sandi Morse menyusun huruf dari kombinasi titik dan garis.
            Contohnya, SOS ditulis titik-titik-titik, garis-garis-garis,
            titik-titik-titik. Sandi ini dapat disampaikan melalui bunyi,
            cahaya, maupun gerakan bendera.
          </Materi>
          <Materi
            judul='Tokoh dan Sejarah'
            gambar={
              <img
                src='/powel.jpg'
                alt='Robert Baden-Powell'
                className='mx-auto h-32 w-32 rounded-full border-4 border-brown object-cover object-top'
              />
            }>
            Gerakan kepanduan dunia dipelopori oleh Robert Baden-Powell pada
            awal abad ke-20. Di Indonesia, Gerakan Pramuka diresmikan pada 14
            Agustus 1961 dan berlambang tunas kelapa.
          </Materi>
        </div>
      </section>

      <Modal
        open={showAbout}
        title='Tentang Penerbit'
        confirmText='Tutup'
        onConfirm={() => setShowAbout(false)}>
        <img
          src='/lop.jpg'
          alt='Foto Gelsen'
          className='mx-auto mb-4 h-28 w-28 rounded-full border-4 border-brown object-cover object-top'
        />
        <dl className='space-y-2'>
          <div>
            <dt className='font-bold text-brown'>Nama</dt>
            <dd>Gelsen Kristovan Saleleubaja</dd>
          </div>
          <div>
            <dt className='font-bold text-brown'>Peran</dt>
            <dd>Penerbit & Web Developer</dd>
          </div>
          <div>
            <dt className='font-bold text-brown'>Asal Sekolah</dt>
            <dd>SMK BAGIMU NEGERIKU</dd>
          </div>
          <div>
            <dt className='font-bold text-brown'>Jurusan</dt>
            <dd>Rekayasa Perangkat Lunak</dd>
          </div>
          <div>
            <dt className='font-bold text-brown'>Kontak</dt>
            <dd>+6281270889315</dd>
          </div>
        </dl>
        <p className='mt-3 leading-relaxed'>
          Quiz Pramuka Interaktif BN diterbitkan sebagai sarana belajar
          kepramukaan secara interaktif.
        </p>
      </Modal>
    </div>
  );
}