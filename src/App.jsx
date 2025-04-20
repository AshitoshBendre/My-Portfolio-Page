import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WorkExperience from "./components/WorkExperience";
import Scene from "./components/Scene";
import Inspector from "./components/Inspector";
import Projects, { projects } from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import AboutMe from "./components/AboutMe";
import Console from "./components/Console";
import resumePDF from "./assets/ProjectAssets/Ashitosh_Bendre_Resume.pdf";

function App() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showUnityPanel, setShowUnityPanel] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");
  const [logs, setLogs] = useState([
    {
      heading: "Application Started",
      description: "Portfolio application initialized successfully",
      timestamp: new Date().toLocaleTimeString(),
      level: "success",
      details: "React application mounted and ready",
    },
    {
      heading: "Components Loaded",
      description: "All components have been loaded and rendered",
      timestamp: new Date().toLocaleTimeString(),
      level: "info",
      details: "Loaded: AboutMe, Projects, Scene, Inspector, Console",
    },
    {
      heading: "Unity Panel Integration",
      description: "Unity-style editor panel is ready for interaction",
      timestamp: new Date().toLocaleTimeString(),
      level: "info",
    },
  ]);

  const addLog = (log) => {
    setLogs((prev) => [
      {
        ...log,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev,
    ]);
  };

  useEffect(() => {
    if (showUnityPanel) {
      addLog({
        heading: "Unity Panel Opened",
        description: "Unity-style editor panel is now active",
        level: "info",
      });
    }
  }, [showUnityPanel]);

  useEffect(() => {
    if (selectedExperience) {
      addLog({
        heading: "Item Selected",
        description: `Selected: ${selectedExperience.title}`,
        level: "info",
        details: JSON.stringify(selectedExperience, null, 2),
      });
    }
  }, [selectedExperience]);

  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        {/* Navbar */}
        <header className="m-3 fixed top-0 left-1/2 transform -translate-x-1/2 z-50 glass-panel rounded-full border border-white/20 px-4 py-2">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-primary hover:text-primary-light glow-effect"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-secondary hover:text-primary glow-effect"
              >
                Projects
              </Link>
              <a
                href={resumePDF}
                download="Ashitosh_Bendre_Resume.pdf"
                className="text-secondary hover:text-primary glow-effect inline-flex items-center gap-1"
              >
                <span>Resume</span>
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashitoshbendre.work@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Ashitosh,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary glow-effect"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/ashitosh-bendre-175a51247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary glow-effect"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/AshitoshBendre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary glow-effect"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1 pt-20 pb-16">
          <Routes>
            <Route
              path="/"
              element={
                <div className="space-y-16">
                  {/* Hero Section */}
                  <section className="container mx-auto px-4 py-16 ">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center space-y-6"
                    >
                      <h1 className="text-5xl font-bold text-primary cartoon-text animate-float">
                        Ashitosh Bendre
                      </h1>
                      <p className="text-xl text-secondary/80 max-w-2xl mx-auto">
                        Game Developer specializing in Unity and WebGL
                        development, creating immersive experiences and
                        educational games
                      </p>
                      {/* Unity-fy Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowUnityPanel(true)}
                        className="plastic-button bg-primary text-white font-medium py-3 px-6 rounded-lg animate-glow"
                      >
                        Unity-fy
                      </motion.button>
                    </motion.div>
                  </section>

                  {/* About Me Section */}
                  <section className="container mx-auto px-4 ">
                    <AboutMe />
                  </section>
                </div>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="glass-panel py-8">
          <div className="container mx-auto px-4">
            <div className="mt-1 border-t border-surface/20 text-center text-secondary/60">
              <p>
                &copy; {new Date().getFullYear()} Ashitosh Bendre. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Unity Panel */}
        <AnimatePresence>
          {showUnityPanel && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setShowUnityPanel(false)}
              />

              {/* Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="fixed inset-4 m-auto z-50 glass-panel overflow-hidden flex flex-col"
                style={{ maxWidth: "90vw", maxHeight: "90vh" }}
              >
                {/* Unity Title Bar */}
                <div className="bg-surface/40 backdrop-blur-md px-4 py-2 flex items-center justify-between border-b border-surface/20">
                  <div className="flex items-center space-x-2">
                    <span className="text-primary font-semibold cartoon-text">
                      Unity
                    </span>
                    <span className="text-secondary/60 text-sm">
                      2022.3.16f1
                    </span>
                  </div>
                  <button
                    onClick={() => setShowUnityPanel(false)}
                    className="w-3 h-3 rounded-full bg-accent hover:bg-accent-dark transition-colors"
                  />
                </div>

                {/* Main Editor Content */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-[300px_1fr_300px] min-h-0">
                  {/* Work Experience Panel */}
                  <div className="bg-surface/20 border-r border-surface/20 overflow-y-auto">
                    <div className="p-4">
                      <h3 className="text-secondary/60 text-sm font-medium mb-4">
                        Work Experience
                      </h3>
                      <WorkExperience
                        onSelect={setSelectedExperience}
                        selectedId={selectedExperience?.id}
                      />
                    </div>
                  </div>

                  {/* Scene Panel */}
                  <div className="bg-surface/10 relative">
                    <Scene />
                  </div>

                  {/* Inspector Panel */}
                  <div className="bg-surface/20 border-l border-surface/20 overflow-y-auto">
                    <div className="p-4">
                      <h3 className="text-secondary/60 text-sm font-medium mb-4">
                        Inspector
                      </h3>
                      <Inspector experience={selectedExperience} />
                    </div>
                  </div>
                </div>

                {/* Bottom Panel */}
                <div className="h-[260px] bg-surface/20 border-t border-surface/20 flex flex-col">
                  {/* Tab Headers */}
                  <div className="flex border-b border-surface/20">
                    <button
                      className={`px-4 py-2 text-secondary/60 text-sm font-medium ${
                        activeTab === "projects"
                          ? "border-b-2 border-primary text-primary"
                          : ""
                      }`}
                      onClick={() => setActiveTab("projects")}
                    >
                      Projects
                    </button>
                    <button
                      className={`px-4 py-2 text-secondary/60 text-sm font-medium ${
                        activeTab === "console"
                          ? "border-b-2 border-primary text-primary"
                          : ""
                      }`}
                      onClick={() => setActiveTab("console")}
                    >
                      Console
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="flex-1 overflow-y-auto bg-surface/10">
                    {activeTab === "projects" ? (
                      <div className="p-4 space-y-2">
                        {projects.map((project) => (
                          <div
                            key={project.id}
                            className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                              selectedExperience?.id === project.id
                                ? "bg-primary/20 text-primary"
                                : "hover:bg-surface/20"
                            }`}
                            onClick={() => setSelectedExperience(project)}
                          >
                            <span className="text-sm">{project.title}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <Console logs={logs} />
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
