export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Contact Us
      </h1>

      <p className="text-gray-600 mb-8">
        Have a project in mind? Reach out to ZENTIC Studio. We’ll get back
        to you as soon as possible.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
