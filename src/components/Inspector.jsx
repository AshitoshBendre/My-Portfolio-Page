import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Inspector({ experience }) {
  if (!experience) {
    return (
      <div className="text-center py-8">
        <p className="text-secondary/60 text-sm">
          Select a project or experience to view details
        </p>
      </div>
    );
  }

  // Determine if this is a project or work experience
  const isProject = "category" in experience;
  const isWorkExperience = "role" in experience && "company" in experience;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-primary">
          {isProject ? experience.title : experience.role}
        </h2>
        <div className="flex items-center gap-2 text-sm text-secondary/80">
          <span className="px-2 py-0.5 bg-surface/40 rounded-full text-xs">
            {isProject ? experience.category : experience.company}
          </span>
          {!isProject && (
            <span className="text-xs text-secondary/60">
              {experience.period}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-primary">Description</h3>
          <p className="text-sm text-secondary/80 leading-relaxed">
            {experience.description}
          </p>
        </div>

        {/* Project-specific sections */}
        {isProject && (
          <>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-primary">Technologies</h3>
              <div className="flex flex-wrap gap-1.5">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-surface/40 rounded-full text-xs text-secondary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-primary">Key Features</h3>
              <ul className="space-y-1">
                {experience.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-sm text-secondary/80 flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  // Open in new tab to preserve Unity panel state
                  window.open(`/projects/${experience.id}`, "_blank");
                }}
                className="w-full bg-[#0078d7] hover:bg-[#006cbd] text-white text-sm font-medium py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <span>View Project Details</span>
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
              </button>
            </div>
          </>
        )}

        {/* Work Experience-specific sections */}
        {isWorkExperience && (
          <>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-primary">Designation</h3>
              <p className="text-sm text-secondary/80">
                {experience.designation}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-primary">Projects</h3>
              <ul className="space-y-1">
                {experience.projects.map((project, index) => (
                  <li
                    key={index}
                    className="text-sm text-secondary/80 flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-primary">Technologies</h3>
              <div className="flex flex-wrap gap-1.5">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-surface/40 rounded-full text-xs text-secondary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {experience.achievements && (
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-primary">
                  Key Achievements
                </h3>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-sm text-secondary/80 flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}
