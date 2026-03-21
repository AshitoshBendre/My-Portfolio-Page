import { featuredProjectIds, projects } from "../data/portfolioData";

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function getDifficultyBadgeClass(difficulty) {
  switch (difficulty) {
    case "BOSS":
      return "bg-green-500 text-white";
    case "LEGEND":
      return "bg-secondary text-black";
    case "ELITE":
      return "bg-accent-blue text-white";
    default:
      return "bg-primary text-white";
  }
}

export function buildGmailComposeLink(email) {
  const subject = encodeURIComponent("Portfolio Inquiry");
  const body = encodeURIComponent(
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

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
}

export function getFeaturedProjects() {
  return featuredProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);
}

export function getPageTitle(pathname) {
  if (pathname.startsWith("/projects/")) {
    return "Ashitosh Bendre | Quest Log";
  }

  const titles = {
    "/": "Ashitosh Bendre | Home",
    "/projects": "Ashitosh Bendre | All Quests",
  };

  return titles[pathname] || "Ashitosh Bendre";
}
