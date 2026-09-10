import { skills } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CATEGORY_LABELS = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend & Databases",
  ai_ml: "AI/ML",
  tools: "Tools & Technologies",
  soft_skills: "Beyond the Stack",
};

function Skills() {
  const revealRef = useScrollReveal();

  return (
    <section id="skills" ref={revealRef} className="mb-28 scroll-mt-24 reveal">
      <h2 className="text-white font-extrabold text-4xl md:text-6xl leading-tight mb-10">
        <span className="text-gray-400">CORE COMPETENCIES</span>
      </h2>

      <div className="flex flex-col gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-xl text-gray-400 mb-3">
              {CATEGORY_LABELS[category] || category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#1c1b19] border border-white/5 text-gray-300 text-base px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
