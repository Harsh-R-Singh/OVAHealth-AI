import { Link } from 'react-router-dom';

export default function ScanHistory() {
  return (
    <div className="bg-background text-on-surface font-body-md mesh-gradient min-h-screen flex flex-col">
      <div className="flex flex-1 max-w-container-max mx-auto w-full">
        {/* NavigationDrawer (Sidebar) */}
        <aside className="hidden lg:flex fixed left-0 top-0 h-full z-40 py-6 flex-col bg-surface-container-low/90 dark:bg-surface-container-highest/90 backdrop-blur-md border-r border-white/20 w-64 shadow-xl shadow-primary/5 pt-24">
          <div className="px-6 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden">
              <img alt="Patient Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrr5l01dEWqrmm_JMjzWda6CLUCZiAmjLF4ijKE0Vh-TnWQ-UezcNJ-EowuICZne3DWxDdY6-1lfpD-FAnQXnepFkfvZmpEZB90FCT8ZlaeRrOb7RYfXz2SI1VriG_Zp7BNPpg4gABhmcG6dNAv24X2QNUpe9P5xMOmAeoBKI5pNlzkoZrl_iOUBQ7iDVQG7-HytjVanj45fh5EJn3pCd7TsLr3fs1ZaqG5snAmvekM7EvoACo-l8b4yTzT9xHgt847NX_NPbTlb9m"/>
            </div>
            <div>
              <p className="font-label-md text-label-md font-bold text-primary">Health Dashboard</p>
              <p className="text-[10px] text-on-surface-variant">PCOS Analysis Portal</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="flex items-center gap-3 px-4 py-3 mx-2 my-1 text-on-surface-variant hover:bg-surface-variant/50 rounded-xl transition-all" to="/dashboard">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-md text-label-md">Dashboard</span>
            </Link>
            <div className="flex items-center gap-3 px-4 py-3 mx-2 my-1 bg-primary-container text-on-primary-container rounded-xl transition-all cursor-pointer">
              <span className="material-symbols-outlined">history</span>
              <span className="font-label-md text-label-md">Scan History</span>
            </div>
            <Link className="flex items-center gap-3 px-4 py-3 mx-2 my-1 text-on-surface-variant hover:bg-surface-variant/50 rounded-xl transition-all" to="/medical-assistant">
              <span className="material-symbols-outlined">psychology</span>
              <span className="font-label-md text-label-md">AI Insights</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 mx-2 my-1 text-on-surface-variant hover:bg-surface-variant/50 rounded-xl transition-all" to="#">
              <span className="material-symbols-outlined">person</span>
              <span className="font-label-md text-label-md">Patient Profile</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 mx-2 my-1 text-on-surface-variant hover:bg-surface-variant/50 rounded-xl transition-all" to="#">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-label-md text-label-md">Settings</span>
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 px-margin-mobile md:px-margin-desktop lg:ml-64 py-8 max-w-5xl mx-auto w-full">
          {/* Page Header */}
          <div className="mb-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Scan History</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Review and manage your ultrasound analysis records.</p>
          </div>

          {/* Search & Filters */}
          <section className="glass-card rounded-2xl p-6 mb-8 flex flex-col md:flex-row gap-4 items-end shadow-sm">
            <div className="flex-1 w-full">
              <label className="block font-label-sm text-label-sm text-outline mb-2">Search Scans</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input className="w-full bg-surface-container-low border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 transition-all font-body-md" placeholder="Search by result or date..." type="text"/>
              </div>
            </div>
            <div className="w-full md:w-48">
              <label className="block font-label-sm text-label-sm text-outline mb-2">Result</label>
              <select className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 transition-all font-label-md">
                <option>All Results</option>
                <option>Positive</option>
                <option>Negative</option>
                <option>Inconclusive</option>
              </select>
            </div>
            <div className="w-full md:w-48">
              <label className="block font-label-sm text-label-sm text-outline mb-2">Min. Confidence</label>
              <select className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 transition-all font-label-md">
                <option>Any %</option>
                <option>90% +</option>
                <option>80% +</option>
                <option>70% +</option>
              </select>
            </div>
            <button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full md:w-auto">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
              Apply
            </button>
          </section>

          {/* Records List (Expandable Cards) */}
          <div className="space-y-4">
            {/* Record 1 */}
            <div className="glass-card rounded-2xl overflow-hidden transition-all hover:shadow-lg border border-primary/10">
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">radiology</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Oct 24, 2023</h3>
                    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">ID: #SCAN-99210</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:flex items-center gap-4 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-outline mb-1">Result</span>
                    <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full font-label-sm text-label-sm w-fit">PCOS Positive</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-outline mb-1">Confidence</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">98.4%</span>
                      <div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden hidden sm:block">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{width: '98.4%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex-1 md:flex-none border border-outline-variant hover:bg-surface-variant/30 text-on-surface-variant px-5 py-2.5 rounded-xl font-label-md text-label-md transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    Details
                  </button>
                  <button className="flex-1 md:flex-none bg-primary-container text-on-primary-container px-5 py-2.5 rounded-xl font-label-md text-label-md transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Report
                  </button>
                </div>
              </div>
            </div>

            {/* Record 2 */}
            <div className="glass-card rounded-2xl overflow-hidden transition-all hover:shadow-lg border border-transparent">
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[28px]">radiology</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Aug 12, 2023</h3>
                    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">ID: #SCAN-88154</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:flex items-center gap-4 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-outline mb-1">Result</span>
                    <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm w-fit">Negative</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-outline mb-1">Confidence</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-tertiary">94.1%</span>
                      <div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden hidden sm:block">
                        <div className="h-full bg-tertiary" style={{width: '94.1%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex-1 md:flex-none border border-outline-variant hover:bg-surface-variant/30 text-on-surface-variant px-5 py-2.5 rounded-xl font-label-md text-label-md transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    Details
                  </button>
                  <button className="flex-1 md:flex-none bg-primary-container text-on-primary-container px-5 py-2.5 rounded-xl font-label-md text-label-md transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Report
                  </button>
                </div>
              </div>
            </div>

            {/* Record 3 (Expanded Style Preview) */}
            <div className="glass-card rounded-2xl overflow-hidden border-2 border-primary/20">
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-outline-variant/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">radiology</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">May 05, 2023</h3>
                    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">ID: #SCAN-77123</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:flex items-center gap-4 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-outline mb-1">Result</span>
                    <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full font-label-sm text-label-sm w-fit">PCOS Positive</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-outline mb-1">Confidence</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">87.5%</span>
                      <div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden hidden sm:block">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{width: '87.5%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex-1 md:flex-none bg-surface-variant/30 text-primary px-5 py-2.5 rounded-xl font-label-md text-label-md transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">expand_less</span>
                    Close
                  </button>
                  <button className="flex-1 md:flex-none bg-primary-container text-on-primary-container px-5 py-2.5 rounded-xl font-label-md text-label-md transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Report
                  </button>
                </div>
              </div>
              {/* Expanded Details Panel */}
              <div className="p-6 bg-primary/5 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="aspect-video rounded-xl bg-black/10 overflow-hidden relative border border-white/50">
                    <img alt="Ultrasound Analysis" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkDgLanC8msj-6bD7o_xYoes7r0eVi6VxtRYcGJr8bMpDOA1Bf96EcPLm_cnyY9wZoMXmADzlPFl05bxveCWe1_4jQwWtde6KglH7w-LG08hh8GXJf4Xyjb7_LQBLE96MQqLog3GMjmWMtUu27qJqwItH71a667I0dkm1mmqDvrhsH7VU0miQfDizSefc46P9--hHlYcBwQhZYkXz6Q50-JF9lPmqbtCxalzSbh-3O-5FoWe4EeCN5DglozMhZIJbDHF8M8rhJljGX"/>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white/50 text-4xl">play_circle</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col justify-between">
                  <div>
                    <h4 className="font-label-md text-label-md font-bold text-on-surface mb-2">AI Diagnostic Summary</h4>
                    <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
                      Multiple follicular cysts detected in both left and right ovaries. Volumetric analysis indicates a 15% increase from baseline. AI markers show classic PCOS morphology patterns with 87.5% confidence.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/60 px-3 py-1 rounded-lg border border-primary/10 text-label-sm font-label-sm text-primary">Follicle Count: 14</span>
                    <span className="bg-white/60 px-3 py-1 rounded-lg border border-primary/10 text-label-sm font-label-sm text-primary">Volume: 12.4 cm³</span>
                    <span className="bg-white/60 px-3 py-1 rounded-lg border border-primary/10 text-label-sm font-label-sm text-primary">Symmetry: Low</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Record 4 */}
            <div className="glass-card rounded-2xl overflow-hidden transition-all hover:shadow-lg border border-transparent">
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-variant/30 flex items-center justify-center text-outline">
                    <span className="material-symbols-outlined text-[28px]">radiology</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Jan 12, 2023</h3>
                    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">ID: #SCAN-66012</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:flex items-center gap-4 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-outline mb-1">Result</span>
                    <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm w-fit">Negative</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-outline mb-1">Confidence</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-outline">91.0%</span>
                      <div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden hidden sm:block">
                        <div className="h-full bg-outline" style={{width: '91.0%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex-1 md:flex-none border border-outline-variant hover:bg-surface-variant/30 text-on-surface-variant px-5 py-2.5 rounded-xl font-label-md text-label-md transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    Details
                  </button>
                  <button className="flex-1 md:flex-none bg-primary-container text-on-primary-container px-5 py-2.5 rounded-xl font-label-md text-label-md transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-between">
            <p className="text-label-sm font-label-sm text-outline">Showing 1-4 of 28 records</p>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:bg-surface-variant/50 transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md">1</button>
              <button className="w-10 h-10 rounded-full hover:bg-surface-variant/50 flex items-center justify-center font-label-md">2</button>
              <button className="w-10 h-10 rounded-full hover:bg-surface-variant/50 flex items-center justify-center font-label-md">3</button>
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:bg-surface-variant/50 transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
