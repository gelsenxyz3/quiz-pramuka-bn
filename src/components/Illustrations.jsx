// Ilustrasi SVG lokal (tanpa gambar eksternal, sehingga aman saat deploy)

export function TunasKelapa({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Ilustrasi tunas kelapa, lambang Gerakan Pramuka">
      <circle cx="100" cy="100" r="92" fill="#efe2c0" stroke="#5c3d2e" strokeWidth="4" />
      <path d="M100 128 C60 128 52 98 62 82 C82 90 96 104 100 128Z" fill="#6baa3c" />
      <path d="M100 128 C140 128 148 98 138 82 C118 90 104 104 100 128Z" fill="#6baa3c" />
      <path d="M100 128 C86 98 88 62 100 40 C112 62 114 98 100 128Z" fill="#4d8a26" />
      <ellipse cx="100" cy="142" rx="34" ry="22" fill="#5c3d2e" />
      <path d="M78 140 Q100 150 122 140" stroke="#3e2820" strokeWidth="3" fill="none" />
    </svg>
  );
}

const MORSE = { A: ".-", B: "-...", C: "-.-.", E: ".", K: "-.-", O: "---", S: "..." };

export function TabelMorse() {
  return (
    <svg viewBox="0 0 300 200" className="w-full" role="img" aria-label="Tabel contoh sandi Morse">
      <rect x="1" y="1" width="298" height="198" rx="10" fill="#fff" stroke="#efe2c0" strokeWidth="2" />
      {Object.entries(MORSE).map(([huruf, kode], i) => {
        const col = i < 4 ? 0 : 1;
        const row = i < 4 ? i : i - 4;
        const x0 = 20 + col * 150;
        const y = 34 + row * 42;
        let x = x0 + 26;
        return (
          <g key={huruf}>
            <text x={x0} y={y + 6} fontSize="18" fontWeight="700" fill="#5c3d2e">{huruf}</text>
            {[...kode].map((s, k) => {
              const el = s === "." ? (
                <circle key={k} cx={x + 5} cy={y} r="5" fill="#e8590c" />
              ) : (
                <rect key={k} x={x} y={y - 5} width="22" height="10" rx="5" fill="#4d8a26" />
              );
              x += s === "." ? 16 : 30;
              return el;
            })}
          </g>
        );
      })}
    </svg>
  );
}

const GOLONGAN = [
  { nama: "Siaga", umur: "7–10 th", warna: "#e8590c" },
  { nama: "Penggalang", umur: "11–15 th", warna: "#6baa3c" },
  { nama: "Penegak", umur: "16–20 th", warna: "#5c3d2e" },
  { nama: "Pandega", umur: "21–25 th", warna: "#3e2820" },
];

export function DiagramGolongan() {
  return (
    <svg viewBox="0 0 400 110" className="w-full" role="img" aria-label="Diagram golongan usia Pramuka">
      {GOLONGAN.map((g, i) => (
        <g key={g.nama}>
          <rect x={4 + i * 98} y="10" width="94" height="60" rx="8" fill={g.warna} />
          <text x={51 + i * 98} y="36" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">{g.nama}</text>
          <text x={51 + i * 98} y="56" textAnchor="middle" fontSize="12" fill="#fbf3e0">{g.umur}</text>
        </g>
      ))}
      <text x="200" y="98" textAnchor="middle" fontSize="11" fill="#5c3d2e">Tingkatan golongan menurut usia anggota</text>
    </svg>
  );
}
