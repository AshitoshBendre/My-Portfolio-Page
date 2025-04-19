import { motion } from "framer-motion";

export default function Hierarchy({ onSelect, selectedId }) {
  const workExperiences = [
    {
      id: 1,
      role: "Game Developer",
      company: "Unity Technologies",
      designation: "Senior Game Developer",
      period: "2022 - Present",
      description: "Developing educational games and AR experiences",
      projects: [
        "Sanskrit Learning Game",
        "AR Interior Design App",
        "Physics Simulation Tool",
      ],
      technologies: ["Unity", "C#", "AR Foundation", "Photon PUN2"],
    },
    {
      id: 2,
      role: "Game Programmer",
      company: "Indie Studio",
      designation: "Game Programmer",
      period: "2020 - 2022",
      description: "Worked on various game prototypes and tools",
      projects: [
        "Roulette Game Prototype",
        "Stackylogs Debugger",
        "Pocket Rocket WebGL Game",
      ],
      technologies: ["Unity", "C#", "WebGL", "Firebase"],
    },
  ];

  return (
    <div className="space-y-1">
      {/* Hierarchy Content */}
      <div className="space-y-1">
        {workExperiences.map((experience) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`group cursor-pointer ${
              selectedId === experience.id
                ? "bg-[#2a2d2e]"
                : "hover:bg-[#2a2d2e]/50"
            }`}
            onClick={() => onSelect(experience)}
          >
            <div className="flex items-center px-2 py-1">
              <svg
                className="w-4 h-4 text-[#9e9e9e] mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="text-[#9e9e9e] text-sm">
                {experience.company}
              </span>
            </div>
            {selectedId === experience.id && (
              <div className="pl-6 space-y-1">
                <div className="flex items-center px-2 py-1">
                  <span className="text-[#9e9e9e] text-sm">
                    {experience.role}
                  </span>
                </div>
                <div className="flex items-center px-2 py-1">
                  <span className="text-[#9e9e9e] text-sm">
                    {experience.designation}
                  </span>
                </div>
                <div className="flex items-center px-2 py-1">
                  <span className="text-[#9e9e9e] text-sm">
                    {experience.period}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
