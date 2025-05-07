import { motion } from "framer-motion";
import "./Css/Experience.css";
import { useRef, useState, useEffect } from "react";

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const descriptionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrolling");
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top;

      const visibility = descriptionRefs.map((ref) => {
        const element = ref.current;
        if (!element) return Number.POSITIVE_INFINITY;
        const rect = element.getBoundingClientRect();
        return Math.abs(rect.top - containerTop);
      });

      const closestIndex = visibility.indexOf(Math.min(...visibility));
      setVisibleIndex(closestIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.addEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <motion.div
      className="sm:p-4  flex flex-col items-center justify-start text-white w-full "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="inside-experience w-full">
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 py-6 px-8 border-blue-400 border-b-2">
          <h2 className="text-2xl font-bold text-white">
            Professional Journey
          </h2>
        </div>
        <div className="inner-experience relative flex gap-1 sm:gap-5  bg-gray-800 pt-10 items-center justify-center h-full w-full">
          <div className="hidden sm:block line-column  sm:h-[45dvh] w-20 relative z-1 ">
            <div
              className={`line absolute right-2 bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-500 w-0.5 transition-all duration-500 ease-in-out
              ${visibleIndex > 0 ? "h-1/2" : "h-0"}
              ${visibleIndex > 1 ? "h-full" : "bg-gray-800"}`}
            ></div>
            <div
              className={`top-circle absolute top-0 right-0.5 w-[15px] h-[15px] border-2 rounded-full border-blue-500
    transition-all duration-500 ease-in-out
    ${
      visibleIndex >= 0
        ? "bg-blue-500 opacity-100 scale-100"
        : "bg-gray-800 opacity-0 scale-0"
    }`}
            ></div>

            <div
              className={`middle-circle absolute top-1/2 right-0.5 w-[15px] h-[15px] border-2 rounded-full 
    transition-all duration-500 ease-in-out
     ${
       visibleIndex >= 2
         ? "bg-cyan-500 border-cyan-500 opacity-100 scale-100"
         : visibleIndex >= 1
         ? "bg-purple-500 border-purple-500 opacity-100 scale-100"
         : "bg-gray-800 border-blue-500 opacity-0 scale-0"
     }
  `}
            ></div>

            <div
              className={`bottom-circle absolute bottom-0 right-0.5 w-[15px] h-[15px] border-2 rounded-full
    transition-all duration-500 ease-in-out
    ${
      visibleIndex >= 2
        ? "bg-purple-500 border-purple-500 opacity-100 scale-100"
        : "bg-gray-800 opacity-0 scale-0"
    }`}
            ></div>
          </div>

          <div
            ref={containerRef}
            className="description-column h-[50dvh] sm:h-[50dvh] sm:w-[90%] overflow-y-scroll snap-y snap-mandatory px-4 flex sm:flex-col flex-col-reverse"
          >
            <div
              ref={descriptionRefs[0]}
              className="snap-center h-full flex-shrink-0 flex flex-col justify-center gap-5 sm:px-20"
            >
              <div className="all-experience pl-4 shadow-neutral-800 rounded-md bg-gradient-to-r from-blue-900 to-gray-700  to-95% sm:py-5 py-1">
                <h2 className="text-xl font-semibold text-blue-400">
                  Content Programmer
                </h2>
                <h3 className="text-lg font-medium text-gray-400">
                  Ansrsource
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed w-full">
                <li>
                  Developed and maintained webpages using the React.js framework
                  for clients at Ansrsource.
                </li>
                <li>
                  Collaborated with team members for quality checks and webpage
                  maintenance.
                </li>
                <li>
                  Achieved 100% quality and productivity, leading to a promotion
                  to a full-time employee.
                </li>
                <li>
                  Trained in the work environment and culture to excel in the
                  role.
                </li>
              </ul>
            </div>

            <div
              ref={descriptionRefs[1]}
              className="snap-start h-full flex-shrink-0 flex flex-col justify-center gap-5 sm:px-20"
            >
              <div className="all-experience pl-4 shadow-neutral-800 rounded-md bg-gradient-to-r from-cyan-900 to-gray-700  to-95% sm:py-5 py-1">
                <h2 className="text-xl font-semibold text-blue-400">
                  Frontend Developer
                </h2>
                <h3 className="text-lg font-medium text-gray-400 ">
                  Ansrsource
                </h3>
              </div>

              <ul className="list-disc list-inside text-gray-300 leading-relaxed">
                <li>
                  Developed responsive webpages for our clients with the
                  provided content.
                </li>
                <li>
                  Involved in constant communication with clients and validators
                  via JIRA
                </li>
                <li>
                  Created code blocks and posted code updates for team updates
                  weekly.
                </li>
              </ul>
            </div>

            <div
              ref={descriptionRefs[2]}
              className="snap-start h-full flex-shrink-0 flex flex-col justify-center gap-5 sm:px-20"
            >
              <div className="all-experience pl-4 shadow-neutral-800 rounded-md bg-gradient-to-r from-purple-900 to-gray-700  to-95% sm:py-5 py-1">
                <h2 className="text-xl font-semibold text-blue-400 ">
                  <span className="border-r-2 border-blue-400 inline-block pr-2">
                    Frontend Developer
                  </span>
                  <span className="pl-2">Team Analyst</span>
                </h2>
                <h3 className="text-lg font-medium text-gray-400">
                  Ansrsource
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed">
                <li>
                  Worked with Excel and PowerBI for data analysis and
                  visualization.
                </li>
                <li>Conducted code reviews for subordinates.</li>
                <li>Resolved queries and issues for team members.</li>
                <li>
                  Maintained quality control sheets for the team's performance
                  and standards.
                </li>
                <li>
                  Trained new joiners after two years, enhancing their skills
                  and my own.
                </li>
                <li>
                  Created weekly reports for analyzing the team's progression.
                </li>
                <li>
                  Created presentations based on the reports and conducted
                  weekly team meetings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
