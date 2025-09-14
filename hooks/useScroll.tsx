import { useEffect, useState } from "react";

export function useScrollOffset() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Escucha scroll
    window.addEventListener("scroll", handleScroll);
    // Setea valor inicial
    handleScroll();

    // Limpieza
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}
