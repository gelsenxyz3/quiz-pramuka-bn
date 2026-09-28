export default function ProgressBar({ value, max, color = "bg-tunas", label }) {
  const percent = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="w-full">
      {label && <p className="mb-1 text-xs font-semibold">{label}</p>}
      <div className="h-3 w-full overflow-hidden rounded-full bg-sand">
        <div className={`h-full rounded-full transition-all duration-500 ${color}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
