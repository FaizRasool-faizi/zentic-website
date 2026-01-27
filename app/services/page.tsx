const services = [
  {
    title: "Web Development",
    description:
      "Custom, fast, and scalable websites built using modern technologies tailored to your business needs.",
  },
  {
    title: "UI/UX Design",
    description:
      "User-focused design solutions that improve engagement, usability, and customer experience.",
  },
  {
    title: "Branding",
    description:
      "Complete brand identity design including logos, colors, and visual guidelines for strong recognition.",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies to grow your reach, leads, and conversions online.",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Our Services
      </h1>

      <p className="text-gray-400 max-w-3xl mb-12">
        At ZENTIC Studio, we offer a complete range of digital services designed
        to help your business grow and stand out in the digital world.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {service.title}
            </h2>
            <p className="text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
