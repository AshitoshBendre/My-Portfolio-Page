import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import stackyLogsImage from "../assets/ProjectAssets/StackyLogs.png";
import stackyLogsVideo from "../assets/ProjectAssets/StackyLogsTestVideo.mp4";
import portfolioImage from "../assets/ProjectAssets/Portfolio.png";
import CSIntro from "../assets/ProjectAssets/CSIntro.png";
import CSLable from "../assets/ProjectAssets/CSLabel.png";
import PRWeb from "../assets/ProjectAssets/PRWebsite.png";
import PRGame from "../assets/ProjectAssets/PRGameplay.png";
import ARDemo from "../assets/ProjectAssets/ARDemo.mp4";
import SEAGameplay from "../assets/ProjectAssets/SEA-Gameplay Design Doc.png";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
// Log imported assets
console.log("Imported assets:", {
  stackyLogsImage,
  stackyLogsVideo,
  portfolioImage,
});

export const projects = [
  {
    id: "stackylogs",
    title: "Stackylogs",
    description:
      "A structured debugging and logging tool for Unity/C# applications, designed for detailed profiling, future documentation, and scalable analysis.",
    media: [
      {
        type: "image",
        url: stackyLogsImage,
        caption: "Stackylogs Interface",
      },
      {
        type: "video",
        url: stackyLogsVideo,
        caption: "Stackylogs Test Video",
      },
    ],
    category: "Development Tools",
    technologies: ["C#", "Avalonia UI", "Named Pipes", "Multi-threading"],
    highlights: [
      "Experimenting with inter-process communication using named pipes",
      "No MonoBehaviours used outside of the Unity test client for cleaner separation",
      "Planned tab-based console log system for structured and categorized logs",
      "Future roadmap includes PDF export (e.g., with SharpPDF) for documentation of logs and performance reports",
      "Intended to show time-series data (e.g., FPS in a mission) in structured graphical formats",
      "Vision includes extending it into a documentation assistant for debugging sessions",
    ],
  },
  {
    id: "cell-simulation",
    title: "Cell Simulation",
    description:
      "A modular, scalable educational simulation system designed for future expansion across multiple biology chapters.",
    image: "/path-to-cell-simulation-image.jpg",
    category: "Simulation / Education",
    technologies: ["Unity", "C#", "WebGL", "ScriptableObjects", "Addressables"],
    website: "https://dulcet-narwhal-2ccee3.netlify.app/",
    media: [
      {
        type: "image",
        url: CSIntro,
        caption: "Introduction Panel of Cell Simulation",
      },
      {
        type: "image",
        url: CSLable,
        caption: "Labels Displayed on the Cell",
      },
    ],
    highlights: [
      "Planned and implemented modular architecture for reusability in future chapters",
      "Used ScriptableObjects for data-driven label interactions and 3D object info",
      "Implemented drag-and-drop labeling, 3D viewing, and interactive info panels",
      "Optimized for WebGL deployment and efficient loading using Addressables",
      "🎮 [Live Demo](https://dulcet-narwhal-2ccee3.netlify.app/) available online",
    ],
  },

  {
    id: "pocket-rocket",
    title: "Pocket Rocket",
    description:
      "A WebGL-based browser game showcasing modern web game development capabilities.",
    image: "/path-to-pocket-rocket-image.jpg",
    category: "Web Game",
    technologies: ["WebGL", "JavaScript", "Physics Engine", "Design Patterns"],

    media: [
      {
        type: "image",
        url: PRWeb,
        caption: "Website for Pocket Rocket",
      },
      {
        type: "image",
        url: PRGame,
        caption: "Playable demo inside the website",
      },
    ],
    highlights: [
      "Implemented rigid body physics system",
      "Completed Within 2 Days",
      "Planning implementation of 2D soft body physics",
    ],
    website: "https://bitsizestudios.netlify.app/",
  },
  {
    id: "sanskrit-games",
    title: "Sanskrit Educational Games",
    description:
      "Educational games designed to make learning Sanskrit engaging and interactive.",
    media: [
      {
        type: "image",
        url: SEAGameplay,
        caption: "Game Design Doc",
      },
    ],
    category: "Educational Games",
    technologies: ["Unity", "C#", "Educational Design"],
    highlights: [
      "Developing a 2048-style merge game with Sanskrit elements",
      "Creating a bridge challenge game inspired by Squid Game",
      "Focusing on educational value while maintaining engagement",
    ],
    website:
      "https://skillful-reply-7f8.notion.site/Sanskrit-Concept-Documentation-1ac5f47969a5803bb8b0cb62e13eaee7?pvs=4",
  },
  {
    id: "Architection AR app",
    title: "AR Interior Design App",
    description:
      "An augmented reality application for interior design visualization.",
    category: "AR Development",
    media: [
      {
        type: "video",
        url: ARDemo,
        caption:
          "Video of a older build of ARChitection application to test real life scales currently (150 cms test)",
      },
    ],
    technologies: ["Unity", "AR Foundation", "Vuforia", "JSON"],
    highlights: [
      "Implemented AR visualization using AR Foundation & Vuforia",
      "Created JSON-based object saving system",
      "Prototyped for Xreal AR Glasses & Meta Quest 3",
      "Developed intuitive UI for object placement and manipulation",
    ],
  },
  {
    id: "multiplayer-board-game",
    title: "Multiplayer Board Game",
    description:
      "A networked 2D board game with AI opponents and multiplayer capabilities.",
    image: "/path-to-board-game-image.jpg",
    category: "Game Development",
    technologies: ["Unity", "C#", "Photon PUN 2", "NavMesh"],
    highlights: [
      "Implemented multiplayer networking using Photon PUN 2",
      "Created AI opponents using NavMesh Agents",
      "Developed turn-based game mechanics",
      "Built synchronized game state management",
    ],
  },
  {
    id: "telly-erp",
    title: "TellyERP - Betting Management System",
    description:
      "A Unity-based application designed to manage match-based betting transactions, inspired by Tally ERP systems.",
    image: "/path-to-telly-erp-image.jpg",
    category: "Business Application / Betting",
    technologies: ["Unity", "C#", "Firebase", "Realtime Database", "Canvas UI"],
    website: "", // Optional: add Netlify/WebGL/PlayStore link here if available
    highlights: [
      "Implemented match betting calculation logic with real-time data sync using Firebase",
      "Integrated CRUD operations for dynamic data management",
      "Designed responsive UI and optimized Unity Canvas for better performance",
      "Debugged and enhanced UI responsiveness across multiple screen sizes",
      "Organized the project into modular components for scalable business use",
    ],
  },
  {
    id: "nms-software",
    title: "NMS Software - Roulette Betting Manager",
    description:
      "A Unity Build Application to manage and distribute betting transactions in roulette-based casino games similar to TellyERP",
    image: "/path-to-nms-software-image.jpg",
    category: "Business Application / Betting",
    technologies: ["Unity", "C#", "OOP", "UI Systems"],
    website: "", // Optional: add deployment link or company reference
    highlights: [
      "Implemented transaction distribution logic specific to roulette betting flow",
      "Refactored and cleaned legacy code for improved maintainability",
      "Fixed key issues in logic processing and enhanced error handling",
      "Restructured project folders, naming conventions, and prefabs for better scalability",
      "Supported business logic workflows in sync with game economy systems",
    ],
  },
];

