import { Link } from 'react-router-dom';

export default function MedicalAssistant() {
  return (
    <div className="flex flex-1 max-w-container-max mx-auto w-full min-h-screen bg-mesh">
      {/* NavigationDrawer */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 h-[calc(100vh-100px)] sticky top-24 bg-surface-container-low/90 backdrop-blur-md rounded-r-xl border-r border-white/20 p-4 shadow-xl shadow-primary/5">
        <div className="px-6 mb-8 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <img alt="Patient Profile Avatar" className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr9l9GRms20FoOhy-yzO6YEB3gw3HNJSmCGiwx83woxi6VxHB4BOIxaPNRo0exwe4KmIu8I68W8ASh-ZLOGhUpKHRWxAyUMggNYvlWsJgTJaoPKybhfCkJxO_a9rCxRHAFCmfXZU_YhrKq5a8M-8aMcXGf5oh5EcQlldaeP41MepKi8FEfCwipYCD4vTmmktk9ZgNk05hV-cM6-IIVCgObSoQ7cuufYME20BslWezpDx_79TdDxbXdReREsFDo8FeNG41IylY_6ufi"/>
            <div>
              <p className="font-headline-sm text-headline-sm font-bold text-primary">Health Dashboard</p>
              <p className="font-body-md text-body-md text-on-surface-variant opacity-70">PCOS Analysis Portal</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-xl mx-2 my-1 transition-all duration-300">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </Link>
          <Link to="/history" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-xl mx-2 my-1 transition-all duration-300">
            <span className="material-symbols-outlined">history</span>
            <span className="font-label-md text-label-md">Scan History</span>
          </Link>
          <div className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-xl mx-2 my-1 transition-all duration-300 cursor-pointer">
            <span className="material-symbols-outlined" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
            <span className="font-label-md text-label-md">AI Insights</span>
          </div>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-xl mx-2 my-1 transition-all duration-300">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-md text-label-md">Patient Profile</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-xl mx-2 my-1 transition-all duration-300">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col h-[calc(100vh-80px)]">
        <div className="flex-1 overflow-y-auto px-margin-desktop py-8 space-y-6">
          {/* AI Welcome Message */}
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-[20px]" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
            </div>
            <div className="bg-white p-6 rounded-2xl rounded-tl-none border border-outline-variant/30 shadow-sm">
              <p className="font-body-md text-body-md text-on-surface">Hello. I am your specialized PCOS AI assistant. How can I support your health journey today? You can ask about symptoms, diet, or review your recent scan results.</p>
            </div>
          </div>

          {/* User Message Example */}
          <div className="flex items-start gap-4 max-w-3xl ml-auto flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0 shadow-lg shadow-secondary/20">
              <span className="material-symbols-outlined text-on-secondary-container text-[20px]">person</span>
            </div>
            <div className="bg-primary text-white p-6 rounded-2xl rounded-tr-none shadow-md">
              <p className="font-body-md text-body-md">What are some common symptoms of PCOS I should look out for?</p>
            </div>
          </div>

          {/* AI Response Example */}
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-[20px]" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
            </div>
            <div className="bg-white p-6 rounded-2xl rounded-tl-none border border-outline-variant/30 shadow-sm space-y-4">
              <p className="font-body-md text-body-md text-on-surface">Common symptoms of Polycystic Ovary Syndrome (PCOS) can vary, but often include:</p>
              <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Irregular periods or no periods at all</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Difficulty getting pregnant (due to irregular ovulation)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Excessive hair growth (hirsutism) usually on the face, chest, or back</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Weight gain and thinning hair on the head</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Oily skin or acne</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chat Interaction Area */}
        <div className="px-margin-desktop py-6 bg-transparent">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Quick Prompts (Bento Style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button className="p-4 bg-white/60 hover:bg-white border border-outline-variant/20 rounded-2xl text-left transition-all hover:shadow-md group">
                <span className="material-symbols-outlined text-primary mb-2 block group-hover:scale-110 transition-transform">symptoms</span>
                <p className="font-label-md text-label-md text-on-surface">What are symptoms of PCOS?</p>
              </button>
              <button className="p-4 bg-white/60 hover:bg-white border border-outline-variant/20 rounded-2xl text-left transition-all hover:shadow-md group">
                <span className="material-symbols-outlined text-primary mb-2 block group-hover:scale-110 transition-transform">restaurant</span>
                <p className="font-label-md text-label-md text-on-surface">Diet recommendations for PCOS</p>
              </button>
              <button className="p-4 bg-white/60 hover:bg-white border border-outline-variant/20 rounded-2xl text-left transition-all hover:shadow-md group">
                <span className="material-symbols-outlined text-primary mb-2 block group-hover:scale-110 transition-transform">description</span>
                <p className="font-label-md text-label-md text-on-surface">Explain my scan result</p>
              </button>
            </div>
            {/* Input Field */}
            <div className="relative group">
              <input className="w-full pl-6 pr-16 py-5 rounded-2xl glass-input focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-body-md text-body-md shadow-xl shadow-primary/5" placeholder="Ask anything about your PCOS health..." type="text"/>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
