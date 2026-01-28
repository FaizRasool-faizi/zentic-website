import "./globals.css";

export const metadata = {
  title: "ZENTIC Studio - Digital Agency",
  description:
    "ZENTIC Studio is a creative digital agency offering Web Development, UI/UX Design, Branding, and Digital Marketing services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-200">
        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold tracking-wide text-white">
              ZENTIC Studio
            </h1>

            <nav className="hidden md:flex space-x-8 text-sm">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Portfolio", "/portfolio"],
                ["Contact", "/contact"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  className="text-gray-300 hover:text-white transition"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="pt-20">{children}</main>

        {/* FOOTER */}
        <footer className="mt-32 border-t border-gray-800 bg-black">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              ZENTIC Studio
            </h3>

            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              We design and build premium digital experiences for brands
              that want to stand out and scale with confidence.
            </p>

            <div className="mt-6 flex justify-center space-x-6 text-sm">
              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </div>

            <p className="mt-8 text-xs text-gray-500">
              © {new Date().getFullYear()} ZENTIC Studio. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