const categories = [...new Set(projects.map((project) => project.category))];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8 mb-12"
      >
        <h1 className="text-4xl font-bold text-primary">Projects</h1>
        <p className="text-xl text-secondary/80 max-w-2xl mx-auto">
          Explore my portfolio of game development projects, featuring Unity and
          WebGL experiences
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "All"
                ? "bg-primary text-white"
                : "bg-surface/20 text-secondary hover:bg-surface/30"
            }`}
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-surface/20 text-secondary hover:bg-surface/30"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`group relative bg-surface/20 rounded-xl p-6 transition-all duration-300 ${
                hoveredProject === project.id
                  ? "bg-surface/30 scale-[1.02]"
                  : ""
              }`}
            >
              <Link to={`/projects/${project.id}`} className="space-y-4 block">
                <div className="aspect-video bg-surface/40 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow">
                  {project.media && project.media.length > 0 ? (
                    project.media[0].type === "video" ? (
                      <video
                        src={project.media[0].url}
                        className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.media[0].url}
                        alt={project.media[0].caption}
                        className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                      />
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-primary/60">
                      Project Preview
                    </div>
                  )}
                </div>

                <div>
                  <motion.h2
                    layout
                    className="text-2xl font-semibold text-primary mb-2 group-hover:text-[#0078d7] transition-colors"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    layout
                    className="text-secondary/80 text-sm mb-4 line-clamp-2"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div layout className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full group-hover:bg-primary/20 transition-colors">
                      {project.category}
                    </span>
                  </motion.div>

                  <motion.div layout className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-surface/40 text-secondary/80 text-xs rounded-full group-hover:bg-surface/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {project.website && (
                    <motion.div layout className="mt-4">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-[#0078d7] text-sm font-medium flex items-center gap-1"
                      >
                        <span>Visit Website</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </motion.div>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute bottom-4 right-4"
                >
                  <svg
                    className="w-6 h-6 text-primary transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
