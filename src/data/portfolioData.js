import arDemo from "../assets/ProjectAssets/ARDemo.mp4";
import bounceGameLevelDemo from "../assets/ProjectAssets/Bounce Remake Media/Game Level Demo.mp4";
import bounceGameScreenshot from "../assets/ProjectAssets/Bounce Remake Media/Game Screenshot 1.png";
import bounceLevelDemo from "../assets/ProjectAssets/Bounce Remake Media/Level Demo.mp4";
import bounceLevelFinish from "../assets/ProjectAssets/Bounce Remake Media/Level Finish.png";
import cellIntro from "../assets/ProjectAssets/CSIntro.png";
import cellLabel from "../assets/ProjectAssets/CSLabel.png";
import portfolioImage from "../assets/ProjectAssets/Portfolio.png";
import pocketRocketGameplay from "../assets/ProjectAssets/PRGameplay.png";
import pocketRocketWebsite from "../assets/ProjectAssets/PRWebsite.png";
import sanskritDoc from "../assets/ProjectAssets/SEA-Gameplay Design Doc.png";
import stackyLogsImage from "../assets/ProjectAssets/StackyLogs.png";
import stackyLogsVideo from "../assets/ProjectAssets/StackyLogsTestVideo.mp4";

export const profile = {
  name: "Ashitosh Bendre",
  handle: "ASHITOSH.EXE",
  role: "Unity Gameplay Programmer",
  tagline:
    'Architecting gameplay systems, multiplayer sync, and custom tooling that turn "impossible" logic into playable experiences.',
  intro: [
    "I am a Unity gameplay programmer focused on building scalable game systems and interactive mechanics. I specialize in turning complex logic into seamless, fun, and playable experiences.",
    "My approach combines strong C# and Unity fundamentals with maintainable architecture, performance-first thinking, and a love for building reusable systems that can grow with a project.",
  ],
  stats: {
    hp: "2500/2500",
    mp: "999/999",
    level: "LVL 99 PROGRAMMER",
    badge: "UNITY SPECIALIST",
    years: "1.5+ years building gameplay, WebGL, AR, and tooling",
  },
  contact: {
    email: "ashitoshbendre.work@gmail.com",
    github: "https://github.com/AshitoshBendre",
    linkedin: "https://linkedin.com/in/ashitosh-bendre-175a51247",
  },
  heroImage: portfolioImage,
};

export const skills = [
  {
    title: "GAMEPLAY",
    accent: "bg-primary",
    progressClass: "bg-primary",
    icon: "</>",
    entries: [
      { label: "SCRIPTABLE_OBJ", value: "MAX", percent: 100 },
      { label: "MODULAR_SYSTEMS", value: "96%", percent: 96 },
    ],
  },
  {
    title: "AI_LOGIC",
    accent: "bg-accent-blue",
    progressClass: "bg-accent-blue",
    icon: "AI",
    entries: [
      { label: "PATHFINDING", value: "90%", percent: 90 },
      { label: "STATE_MACHINES", value: "85%", percent: 85 },
    ],
  },
  {
    title: "NETWORK",
    accent: "bg-black text-white",
    progressClass: "bg-black",
    icon: "MP",
    entries: [
      { label: "PHOTON_PUN_2", value: "80%", percent: 80 },
      { label: "SYNC_LOGIC", value: "88%", percent: 88 },
    ],
  },
  {
    title: "TOOLS",
    accent: "bg-green-500",
    progressClass: "bg-green-500",
    icon: "++",
    entries: [
      { label: "EDITOR_SCRIPT", value: "92%", percent: 92 },
      { label: "CUSTOM_INSPECT", value: "MAX", percent: 100 },
    ],
  },
];

