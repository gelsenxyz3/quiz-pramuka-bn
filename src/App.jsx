import { useState } from "react";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import { questions } from "./data/questions";

const SECONDS_PER_QUESTION = 30;

export default function App() {
  const [page, setPage] = useState("home"); // home | quiz | result
  const [answers, setAnswers] = useState([]);
  const [runId, setRunId] = useState(0); // untuk me-reset QuizPage saat restart

  const start = () => { setRunId((n) => n + 1); setPage("quiz"); };
  const finish = (ans) => { setAnswers(ans); setPage("result"); };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-brown py-3 text-center text-cream shadow">
        <span className="font-bold">Quiz Pramuka Interaktif BN</span>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 p-4 sm:p-6">
        {page === "home" && (
          <HomePage total={questions.length} seconds={SECONDS_PER_QUESTION} onStart={start} />
        )}
        {page === "quiz" && (
          <QuizPage key={runId} questions={questions} seconds={SECONDS_PER_QUESTION}
            onFinish={finish} onExit={() => setPage("home")} />
        )}
        {page === "result" && (
          <ResultPage questions={questions} answers={answers} onRestart={start} onHome={() => setPage("home")} />
        )}
      </main>
      <footer className="bg-brown-dark py-3 text-center text-xs text-cream">
        Diterbitkan oleh <b>Gelsen</b> © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
