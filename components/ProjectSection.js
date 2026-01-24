import Image from "next/image";

const projects = [
  // ---- CONTENT & CASE STUDIES ----
  {
    title: "AstroVed – Nadi Astrology",
    description:
      "High-performance astrology platform built with Next.js App Router, focusing on SEO, speed, and scalable architecture.",
    points: [
      "Implemented dynamic routing and nested layouts using App Router",
      "Server-side rendering for SEO-critical pages",
      "Optimized Core Web Vitals for production traffic",
      "Clean, responsive UI using Tailwind CSS",
    ],
    tech: ["Next.js", "App Router", "SSR", "Tailwind CSS"],
    link: "https://www.astroved.com/nadi/nadi-astrology-reading",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    title: "AstroVed – Articles & Blogs",
    description:
      "Content-heavy articles and blogs platform integrated with WordPress REST APIs.",
    points: [
      "Fetched and rendered dynamic content via WordPress REST APIs",
      "Implemented ISR with revalidation for fresh content",
      "SEO-friendly architecture for articles and blogs",
      "Reusable layouts for scalable content growth",
    ],
    tech: ["Next.js", "WordPress API", "ISR", "SEO"],
    link: "https://www.astroved.com/articles",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
  },
  {
    title: "AstroVed – Live TV & Podcast",
    description:
      "Live TV and podcast platform optimized for media delivery and performance.",
    points: [
      "Handled media-rich pages with efficient rendering",
      "Optimized API calls and caching strategies",
      "Ensured smooth UX across devices",
      "Scalable structure for live and recorded content",
    ],
    tech: ["Next.js", "API Integration", "Performance"],
    link: "https://www.astroved.com/live-tv",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  

];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto ">


      <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
          Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          A selection of real-world production projects built with Next.js,
          MERN stack, and WordPress integrations, focused on performance, SEO,
          and scalable UI architecture.
          </p>
        </div>
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                <ul className="mb-4 space-y-1 text-sm text-gray-600 list-disc list-inside">
                  {project.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  View Live Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
