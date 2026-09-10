import { profile } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

function About() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" ref={revealRef} className="mb-28 scroll-mt-24 reveal">
      <h2 className="text-white font-extrabold text-4xl md:text-7xl leading-tight mb-10">
        <span className="text-gray-400">ABOUT ME</span>
      </h2>
      <div className="max-w-2xl text-gray-400 text-lg leading-relaxed text-justify whitespace-pre-line">
        {profile.about}
      </div>
    </section>
  );
}

export default About;
