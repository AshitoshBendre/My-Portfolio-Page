import { Link } from "react-router-dom";
import { getDifficultyBadgeClass } from "../../utils/portfolioHelpers";

function ProjectPreview({ project }) {
  const preview = project.media?.[0];

  if (!preview) {
    return (
      <div className="flex h-full items-center justify-center bg-primary/10 font-retro text-base uppercase">
        NO_PREVIEW
      </div>
    );
  }

  if (preview.type === "video") {
    return (
      <video
        src={preview.url}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <img
      src={preview.url}
      alt={preview.caption || project.title}
      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
    />
  );
}

export default function ProjectCard({
  project,
  origin = "projects",
  primaryActionLabel = "QUEST_LOG",
  secondaryActionLabel = "LIVE_DEMO",
  showType = false,
  tagSource = "loot",
  summaryMinHeightClass = "",
  imageHeightClass = "h-60",
}) {
  const badgeClass = getDifficultyBadgeClass(project.difficulty);
  const tags =
    tagSource === "technologies"
      ? project.technologies.slice(0, 3)
      : project.loot.slice(0, 4);

  return (
    <article className="card-glow group overflow-hidden bg-white shadow-neo-lg">
      <div className="retro-border-8 h-full">
        <div
          className={`relative overflow-hidden border-b-8 border-black bg-slate-100 ${imageHeightClass}`}
        >
          <div
            className={`retro-border-4 absolute right-4 top-4 z-10 px-3 py-1 font-retro text-[11px] uppercase ${badgeClass}`}
          >
            {project.difficulty}
          </div>
          <ProjectPreview project={project} />
        </div>

        <div className="space-y-5 p-7">
          <div className="space-y-3">
            {showType ? (
              <p className="font-retro text-[11px] uppercase text-primary">
                {project.type}
              </p>
            ) : null}
            <h3 className="text-2xl uppercase">{project.questTitle}</h3>
            <p
              className={`text-base font-bold leading-relaxed text-slate-700 ${summaryMinHeightClass}`}
            >
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
              {tags.map((item) => (
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
              state={{ from: origin }}
              className="hover-bounce retro-border-4 bg-primary px-5 py-3 text-sm font-black uppercase text-white shadow-neo transition-all"
            >
              {primaryActionLabel}
            </Link>
            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="hover-bounce retro-border-4 bg-white px-5 py-3 text-sm font-black uppercase shadow-neo transition-all"
              >
                {secondaryActionLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
