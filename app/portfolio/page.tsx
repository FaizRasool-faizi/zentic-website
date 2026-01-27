const projects = [
  {
    title: "Corporate Business Website",
    description:
      "A modern and responsive corporate website designed for a professional services company.",
    tech: "Next.js, Tailwind CSS",
  },
  {
    title: "E-Commerce Landing Page",
    description:
      "A high-converting landing page concept for an online store with clean UI and clear CTAs.",
    tech: "React, Tailwind CSS",
  },
  {
    title: "Personal Brand Portfolio",
    description:
      "A personal branding website concept for freelancers and creators.",
    tech: "Next.js, CSS",
  },
];

export default function PortfolioPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Our Portfolio
      </h1>

      <p className="text-gray-600 max-w-3xl mb-12">
        Here are some sample projects and concept designs that reflect our
        approach to clean design, modern development, and user-focused
        experiences.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {project.description}
            </p>
            <span className="text-sm text-gray-500">
              Tech: {project.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}