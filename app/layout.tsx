import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "ZENTIC Studio - Digital Agency",
  description:
    "ZENTIC Studio helps businesses grow with Web Development, AI Automation, and Brand Identity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-200">
        <Header />

        <main className="pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
