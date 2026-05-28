import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen flex flex-col md:flex-row gradient-bg">
      {/* Left Section: Branding & Illustration */}
      <section className="hidden md:flex md:w-1/2 p-margin-desktop flex-col justify-between items-start relative overflow-hidden">
        <div className="z-10">
          <Link to="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[32px]">clinical_notes</span>
            <h1 className="font-headline-md text-headline-md font-bold text-primary">PCOS Detect AI</h1>
          </Link>
        </div>
        <div className="relative w-full aspect-square max-w-lg mx-auto z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
          <img alt="Medical AI Illustration" className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArE4FgXJmLt_J2XMdlsdCPnWavWBFIvby4AYsp0zp2qwOiiZXBcDHLo-yd1l8eVEk5iEYR9ovYRVeRSvOQiz1UDURRCjVPeO77GCtdiDs3Bvid4qn1-DSVuQBMUee3cPUgpTwQj6VHyGp9yJIJt5MfR_ZdOiSFYyAvaQa-CNHDp6FCM-CdwJOlX9LcBKKPKAWbO8r87NVpISxOCrz2DjbM1cvfa6hpoOqkQYS2i30r559MdfsEd86BrBasJT8waTo_PT_fQetDhAyl"/>
        </div>
        <div className="z-10 max-w-md">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-4">Precision diagnostics for women's health.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Empowering you with AI-driven insights and HIPAA-compliant data security for comprehensive PCOS management.</p>
        </div>
        {/* Background organic blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Right Section: Auth Forms */}
      <section className="flex-1 flex items-center justify-center p-6 md:p-margin-desktop">
        <div className="w-full max-w-md glass-panel p-8 md:p-12 rounded-[32px] shadow-sm">
          {/* Toggle Tabs */}
          <div className="flex bg-surface-container-low p-1 rounded-full mb-8">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-full font-label-md text-label-md transition-all duration-200 ${isLogin ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}>
                Login
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-full font-label-md text-label-md transition-all duration-200 ${!isLogin ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}>
                Sign Up
            </button>
          </div>

          {/* Login Form Content */}
          {isLogin ? (
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Welcome Back</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Access your health insights securely.</p>
              </div>
              <form className="space-y-4">
                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">mail</span>
                    <input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="name@example.com" type="email"/>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center px-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Password</label>
                    <Link className="font-label-sm text-label-sm text-primary hover:underline underline-offset-4" to="#">Forgot Password?</Link>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                    <input className="w-full pl-12 pr-12 py-3 bg-surface-container-lowest border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="••••••••" type="password"/>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-label-md text-label-md rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Sign In
                </button>
              </form>
              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-outline-variant/30"></div>
                <span className="flex-shrink mx-4 font-label-sm text-label-sm text-outline uppercase tracking-wider">Or continue with</span>
                <div className="flex-grow border-t border-outline-variant/30"></div>
              </div>
              <button className="w-full py-3 px-4 bg-white border border-outline-variant rounded-full flex items-center justify-center gap-3 font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors">
                <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdArKfeZ6RcNpvThKA3uSbZnIJL3ccF24Kshm9zeWJoOHudCMlNmnufKx76SNRSH4qsShhzoF5hXdDLajQ0sbzIEXPjPfLrVAuopdLRLKUVXSwqi7TnCwDO3rloaFIIOGhkF1P4526kABwBegs0dewBXl7ELqy1BvZqGWsJXQI91YBir9h1SP_XIHGKh_Ezqu0jFIzx3Wzu_bh9sHfOwV19by4XsCh2g8LMj_u7HAV1woDQFerJ42-oQNMjUzBZsKQsHZ_4YVcJMxl"/>
                Google
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Create Account</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Start your clinical analysis today.</p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">First Name</label>
                    <input className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Jane" type="text"/>
                  </div>
                  <div className="space-y-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Last Name</label>
                    <input className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Doe" type="text"/>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Email Address</label>
                  <input className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="name@example.com" type="email"/>
                </div>
                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Password</label>
                  <div className="relative">
                    <input className="w-full px-4 pr-12 py-3 bg-surface-container-lowest border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Min. 8 characters" type="password"/>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline" type="button">
                      <span className="material-symbols-outlined">visibility_off</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-3 px-1">
                  <input className="mt-1 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                      I agree to the <Link className="text-primary hover:underline" to="#">Terms of Service</Link> and <Link className="text-primary hover:underline" to="#">Privacy Policy</Link>.
                  </p>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-label-md text-label-md rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                  Create Account
                </button>
              </form>
              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-outline-variant/30"></div>
                <span className="flex-shrink mx-4 font-label-sm text-label-sm text-outline uppercase tracking-wider">Or register with</span>
                <div className="flex-grow border-t border-outline-variant/30"></div>
              </div>
              <button className="w-full py-3 px-4 bg-white border border-outline-variant rounded-full flex items-center justify-center gap-3 font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors">
                <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqLhpkJ2ECldOYUPOBCkaxhITyMebvCoxecsSJUk1NfrAjOic7SosvspwyvPtToBLY-3ZSWGsjMIBH-rwNEWtlRQa1kfrDoXDzkgpcBW8LDjFvh8xyMcKPEluS-YhqTgUZAn8AOoHV1fksT5un3tPpXUpDlnxeReyGucECjub-DlytOiTNEnHQVP5YhLOnKyfgtOnRfzNqDnG0DE4dUU5D0XJ99RnD0OUggsKrYARY1CitcP0zZBwmhPRyziTHRKOGLuuaVnR4jqgD"/>
                Google
              </button>
            </div>
          )}
          <footer className="mt-8 text-center">
            <p className="font-label-sm text-label-sm text-outline">
              © 2024 PCOS Detect AI. HIPAA Compliant & Secure.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
