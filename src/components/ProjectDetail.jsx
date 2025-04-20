import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { projects } from "./Projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    adaptiveHeight: false,
    beforeChange: (current, next) => setActiveSlide(next),
    arrows: true,
  };

  useEffect(() => {
    setIsLoading(true);
    const foundProject = projects.find((p) => p.id === id);
    console.log("Found project:", foundProject);
    setProject(foundProject);
    setIsLoading(false);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block"
        >
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </motion.div>
      </div>
    );
  }

  if (!project) {
    console.log("Project not found for id:", id);
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-2xl text-primary mb-4">Project not found</h1>
        <Link
          to="/projects"
          className="inline-flex items-center text-secondary hover:text-primary transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>
      </motion.div>
    );
  }

  console.log("Rendering project:", project);
  console.log("Media:", project.media);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-12"
      >
        <Link
          to="/projects"
          className="inline-flex items-center text-secondary hover:text-primary mb-8 transition-colors group"
        >
          <motion.svg
            className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </motion.svg>
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold text-primary mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {project.category}
                </span>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-1 bg-primary text-white text-sm rounded-full hover:bg-[#0078d7] transition-colors"
                  >
                    <span>View Live</span>
                    <svg
                      className="w-4 h-4 ml-2"
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
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="media-container"
            >
              {project.media && project.media.length > 0 ? (
                <Slider {...sliderSettings}>
                  {project.media.map((item, index) => (
                    <div key={index} className="slide-item">
                      {item.type === "video" ? (
                        <div className="media-wrapper">
                          <video
                            key={item.url}
                            src={item.url}
                            controls
                            playsInline
                            autoPlay={activeSlide === index}
                            muted={activeSlide !== index}
                          />
                          {item.caption && (
                            <div className="media-caption">{item.caption}</div>
                          )}
                        </div>
                      ) : (
                        <div className="media-wrapper">
                          <img src={item.url} alt={item.caption} />
                          {item.caption && (
                            <div className="media-caption">{item.caption}</div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="w-full aspect-video bg-surface/20 rounded-lg flex items-center justify-center text-primary/60">
                  No media available
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-invert max-w-none"
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Overview
              </h2>
              <p className="text-secondary/80 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 transition-colors group-hover:text-[#0078d7]"
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
                    <span className="text-secondary/80 group-hover:text-secondary transition-colors">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-surface/20 rounded-xl p-6 hover:bg-surface/30 transition-colors"
            >
              <h2 className="text-xl font-semibold text-primary mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-surface/20 rounded-xl p-6 hover:bg-surface/30 transition-colors"
            >
              <h2 className="text-xl font-semibold text-primary mb-4">
                Project Status
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-secondary">Active Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="text-secondary">
                    Latest Update: {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
