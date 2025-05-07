import { Button } from "@mui/material";
import { IconDownload } from "@tabler/icons-react";
import { BarChart, Code, Zap } from "lucide-react";
import resume from "../../../assets/Resume.pdf";

export const ProfessionalBio = () => {
  const downloadResume = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className="max-w-full mx-auto  shadow-lg rounded-lg overflow-hidden p-5 h-full">
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 py-6 px-8">
        <h2 className="text-2xl font-bold text-white">Professional Profile</h2>
      </div>

      <div className="p-8 h-full  flex flex-col justify-start items-start">
        <div className="flex flex-col justify-start items-between h-full gap-10">
          {/* Bio Introduction */}
          <div className="text-gray-300 text-sm leading-relaxed space-y-4">
            <p className="border-l-4 border-blue-500 pl-4 italic font-medium">
              Data Analyst & Senior Frontend Developer
            </p>

            <p>
              I'm a Data Analyst and Senior Frontend Developer who loves digging
              into data and turning it into meaningful insights, while also
              creating user-friendly, visually engaging web applications. My
              experience in data analysis helps me uncover trends and patterns
              that can drive better business decisions.
            </p>

            <p>
              On the frontend side, I enjoy building responsive, clean, and
              intuitive interfaces using the latest web technologies. Whether
              it's crafting seamless user experiences or optimizing performance,
              I'm always focused on delivering solutions that look great and
              work even better.
            </p>

            <p>
              I'm constantly learning, exploring new trends, and staying updated
              with the latest innovations to keep pushing the boundaries of
              what's possible in both data and web development.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center">
              <BarChart className="text-blue-600 mb-2" size={32} />
              <h3 className="font-semibold text-lg text-blue-800 mb-2">
                Data Analysis
              </h3>
              <p className="text-gray-600 text-sm">
                Uncovering insights and patterns to drive informed decisions
              </p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg flex flex-col items-center text-center">
              <Code className="text-indigo-600 mb-2" size={32} />
              <h3 className="font-semibold text-lg text-indigo-800 mb-2">
                Frontend Development
              </h3>
              <p className="text-gray-600 text-sm">
                Building intuitive and responsive web applications
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg flex flex-col items-center text-center">
              <Zap className="text-purple-600 mb-2" size={32} />
              <h3 className="font-semibold text-lg text-purple-800 mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600 text-sm">
                Staying updated with the latest technologies and innovations
              </p>
            </div>
          </div>
          <div className="resume-button items-end flex justify-end ml-auto pr-1.5">
            <Button
              className="!text-white flex items-center gap-2 !font-bold  transition-all duration-300"
              variant="contained"
              color="primary"
              onClick={downloadResume}
            >
              <IconDownload size={20} />
              <p>Download Resume</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
