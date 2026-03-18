import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { categories, projects } from "../data/portfolioData";

function ProjectCard({ project }) {
  const preview = project.media?.[0];
  const badgeClass =
    project.difficulty === "BOSS"
      ? "bg-green-500 text-white"
      : project.difficulty === "LEGEND"
        ? "bg-secondary text-black"
        : project.difficulty === "ELITE"
          ? "bg-accent-blue text-white"
          : "bg-primary text-white";

  return (
    <article className="card-glow group overflow-hidden bg-white shadow-neo-lg">
      <div className="retro-border-8 h-full">
        <div className="relative h-60 overflow-hidden border-b-8 border-black bg-slate-100">
          <div
            className={`retro-border-4 absolute right-4 top-4 z-10 px-3 py-1 font-retro text-[11px] uppercase ${badgeClass}`}
          >
            {project.difficulty}
          </div>
          {preview ? (
            preview.type === "video" ? (
              <video
                src={preview.url}
                className="h-full w-full object-cover grayscale transition duration-300 group-hover:scale-105 group-hover:grayscale-0"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={preview.url}
                alt={preview.caption || project.title}
                className="h-full w-full object-cover grayscale transition duration-300 group-hover:scale-105 group-hover:grayscale-0"
              />
            )
          ) : (
            <div className="flex h-full items-center justify-center font-retro text-base uppercase">
              No preview
            </div>
          )}
        </div>

        <div className="space-y-5 p-7">
          <div className="space-y-3">
            <p className="font-retro text-[11px] uppercase text-primary">
              {project.type}
            </p>
            <h2 className="text-2xl uppercase">{project.questTitle}</h2>
            <p className="text-base font-bold leading-relaxed text-slate-700">
              {project.summary}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-retro text-[11px] uppercase">XP:</span>
              <div className="retro-border-4 h-3 flex-1 overflow-hidden bg-gray-200">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${project.difficultyPercent}%` }}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.loot.slice(0, 4).map((item) => (
                <span
                  key={item}
                  className="bg-black px-2 py-1 text-sm font-black uppercase text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to={`/projects/${project.id}`}
              state={{ from: "projects" }}
              className="hover-bounce retro-border-4 bg-primary px-5 py-3 text-sm font-black uppercase text-white shadow-neo transition-all"
            >
              QUEST_LOG
            </Link>
            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="hover-bounce retro-border-4 bg-white px-5 py-3 text-sm font-black uppercase shadow-neo transition-all"
              >
                LIVE_DEMO
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory),
    [selectedCategory],
  );

  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="retro-border-8 bg-white p-8 shadow-neo-lg md:p-10">
          <p className="font-retro text-[11px] uppercase text-primary">
            FULL_QUEST_LOG
          </p>
          <h1 className="mt-4 text-4xl uppercase tracking-tight md:text-6xl">
            Projects &amp; Systems
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-bold leading-relaxed text-slate-700">
            A complete run through the gameplay systems, tools, educational
            builds, AR prototypes, and business applications I have worked on.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`retro-border-4 px-4 py-2 font-retro text-[11px] uppercase shadow-neo transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white hover:-translate-x-1 hover:-translate-y-1"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
