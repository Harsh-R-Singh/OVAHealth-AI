import { Link } from 'react-router-dom';

export default function ContactSupport() {
  return (
    <div className="bg-mesh min-h-screen text-on-surface selection:bg-primary/20">
      <main className="max-w-container-max mx-auto px-margin-desktop py-12 md:py-20">
        {/* Hero Section */}
        <header className="max-w-3xl mb-16">
          <h1 className="font-display-lg text-display-lg mb-4 text-on-surface">How can we support your health journey?</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Our clinical support team and medical experts are here to help you navigate your PCOS analysis and technical inquiries with precision and care.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Contact & Emergency */}
          <div className="lg:col-span-7 space-y-gutter">
            {/* Emergency Help Section (High Contrast) */}
            <section className="bg-error-container/30 border border-error/10 p-8 rounded-2xl flex items-start gap-6">
              <div className="bg-error text-on-error w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">emergency</span>
              </div>
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-error-container mb-2">Emergency Help</h2>
                <p className="font-body-md text-body-md text-on-error-container/80 mb-4">If you are experiencing a medical emergency, please contact your local emergency services (911) or visit the nearest hospital immediately. PCOS Detect AI is a diagnostic aid, not an emergency service.</p>
                <div className="flex gap-4">
                  <span className="font-label-md text-label-md text-error font-bold">Crisis Hotline: 1-800-PCOS-HELP</span>
                </div>
              </div>
            </section>

            {/* Contact Form Card */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
              <h2 className="font-headline-md text-headline-md mb-8">Send a Secure Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant block">Full Name</label>
                    <input className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl p-3 outline-none transition-all" placeholder="Jane Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant block">Patient ID (Optional)</label>
                    <input className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl p-3 outline-none transition-all" placeholder="PC-XXXXXX" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant block">Subject</label>
                  <select className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl p-3 outline-none transition-all appearance-none">
                    <option>Technical Support</option>
                    <option>Result Interpretation Inquiry</option>
                    <option>Billing &amp; Subscription</option>
                    <option>Privacy &amp; Data Concerns</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant block">Message</label>
                  <textarea className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl p-3 outline-none transition-all" placeholder="Please describe your inquiry in detail..." rows="5"></textarea>
                </div>
                <button className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full w-full md:w-auto hover:bg-primary/90 transition-all shadow-lg shadow-primary/20" type="submit">
                  Send Secure Message
                </button>
              </form>
            </section>

            {/* FAQ Accordion */}
            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md mb-6">Frequently Asked Questions</h2>
              <div className="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden">
                <button className="w-full px-8 py-6 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                  <span className="font-label-md text-label-md font-bold text-on-surface text-left">How accurate are the AI insights?</span>
                  <span className="material-symbols-outlined text-primary group-focus:rotate-180 transition-transform">expand_more</span>
                </button>
                <div className="px-8 pb-6 text-on-surface-variant font-body-md text-body-md">
                  Our AI models are trained on clinically validated datasets with an accuracy rate of 94.2%. However, results should always be reviewed by a licensed healthcare professional for official diagnosis.
                </div>
              </div>
              <div className="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden">
                <button className="w-full px-8 py-6 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                  <span className="font-label-md text-label-md font-bold text-on-surface text-left">Is my medical data HIPAA compliant?</span>
                  <span className="material-symbols-outlined text-primary">expand_more</span>
                </button>
                <div className="hidden px-8 pb-6 text-on-surface-variant font-body-md text-body-md">
                  Yes, all data is encrypted end-to-end and stored in HIPAA-compliant cloud environments. We never share your health data with third-party advertisers.
                </div>
              </div>
              <div className="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden">
                <button className="w-full px-8 py-6 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                  <span className="font-label-md text-label-md font-bold text-on-surface text-left">How do I export my reports for my doctor?</span>
                  <span className="material-symbols-outlined text-primary">expand_more</span>
                </button>
              </div>
            </section>
          </div>

          {/* Right Column: Info & Map */}
          <aside className="lg:col-span-5 space-y-gutter">
            {/* Quick Contact Glass Card */}
            <div className="glass-pane p-8 rounded-2xl border border-white shadow-xl shadow-primary/5">
              <h3 className="font-headline-sm text-headline-sm mb-6">Direct Channels</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Support Email</p>
                    <p className="font-body-md text-body-md font-bold">care@pcosdetect.ai</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-tertiary/10 text-tertiary p-3 rounded-full">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Clinical Assistance</p>
                    <p className="font-body-md text-body-md font-bold">+1 (888) AI-HEALTH</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/10 text-secondary p-3 rounded-full">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Operating Hours</p>
                    <p className="font-body-md text-body-md font-bold">Mon - Fri, 8AM - 8PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Location / Map */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 overflow-hidden">
              <h3 className="font-headline-sm text-headline-sm mb-6">Global Headquarters</h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 relative group">
                <img alt="Map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD654cfCOmUBQqPGhCwRtt_XEM6rHHmrrLzMGNI_2YHPdOvnW3xsFzBZ9KtpBvCinl6MX3vwEc_C0naehDAp6yZ5PCumYsQA7ALKx7bn9hvlMJf3J0P_p-_DMz8Vj95OjS1u7-mr8k9IVupJ4S7ubJi63sCaf6otbgmEwAuREbNg7COySI7EXUeJMWRC-cZ2XL3Ye4q7rh83myi01uYn7O5uyrHa8eZAfPglmJ6NJS_7aj_IGBatwXx00FU8bOjJ4Sn-lfjWoTCNvbX"/>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 glass-pane px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                  <span className="font-label-sm text-label-sm">San Francisco, CA</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-body-md text-body-md font-bold">PCOS Detect AI Labs</p>
                <p className="font-body-md text-body-md text-on-surface-variant">450 Clinical Way, Suite 200<br/>Innovation District, San Francisco, CA 94103</p>
              </div>
              <button className="mt-6 w-full py-3 border border-primary text-primary font-label-md text-label-md rounded-full hover:bg-primary/5 transition-colors">
                Get Directions
              </button>
            </div>

            {/* Trust Badge */}
            <div className="p-8 bg-surface-container-high rounded-2xl flex items-center justify-between">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Security Standard</p>
                <p className="font-label-md text-label-md font-bold">HIPAA &amp; GDPR Certified</p>
              </div>
              <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
