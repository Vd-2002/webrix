export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyle = "px-4 py-2.5 font-display uppercase text-[15px] font-bold transition-all duration-200 cursor-pointer shadow-sm hover:opacity-90 active:scale-[0.98] rounded-md";
  
  const variants = {
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
    secondary: "bg-secondary text-background border border-border",
    outline: "border border-border bg-transparent text-foreground hover:bg-foreground/5"
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
