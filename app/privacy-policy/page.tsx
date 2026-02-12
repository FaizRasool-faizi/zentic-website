export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">
          Privacy <span className="text-orange-500">Policy</span>
        </h1>

        <div className="space-y-10 leading-relaxed text-zinc-400">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Information Collection</h2>
            <p>
              At ZENTIC Studio, we collect minimal data required to facilitate our engineering services. 
              This includes contact information provided through our consultation forms (name, email) 
              and technical requirements necessary to build your custom solutions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Usage of Data</h2>
            <p>
              The data we collect is used exclusively to:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Communicate regarding project proposals and technical audits.</li>
              <li>Improve our service delivery and architectural workflows.</li>
              <li>Ensure secure access to any client-specific staging environments.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Data Security & Encryption</h2>
            <p>
              As a technical studio, we prioritize security. We implement industry-standard 
              encryption and secure protocols (SSL/TLS) to ensure that any information 
              transmitted through our Laravel or Django backends remains confidential and protected 
              from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties. 
              This does not include trusted partners who assist us in operating our website or 
              servicing your project, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Cookie Policy</h2>
            <p>
              Our website may use essential cookies to enhance performance and analyze site traffic. 
              You can choose to disable cookies through your browser settings, though some 
              functionalities of the site may be affected.
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-800">
            <p className="text-sm text-zinc-500 italic">
              ZENTIC Studio reserves the right to update this policy. Changes are effective immediately 
              upon posting. Last updated: February 10, 2026.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}