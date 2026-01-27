export default function AboutPage() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
                About ZENTIC Studio
            </h1>

            <p className="text-gray-400 max-w-3xl">
                ZENTIC Studio is a modern digital agency dedicated to helping businesses
                build a strong online presence. We focus on clean design, scalable
                development, and results-driven digital strategies.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                    <p className="text-gray-400">
                        Our mission is to empower brands with innovative digital solutions
                        that drive growth, engagement, and long-term success.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">Why Choose Us</h2>
                    <p className="text-gray-400">
                        We combine creativity, technology, and strategy to deliver solutions
                        that are not only visually appealing but also highly effective.
                    </p>
                </div>
            </div>
        </section>
    );
}