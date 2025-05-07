import {
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandTypescript,
  IconDatabase,
  IconFileSpreadsheet,
  IconHtml,
  IconSql,
} from "@tabler/icons-react";
import { CSSSVG, MLSVG, PowerBISVG } from "../../../../SVG/SVGs";
import { useEffect, useState } from "react";

export const Icons = () => {
  const [size, setSize] = useState<string>("20px");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 640) {
        setSize("12px");
      } else if (windowWidth < 768) {
        setSize("14px");
      } else if (windowWidth < 1024) {
        setSize("16px");
      } else if (windowWidth < 1280) {
        setSize("18px");
      } else {
        setSize("20px");
      }
    };
    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="all-skills flex flex-col gap-1 py-1 sm:p-5 justify-start items-center">
        <div className="flex w-full items-center justify-center ">
          <h2 className="text-xl font-bold text-white underline underline-offset-4 decoration-[#1b5faa] mb-1">
            Key Skills
          </h2>
        </div>
        <div className="all-skills flex flex-wrap gap-2 sm:gap-3 space-y-1 sm:justify-center sm:items-center justify-start items-startsm:text-sm text-xs">
          <div className="react skill-pill flex items-center justify-center gap-1 sm:gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#1b5faa]  cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <IconBrandReact size={size} color="#1b5faa" />
            <p>React</p>
          </div>
          <div className="skill-pill flex items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#1D6F42]  cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <IconFileSpreadsheet color="#1D6F42" size={size} />
            <p>Spreadsheets</p>
          </div>
          <div className="skill-pill flex  items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#e34c26]  cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <IconHtml size={size} color="#e34c26" />
            <p>HTML</p>
          </div>
          <div className="skill-pill flex  items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#f0db4f]  cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <IconBrandJavascript size={size} color="#f0db4f" />
            <p>JavaScript</p>
          </div>
          <div className="skill-pill flex  items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#007acc]  cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <IconBrandTypescript size={size} color="#007acc" />
            <p>TypeScript</p>
          </div>
          <div className="skill-pill flex  items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#264de4]  cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <CSSSVG size={size} />
            <p>CSS</p>
          </div>
          <div className="skill-pill flex  items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#A5F3FC]  cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <IconBrandTailwind size={size} color="#A5F3FC" />
            <p>Tailwind CSS</p>
          </div>
          <div className="skill-pill flex  items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#FFD43B]  cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <IconBrandPython size={size} color="#FFD43B" />
            <p>Python</p>
          </div>
          <div className="skill-pill flex  items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#333333]  cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <IconBrandGithub size={size} color="#f2f2f2" />
            <p>GitHub</p>
          </div>
          <div className="skill-pill flex items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#FFC107]  cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <PowerBISVG size={size} />
            <p>Power BI</p>
          </div>
          <div className="skill-pill ML flex items-center justify-center gap-2 border-0 px-0.5 py-0.5 rounded-md">
            <div className="ML-inner flex items-center justify-center gap-2 rounded-md sm:px-3 sm:py-2 bg-gray-800 hover:bg-[#191a1b] transition-all duration-300 cursor-pointer px-2 py-1">
              <MLSVG size={size} />
              <p>Machine Learning</p>
            </div>
          </div>

          <div className="skill-pill flex  items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#00758F]  cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <IconSql size={size} color="#00758F" />
            <p>SQL</p>
          </div>
          <div className="skill-pill flex  items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#CC3534] cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <IconDatabase size={size} color="#CC3534" />
            <p>Database</p>
          </div>
          <div className="redux skill-pill flex  items-center justify-center gap-2 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md border-[#764abc] cursor-pointer hover:bg-[#191a1b] transition-all duration-300">
            <IconBrandRedux size={size} color="#764abc" />
            <p>Redux</p>
          </div>
        </div>
      </div>
    </>
  );
};
