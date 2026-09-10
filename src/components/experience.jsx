import { experience } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { formatMonthYear } from "../utils/formatDate";

const logoImages = import.meta.glob("../assets/experience/*", {
  eager: true,
  import: "default",
});

function Experience() {
  const revealRef = useScrollReveal();
  const sorted = [...experience].sort((a, b) => a.order - b.order);

  return (
    <section
      id="experience"
      ref={revealRef}
      className="mb-28 scroll-mt-24 reveal"
    >
      <h2 className="text-white font-extrabold text-4xl md:text-6xl leading-tight mb-10">
        <span className="text-gray-400">WHERE I'VE WORKED</span>
      </h2>

      {sorted.length === 0 ? (
        <p className="text-gray-600 text-sm pl-5">No experience added yet.</p>
      ) : (
        <div className="border-l border-white/10 flex flex-col gap-8 max-w-2xl">
          {sorted.map((exp) => {
            const logoSrc =
              logoImages[`../assets/experience/${exp.companyLogo}`];
            const logo = logoSrc && (
              <img
                src={logoSrc}
                alt={exp.company}
                className="w-14 h-14 rounded-lg object-cover ring-1 ring-white/10 hover:ring-orange-500/50 hover:scale-105 transition-all duration-300 flex-shrink-0"
              />
            );

            return (
              <div
                key={exp.id}
                className="pl-5 relative flex items-start justify-between gap-4"
              >
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-orange-500" />

                <div className="flex-1">
                  <h3 className="text-white text-xl font-medium">
                    {exp.role} — {exp.company}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {formatMonthYear(exp.startDate)} –{" "}
                    {exp.endDate ? formatMonthYear(exp.endDate) : "Present"}
                  </p>
                  <p className="text-lg  text-gray-400 mt-2 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
                </div>

                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    {logo}
                  </a>
                ) : (
                  logo
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Experience;
