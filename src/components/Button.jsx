const variants = {
  primary: "bg-tunas text-white hover:bg-tunas-dark shadow-md",
  secondary: "bg-brown text-cream hover:bg-brown-dark shadow-md",
  accent: "bg-accent text-white hover:bg-orange-700 shadow-md",
  danger: "bg-danger text-white hover:bg-red-800 shadow-md",
  outline: "border-2 border-brown text-brown hover:bg-sand",
};
const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

export default function Button({
  children, variant = "primary", size = "md", className = "", disabled, ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`rounded-xl font-bold transition hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
