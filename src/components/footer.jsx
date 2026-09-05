import { profile } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="text-center text-sm text-gray-600 py-8 border-t border-white/5">
      © {profile.name}
    </footer>
  );
}

export default Footer;
