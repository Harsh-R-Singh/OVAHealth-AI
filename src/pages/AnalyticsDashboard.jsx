import { Link } from 'react-router-dom';

export default function AnalyticsDashboard() {
  return (
    <div className="flex flex-1 max-w-container-max mx-auto w-full min-h-screen bg-mesh overflow-x-hidden">
      {/* NavigationDrawer */}
      <aside className="fixed left-0 top-0 h-full z-40 py-6 bg-surface-container-low/90 dark:bg-surface-container-highest/90 backdrop-blur-md w-64 rounded-r-xl border-r border-white/20 shadow-xl shadow-primary/5 transition-all duration-300 ease-in-out hidden md:flex flex-col">
        <div className="px-6 mb-10">
          <h1 className="font-headline-sm text-headline-sm font-bold text-primary">PCOS Detect AI</h1>
          <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">Health Dashboard</p>
        </div>
        <nav className="flex-1 space-y-1">
          {/* Dashboard Active */}
          <div className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-xl mx-2 my-1 transition-all duration-300 cursor-pointer">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </div>
          <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant/50 rounded-xl mx-2 my-1 transition-colors" to="/history">
            <span className="material-symbols-outlined">history</span>
            <span className="font-label-md text-label-md">Scan History</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant/50 rounded-xl mx-2 my-1 transition-colors" to="/medical-assistant">
            <span className="material-symbols-outlined">psychology</span>
            <span className="font-label-md text-label-md">AI Insights</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant/50 rounded-xl mx-2 my-1 transition-colors" to="#">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-md text-label-md">Patient Profile</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant/50 rounded-xl mx-2 my-1 transition-colors" to="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </Link>
        </nav>
        <div className="px-4 mt-auto">
          <div className="flex items-center gap-3 p-3 bg-surface-container rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              JD
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface">Jane Doe</p>
              <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">Premium Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-64 min-h-screen flex flex-col w-full">
        {/* TopAppBar */}
        <header className="sticky top-0 w-full z-50 flex items-center justify-between px-margin-desktop py-4 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-white/40 dark:border-outline-variant/20 shadow-sm shadow-primary/5">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">clinical_notes</span>
            <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">Dashboard Analytics</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-primary/5 transition-all text-on-surface-variant">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <Link to="/upload" className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-md text-label-md hover:shadow-lg transition-all active:scale-95">
              Start New Scan
            </Link>
          </div>
        </header>

        {/* Page Canvas */}
        <div className="p-margin-desktop w-full space-y-gutter">
          {/* Bento Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Total Scans */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <span className="material-symbols-outlined">biotech</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <div className="mt-6">
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Total Scans</p>
                <h2 className="text-[40px] font-extrabold text-on-surface leading-tight mt-1">1,284</h2>
              </div>
              <div className="mt-4 w-full bg-surface-container rounded-full h-1">
                <div className="bg-primary h-1 rounded-full w-[70%]"></div>
              </div>
            </div>

            {/* Positive Detections */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <span className="material-symbols-outlined">query_stats</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded-full">Steady</span>
              </div>
              <div className="mt-6">
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Positive Detections</p>
                <h2 className="text-[40px] font-extrabold text-on-surface leading-tight mt-1">342</h2>
              </div>
              <p className="text-xs text-on-surface-variant mt-4">26.6% of total population analyzed</p>
            </div>

            {/* Average Confidence */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-tertiary-fixed-dim/30 rounded-xl text-tertiary">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+2.4%</span>
              </div>
              <div className="mt-6">
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Avg. Confidence</p>
                <h2 className="text-[40px] font-extrabold text-on-surface leading-tight mt-1">98.4%</h2>
              </div>
              <div className="flex gap-1 mt-4">
                <div className="h-2 w-full bg-primary rounded-full"></div>
                <div className="h-2 w-full bg-primary rounded-full"></div>
                <div className="h-2 w-full bg-primary rounded-full"></div>
                <div className="h-2 w-full bg-primary rounded-full"></div>
                <div className="h-2 w-3/4 bg-primary/20 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Analytics Visualization */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {/* Scan Trends Line Chart */}
            <div className="glass-card p-8 rounded-2xl shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Monthly Scan Trends</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Growth over the last 6 months</p>
                </div>
                <select className="bg-surface-container-low border-none rounded-full font-label-sm text-label-sm px-4 focus:ring-primary/20">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="aspect-[16/9] w-full flex items-end justify-between gap-2 px-2">
                <div className="w-full bg-primary-fixed/20 rounded-t-lg h-[40%] relative group">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-[10px] hidden group-hover:block">140</span>
                </div>
                <div className="w-full bg-primary-fixed/30 rounded-t-lg h-[55%] relative group">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-[10px] hidden group-hover:block">190</span>
                </div>
                <div className="w-full bg-primary-fixed/40 rounded-t-lg h-[45%] relative group">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-[10px] hidden group-hover:block">165</span>
                </div>
                <div className="w-full bg-primary-fixed/50 rounded-t-lg h-[75%] relative group">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-[10px] hidden group-hover:block">260</span>
                </div>
                <div className="w-full bg-primary-fixed/60 rounded-t-lg h-[65%] relative group">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-[10px] hidden group-hover:block">210</span>
                </div>
                <div className="w-full bg-primary rounded-t-lg h-[90%] relative group">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-[10px]">320</span>
                </div>
              </div>
              <div className="flex justify-between mt-4 font-label-sm text-on-surface-variant text-[12px]">
                <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
              </div>
            </div>

            {/* Distribution Pie Chart */}
            <div className="glass-card p-8 rounded-2xl shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Results Distribution</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-10">Comparative analysis of detection results</p>
              <div className="flex items-center gap-12">
                <div className="relative w-48 h-48 rounded-full border-[16px] border-primary-container flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[16px] border-secondary border-t-transparent border-l-transparent border-b-transparent transform rotate-[45deg]"></div>
                  <div className="text-center">
                    <p className="text-[28px] font-bold text-on-surface leading-none">1,284</p>
                    <p className="text-[10px] uppercase text-on-surface-variant tracking-tighter">Total</p>
                  </div>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary-container"></div>
                      <span className="font-label-md text-label-md text-on-surface-variant">Negative</span>
                    </div>
                    <span className="font-bold text-on-surface">73.4%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <span className="font-label-md text-label-md text-on-surface-variant">Positive</span>
                    </div>
                    <span className="font-bold text-on-surface">26.6%</span>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30 mt-4">
                    <p className="text-[11px] text-on-surface-variant italic leading-snug">The AI model has shown a 0.2% decrease in false-positive rates this month.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Activity Feed */}
          <section className="glass-card rounded-2xl shadow-sm overflow-hidden">
            <div className="p-8 border-b border-outline-variant/30 flex justify-between items-center">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Scan Activity</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Real-time processing updates</p>
              </div>
              <Link to="/history" className="text-primary font-label-md text-label-md hover:underline underline-offset-4">View All History</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    <th className="px-8 py-4">Scan ID</th>
                    <th className="px-8 py-4">Timestamp</th>
                    <th className="px-8 py-4">Result</th>
                    <th className="px-8 py-4">Confidence</th>
                    <th className="px-8 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-8 py-6 font-medium text-primary">#PCOS-9421</td>
                    <td className="px-8 py-6 text-on-surface-variant">Today, 10:45 AM</td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Negative</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[99%]"></div>
                        </div>
                        <span className="font-label-sm text-label-sm">99.2%</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <Link to="/analysis-result" className="p-2 text-on-surface-variant hover:text-primary transition-colors inline-block">
                        <span className="material-symbols-outlined">visibility</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-8 py-6 font-medium text-primary">#PCOS-9420</td>
                    <td className="px-8 py-6 text-on-surface-variant">Today, 09:12 AM</td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-bold">Positive</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[97%]"></div>
                        </div>
                        <span className="font-label-sm text-label-sm">97.8%</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <Link to="/analysis-result" className="p-2 text-on-surface-variant hover:text-primary transition-colors inline-block">
                        <span className="material-symbols-outlined">visibility</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-8 py-6 font-medium text-primary">#PCOS-9419</td>
                    <td className="px-8 py-6 text-on-surface-variant">Yesterday, 11:30 PM</td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Negative</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[98%]"></div>
                        </div>
                        <span className="font-label-sm text-label-sm">98.5%</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <Link to="/analysis-result" className="p-2 text-on-surface-variant hover:text-primary transition-colors inline-block">
                        <span className="material-symbols-outlined">visibility</span>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      {/* Contextual FAB (Only on Dashboard) */}
      <Link to="/upload" className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-[32px]">add_a_photo</span>
      </Link>
    </div>
  );
}
