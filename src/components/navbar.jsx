import { useNavbarDock } from "../hooks/useNavbarDock";
import { useScrollSpy } from "../hooks/useScrollSpy";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const isDocked = useNavbarDock();
  const activeId = useScrollSpy(NAV_LINKS.map((link) => link.id));

  return (
    <nav
      className={`sticky top-0 z-20 border-b border-white/5 px-6 py-4 flex gap-8 text-lg text-gray-500 transition-[background-color,box-shadow,border-radius,margin] duration-300 ${
        isDocked
          ? "bg-[#141311]/92 shadow-[0_4px_20px_rgba(0,0,0,0.35)] rounded-full mx-6 mt-3 border-transparent"
          : "bg-[#141311]/70 backdrop-blur-md"
      }`}
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`hover:text-orange-400 transition ${
            activeId === link.id ? "text-orange-500" : ""
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;