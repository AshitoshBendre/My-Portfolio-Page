import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./components/HomePage";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import resumePDF from "./assets/ProjectAssets/Ashitosh_Bendre_Resume.pdf";
import { profile } from "./data/portfolioData";

const navLinks = [
  { label: "START", sectionId: "about" },
  { label: "QUESTS", sectionId: "projects" },
  { label: "ABILITIES", sectionId: "abilities" },
  { label: "SAVE", sectionId: "contact" },
];

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function NavSectionLink({ sectionId, label, onNavigate }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    onNavigate?.();

    if (location.pathname === "/") {
      scrollToSection(sectionId);
      return;
    }

    navigate("/", { state: { scrollTo: sectionId } });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="uppercase transition-colors hover:text-primary"
    >
      {label}
    </button>
  );
}

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Ashitosh Bendre | Home",
      "/projects": "Ashitosh Bendre | All Quests",
    };

    if (location.pathname.startsWith("/projects/")) {
      document.title = "Ashitosh Bendre | Quest Log";
    } else {
      document.title = titles[location.pathname] || "Ashitosh Bendre";
    }

    if (location.pathname === "/" && location.state?.scrollTo) {
      const timeout = window.setTimeout(() => {
        scrollToSection(location.state.scrollTo);
        window.history.replaceState({}, document.title, location.pathname);
      }, 50);

      return () => window.clearTimeout(timeout);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return undefined;
  }, [location]);

  return null;
}

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMobile = () => setMobileOpen(false);

  const handleHireMe = () => {
    closeMobile();

    if (location.pathname === "/") {
      scrollToSection("contact");
      return;
    }

    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <header className="sticky top-0 z-50 border-b-8 border-black bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={closeMobile}>
          <div className="retro-border-4 flex size-12 items-center justify-center bg-primary text-xl font-black text-white shadow-neo">
            PX
          </div>
          <h2 className="text-xl uppercase tracking-tight md:text-2xl">
            {profile.handle}
          </h2>
        </Link>

        <nav className="hidden items-center gap-8 font-retro text-[11px] md:flex">
          {navLinks.map((link) => (
            <NavSectionLink
              key={link.label}
              sectionId={link.sectionId}
              label={link.label}
            />
          ))}
          <Link to="/projects" className="uppercase transition-colors hover:text-primary">
            ALL_QUESTS
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={resumePDF}
            download="Ashitosh_Bendre_Resume.pdf"
            className="retro-border-4 bg-white px-4 py-2 font-retro text-[11px] uppercase shadow-neo transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            RESUME.DAT
          </a>
          <button
            type="button"
            onClick={handleHireMe}
            className="retro-border-4 bg-secondary px-4 py-2 font-retro text-[11px] uppercase shadow-neo transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:px-6"
          >
            HIRE_ME
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="retro-border-4 bg-white px-4 py-2 font-retro text-[11px] uppercase shadow-neo transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {mobileOpen ? (
        <div className="mx-auto mt-4 max-w-7xl retro-border-4 bg-white p-4 shadow-neo">
          <div className="flex flex-col gap-4 font-retro text-[11px] uppercase">
            {navLinks.map((link) => (
              <NavSectionLink
                key={link.label}
                sectionId={link.sectionId}
                label={link.label}
                onNavigate={closeMobile}
              />
            ))}
            <Link
              to="/projects"
              onClick={closeMobile}
              className="uppercase transition-colors hover:text-primary"
            >
              ALL_QUESTS
            </Link>
            <a href={resumePDF} download="Ashitosh_Bendre_Resume.pdf" onClick={closeMobile}>
              RESUME.DAT
            </a>
            <button type="button" onClick={handleHireMe} className="text-left">
              HIRE_ME
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t-8 border-black bg-white px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-lg font-black uppercase">
            &copy; {new Date().getFullYear()} {profile.handle}
          </p>
          <p className="font-retro text-[10px] uppercase text-slate-600">
            PRESS_START_TO_CONTINUE...
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex gap-2">
            <div className="retro-border-4 size-6 bg-primary shadow-mini-neo" />
            <div className="retro-border-4 size-6 bg-secondary shadow-mini-neo" />
            <div className="retro-border-4 size-6 bg-accent-blue shadow-mini-neo" />
          </div>
          <span className="bg-black px-4 py-2 text-sm font-black uppercase text-white">
            MADE WITH UNITY &amp; CHAOS
          </span>
        </div>
      </div>
    </footer>
  );
}

function AppShell() {
  return (
    <div className="pixel-grid min-h-screen overflow-x-hidden bg-background-grid text-slate-900 selection:bg-secondary selection:text-black">
      <RouteEffects />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <SiteFooter />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppShell />
      </Router>
    </ErrorBoundary>
  );
}
