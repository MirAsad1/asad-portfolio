import { getTechIconUrl } from "../utils/techicons";

const projectImages = import.meta.glob("../assets/projects/*", {
  eager: true,
  import: "default",
});

function ProjectCard({ project }) {
  const imageSrc = projectImages[`../assets/projects/${project.image}`];

  return (
    <div className="group bg-[#1c1b19] border border-white/5 rounded-xl p-5 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={project.title}
            className="w-25 h-25 rounded-lg object-cover ring-1 ring-white/10 flex-shrink-0"
          />
        )}
        <h3 className="text-white font-bold text-2xl ">{project.title}</h3>
      </div>

      <details className="text-lg text-gray-400 leading-relaxed">
        <summary className="cursor-pointer flex items-center justify-between text-gray-500 hover:text-orange-400 transition [&::-webkit-details-marker]:hidden marker:content-none">
          <span>Read description</span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </summary>
        <p className="mt-2">{project.description}</p>
      </details>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.techStack.map((tech) => (
          <img
            key={tech}
            src={getTechIconUrl(tech)}
            alt={tech}
            title={tech}
            className="w-6 h-6"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ))}
      </div>

      <div className="flex gap-4 mt-6 text-sl">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-400 transition"
          >
            GitHub →
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-400 transition"
          >
            Live →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
