import { useEffect, useState } from "react";
import "./Landing.css";

export const Landing = () => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const limit = 100;

      const scaleFactor = Math.max(0.1, 1 - scrollY / limit / 4);
      const opacityFactor = Math.max(0, 1 - scrollY / limit);

      setScale(scaleFactor);
      setOpacity(opacityFactor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="top-container pagefull h-screen flex flex-col justify-center items-center sticky top-0 z-10 bg-opacity-100"
      style={{ transform: `scale(${scale})`, opacity }}
    >
      <div className="total-top-text relative text-center select-none">
        <div className="name sm:text-3xl flex items-center justify-center gap-4">
          <h1 className="font-bold bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            ABIJITH M A
          </h1>
        </div>
        <div className="designation text-xl flex items-center justify-center gap-4 flex-col sm:flex-row">
          <h2 className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            DATA ANALYST
          </h2>
          <h2 className="hidden sm:block smallDisplayRemoval bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            |
          </h2>
          <h2 className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            SENIOR FRONTEND DEVELOPER
          </h2>
        </div>
      </div>
    </div>
  );
};
