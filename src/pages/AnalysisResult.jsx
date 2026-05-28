import { Link } from 'react-router-dom';

export default function AnalysisResult() {
  return (
    <main className="max-w-container-max mx-auto px-margin-desktop py-8 md:flex gap-gutter min-h-screen">
      {/* NavigationDrawer (Desktop Only) */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 h-[calc(100vh-100px)] sticky top-24 bg-surface-container-low/90 backdrop-blur-md rounded-r-xl border-r border-white/20 p-4">
        <div className="flex items-center gap-4 mb-8 px-2">
          <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">person</span>
          </div>
          <div>
            <p className="font-headline-sm text-[16px] font-bold text-primary">Health Dashboard</p>
            <p className="font-label-sm text-on-surface-variant">PCOS Analysis Portal</p>
          </div>
        </div>
        <div className="space-y-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-primary/10 rounded-xl transition-colors cursor-pointer">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md">Dashboard</span>
          </Link>
          <Link to="/history" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-primary/10 rounded-xl transition-colors cursor-pointer">
            <span className="material-symbols-outlined">history</span>
            <span className="font-label-md">Scan History</span>
          </Link>
          <div className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-xl cursor-pointer">
            <span className="material-symbols-outlined">psychology</span>
            <span className="font-label-md">AI Insights</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-primary/10 rounded-xl transition-colors cursor-pointer">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-md">Patient Profile</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-primary/10 rounded-xl transition-colors cursor-pointer">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md">Settings</span>
          </div>
        </div>
      </aside>
      
      {/* Prediction Content Canvas */}
      <div className="flex-1 space-y-6">
        {/* Status Header */}
        <section className="glass-panel p-8 rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm shadow-primary/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant mb-4">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="font-label-sm">ANALYSIS COMPLETE</span>
            </div>
            <h2 className="font-display-lg text-display-lg text-on-surface mb-2">PCOS Detected</h2>
            <p className="font-body-lg text-on-surface-variant max-w-xl">Our neural network identified characteristic follicle patterns consistent with Polycystic Ovary Syndrome.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 border border-outline-variant text-primary px-6 py-3 rounded-full font-label-md hover:bg-primary/5 transition-all">
              <span className="material-symbols-outlined">download</span>
              Download Report
            </button>
            <button className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-label-md hover:shadow-lg hover:shadow-primary/20 transition-all">
              Consult Specialist
            </button>
          </div>
        </section>

        {/* Main Analysis Grid (Bento Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Visual Comparison (GradCAM) */}
          <div className="lg:col-span-8 glass-panel p-6 rounded-[24px] shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline-sm text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">visibility</span>
                Neural Visualization
              </h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm">Original</span>
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm">GradCAM Heatmap</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group cursor-zoom-in">
                <img alt="Raw scan" className="w-full h-80 object-cover rounded-xl border border-outline-variant/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7yQa7YpdsMuqH3JIT1BXlxpiddzmf6_6ZpNqZ90sFdF2A8Nv7iLAONrUS5EQ18cZ3yMG-b18MR7w5I_LP6-iFH8rjK0KMtLf0gPK-T2zMHSu6NsS5Mo5ZyPW7LKLu3UdS3JD4XstuYKI26bJcjxHtxv67t2_iWGH2ZniyVPxjj3NpBq_OCJPaQRABWejlyAc3tNTNPrDhSQ1gHakctqm5jTkybwQXrhU3d-lUUVq79XQ7j0S-NPJIqJiwuePZ0mAWvMYPkRLj5cG-"/>
                <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded">SCAN_0942_RAW</div>
              </div>
              <div className="relative group cursor-zoom-in">
                <img alt="Heatmap" className="w-full h-80 object-cover rounded-xl border border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9jGxisZKEg3dWW4GUEKqC07G14JxJiouEukUKHzd7IJktF1tg6t5PTPMRHyOrJONQwHgi-PmjTrQg5W5Q2Si4Xtz7XRGzqQUHyrtd0BdM5yJhclmDm9EpY1CTXV2C3afX2GfxVMKtTx0wTP9eUwygnfnyD6C0nbHvFq_M4Pmpl7z4VJXHqQepO3ySRjw0YKbpthFLfAS95cTFp_if7RbmXIqgPe82V0I01BF6wgesHpAPEsndhib3_iFRQhmeELnsJVqDpekOkbPV"/>
                <div className="absolute bottom-3 left-3 bg-primary/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded">AI_ATTENTION_MAP</div>
              </div>
            </div>
            <p className="mt-6 font-body-md text-on-surface-variant italic">
              *The AI attention map highlights localized follicle clusters (marked in red) that significantly contributed to the PCOS classification.
            </p>
          </div>

          {/* Core Metrics */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Confidence Score */}
            <div className="glass-panel p-6 rounded-[24px] flex flex-col items-center justify-center text-center shadow-sm">
              <p className="font-label-md text-on-surface-variant mb-6 uppercase tracking-wider">AI Confidence Score</p>
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container-high" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="12"></circle>
                  <circle className="text-primary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="44" strokeLinecap="round" strokeWidth="12"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display-lg text-[40px] text-primary">94%</span>
                  <span className="font-label-sm text-on-surface-variant">Certainty</span>
                </div>
              </div>
            </div>

            {/* Risk Level */}
            <div className="glass-panel p-6 rounded-[24px] shadow-sm">
              <p className="font-label-md text-on-surface-variant mb-4 uppercase tracking-wider">Risk Level Indicator</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-body-md font-semibold text-on-surface">Category</span>
                  <span className="px-3 py-1 rounded-full bg-secondary-container/10 text-secondary font-bold text-label-sm">High Priority</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden flex">
                  <div className="h-full bg-tertiary-fixed-dim" style={{width: '30%'}}></div>
                  <div className="h-full bg-secondary-fixed-dim" style={{width: '30%'}}></div>
                  <div className="h-full bg-secondary" style={{width: '40%'}}></div>
                </div>
                <p className="font-label-sm text-on-surface-variant">Elevated follicle count detected in both ovaries. Recommend immediate clinical review.</p>
              </div>
            </div>
          </div>

          {/* AI Insights Chatbot-style Card */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-[24px] shadow-sm">
            <h3 className="font-headline-sm text-on-surface flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">psychology</span>
              AI Medical Explanation
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">smart_toy</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-2xl rounded-tl-none border border-outline-variant/20">
                  <p className="font-body-md text-on-surface">
                    Based on the processed ultrasound images, I've identified more than 12 follicles in each ovary, ranging between 2-9mm in diameter. This pattern, coupled with an increased ovarian volume (&gt;10ml), is a strong indicator of Polycystic Ovarian Morphology (PCOM).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">smart_toy</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-2xl rounded-tl-none border border-outline-variant/20">
                  <p className="font-body-md text-on-surface">
                    The GradCAM heatmap confirms that the neural network is specifically focusing on the peripheral distribution of these follicles, often referred to as the "string of pearls" sign.
                  </p>
                </div>
              </div>
              <div className="pl-14 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg border border-primary/20 text-primary text-label-sm cursor-pointer hover:bg-primary/5">What are my next steps?</span>
                <span className="px-3 py-1 rounded-lg border border-primary/20 text-primary text-label-sm cursor-pointer hover:bg-primary/5">Show similar cases</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-[24px] shadow-sm">
            <h3 className="font-headline-sm text-on-surface flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-secondary">clinical_notes</span>
              Recommended Actions
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-variant transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/30">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0 text-tertiary">
                  <span className="material-symbols-outlined">lab_panel</span>
                </div>
                <div>
                  <h4 className="font-body-md font-bold text-on-surface">Blood Work Panel</h4>
                  <p className="font-label-sm text-on-surface-variant">Recommended: Testosterone, LH/FSH ratio, and Insulin levels.</p>
                </div>
                <span className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-variant transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/30">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 text-secondary">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
                <div>
                  <h4 className="font-body-md font-bold text-on-surface">Endocrinologist Visit</h4>
                  <p className="font-label-sm text-on-surface-variant">Schedule a formal consultation to discuss these AI findings.</p>
                </div>
                <span className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-variant transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/30">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined">nutrition</span>
                </div>
                <div>
                  <h4 className="font-body-md font-bold text-on-surface">Lifestyle Assessment</h4>
                  <p className="font-label-sm text-on-surface-variant">Explore low-glycemic dietary options and exercise routines.</p>
                </div>
                <span className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
