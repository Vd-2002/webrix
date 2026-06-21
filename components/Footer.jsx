export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background/50 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white font-display font-bold text-xs">
            W
          </div>
          <span className="font-display font-semibold text-sm tracking-tight text-foreground/85">
            Webrix Design System
          </span>
        </div>
        <p className="text-xs text-foreground/50 font-sans md:text-right">
          &copy; {new Date().getFullYear()} Webrix Inc. All rights reserved. Powered by Bricolage & Plus Jakarta.
        </p>
      </div>
    </footer>
  );
}
