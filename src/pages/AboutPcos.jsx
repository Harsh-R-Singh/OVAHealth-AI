import { Link } from 'react-router-dom';

export default function AboutPcos() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 mesh-gradient min-h-screen">
      {/* Hero / What is PCOS? */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center mb-24">
        <div className="space-y-6">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">Understanding Health</span>
          <h1 className="font-display-lg text-display-lg leading-tight">What is PCOS?</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting reproductive-aged women. It is characterized by irregular menstrual cycles, excess androgen levels, and often, small collections of fluid (follicles) in the ovaries.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="glass-card p-4 rounded-2xl border-outline-variant/30 flex items-center gap-3 shadow-sm">
              <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>emergency_home</span>
              <span className="font-label-md text-label-md text-on-surface">1 in 10 Women</span>
            </div>
            <div className="glass-card p-4 rounded-2xl border-outline-variant/30 flex items-center gap-3 shadow-sm">
              <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>monitoring</span>
              <span className="font-label-md text-label-md text-on-surface">Manageable Conditions</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
          <img alt="Medical Professional Illustration" className="w-full h-[400px] object-cover rounded-2xl shadow-xl border border-white/40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRHSHhPzv24E-c4OkoortYUlktcfhvk8EJnlJklFk281CEljAZ0INozFurwJdf2gY2DlDkQeMHdX_culfH_WPObFAiEZIYFDnpgNXyDc4dohmlQX1iUh3AgoKyO04lP75AoEAv1vZg2lVdJiaboW98ioG64IKIaqAeM86tv5EvPI44IQdMmnp-RfKDd4rcmY-beUgP_7zDoSXHNqM8Y_gu7enEH-Bh7WWRlPOQhNupJmga1pqIGSh0ZBuHAvy3OK5RCAYazs5bdXKH"/>
        </div>
      </section>

      {/* Symptoms Bento Grid */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-headline-md mb-2">Common Symptoms</h2>
          <p className="text-on-surface-variant">Symptoms vary significantly between individuals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 shadow-sm col-span-1 md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">calendar_today</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-4">Irregular Periods</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">Infrequent, irregular or prolonged menstrual cycles are the most common sign of PCOS. For example, you might have fewer than nine periods a year, or more than 35 days between periods.</p>
            </div>
            <div className="mt-8 bg-surface-container p-4 rounded-xl">
              <span className="text-primary font-label-sm text-label-sm">KEY INDICATOR</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 shadow-sm">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">face_6</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-4">Excess Androgen</h3>
            <p className="text-on-surface-variant font-body-md text-body-md">Elevated levels of male hormones may result in physical signs, such as excess facial and body hair (hirsutism).</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 shadow-sm">
            <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary">biotech</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-4">Polycystic Ovaries</h3>
            <p className="text-on-surface-variant font-body-md text-body-md">Your ovaries might be enlarged and contain follicles that surround the eggs. As a result, the ovaries might fail to function regularly.</p>
          </div>
          <div className="bg-primary p-8 rounded-2xl col-span-1 md:col-span-2 text-on-primary relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-headline-sm text-headline-sm mb-4">Metabolic Changes</h3>
              <p className="opacity-90 font-body-md text-body-md mb-6">Many women with PCOS have insulin resistance, which can lead to weight gain, skin changes (darkening in creases), and increased fatigue.</p>
              <button className="bg-white text-primary px-6 py-2 rounded-full font-label-md text-label-md hover:bg-opacity-90 transition-all">Learn More</button>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
              <span className="material-symbols-outlined text-[180px]">health_and_safety</span>
            </div>
          </div>
        </div>
      </section>

      {/* Causes & Risks Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div className="space-y-8">
          <h2 className="font-headline-md text-headline-md">Root Causes</h2>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 glass-card rounded-2xl border border-outline-variant/20">
              <div className="flex-shrink-0"><span className="material-symbols-outlined text-primary">genetics</span></div>
              <div>
                <h4 className="font-bold mb-1">Genetics</h4>
                <p className="text-sm text-on-surface-variant">Research suggests that certain genes might be linked to PCOS.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 glass-card rounded-2xl border border-outline-variant/20">
              <div className="flex-shrink-0"><span className="material-symbols-outlined text-secondary">blood_pressure</span></div>
              <div>
                <h4 className="font-bold mb-1">Insulin Resistance</h4>
                <p className="text-sm text-on-surface-variant">The body's cells don't respond normally to insulin, causing blood sugar levels to rise.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 glass-card rounded-2xl border border-outline-variant/20">
              <div className="flex-shrink-0"><span className="material-symbols-outlined text-tertiary">coronavirus</span></div>
              <div>
                <h4 className="font-bold mb-1">Inflammation</h4>
                <p className="text-sm text-on-surface-variant">Low-grade inflammation that stimulates polycystic ovaries to produce androgens.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-high p-12 rounded-2xl border border-outline-variant/20">
          <h2 className="font-headline-md text-headline-md mb-8">Potential Risks</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-error"></span>
              <span className="font-body-md text-body-md">Infertility or Pregnancy complications</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-error"></span>
              <span className="font-body-md text-body-md">Type 2 Diabetes or Prediabetes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-error"></span>
              <span className="font-body-md text-body-md">Sleep Apnea</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-error"></span>
              <span className="font-body-md text-body-md">Depression and Anxiety</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-error"></span>
              <span className="font-body-md text-body-md">Non-alcoholic steatohepatitis</span>
            </li>
          </ul>
          <div className="mt-12 p-6 bg-error/5 border border-error/10 rounded-xl">
            <p className="text-error font-label-md text-label-md leading-relaxed italic">
                "Early diagnosis and treatment along with weight loss may reduce the risk of long-term complications."
            </p>
          </div>
        </div>
      </section>

      {/* Visual Timeline for Management */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md mb-2">Lifestyle Management Timeline</h2>
          <p className="text-on-surface-variant">Small steps lead to sustainable long-term health improvements.</p>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-fixed hidden md:block"></div>
          <div className="space-y-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
              <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                <h4 className="font-bold text-primary mb-2">Month 1: Foundation</h4>
                <p className="text-sm text-on-surface-variant">Focus on sleep hygiene and gentle 15-minute walks. Begin tracking symptoms and cycle regularities.</p>
              </div>
              <div className="relative z-10 w-12 h-12 bg-primary rounded-full border-4 border-surface flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">01</span>
              </div>
              <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
              <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
              <div className="relative z-10 w-12 h-12 bg-secondary rounded-full border-4 border-surface flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">02</span>
              </div>
              <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                <h4 className="font-bold text-secondary mb-2">Month 3: Nutrition Shift</h4>
                <p className="text-sm text-on-surface-variant">Incorporate anti-inflammatory foods and focus on low-glycemic index meals to manage insulin levels.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
              <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                <h4 className="font-bold text-tertiary mb-2">Month 6: Consistency</h4>
                <p className="text-sm text-on-surface-variant">Regular strength training (2-3 times a week) and stress management techniques like meditation or yoga.</p>
              </div>
              <div className="relative z-10 w-12 h-12 bg-tertiary rounded-full border-4 border-surface flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">03</span>
              </div>
              <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
              <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
              <div className="relative z-10 w-12 h-12 bg-on-surface rounded-full border-4 border-surface flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">04</span>
              </div>
              <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                <h4 className="font-bold text-on-surface mb-2">Year 1+: Maintenance</h4>
                <p className="text-sm text-on-surface-variant">Review clinical markers with your provider. Adjust lifestyle based on how your body has responded.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention & Tips */}
      <section className="mb-24">
        <div className="glass-card rounded-[32px] overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 flex flex-col justify-center">
            <h2 className="font-headline-md text-headline-md mb-6">Prevention &amp; Daily Care</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary text-sm">check_circle</span></div>
                <p className="text-body-md font-body-md">Maintain a healthy weight through active movement.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary text-sm">check_circle</span></div>
                <p className="text-body-md font-body-md">Limit carbohydrates and sugars to balance insulin.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary text-sm">check_circle</span></div>
                <p className="text-body-md font-body-md">Be active - aim for at least 150 minutes of exercise per week.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary text-sm">check_circle</span></div>
                <p className="text-body-md font-body-md">Schedule regular checkups with your gynecologist.</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded-2xl font-bold hover:shadow-lg transition-all">Download Health Guide</button>
            </div>
          </div>
          <div className="bg-primary/5 p-8 flex items-center justify-center">
            <img alt="Healthy Lifestyle Illustration" className="rounded-2xl shadow-lg w-full h-full object-cover max-h-[500px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp9XQ_Hjk6n4GTy0vfPAOrtezBkCEuenfybgY_QDFeifQiaAuNiDKFkCErSxMQ2VJRV-e_kq3TTFevi_rcxzQO_oT1rm5lJybp8jZNq4Tfy59w11rcyrBbRgxo-AMjU1rgXqE3sCg2mDhnIGft2D948VAfj8htXz2yA4YR4S1fKKhXkL_9zHPa4EBs7sk5SE5oQfrbVntyLaKiAeJEhik__7_DibBqQ-ROY7rGdB39vAmamAZDI1IBbvyWRLM2JEfv7YXiVY4-1DVa"/>
          </div>
        </div>
      </section>
    </main>
  );
}
