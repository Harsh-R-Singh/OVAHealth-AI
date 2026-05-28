import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 flex items-center justify-between px-margin-desktop py-4 max-w-container-max mx-auto bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-white/40 dark:border-outline-variant/20 shadow-sm shadow-primary/5">
      <Link to="/" className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-3xl">clinical_notes</span>
        <span className="font-headline-md text-headline-md font-bold text-primary">OVAHealth AI</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md" to="/">Home</Link>
        <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md" to="/features">Features</Link>
        <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md" to="/about">How it Works</Link>
        <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md" to="/dashboard">Insights</Link>
      </div>
      <Link to="/login" className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:scale-95 transition-transform active:scale-90 shadow-lg shadow-primary/20">
        Login
      </Link>
    </nav>
  );
}
