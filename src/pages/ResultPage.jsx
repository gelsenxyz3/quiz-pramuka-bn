// Simpan sebagai: src/pages/ResultPage.jsx (ganti seluruh isi file lama)
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { getPredikat, dasaDarma, triSatya, faktaPenting } from "../data/pramukaInfo";

const TABS = [
  { id: "dasa", label: "Dasa Darma" },
  { id: "tri", label: "Tri Satya" },
  { id: "fakta", label: "Fakta Penting" },
];

export default function ResultPage({ questions, answers, onRestart, onHome }) {
  const correct = questions.filter((q, i) => answers[i] === q.answer).length;
  const wrong = questions.length - correct;
  const score = Math.round((correct / questions.length) * 100);
  const predikat = getPredikat(score);

  const [showModal, setShowModal] = useState(true);
  const [tab, setTab] = useState("dasa");
  const [review, setReview] = useState(false);
  const [fakta] = useState(() => faktaPenting[Math.floor(Math.random() * faktaPenting.length)]);

  // Skor menghitung naik dari 0
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown >= score) return;
    const t = setTimeout(() => setShown((n) => Math.min(n + 2, score)), 20);
    return () => clearTimeout(t);
  }, [shown, score]);

  return (
    <div className="animate-slide-in space-y-6">
      <h2 className="text-center text-2xl font-extrabold text-brown">Hasil Kuis</h2>

      <Card variant={predikat.variant} className="py-6 text-center">
        <p className="text-sm">Skor Akhir</p>
        <p className="text-6xl font-extrabold text-accent">{shown}</p>
        <p className="mt-1 text-lg font-bold">Predikat: {predikat.label}</p>
        <p className="mx-auto mt-2 max-w-md text-sm">{predikat.saran}</p>
      </Card>

      <div className="grid grid-cols-2 gap-3 text-center">
        <Card variant="correct"><p className="text-3xl font-bold">{correct}</p><p className="text-sm">Benar</p></Card>
        <Card variant="wrong"><p className="text-3xl font-bold">{wrong}</p><p className="text-sm">Salah</p></Card>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button onClick={onRestart}>Ulangi Kuis</Button>
        <Button variant="secondary" onClick={onHome}>Kembali ke Beranda</Button>
      </div>

      {/* Fakta acak: berbeda setiap kali halaman hasil dibuka */}
      <Card>
        <h3 className="mb-1 font-bold text-brown">Tahukah Anda?</h3>
        <p className="text-sm leading-relaxed">{fakta}</p>
      </Card>

      {/* Materi penting dengan tab */}
      <section className="space-y-3">
        <h3 className="text-lg font-extrabold text-brown">Pengetahuan Penting Kepramukaan</h3>
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <Button key={t.id} size="sm" variant={tab === t.id ? "secondary" : "outline"} onClick={() => setTab(t.id)}>
              {t.label}
            </Button>
          ))}
        </div>
        <Card key={tab} className="animate-slide-in text-sm">
          {tab === "dasa" && (
            <ol className="list-decimal space-y-1 pl-5">{dasaDarma.map((d) => <li key={d}>{d}</li>)}</ol>
          )}
          {tab === "tri" && (
            <ol className="list-decimal space-y-2 pl-5">{triSatya.map((t) => <li key={t}>{t}</li>)}</ol>
          )}
          {tab === "fakta" && (
            <ul className="list-disc space-y-2 pl-5">{faktaPenting.map((f) => <li key={f}>{f}</li>)}</ul>
          )}
        </Card>
      </section>

      {/* Tinjauan jawaban */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-brown">Tinjauan Jawaban</h3>
          <Button size="sm" variant="outline" onClick={() => setReview((r) => !r)}>
            {review ? "Sembunyikan" : "Tampilkan"}
          </Button>
        </div>
        {review && questions.map((q, i) => {
          const benar = answers[i] === q.answer;
          return (
            <Card key={i} variant={benar ? "correct" : "wrong"} className="text-sm">
              <p className="font-bold">{i + 1}. {q.question}</p>
              <p className="mt-1">Jawaban Anda: {answers[i] == null ? "Tidak dijawab" : q.options[answers[i]]}</p>
              {!benar && <p>Jawaban benar: <b>{q.options[q.answer]}</b></p>}
            </Card>
          );
        })}
      </section>

      <Modal open={showModal} title="Kuis Selesai" confirmText="Lihat Hasil" onConfirm={() => setShowModal(false)}>
        Jawaban benar Anda: {correct} dari {questions.length} soal.
      </Modal>
    </div>
  );
}
