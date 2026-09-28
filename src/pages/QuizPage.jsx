import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import Modal from "../components/Modal";

export default function QuizPage({ questions, seconds, onFinish, onExit }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [showExit, setShowExit] = useState(false);

  const q = questions[idx];
  const isLast = idx + 1 === questions.length;

  const reveal = (choice) => {
    if (revealed) return;
    setSelected(choice);
    setRevealed(true);
    setAnswers((a) => [...a, choice]);
  };

  // Timer: berhenti saat jawaban terbuka atau modal keluar tampil
  useEffect(() => {
    if (revealed || showExit) return;
    if (timeLeft <= 0) {
      reveal(null);
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, revealed, showExit]);

  const next = () => {
    if (isLast) return onFinish(answers);
    setIdx(idx + 1);
    setSelected(null);
    setRevealed(false);
    setTimeLeft(seconds);
  };

  const optionVariant = (i) => {
    if (!revealed) return "option";
    if (i === q.answer) return "correct";
    if (i === selected) return "wrong";
    return "muted";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm font-bold">
        <span>Soal {idx + 1} / {questions.length}</span>
        <span className={timeLeft <= 5 ? "text-danger" : "text-brown"}>Sisa waktu: {timeLeft} detik</span>
      </div>
      <ProgressBar value={idx + (revealed ? 1 : 0)} max={questions.length} />
      <ProgressBar value={timeLeft} max={seconds} color={timeLeft <= 5 ? "bg-danger" : "bg-accent"} />

      <div key={idx} className="animate-slide-in space-y-3">
        <Card variant="summary" className="text-lg font-bold">{q.question}</Card>
        {q.options.map((opt, i) => (
          <Card
            key={i}
            variant={optionVariant(i)}
            onClick={() => !revealed && reveal(i)}
            className="flex items-center gap-3"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand font-bold text-brown">
              {String.fromCharCode(65 + i)}
            </span>
            <span>{opt}</span>
          </Card>
        ))}
        {revealed && selected === null && (
          <p className="text-center text-sm font-semibold text-danger">Waktu habis.</p>
        )}
      </div>

      <div className="flex justify-between pt-2">
        <Button variant="outline" size="sm" onClick={() => setShowExit(true)}>Keluar</Button>
        <Button disabled={!revealed} onClick={next}>{isLast ? "Lihat Hasil" : "Soal Berikutnya"}</Button>
      </div>

      <Modal
        open={showExit}
        title="Keluar dari kuis?"
        confirmText="Ya, keluar"
        cancelText="Lanjutkan"
        confirmVariant="danger"
        onConfirm={onExit}
        onCancel={() => setShowExit(false)}
      >
        Progres kuis akan hilang apabila Anda keluar.
      </Modal>
    </div>
  );
}
