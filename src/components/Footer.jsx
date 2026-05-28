import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-container-max mx-auto border-t border-outline-variant/30 bg-surface-container-high dark:bg-surface-dim">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">clinical_notes</span>
          <span className="font-headline-sm text-headline-sm font-bold text-on-surface">OVAHealth AI</span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm opacity-80">
          Revolutionizing women's health through precision AI diagnostics. Building a future of accessible, high-accuracy healthcare for everyone.
        </p>
        <div className="text-on-surface-variant font-label-sm text-label-sm">
          © 2024 OVAHealth AI. All medical data is encrypted and HIPAA compliant.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h5 className="font-label-md text-label-md font-bold text-on-surface">Legal</h5>
          <ul className="space-y-2">
            <li><Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4" to="#">Privacy Policy</Link></li>
            <li><Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4" to="#">Terms of Service</Link></li>
            <li><Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4" to="#">Medical Disclaimer</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-label-md text-label-md font-bold text-on-surface">Support</h5>
          <ul className="space-y-2">
            <li><Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4" to="/support">Contact Support</Link></li>
            <li><Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4" to="#">Help Center</Link></li>
            <li><Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4" to="#">API Documentation</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
