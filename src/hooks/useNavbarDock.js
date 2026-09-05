import { useState, useEffect } from "react";

const SCROLL_THRESHOLD = 60;

export function useNavbarDock() {
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsDocked(window.scrollY > SCROLL_THRESHOLD);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isDocked;
}
