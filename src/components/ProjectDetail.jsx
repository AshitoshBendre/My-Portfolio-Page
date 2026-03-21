import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getProjectById, projects } from "../data/portfolioData";
import ProjectMediaGallery from "./projects/ProjectMediaGallery";
import BulletList from "./ui/BulletList";

export default function ProjectDetail() {
  const { id } = useParams();
  const location = useLocation();
  const project = getProjectById(id);
  const projectIndex = projects.findIndex((entry) => entry.id === id);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex >= 0 && projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  const openedFromHome = location.state?.from === "home-projects";
  const questOrigin = location.state?.from || "projects";
  const backDestination = openedFromHome ? "/" : "/projects";
  const backState = openedFromHome ? { scrollTo: "projects" } : null;
  const backLabel = openedFromHome
    ? "RETURN_TO_HOME_QUESTS"
    : "RETURN_TO_ALL_QUESTS";

  if (!project) {
    return (
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="retro-border-8 bg-white p-10 text-center shadow-neo-lg">
            <h1 className="text-3xl uppercase">Quest Not Found</h1>
            <p className="mt-4 text-lg font-bold leading-relaxed text-slate-700">
              That project entry does not exist in the current quest log.
            </p>
            <Link
              to="/projects"
              className="hover-bounce retro-border-4 mt-8 inline-block bg-primary px-6 py-3 text-sm font-black uppercase text-white shadow-neo transition-all"
            >
              BACK_TO_QUESTS
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Link
          to={backDestination}
          state={backState}
          className="font-retro text-[11px] uppercase text-primary underline decoration-4 underline-offset-4"
        >
          &lt; {backLabel}
        </Link>

        <div className="retro-border-8 mt-6 overflow-hidden bg-white shadow-neo-blue">
          <div className="grid md:grid-cols-[minmax(300px,0.9fr)_1.4fr]">
            <aside className="border-b-8 border-black bg-slate-100 md:border-b-0 md:border-r-8">
              <div className="border-b-8 border-black bg-white p-6">
                <ProjectMediaGallery project={project} />
              </div>

              <div className="space-y-8 bg-white p-6">
                <div>
                  <h4 className="font-retro text-[11px] uppercase text-primary">
                    // LOOT_COLLECTED
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.loot.map((item) => (
                      <span
                        key={item}
                        className="bg-black px-2 py-1 text-sm font-black uppercase text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between font-retro text-[11px] uppercase">
                      <span>COMPLETION_RATE</span>
                      <span>100%</span>
                    </div>
                    <div className="retro-border-4 h-4 overflow-hidden bg-gray-200">
                      <div className="h-full bg-green-500" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between font-retro text-[11px] uppercase">
                      <span>CHALLENGE_LVL</span>
                      <span>{project.difficulty}</span>
                    </div>
                    <div className="retro-border-4 h-4 overflow-hidden bg-gray-200">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${project.difficultyPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex flex-col gap-8 p-6 md:p-10">
              <div className="space-y-2">
                <p className="font-retro text-[12px] uppercase text-accent-blue">
                  ### {project.type}
                </p>
                <h1 className="text-3xl uppercase tracking-tight md:text-5xl">
                  {project.questTitle}
                </h1>
              </div>

              <div className="retro-border-4 relative bg-background-grid p-6">
                <div className="absolute -top-4 left-4 bg-black px-3 py-1 font-retro text-[11px] text-white">
                  QUEST_DATA
                </div>
                <p className="text-lg font-bold leading-relaxed text-slate-800">
                  {project.description}
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="retro-border-4 border-2 border-dashed p-5">
                  <h2 className="font-retro text-[11px] uppercase">Architecture</h2>
                  <div className="mt-4">
                    <BulletList items={project.architecture} markerClass="text-accent-blue" />
                  </div>
                </div>
                <div className="retro-border-4 border-2 border-dashed p-5">
                  <h2 className="font-retro text-[11px] uppercase">Challenges</h2>
                  <div className="mt-4">
                    <BulletList items={project.challenges} markerClass="text-primary" />
                  </div>
                </div>
              </div>

              <div className="retro-border-4 p-5">
                <h2 className="font-retro text-[11px] uppercase">Tech Stack</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black px-3 py-2 text-sm font-black uppercase text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="retro-border-4 p-5">
                <h2 className="font-retro text-[11px] uppercase">Highlights</h2>
                <div className="mt-4">
                  <BulletList items={project.highlights} markerClass="text-secondary" />
                </div>
              </div>

              <div className="retro-border-4 p-5">
                <h2 className="font-retro text-[11px] uppercase">Quest Flow</h2>
                <div className="mt-4 flex flex-wrap gap-4">
                  {previousProject ? (
                    <Link
                      to={`/projects/${previousProject.id}`}
                      state={{ from: questOrigin }}
                      className="hover-bounce retro-border-4 bg-white px-5 py-3 text-sm font-black uppercase shadow-neo transition-all"
                    >
                      PREV: {previousProject.questTitle}
                    </Link>
                  ) : null}
                  {nextProject ? (
                    <Link
                      to={`/projects/${nextProject.id}`}
                      state={{ from: questOrigin }}
                      className="hover-bounce retro-border-4 bg-primary px-5 py-3 text-sm font-black uppercase text-white shadow-neo transition-all"
                    >
                      NEXT: {nextProject.questTitle}
                    </Link>
                  ) : null}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-4 pt-4">
                {project.website ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-bounce retro-border-4 bg-black px-6 py-4 text-sm font-black uppercase text-white shadow-neo transition-all"
                  >
                    LIVE_BUILD
                  </a>
                ) : null}
                <Link
                  to={backDestination}
                  state={backState}
                  className="hover-bounce retro-border-4 bg-secondary px-6 py-4 text-sm font-black uppercase shadow-neo transition-all"
                >
                  CLOSE_MENU
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
