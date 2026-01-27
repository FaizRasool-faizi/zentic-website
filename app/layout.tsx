import "./globals.css";

export const metadata = {
  title: "ZENTIC Studio - Digital Agency",
  description:
    "ZENTIC Studio is a creative digital agency offering Web Development, UI/UX Design, Branding, and Digital Marketing services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {/* Navbar */}
        <header className="border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">ZENTIC Studio</h1>

            <nav className="space-x-6 hidden md:block">
              <a href="/" className="hover:text-gray-600">
                Home
              </a>
              <a href="/about" className="hover:text-gray-600">
                About
              </a>
              <a href="/services" className="hover:text-gray-600">
                Services
              </a>
              <a href="/portfolio" className="hover:text-gray-600">
                Portfolio
              </a>
              <a href="/contact" className="hover:text-gray-600">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ZENTIC Studio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
