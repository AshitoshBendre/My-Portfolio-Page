import { motion } from "framer-motion";

export default function Hierarchy({ onSelect, selectedId }) {
  const workExperiences = [
    {
      id: 1,
      role: "Unity Game Developer",
      company: "PlatypusBox",
      designation: "Unity Game Developer Intern",
      period: "Mar 2024 – Present",
      description:
        "Contributed to the development of multiplayer games, educational tools, and AR experiences during internship.",
      projects: [
        "Multiplayer 2D Board Game (Photon PUN 2, NavMesh AI)",
        "ScriptableObject-Based Quiz Game",
        "Unity E-commerce App with Backend API",
        "Telly ERP System (Multi-user, Firebase, Custom Keyboard)",
        "AR Interior Design App (AR Foundation, Vuforia, Meta Quest 3/Xreal)",
        "Roulette Game Prototype",
      ],
      technologies: [
        "Unity",
        "C#",
        "Photon PUN 2",
        "Firebase",
        "Vuforia",
        "AR Foundation",
        "JSON",
        "Android",
        "NavMesh",
      ],
    },
    {
      id: 2,
      role: "Game Programmer / Indie Developer",
      company: "Personal & Freelance Projects",
      designation: "Game Programmer",
      period: "2020 – 2023",
      description:
        "Worked on personal and freelance game projects focused on gameplay experimentation and development tooling.",
      projects: [
        "Pocket Rocket (WebGL Game)",
        "Stackylogs Debugger Tool",
        "Handpump Simulation Debugging Project",
        "Cell Simulation Educational App",
      ],
      technologies: [
        "Unity",
        "C#",
        "WebGL",
        "Firebase",
        "Observer Pattern",
        "RigidBody Physics",
        "PCG",
      ],
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
