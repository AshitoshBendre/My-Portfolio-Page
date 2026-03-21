import { Link } from "react-router-dom";
import {
  featuredProjectIds,
  journey,
  profile,
  projects,
  skills,
} from "../data/portfolioData";

const featuredProjects = featuredProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);

function SectionTitle({
  title,
  subtitle,
  centered = false,
  titleClassName = "",
  subtitleClassName = "",
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className={`text-3xl uppercase tracking-tight md:text-5xl ${titleClassName}`}>
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-3 font-retro text-[11px] uppercase tracking-[0.2em] text-primary ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function QuestCard({ project }) {
  const preview = project.media?.[0];
  const accentClass =
    project.difficulty === "BOSS"
      ? "bg-green-500"
      : project.difficulty === "LEGEND"
        ? "bg-secondary text-black"
        : project.difficulty === "ELITE"
          ? "bg-accent-blue text-white"
          : "bg-primary text-white";

  return (
    <article className="card-glow group overflow-hidden bg-white shadow-neo-lg">
      <div className="retro-border-8 h-full">
        <div className="relative h-64 overflow-hidden border-b-8 border-black bg-slate-100">
          <div
            className={`absolute right-4 top-4 z-10 px-3 py-1 font-retro text-[11px] uppercase ${accentClass} retro-border-4`}
          >
            {project.difficulty}
          </div>
          {preview ? (
            preview.type === "video" ? (
              <video
                src={preview.url}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={preview.url}
                alt={preview.caption || project.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            )
          ) : (
            <div className="flex h-full items-center justify-center bg-primary/10 font-retro text-base">
              NO_PREVIEW
            </div>
          )}
        </div>
        <div className="space-y-5 p-7">
          <div>
            <h3 className="text-2xl uppercase">{project.questTitle}</h3>
            <p className="mt-3 min-h-[3rem] text-base font-bold leading-relaxed text-slate-700">
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
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="bg-black px-2 py-1 text-sm font-black uppercase text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/projects/${project.id}`}
              state={{ from: "home-projects" }}
              className="hover-bounce retro-border-4 bg-primary px-5 py-3 text-sm font-black text-white shadow-neo transition-all"
            >
              OPEN_QUEST
            </Link>
            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="hover-bounce retro-border-4 bg-white px-5 py-3 text-sm font-black shadow-neo transition-all"
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

export default function HomePage() {
  const handleViewQuests = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const emailSubject = encodeURIComponent("Portfolio Inquiry");
  const emailBody = encodeURIComponent(
    `Hello Ashitosh,

I came across your portfolio and would like to connect regarding a potential opportunity/project.

Here are a few details:
- Name:
- Company:
- Project / Role:
- Timeline:

Looking forward to hearing from you.

Best regards,`,
  );
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}&su=${emailSubject}&body=${emailBody}`;

  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="floating absolute left-8 top-20 hidden size-16 bg-primary opacity-20 retro-border-4 lg:block" />
        <div
          className="floating absolute right-20 top-40 hidden size-24 rounded-full border-8 border-secondary opacity-30 lg:block"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="floating absolute bottom-20 left-1/4 hidden h-0 w-0 border-b-[50px] border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-accent-blue opacity-25 lg:block"
          style={{ animationDelay: "2s" }}
        />
        <div className="mx-auto max-w-5xl">
          <div className="retro-border-8 relative bg-white p-8 shadow-neo-lg md:p-14">
            <div className="retro-border-4 absolute -right-4 -top-4 rotate-6 bg-secondary px-4 py-2 font-retro text-[11px] shadow-neo md:-right-6 md:-top-6">
              {profile.stats.level}
            </div>
            <div className="retro-border-4 absolute -bottom-4 -left-4 -rotate-3 bg-accent-blue px-4 py-2 font-retro text-[11px] text-white shadow-neo md:-bottom-6 md:-left-6">
              {profile.stats.badge}
            </div>
            <div className="space-y-8">
              <div className="inline-block bg-black px-4 py-2 font-retro text-[12px] text-white">
                PLAYER 1: CONNECTED
              </div>
              <div className="space-y-5">
                <h1 className="text-4xl uppercase italic leading-none md:text-7xl">
                  {profile.name.split(" ")[0]}{" "}
                  <span className="text-primary">{profile.name.split(" ")[1]}</span>
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-4 bg-primary" />
                  <p className="text-2xl font-black uppercase md:text-3xl">
                    {profile.role}
                  </p>
                </div>
                <p className="retro-border-4 max-w-3xl bg-slate-100 p-4 text-lg font-bold leading-relaxed md:text-xl">
                  {profile.tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-5">
                <button
                  type="button"
                  onClick={handleViewQuests}
                  className="hover-bounce retro-border-4 flex items-center gap-3 bg-primary px-8 py-4 text-sm font-black text-white shadow-neo transition-all"
                >
                  VIEW_QUESTS
                </button>
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-bounce retro-border-4 flex items-center gap-3 bg-white px-8 py-4 text-sm font-black shadow-neo transition-all"
                >
                  GITHUB.SRC
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y-8 border-black bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-5">
            <div className="retro-border-8 group bg-accent-blue p-2 shadow-neo-lg">
              <div className="retro-border-4 aspect-square overflow-hidden bg-slate-200">
                <img
                  src={profile.heroImage}
                  alt={profile.name}
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                />
              </div>
            </div>
            <div className="retro-border-4 absolute -bottom-8 left-6 right-6 bg-black p-4 font-retro text-[11px] text-white shadow-neo">
              <div className="mb-2 flex justify-between uppercase">
                <span>HP: {profile.stats.hp}</span>
                <span className="text-secondary">MP: {profile.stats.mp}</span>
              </div>
              <div className="retro-border-4 h-4 overflow-hidden bg-gray-800">
                <div className="hp-bar-fill h-full bg-primary" style={{ width: "100%" }} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-7">
            <SectionTitle title="// THE_PROFILE" />
            <div className="retro-border-8 relative bg-background-grid p-8 shadow-neo">
              <div className="space-y-6">
                {profile.intro.map((paragraph) => (
                  <p key={paragraph} className="text-xl font-bold leading-relaxed text-slate-800">
                    {paragraph}
                  </p>
                ))}
                <div className="retro-border-4 inline-flex bg-white px-4 py-3 font-retro text-[11px] uppercase shadow-neo">
                  {profile.stats.years}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
            <SectionTitle title="FEATURED QUESTS" subtitle="Portfolio highlights" />
            <Link
              to="/projects"
              className="font-retro text-[11px] uppercase text-primary underline decoration-4 underline-offset-4"
            >
              OPEN_FULL_QUEST_LOG
            </Link>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <QuestCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="abilities" className="border-y-8 border-black bg-secondary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="ABILITIES_MENU"
            subtitle="Systems I level up regularly"
            centered
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => (
              <article
                key={skill.title}
                className="hover-bounce retro-border-4 bg-white p-6 shadow-neo transition-all"
              >
                <div
                  className={`retro-border-4 mb-6 flex size-16 items-center justify-center text-2xl font-black ${skill.accent}`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl uppercase">{skill.title}</h3>
                <div className="mt-6 space-y-5">
                  {skill.entries.map((entry) => (
                    <div key={entry.label} className="space-y-2">
                      <div className="flex justify-between font-retro text-[11px] uppercase">
                        <span>{entry.label}</span>
                        <span>{entry.value}</span>
                      </div>
                      <div className="h-4 border-2 border-black bg-gray-100">
                        <div
                          className={`h-full ${skill.progressClass}`}
                          style={{ width: `${entry.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="SKILL_TREE_LOG"
            subtitle="Career journey and unlocked skills"
            centered
          />
          <div className="relative mt-20">
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-2 -translate-x-1/2 bg-black md:block" />
            <div className="space-y-14">
              {journey.map((item, index) => {
                const isRight = item.align === "right";

                return (
                  <div key={item.title} className="relative">
                    <div
                      className={`absolute left-1/2 top-6 hidden size-10 -translate-x-1/2 shadow-neo md:block ${item.accent} retro-border-4 ${index === 0 ? "rotate-45" : ""}`}
                    />
                    <div
                      className={`flex ${isRight ? "md:justify-end" : "md:justify-start"}`}
                    >
                      <div className="retro-border-8 max-w-xl bg-background-grid p-6 shadow-neo-lg md:w-[calc(50%_-_3rem)]">
                        <span className="font-retro text-[11px] uppercase text-primary">
                          {item.badge}
                        </span>
                        <h3 className="mt-3 text-2xl uppercase">{item.title}</h3>
                        <p className="mt-2 text-base font-black uppercase text-slate-600">
                          {item.subtitle}
                        </p>
                        <div className="mt-5 border-t-4 border-black pt-4">
                          <h4 className="font-retro text-[11px] uppercase">
                            UNLOCKED_SKILLS:
                          </h4>
                          <ul className="mt-3 grid gap-2 text-base font-bold md:grid-cols-2">
                            {item.skills.map((skill) => (
                              <li key={skill} className="flex items-center gap-2">
                                <span className="text-primary">*</span>
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="pixel-grid border-t-8 border-black bg-black px-6 py-24 text-white"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 2px, transparent 2px)",
        }}
      >
        <div className="mx-auto max-w-7xl text-center">
          <SectionTitle
            title="READY FOR THE NEXT QUEST?"
            subtitle="Insert coin or press start"
            centered
            titleClassName="text-black"
            subtitleClassName="text-black"
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <a
              href={gmailComposeLink}
              target="_blank"
              rel="noreferrer"
              className="hover-bounce retro-border-8 group flex flex-col items-center bg-white p-10 text-black shadow-neo transition-all hover:bg-secondary"
            >
              <span className="mb-6 text-5xl font-black transition group-hover:scale-125">
                @
              </span>
              <h3 className="text-2xl uppercase">EMAIL</h3>
              <p className="mt-2 font-retro text-[11px] uppercase text-slate-700">
                SEND_QUEST_INVITE
              </p>
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover-bounce retro-border-8 group flex flex-col items-center bg-white p-10 text-black shadow-neo transition-all hover:bg-primary hover:text-white"
            >
              <span className="mb-6 text-5xl font-black transition group-hover:scale-125">
                &lt;/&gt;
              </span>
              <h3 className="text-2xl uppercase">GITHUB</h3>
              <p className="mt-2 font-retro text-[11px] uppercase text-slate-700 group-hover:text-white">
                FORK_REPOSITORY
              </p>
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover-bounce retro-border-8 group flex flex-col items-center bg-white p-10 text-black shadow-neo transition-all hover:bg-accent-blue hover:text-white"
            >
              <span className="mb-6 text-5xl font-black transition group-hover:scale-125">
                in
              </span>
              <h3 className="text-2xl uppercase">LINKEDIN</h3>
              <p className="mt-2 font-retro text-[11px] uppercase text-slate-700 group-hover:text-white">
                PARTY_INVITATION
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
