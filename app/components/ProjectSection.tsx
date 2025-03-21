// components/ProjectSection.tsx
import Image from 'next/image';

const projects = [
  {
    title: "Pantigturo",
    description: "An interactive mobile app for native language improvement with audio-synced text and word-guessing game.",
    image: "/images/pantigturo.png",
    link: "#"
  },
  {
    title: "ParkWise",
    description: "A smart parking solution with live video feed, reservation system, and in-app chat support.",
    image: "/images/parkwise.png",
    link: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <p className="text-center text-gray-600 mb-12">
        Softwares I&apos;ve built
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={350}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
