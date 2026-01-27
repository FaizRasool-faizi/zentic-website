export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          ZENTIC Studio
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          We build modern digital experiences for growing businesses.
        </p>

        <p className="mt-6 text-gray-500">
          ZENTIC Studio is a creative digital agency specializing in Web
          Development, UI/UX Design, Branding, and Digital Marketing.
        </p>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
          View Our Services
        </button>
      </div>
    </main>
  );
}
