import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getProjectById, projects } from "../data/portfolioData";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "00:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function QuestVideoPlayer({ src, caption }) {
  const inlineVideoRef = useRef(null);
  const expandedVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const getActiveVideo = () =>
    (isExpanded ? expandedVideoRef.current : inlineVideoRef.current) || inlineVideoRef.current;

  const togglePlay = () => {
    const video = getActiveVideo();
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = getActiveVideo();
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const syncStateFromVideo = (video) => {
    if (!video) return;

    setCurrentTime(video.currentTime);
    setDuration(video.duration || 0);
    setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0);
    setIsMuted(Boolean(video.muted));
    setIsPlaying(!video.paused);
  };

  const handleTimeUpdate = (target = "inline") => {
    const video =
      target === "expanded" ? expandedVideoRef.current : inlineVideoRef.current;
    syncStateFromVideo(video);
  };

  const handleSeek = (event) => {
    const video = getActiveVideo();
    if (!video) return;

    const nextProgress = Number(event.target.value);
    video.currentTime = (nextProgress / 100) * (video.duration || 0);
    setProgress(nextProgress);
  };

  const openExpanded = () => {
    const inlineVideo = inlineVideoRef.current;
    if (!inlineVideo) return;

    syncStateFromVideo(inlineVideo);
    setIsExpanded(true);
  };

  const closeExpanded = useCallback(() => {
    const expandedVideo = expandedVideoRef.current;
    const inlineVideo = inlineVideoRef.current;
    if (expandedVideo && inlineVideo) {
      inlineVideo.currentTime = expandedVideo.currentTime;
      inlineVideo.muted = expandedVideo.muted;
      if (expandedVideo.paused) {
        inlineVideo.pause();
      } else {
        inlineVideo.play();
      }
      syncStateFromVideo(inlineVideo);
      expandedVideo.pause();
    }

    setIsExpanded(false);
  }, []);

  useEffect(() => {
    if (!isExpanded) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeExpanded();
      }
    };

    document.body.classList.add("video-modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("video-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeExpanded, isExpanded]);

  useEffect(() => {
    if (!isExpanded) return;

    const inlineVideo = inlineVideoRef.current;
    const expandedVideo = expandedVideoRef.current;
    if (!inlineVideo || !expandedVideo) return;

    expandedVideo.currentTime = inlineVideo.currentTime;
    expandedVideo.muted = inlineVideo.muted;
    syncStateFromVideo(expandedVideo);

    if (!inlineVideo.paused) {
      expandedVideo
        .play()
        .then(() => {
          inlineVideo.pause();
          syncStateFromVideo(expandedVideo);
        })
        .catch(() => {
          syncStateFromVideo(expandedVideo);
        });
    }
  }, [isExpanded]);

  return (
    <>
      <div className="space-y-3">
        <div className="retro-border-4 overflow-hidden bg-black shadow-neo">
          <div className="border-b-4 border-primary bg-black px-4 py-2 font-retro text-[11px] uppercase text-white">
            QUEST_REPLAY
          </div>
          <div className="bg-[linear-gradient(180deg,#0f172a_0%,#000_100%)] p-3">
            <video
              ref={inlineVideoRef}
              src={src}
              playsInline
              className="aspect-video w-full bg-black object-contain"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={() => handleTimeUpdate("inline")}
              onLoadedMetadata={() => handleTimeUpdate("inline")}
              onVolumeChange={() => setIsMuted(Boolean(inlineVideoRef.current?.muted))}
            />
          </div>
          <div className="border-t-4 border-black bg-white p-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="hover-bounce retro-border-4 min-w-28 bg-primary px-4 py-2 font-retro text-[11px] uppercase text-white shadow-neo transition-all"
              >
                {isPlaying ? "PAUSE" : "PLAY"}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="hover-bounce retro-border-4 min-w-24 bg-white px-4 py-2 font-retro text-[11px] uppercase shadow-neo transition-all"
              >
                {isMuted ? "UNMUTE" : "MUTE"}
              </button>
              <button
                type="button"
                onClick={openExpanded}
                className="hover-bounce retro-border-4 min-w-24 bg-accent-blue px-4 py-2 font-retro text-[11px] uppercase text-white shadow-neo transition-all"
              >
                EXPAND
              </button>
              <div className="ml-auto font-retro text-[11px] uppercase text-slate-700">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="quest-slider mt-4 w-full"
              style={{ "--progress": `${progress}%` }}
              aria-label="Seek video"
            />
          </div>
        </div>
        {caption ? (
          <p className="font-retro text-[11px] uppercase text-slate-600">{caption}</p>
        ) : null}
      </div>

      {isExpanded ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={closeExpanded}
        >
          <div
            className="retro-border-8 w-full max-w-6xl overflow-hidden bg-white shadow-neo-blue"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-8 border-black bg-white px-4 py-3">
              <span className="font-retro text-[11px] uppercase text-primary">
                ENLARGED_QUEST_REPLAY
              </span>
              <button
                type="button"
                onClick={closeExpanded}
                className="hover-bounce retro-border-4 bg-primary px-4 py-2 font-retro text-[11px] uppercase text-white shadow-neo transition-all"
              >
                CLOSE
              </button>
            </div>

            <div className="bg-[linear-gradient(180deg,#0f172a_0%,#000_100%)] p-4 md:p-6">
              <video
                ref={expandedVideoRef}
                src={src}
                playsInline
                className="max-h-[75vh] w-full bg-black object-contain"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={() => handleTimeUpdate("expanded")}
                onLoadedMetadata={() => handleTimeUpdate("expanded")}
                onVolumeChange={() => setIsMuted(Boolean(expandedVideoRef.current?.muted))}
              />
            </div>

            <div className="border-t-8 border-black bg-white p-4 md:p-5">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="hover-bounce retro-border-4 min-w-28 bg-primary px-4 py-2 font-retro text-[11px] uppercase text-white shadow-neo transition-all"
                >
                  {isPlaying ? "PAUSE" : "PLAY"}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="hover-bounce retro-border-4 min-w-24 bg-white px-4 py-2 font-retro text-[11px] uppercase shadow-neo transition-all"
                >
                  {isMuted ? "UNMUTE" : "MUTE"}
                </button>
                <div className="ml-auto font-retro text-[11px] uppercase text-slate-700">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="quest-slider mt-4 w-full"
                style={{ "--progress": `${progress}%` }}
                aria-label="Seek video"
              />
              {caption ? (
                <p className="mt-4 font-retro text-[11px] uppercase text-slate-600">
                  {caption}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function MediaPanel({ project }) {
  const media = project.media?.length ? project.media : [];

  if (!media.length) {
    return (
      <div className="retro-border-4 flex aspect-square items-center justify-center bg-slate-200 font-retro text-base uppercase">
        No preview
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {media.map((item, index) => (
        <div key={`${project.id}-${index}`} className="space-y-2">
          {item.type === "video" ? (
            <QuestVideoPlayer src={item.url} caption={item.caption} />
          ) : (
            <>
              <div className="retro-border-4 overflow-hidden bg-black shadow-neo">
                <div className="border-b-4 border-accent-blue bg-black px-4 py-2 font-retro text-[11px] uppercase text-white">
                  QUEST_CAPTURE
                </div>
                <img
                  src={item.url}
                  alt={item.caption || project.title}
                  className="aspect-video w-full object-cover"
                />
              </div>
              {item.caption ? (
                <p className="font-retro text-[11px] uppercase text-slate-600">
                  {item.caption}
                </p>
              ) : null}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function BulletList({ items, markerClass }) {
  return (
    <ul className="space-y-2 text-base font-bold leading-relaxed text-slate-800">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className={markerClass}>*</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

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
                <MediaPanel project={project} />
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
