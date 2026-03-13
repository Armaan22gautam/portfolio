"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project Name 1",
      description: "Brief description of your project and what technologies you used.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: "Project 1",
    },
    {
      id: 2,
      title: "Project Name 2",
      description: "Brief description of your project and what technologies you used.",
      tags: ["TypeScript", "Express", "PostgreSQL"],
      link: "#",
      image: "Project 2",
    },
    {
      id: 3,
      title: "Project Name 3",
      description: "Brief description of your project and what technologies you used.",
      tags: ["Next.js", "Tailwind CSS", "API"],
      link: "#",
      image: "Project 3",
    },
    {
      id: 4,
      title: "Project Name 4",
      description: "Brief description of your project and what technologies you used.",
      tags: ["Python", "FastAPI", "AI/ML"],
      link: "#",
      image: "Project 4",
    },
    {
      id: 5,
      title: "Project Name 5",
      description: "Brief description of your project and what technologies you used.",
      tags: ["Java", "Spring Boot", "REST API"],
      link: "#",
      image: "Project 5",
    },
    {
      id: 6,
      title: "Project Name 6",
      description: "Brief description of your project and what technologies you used.",
      tags: ["Docker", "Kubernetes", "DevOps"],
      link: "#",
      image: "Project 6",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          What I&apos;ve <span className="text-cyan-400">Built</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition"
            >
              <GlowingEffect
                spread={40}
                glow={false}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
                className="opacity-50"
              />

              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden">
                <div className="text-gray-400 group-hover:text-cyan-400 transition text-center">
                  {project.image}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-slate-700 text-cyan-400 rounded border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
