import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface/20 rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">About Me</h2>
        <p className="text-secondary/80 leading-relaxed">
          I'm a passionate game developer with a strong focus on Unity and WebGL
          development. My journey in game development started with a deep
          interest in creating immersive experiences and has evolved into a
          professional career where I combine technical expertise with creative
          problem-solving.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-surface/20 rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">Background</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-medium text-primary">Education</h3>
              <p className="text-secondary/80">
                Bachelor's in Computer Science with a focus on Game Development
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-medium text-primary">Experience</h3>
              <p className="text-secondary/80">
                Over 3 years of experience in game development, specializing in
                Unity, WebGL, and AR technologies
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-medium text-primary">
                Specialization
              </h3>
              <p className="text-secondary/80">
                Game mechanics, physics systems, multiplayer networking, and
                educational game development
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-surface/20 rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-primary">
              Game Development
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-secondary/80">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Unity Game Development
              </li>
              <li className="flex items-center gap-2 text-secondary/80">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                WebGL and Browser Games
              </li>
              <li className="flex items-center gap-2 text-secondary/80">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                AR/VR Development
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-primary">
              Other Interests
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-secondary/80">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Educational Game Design
              </li>
              <li className="flex items-center gap-2 text-secondary/80">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Physics Simulation
              </li>
              <li className="flex items-center gap-2 text-secondary/80">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Game Design Patterns
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-surface/20 rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">Philosophy</h2>
        <p className="text-secondary/80 leading-relaxed">
          I believe in creating games that not only entertain but also educate
          and inspire. My approach combines technical excellence with creative
          innovation, focusing on building experiences that are both engaging
          and meaningful. I'm particularly interested in how games can be used
          as educational tools and how they can create positive social impact.
        </p>
      </motion.div>
    </div>
  );
}
