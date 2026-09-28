/** @format */

const variants = {
  default: "bg-white border-2 border-sand",
  option: "bg-white border-2 border-sand hover:border-tunas cursor-pointer",
  correct: "bg-green-100 border-2 border-tunas-dark animate-pulse-correct",
  wrong: "bg-red-100 border-2 border-danger animate-shake",
  muted: "bg-sand border-2 border-sand opacity-70",
  summary: "bg-brown text-cream border-2 border-brown-dark",
};

export default function Card({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  return (
    <div
      className={`rounded-2xl p-4 shadow-sm transition ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </div>
  );
}
