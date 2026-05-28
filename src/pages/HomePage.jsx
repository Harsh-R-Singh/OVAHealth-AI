import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary-fixed px-4 py-1.5 rounded-full text-on-primary-fixed">
            <span className="material-symbols-outlined text-sm" data-icon="auto_awesome" data-weight="fill">auto_awesome</span>
            <span className="font-label-sm text-label-sm">FDA Cleared Diagnostic Assistant</span>
          </div>
          <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">
            AI-Powered PMOS (PCOS) Detection Using <span className="text-primary">Ultrasound Imaging</span>
          </h1>
    
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Harness clinical-grade deep learning to identify PMOS (PCOS)Polycystic Ovary Syndrome markers in seconds. High-precision analysis with explainable AI visualizations for healthcare professionals.
          </p>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            PCOS is now changed into PMOS (Polyendocrine Metabolic Ovarian Syndrome)
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/upload" className="flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-2xl font-label-md text-label-md hover:shadow-xl hover:shadow-primary/30 transition-all">
              <span className="material-symbols-outlined" data-icon="upload_file">upload_file</span>
              Upload Scan
            </Link>
            <Link to="/medical-assistant" className="flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-2xl font-label-md text-label-md hover:bg-secondary-fixed/80 transition-all border border-secondary/10">
              <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
              Try AI Assistant
            </Link>
          </div>
          <div className="flex items-center gap-4 py-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">JS</div>
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-secondary-fixed flex items-center justify-center text-secondary font-bold text-xs">RK</div>
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold text-xs">ML</div>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Trusted by 500+ clinics worldwide</span>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rounded-[2.5rem] p-4 overflow-hidden shadow-2xl">
            <img alt="Ultrasound Analysis Interface" className="rounded-[2rem] w-full" data-alt="A futuristic medical user interface displaying a 3D ultrasound scan of an ovary on a sleek glass tablet. The screen features translucent medical data overlays, glowing purple heatmaps indicating follicle detection, and clean white typography. The setting is a brightly lit, sterile clinical environment with soft, ambient purple and blue lighting casting a professional, high-tech glow across the device." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPqlP52gnf2I84fMV_2UjKIOGyHHPBAESWNqOz6X0yetnCtRfYFisiqXvOWKoT_51gmWg9nYWD6p0jOQPNh0pSZ80f1gwtLVGES2Dz_FhrMYKISsUStjenmXTuYIaD9XXsbNapJ71BB-oI4A8rhdyxb1RAQJbCgb_7SLNveS7fLd1PWuyCO4NO98ZUoJRg1V0lMZ-fYZilKOEqSe5IVFzgMDYSqnOPgvUkO9On_zqKZ4B4REMNv65flAciYh2BkreMLKq0R2vBkc4n"/>
            <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl max-w-xs space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md">Diagnosis Confidence</span>
                <span className="text-primary font-bold">98.4%</span>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="liquid-progress h-full w-[98%]"></div>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Model Version: v4.2 Medical Stable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          <div className="space-y-2">
            <div className="text-primary font-display-lg text-4xl font-extrabold">99.2%</div>
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Sensitivity</div>
          </div>
          <div className="space-y-2">
            <div className="text-secondary font-display-lg text-4xl font-extrabold">12s</div>
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Analysis Time</div>
          </div>
          <div className="space-y-2">
            <div className="text-tertiary font-display-lg text-4xl font-extrabold">50k+</div>
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Scans Processed</div>
          </div>
          <div className="space-y-2">
            <div className="text-primary font-display-lg text-4xl font-extrabold">HIPAA</div>
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Compliant Security</div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-md text-headline-md md:text-display-lg-mobile text-on-surface">Integrated AI Diagnostic Suite</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Advanced tools designed to augment clinical decision-making with explainable insights.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* AI Diagnosis */}
          <div className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between group hover:border-primary/30 transition-all">
            <div>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined" data-icon="biotech">biotech</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-4">Explainable AI Diagnosis</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Our deep learning models go beyond binary results, providing detailed architectural analysis of follicles and stromal density to support clinical findings.</p>
            </div>
            <div className="mt-8 overflow-hidden rounded-xl bg-surface">
              <img alt="Data Visualization" className="w-full h-48 object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOJ1lsAduO8MyvwUxDdSitF3iAMDys3Zw68eO9jxOPd7y3inJWlfUT-mJHZEtLT2wGTd7kxyLWbVHWlv9X-XpkLu-i4T62cuGpAwjahsMN6OnTIFBPdl_bFb_zzdXofncfz2ca11aGyCP7agvZfFGf9kMmDn5p6iJeRuS9hCDi3BNSG6gfv8Vxw6ZClD29iD9xww60Qqx_OU7W7FGSdOPRSP7zoRt3TBMG6FK6Xle34l872c68SsQEgToHpc3lfrk3lseVKmp_dJyJ"/>
            </div>
          </div>
          {/* Ultrasound Analysis */}
          <div className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined" data-icon="monitor_heart">monitor_heart</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-4">Ultrasound Analysis</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Real-time image enhancement and follicle counting for standard transvaginal and pelvic ultrasound modalities.</p>
          </div>
          {/* GradCAM */}
          <div className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all">
            <div className="w-12 h-12 bg-tertiary/10 text-tertiary rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-4">GradCAM Visuals</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Identify exactly where the AI is looking with heatmap overlays that highlight critical morphological regions.</p>
          </div>
          {/* Patient Report */}
          <div className="md:col-span-2 glass-card rounded-2xl p-8 flex items-center gap-8 hover:border-primary/30 transition-all">
            <div className="flex-1">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined" data-icon="description">description</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-4">Automated Reports</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Generate comprehensive, HIPAA-compliant patient reports including analysis summaries, detected markers, and follow-up suggestions in PDF format instantly.</p>
            </div>
            <div className="hidden sm:block w-1/3 bg-white/50 p-4 rounded-xl border border-outline-variant/20 shadow-inner">
              <div className="h-4 bg-surface-container rounded mb-2 w-3/4"></div>
              <div className="h-4 bg-surface-container rounded mb-2 w-full"></div>
              <div className="h-4 bg-surface-container rounded mb-4 w-1/2"></div>
              <div className="h-20 bg-primary-fixed/30 rounded"></div>
            </div>
          </div>
          {/* GenAI Recs */}
          <div className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-4">GenAI Recommendations</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Personalized lifestyle and clinical pathways based on the latest endocrinology research papers and guidelines.</p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-surface-container-low rounded-[3rem] px-12 border border-white/60">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-on-surface">Seamless Clinical Workflow</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-outline-variant/10 text-primary font-bold text-xl">1</div>
            <h4 className="font-headline-sm text-headline-sm text-sm">Upload Scan</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">DICOM or standard image upload to secure server.</p>
          </div>
          <div className="text-center space-y-4 relative">
            <div className="hidden md:block absolute top-8 left-[-50%] w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-outline-variant/10 text-primary font-bold text-xl">2</div>
            <h4 className="font-headline-sm text-headline-sm text-sm">AI Analysis</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Neural network scans for 12+ diagnostic PCOS markers.</p>
          </div>
          <div className="text-center space-y-4 relative">
            <div className="hidden md:block absolute top-8 left-[-50%] w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-outline-variant/10 text-primary font-bold text-xl">3</div>
            <h4 className="font-headline-sm text-headline-sm text-sm">Review Visuals</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Verify AI findings using GradCAM heatmap overlays.</p>
          </div>
          <div className="text-center space-y-4 relative">
            <div className="hidden md:block absolute top-8 left-[-50%] w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-outline-variant/10 text-primary font-bold text-xl">4</div>
            <h4 className="font-headline-sm text-headline-sm text-sm">Finalize Report</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Export HIPAA-compliant report for the patient.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Designed with Specialists</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Developed in collaboration with leading endocrinologists and radiologists to ensure clinical relevance and diagnostic accuracy.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-primary">
              <p className="font-body-md text-body-md italic text-on-surface-variant mb-6">"PCOSense has reduced our diagnostic triage time by 60%. The explainability of the GradCAM feature is a game-changer for radiologist trust."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container"></div>
                <div>
                  <div className="font-label-md text-label-md font-bold">Dr. Sarah Chen</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">Chief of Endocrinology, MVH</div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-secondary">
              <p className="font-body-md text-body-md italic text-on-surface-variant mb-6">"The automated reporting is seamless. It allows us to spend more time with patients explaining results rather than typing data."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container"></div>
                <div>
                  <div className="font-label-md text-label-md font-bold">Dr. Marcus Thorne</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">Radiology Director, Apex Health</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
