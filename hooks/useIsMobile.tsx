import React, { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 768);
      });
    };
  }, []);

  return isMobile;
}
