import { profile } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section id="hero" ref={revealRef} className="mb-28 scroll-mt-24 reveal">
      <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
        {profile.title}
      </h1>
      <p className="text-gray-400 mt-5 leading-relaxed max-w-xl text-xl">
        {profile.bio}
      </p>

      <div className="flex gap-12 mt-10">
        <div>
          <div className="text-4xl font-semibold text-white">
            {profile.yearsExperience}+
          </div>
          <div className="text-base text-gray-500 mt-1">Years Experience</div>
        </div>
        <div>
          <div className="text-4xl font-semibold text-white">
            {profile.projectsCompleted}+
          </div>
          <div className="text-base text-gray-500 mt-1">Projects Completed</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