export const journey = [
  {
    title: "Unity Developer Intern",
    subtitle: "PlatypusBox • Present",
    badge: "ACTIVE_QUEST",
    accent: "bg-primary",
    align: "right",
    skills: ["Core Gameplay", "Mobile Perf", "Team Pipeline"],
  },
  {
    title: "Game Programmer / Indie Developer",
    subtitle: "Personal & Freelance Projects • 2020 - 2023",
    badge: "SIDE_QUESTS",
    accent: "bg-accent-blue",
    align: "left",
    skills: ["WebGL Builds", "Tooling", "Rapid Prototyping"],
  },
  {
    title: "Computer Science",
    subtitle: "Core Engineering Grad",
    badge: "ORIGIN_POINT",
    accent: "bg-secondary",
    align: "right",
    skills: ["C# Fundamentals", "Algorithmic Logic", "System Thinking"],
  },
];

export const workExperiences = [
  {
    id: 1,
    role: "Unity Game Developer",
    company: "PlatypusBox",
    designation: "Unity Game Developer Intern",
    period: "Mar 2024 - Present",
    description:
      "Contributed to multiplayer games, educational tools, and AR experiences with a focus on reusable systems, optimization, and reliable gameplay implementation.",
    projects: [
      "Multiplayer 2D Board Game (Photon PUN 2, NavMesh AI)",
      "ScriptableObject-Based Quiz Game",
      "Unity E-commerce App with Backend API",
      "Telly ERP System (Firebase, custom keyboard, multi-user workflows)",
      "AR Interior Design App for Meta Quest 3 / Xreal",
      "Roulette Game Prototype",
    ],
    technologies: [
      "Unity",
      "C#",
      "Photon PUN 2",
      "Firebase",
      "Vuforia",
      "AR Foundation",
      "JSON",
      "Android",
      "NavMesh",
    ],
  },
  {
    id: 2,
    role: "Game Programmer / Indie Developer",
    company: "Personal & Freelance Projects",
    designation: "Game Programmer",
    period: "2020 - 2023",
    description:
      "Built personal and freelance projects spanning browser games, debugging tools, and educational simulations, with a strong emphasis on experimentation and solid architecture.",
    projects: [
      "Pocket Rocket (WebGL game)",
      "Stackylogs debugger tool",
      "Handpump simulation debugging project",
      "Cell Simulation educational app",
    ],
    technologies: [
      "Unity",
      "C#",
      "WebGL",
      "Firebase",
      "Observer Pattern",
      "RigidBody Physics",
      "Procedural Thinking",
    ],
  },
];

