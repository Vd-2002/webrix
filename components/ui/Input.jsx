export default function Input({ label, error, className = "", ...props }) {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-xs font-bold text-foreground/70 uppercase tracking-wider font-sans">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-sans text-sm ${
          error ? "border-red-500 focus:ring-red-500" : ""
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-500 font-sans">{error}</p>
      )}
    </div>
  );
}
