import { Icons } from "./Components/Icons";
import "./Css/About.css";
import { ProfessionalBio } from "./Intro";
import ProfileImg from "../../../SVG/IMG_6378.png";
import { Experience } from "./Experience";
import { Education } from "./Education";

export const About = () => {
  return (
    <div className="sm:p-4  flex flex-col items-center justify-start text-white">
      <div className="about-pagefull rounded-md bg-gray-950 shadow-md z-20 relative sm:p-10 flex flex-col sm:w-[90%] w-full">
        <div className="sm:grid sm:grid-cols-2 gap-5 sm:grid-rows-1 bg-gray-800 border-b-2 border-gray-700 flex flex-col-reverse">
          <div className="left-column flex flex-col items-start justify-start border-r-2 border-gray-700">
            <ProfessionalBio />
          </div>
          <div className="right-column flex flex-col items-center justify-center">
            <div className="photo basis-1/2 object-contain flex items-end justify-end pt-10">
              <img
                src={ProfileImg}
                alt="Profile"
                className="max-h-full w-auto object-contain rounded-md shadow-md shadow-white/20 sm:h-[250px] h-[100px]"
              />
            </div>
            <div className="skill-belt flex flex-wrap gap-10 px-10 basis-1/2">
              {<Icons />}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 bg-gray-800 h-full">
          <div className="experience-container w-full shadow-md z-20 relative min-h-full p-10 flex flex-col gap-5 sm:min-w-[80%] rounded-md">
            <Experience />
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};
