export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">
          Terms <span className="text-orange-500">&</span> Conditions
        </h1>

        <div className="space-y-10 leading-relaxed text-zinc-400">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and utilizing ZENTIC Studio services, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms & Conditions. If you do not agree, 
              please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Services & Scope</h2>
            <p>
              ZENTIC Studio provides digital engineering and design services based on a mutually 
              agreed-upon scope of work (SOW). Any work requested outside this scope may be subject 
              to additional fees and timeline adjustments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p>
              Upon final payment, intellectual property rights for custom-developed code and designs 
              are transferred to the client. ZENTIC Studio retains the right to showcase the completed 
              project in our portfolio for promotional purposes unless a non-disclosure agreement (NDA) 
              is signed prior to project commencement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p>
              ZENTIC Studio is not liable for any direct, indirect, incidental, or consequential damages 
              arising from the use or inability to use our services, including but not limited to data loss 
              or business interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Revisions and Updates</h2>
            <p>
              These Terms & Conditions are subject to change. The updated terms will be posted on this page 
              with an updated revision date. Continued usage of our services implies acceptance of the new terms.
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-800">
            <p className="text-sm text-zinc-500">
              Last updated: October 26, 2026
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}