export const projects = [
  {
    id: "bounce-remake",
    title: "Bounce Remake",
    questTitle: "BOUNCE REMAKE",
    difficulty: "BOSS",
    difficultyPercent: 94,
    category: "Game Development",
    type: "LEVEL_EDITOR_PLATFORMER",
    summary:
      "2D platformer and sandbox project with a full in-game level editor, save validation, and optimized loading workflows.",
    description:
      "Bounce Remake is a 2D platformer and sandbox experience built around a seamless in-game level editor. As a solo developer, I designed the project around scalable OOP architecture, modular systems, and memory-conscious runtime behavior so the project could support long-term expansion without becoming brittle.",
    technologies: [
      "Unity",
      "C#",
      "OOP",
      "LDtk",
      "Addressables",
      "Event Bus",
      "Singleton Pattern",
      "StackyLogs",
    ],
    loot: ["UNITY", "LEVEL_EDITOR", "ADDRESSABLES", "OOP"],
    architecture: [
      "Theme-agnostic catalog system for placeable game items",
      "Drag-and-drop editor UI populated dynamically from the active catalog",
      "Metadata-driven save flow with lightweight references and heavy level data split through Addressables",
    ],
    challenges: [
      "Moving platforms were losing reference points after reload and causing null reference exceptions",
      "Editor interactions needed to stay responsive without runtime instantiation spikes",
      "Saved levels needed validation before serialization so broken levels were never written as valid content",
    ],
    highlights: [
      "Built the full project as a solo developer with a scalable OOP-first codebase",
      "Created a modular catalog system ready for future DLC or seasonal content",
      "Engineered pre-instantiation for editor highlight objects to reduce garbage collection spikes",
      "Implemented object-specific context capabilities like link, duplicate, move, and delete",
      "Validated level playability before serializing object data into JSON",
      "Designed an IInjectable-based reconstruction flow to safely restore moving-platform dependencies on load",
    ],
    website:
      "https://play.unity.com/en/games/1b4ceac5-dd44-45f0-b084-934fa9275bc7/bounce-remake",
    media: [
      {
        type: "video",
        url: bounceLevelDemo,
        caption: "Level demo gameplay and editor flow",
      },
      {
        type: "image",
        url: bounceGameScreenshot,
        caption: "Gameplay snapshot from Bounce Remake",
      },
      {
        type: "video",
        url: bounceGameLevelDemo,
        caption: "Additional game level demo footage",
      },
      {
        type: "image",
        url: bounceLevelFinish,
        caption: "Level completion screen",
      },
    ],
  },
  {
    id: "stackylogs",
    title: "Stackylogs",
    questTitle: "STACKYLOGS",
    difficulty: "ELITE",
    difficultyPercent: 95,
    category: "Development Tools",
    type: "DEVELOPER_TOOL",
    summary:
      "Structured debugging and profiling tool for Unity/C# workflows, designed for detailed analysis and future documentation support.",
    description:
      "Stackylogs is a tooling-first project built to make debugging sessions clearer, more structured, and easier to revisit. It explores inter-process communication, categorized log pipelines, and future-ready reporting workflows for scalable Unity development.",
    technologies: ["C#", "Avalonia UI", "Named Pipes", "Multi-threading"],
    loot: ["UNITY", "DEBUGGING", "IPC", "TOOLING"],
    architecture: [
      "Named-pipe communication between producer and viewer",
      "Separated runtime and tool responsibilities for cleaner maintenance",
      "Planned tabbed log streams for structured inspection",
    ],
    challenges: [
      "Designing for future documentation and export workflows",
      "Keeping the tool extensible without coupling it to a specific game",
      "Preparing the system for time-series performance visualization",
    ],
    highlights: [
      "Experimented with inter-process communication using named pipes",
      "Avoided MonoBehaviours outside the Unity test client for cleaner separation",
      "Planned categorized console tabs for structured log browsing",
      "Roadmap includes PDF export for debugging reports",
      "Designed to evolve into a documentation assistant for debugging sessions",
    ],
    media: [
      { type: "image", url: stackyLogsImage, caption: "Stackylogs interface" },
      { type: "video", url: stackyLogsVideo, caption: "Stackylogs test video" },
    ],
  },
  {
    id: "cell-simulation",
    title: "Cell Simulation",
    questTitle: "CELL SIMULATION",
    difficulty: "LEGEND",
    difficultyPercent: 92,
    category: "Simulation / Education",
    type: "EDTECH_SYSTEM",
    summary:
      "Modular educational simulation system built for future biology chapters and scalable learning interactions.",
    description:
      "This project was designed as a reusable educational simulation framework rather than a one-off prototype. The architecture supports future chapter expansion while keeping interactions, labels, and content data-driven for maintainability.",
    technologies: ["Unity", "C#", "WebGL", "ScriptableObjects", "Addressables"],
    loot: ["WEBGL", "SCRIPTABLEOBJECTS", "EDTECH", "SCALABLE_UI"],
    architecture: [
      "Modular scene architecture for future chapter reuse",
      "ScriptableObject-driven content and label interactions",
      "Addressables strategy for efficient WebGL loading",
    ],
    challenges: [
      "Balancing educational clarity with interactive 3D exploration",
      "Keeping WebGL performance stable on lower-end devices",
      "Designing reusable systems for future biology content",
    ],
    highlights: [
      "Built a modular architecture intended for future chapters",
      "Used ScriptableObjects for data-driven object and label info",
      "Implemented drag-and-drop labeling, 3D viewing, and info panels",
      "Optimized for WebGL deployment using Addressables",
      "Live demo available online",
    ],
    website: "https://dulcet-narwhal-2ccee3.netlify.app/",
    media: [
      { type: "image", url: cellIntro, caption: "Introduction panel" },
      { type: "image", url: cellLabel, caption: "Interactive labels" },
    ],
  },
  {
    id: "pocket-rocket",
    title: "Pocket Rocket",
    questTitle: "POCKET ROCKET",
    difficulty: "HARD",
    difficultyPercent: 85,
    category: "Web Game",
    type: "ARCADE_PHYSICS",
    summary:
      "WebGL browser game built to showcase fast iteration, game feel, and physics-driven mechanics.",
    description:
      "Pocket Rocket is a quick but ambitious arcade project that focuses on momentum, responsiveness, and strong feel. It demonstrates how rapidly a polished browser-playable concept can come together when core systems are kept clean and purposeful.",
    technologies: ["WebGL", "JavaScript", "Physics Engine", "Design Patterns"],
    loot: ["WEBGL", "PHYSICS", "ITERATION", "GAME_FEEL"],
    architecture: [
      "Rigid body physics handling for arcade-style movement",
      "Compact game loop tuned for quick browser play sessions",
      "Website wrapper to present the playable demo directly",
    ],
    challenges: [
      "Finishing a presentable build within two days",
      "Maintaining strong feel while keeping the scope contained",
      "Planning next steps like 2D soft body physics",
    ],
    highlights: [
      "Implemented a rigid body physics system",
      "Completed within two days",
      "Planning a 2D soft body physics extension",
    ],
    website: "https://bitsizestudios.netlify.app/",
    media: [
      { type: "image", url: pocketRocketWebsite, caption: "Game website" },
      { type: "image", url: pocketRocketGameplay, caption: "Playable demo" },
    ],
  },
  {
    id: "sanskrit-games",
    title: "Sanskrit Educational Games",
    questTitle: "SANSKRIT GAMES",
    difficulty: "TACTICAL",
    difficultyPercent: 78,
    category: "Educational Games",
    type: "LEARNING_EXPERIENCE",
    summary:
      "Educational game concepts designed to make Sanskrit learning interactive and memorable.",
    description:
      "This concept collection explores how game loops can support memorization and engagement in language learning. The focus is on keeping the gameplay motivating while staying aligned with educational goals.",
    technologies: ["Unity", "C#", "Educational Design"],
    loot: ["EDUCATION", "GAME_DESIGN", "CONCEPTING"],
    architecture: [
      "Mini-game concepts tailored to different learning loops",
      "System design centered on repetition and retention",
      "Documentation-led planning before production",
    ],
    challenges: [
      "Balancing educational depth with gameplay engagement",
      "Choosing mechanics that reinforce learning instead of distracting",
      "Keeping multiple game concepts under one learning vision",
    ],
    highlights: [
      "Developing a 2048-style merge game with Sanskrit elements",
      "Creating a bridge challenge inspired by tension-based game shows",
      "Prioritizing educational value without losing engagement",
    ],
    website:
      "https://skillful-reply-7f8.notion.site/Sanskrit-Concept-Documentation-1ac5f47969a5803bb8b0cb62e13eaee7?pvs=4",
    media: [{ type: "image", url: sanskritDoc, caption: "Design document" }],
  },
  {
    id: "ar-interior-design",
    title: "AR Interior Design App",
    questTitle: "AR INTERIORS",
    difficulty: "BOSS",
    difficultyPercent: 90,
    category: "AR Development",
    type: "AR_VISUALIZATION",
    summary:
      "Augmented reality interior design app for real-world placement and layout visualization.",
    description:
      "This AR app focuses on practical visualization: placing and managing virtual objects in physical spaces while keeping the workflow intuitive. It explores real-scale testing, persistent data, and cross-device prototyping for XR hardware.",
    technologies: ["Unity", "AR Foundation", "Vuforia", "JSON"],
    loot: ["AR", "XR", "SPATIAL_UI", "JSON"],
    architecture: [
      "AR Foundation and Vuforia for real-world placement",
      "JSON-based save system for persisted object layouts",
      "UI workflows for object placement and manipulation",
    ],
    challenges: [
      "Testing for believable real-world scale",
      "Supporting prototype targets like Quest 3 and Xreal",
      "Keeping AR interactions understandable for end users",
    ],
    highlights: [
      "Implemented AR visualization using AR Foundation and Vuforia",
      "Created a JSON-based object saving system",
      "Prototyped for Xreal AR Glasses and Meta Quest 3",
      "Built UI for object placement and manipulation",
    ],
    media: [{ type: "video", url: arDemo, caption: "Prototype demo footage" }],
  },
  {
    id: "multiplayer-board-game",
    title: "Multiplayer Board Game",
    questTitle: "BOARD GAME MP",
    difficulty: "LEGEND",
    difficultyPercent: 82,
    category: "Game Development",
    type: "MULTIPLAYER_NET",
    summary:
      "Networked board game prototype with AI opponents and synchronized turn-based systems.",
    description:
      "A multiplayer-first board game prototype built around reliable turn flow, synchronized state, and AI participation. The project explores how to keep network logic readable while making board interactions feel responsive.",
    technologies: ["Unity", "C#", "Photon PUN 2", "NavMesh"],
    loot: ["PHOTON", "TURN_BASED", "AI", "SYNC"],
    architecture: [
      "Turn-based state management for synchronized play",
      "Photon PUN 2 networking for multiplayer sessions",
      "NavMesh-driven AI for automated opponents",
    ],
    challenges: [
      "Keeping turn order and board state synchronized",
      "Blending multiplayer systems with AI behavior",
      "Preventing gameplay desync in shared sessions",
    ],
    highlights: [
      "Implemented multiplayer networking using Photon PUN 2",
      "Created AI opponents using NavMesh Agents",
      "Developed synchronized turn-based mechanics",
    ],
    media: [],
  },
  {
    id: "telly-erp",
    title: "TellyERP",
    questTitle: "TELLY ERP",
    difficulty: "BOSS",
    difficultyPercent: 88,
    category: "Business Application / Betting",
    type: "DATA_SYSTEMS",
    summary:
      "Unity-based betting management application inspired by ERP-style workflows and real-time data updates.",
    description:
      "TellyERP adapts Unity for business-oriented workflows, combining responsive UI, live updates, and modular business logic. The project demonstrates how game-engine thinking can support data-heavy interaction systems.",
    technologies: ["Unity", "C#", "Firebase", "Realtime Database", "Canvas UI"],
    loot: ["FIREBASE", "CRUD", "REALTIME_UI", "WORKFLOWS"],
    architecture: [
      "Realtime data sync through Firebase",
      "Modular components for scalable business workflows",
      "Responsive Unity Canvas layout strategy",
    ],
    challenges: [
      "Handling betting calculations with live updates",
      "Improving responsiveness across different screen sizes",
      "Organizing a business-heavy system inside a game engine",
    ],
    highlights: [
      "Implemented betting logic with realtime Firebase sync",
      "Integrated CRUD operations for dynamic data management",
      "Designed responsive UI and optimized Unity Canvas",
      "Modularized the project for scalable business use",
    ],
    media: [],
  },
  {
    id: "nms-software",
    title: "NMS Software",
    questTitle: "NMS SOFTWARE",
    difficulty: "ELITE",
    difficultyPercent: 84,
    category: "Business Application / Betting",
    type: "LEGACY_REFACTOR",
    summary:
      "Roulette betting management app focused on improving logic quality, structure, and reliability.",
    description:
      "NMS Software involved cleaning up existing systems, improving business logic, and making a legacy Unity application easier to scale. It reflects practical problem-solving in messy real-world production code.",
    technologies: ["Unity", "C#", "OOP", "UI Systems"],
    loot: ["REFACTOR", "BUSINESS_LOGIC", "SCALABILITY"],
    architecture: [
      "Refactored legacy code paths for clarity and maintenance",
      "Improved transaction logic for roulette workflows",
      "Reorganized folders, prefabs, and conventions for scalability",
    ],
    challenges: [
      "Understanding and improving inherited legacy logic",
      "Fixing flow issues without breaking business behavior",
      "Creating structure in an already-growing codebase",
    ],
    highlights: [
      "Implemented roulette-specific transaction distribution logic",
      "Refactored and cleaned legacy code for maintainability",
      "Fixed key logic issues and improved error handling",
      "Restructured project assets and naming conventions",
    ],
    media: [],
  },
];

export const featuredProjectIds = [
  "bounce-remake",
  "pocket-rocket",
  "stackylogs",
  "cell-simulation",
];

export const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

export const getProjectById = (id) =>
  projects.find((project) => project.id === id);
