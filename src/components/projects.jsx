import { useState } from "react";
import { projects } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ProjectCard from "./projectcard";

function Projects() {
  const revealRef = useScrollReveal();
  const [showAll, setShowAll] = useState(false);

  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const visibleProjects = showAll ? sorted : sorted.slice(0, 4);
  const hasMore = sorted.length > 4;

  return (
    <section
      id="projects"
      ref={revealRef}
      className="mb-28 scroll-mt-24 reveal"
    >
      <h2 className="text-white font-extrabold text-4xl md:text-6xl leading-tight mb-10">
        <span className="text-gray-400">THINGS I'VE BUILT</span>
      </h2>

      {sorted.length === 0 ? (
        <p className="text-gray-600 text-sm">No projects yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 items-start">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {hasMore && !showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase text-xs overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <svg
                className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
