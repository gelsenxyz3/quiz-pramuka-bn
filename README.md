# Quiz Pramuka Interaktif BN
Diterbitkan oleh **Gelsen**. React (Vite) + Tailwind CSS v4.

## Struktur
```
src/
├── components/  Button, Card, ProgressBar, Modal (reusable)
├── pages/       HomePage, QuizPage, ResultPage
├── data/        questions.js (edit soal di sini)
├── App.jsx      navigasi halaman (useState)
├── main.jsx
└── index.css    tema warna Pramuka + animasi
```

## Jalankan lokal
```
npm install
npm run dev
npm run build   # hasil di folder dist
```

## Deploy ke Vercel
**Lewat GitHub (disarankan)**
1. `git init && git add . && git commit -m "init"` lalu push ke repo GitHub.
2. Buka vercel.com → *Add New → Project* → import repo.
3. Framework Preset: **Vite** (otomatis). Build Command: `npm run build`, Output Directory: `dist`.
4. Klik **Deploy**. Setiap `git push` akan otomatis deploy ulang.

**Lewat CLI**
```
npm i -g vercel
vercel        # ikuti prompt
vercel --prod
```
