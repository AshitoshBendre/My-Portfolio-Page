import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { categories, projects } from "../data/portfolioData";
import ProjectCard from "./projects/ProjectCard";

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
            <ProjectCard
              key={project.id}
              project={project}
              origin="projects"
              primaryActionLabel="QUEST_LOG"
              secondaryActionLabel="LIVE_DEMO"
              showType
              tagSource="loot"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
