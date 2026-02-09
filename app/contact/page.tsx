"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://zenticstudios.42web.io/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json(); // 👈 THIS WAS MISSING / FAILING

      if (data.status === "success") {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ " + data.message);
      }

    } catch (error) {
      setStatus("❌ Something went wrong");
    }

    setLoading(false);
  };


  return (
    <section className="bg-black text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-3xl font-semibold text-white mb-10">
          Contact ZENTIC Studio
        </h1>

        <form onSubmit={handleSubmit} action="https://zenticstudios.42web.io/contact.php" method="POST" className="space-y-6">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-gray-900 border border-gray-700 px-4 py-3 rounded"
            required
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full bg-gray-900 border border-gray-700 px-4 py-3 rounded"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full bg-gray-900 border border-gray-700 px-4 py-3 rounded"
            required
          />

          <button
            disabled={loading}
            className="bg-white text-black px-6 py-3 rounded font-medium"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="text-sm mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
}
