import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export const projects = [
  {
    id: "roulette",
    title: "Roulette Game Prototype",
    description:
      "A casino-style roulette game developed in 3 days featuring realistic physics and betting system.",
    image: "/path-to-roulette-image.jpg",
    category: "Game Development",
    technologies: ["Unity", "C#", "Physics System"],
    highlights: [
      "Implemented realistic ball physics and wheel rotation",
      "Created comprehensive betting system",
      "Developed in a rapid 3-day prototype cycle",
    ],
  },
  {
    id: "stackylogs",
    title: "Stackylogs",
    description:
      "A custom debugger for C# programs and Unity applications with advanced profiling capabilities.",
    image: "/path-to-stackylogs-image.jpg",
    category: "Development Tools",
    technologies: ["C#", "Avalonia UI", "Named Pipes", "Multi-threading"],
    highlights: [
      "Built inter-process communication using named pipes",
      "Implemented multi-threaded architecture to minimize Unity main thread overhead",
      "Created comprehensive profiling system for performance optimization",
      "Designed modern UI using Avalonia UI framework",
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
    highlights: [
      "Implemented rigid body physics system",
      "Used observer pattern for game state management",
      "Planning implementation of 2D soft body physics",
      "Incorporating procedural content generation",
    ],
  },
  {
    id: "sanskrit-games",
    title: "Sanskrit Educational Games",
    description:
      "Educational games designed to make learning Sanskrit engaging and interactive.",
    image: "/path-to-sanskrit-games-image.jpg",
    category: "Educational Games",
    technologies: ["Unity", "C#", "Educational Design"],
    highlights: [
      "Developing a 2048-style merge game with Sanskrit elements",
      "Creating a bridge challenge game inspired by Squid Game",
      "Focusing on educational value while maintaining engagement",
    ],
  },
  {
    id: "ar-interior",
    title: "AR Interior Design App",
    description:
      "An augmented reality application for interior design visualization.",
    image: "/path-to-ar-interior-image.jpg",
    category: "AR Development",
    technologies: ["Unity", "AR Foundation", "Vuforia", "JSON"],
    highlights: [
      "Implemented AR visualization using AR Foundation & Vuforia",
      "Created JSON-based object saving system",
      "Prototyped for Xreal AR Glasses & Meta Quest 3",
      "Developed intuitive UI for object placement and manipulation",
    ],
  },
  {
    id: "cell-simulation",
    title: "Cell Simulation",
    description: "A modular, WebGL-compatible cell simulation system.",
    image: "/path-to-cell-simulation-image.jpg",
    category: "Simulation",
    technologies: ["Unity", "C#", "WebGL", "ScriptableObjects"],
    highlights: [
      "Designed modular system using ScriptableObjects",
      "Ensured WebGL compatibility",
      "Created extensible simulation framework",
      "Implemented efficient cell behavior patterns",
    ],
  },
  {
    id: "quiz-game",
    title: "Dynamic Quiz Game",
    description: "A scalable quiz game system with dynamic content management.",
    image: "/path-to-quiz-game-image.jpg",
    category: "Game Development",
    technologies: ["Unity", "C#", "ScriptableObjects"],
    highlights: [
      "Designed dynamic quiz system using ScriptableObjects",
      "Implemented scalable content management",
      "Created reusable question templates",
      "Built flexible scoring system",
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
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                    />
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
