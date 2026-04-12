// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit this file to update all pages at once
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  // ── Identity ───────────────────────────────────────────────────────────────
  name: "Tanay Matta",
  handle: "TANYA_BOT",
  title: "AI_ENGINEER IN_TRAINING",
  subjectId: "BE Computer Science",
  status: "FINAL_YEAR_STUDENT",
  clearance: "AI_ENGINEER_CANDIDATE",
  vector: "Generative AI & Agentic Systems",

  // ── Contact ────────────────────────────────────────────────────────────────
  contact: {
    email: "tanaymatta27@gmail.com",
    phone: "+971509546883",
    github: "github.com/Wanderer0074348",
    githubUrl: "https://github.com/Wanderer0074348",
    linkedin: "linkedin.com/in/tanaymatta",
    linkedinUrl: "https://linkedin.com/in/tanaymatta",
    twitter: null as string | null, // set to URL string to enable
  },

  // ── Education ──────────────────────────────────────────────────────────────
  education: {
    institution: "Birla Institute of Technology and Science Pilani, Dubai Campus",
    degree: "Bachelor's of Engineering in Computer Science",
    cgpa: "9.35",
    period: "Sept. 2022 – Present",
    location: "Dubai, UAE",
  },

  // ── Focus areas (hero tagline) ─────────────────────────────────────────────
  focus: [
    "Generative AI",
    "Agentic Systems",
    "Applied Machine Learning",
    "Data Engineering",
  ],

  // ── Skills (grouped by category) ──────────────────────────────────────────
  skills: {
    languages:  ["Python", "Golang", "TypeScript", "JavaScript", "SQL", "C"],
    aiml:       ["LangChain", "LangGraph", "PyTorch", "Ultralytics", "Scikit-learn", "Hugging Face", "OpenAI", "Anthropic"],
    backend:    ["FastAPI", "Gin", "Express.js", "WebSocket", "gRPC", "RESTful Services"],
    data:       ["BigQuery", "Pinecone", "MongoDB", "Supabase", "PostgreSQL", "Redis", "ETL Pipelines"],
    devops:     ["Docker", "Kubernetes", "GCP", "AWS", "CI/CD", "Render"],
    analytics:  ["Pandas", "NumPy", "OpenCV", "librosa", "NLTK", "Matplotlib", "MLFlow", "Langfuse"],
  },

  // ── Experience ─────────────────────────────────────────────────────────────
  experience: [
    {
      id: "esri",
      title: "Software Development (AI) Intern",
      org: "ESRI Global",
      location: "Sharjah, UAE",
      period: "Feb. 2026 – Present",
      tag: "progress" as const,
      bullets: [
        "Architected multi-agent invocation support for the ArcGIS RFT AI Assistant, enabling a single query to concurrently dispatch to multiple specialized agents, eliminating a core bottleneck.",
        "Engineered a context-management pipeline reducing token consumption by ~18% (110k → 90k tokens) through optimized prompt pruning and persistent chat history across conversation turns.",
        "Built and integrated an assistant chat thinking panel into the function-editor with real-time polling, markdown rendering, and overflow handling.",
      ],
    },
    {
      id: "ymt",
      title: "Software Development Intern",
      org: "YMT Ads",
      location: "Bengaluru, India (Remote)",
      period: "Jul 2023 – Sept 2023 & May 2024 – Sept 2024",
      tag: "archived" as const,
      bullets: [
        "Designed and implemented automated ETL pipeline using Python and BigQuery API to extract and load large-scale datasets from GCS, processing 2TB daily and reducing manual retrieval workflows by 85%.",
        "Migrated existing infrastructure from PHP to Python, resulting in a 4-hour reduction in data retrieval time and significantly improving system performance.",
      ],
    },
    {
      id: "kptac",
      title: "Project Intern",
      org: "KPTAC Technologies",
      location: "Dubai, UAE",
      period: "Jun. 2024 – Aug. 2024",
      tag: "archived" as const,
      bullets: [
        "Implemented a data migration pipeline from Excel to a proprietary backend, facilitating automatic generation of menus and reducing manual input errors.",
      ],
    },
  ],

  // ── Projects ───────────────────────────────────────────────────────────────
  projects: [
    {
      id: "hybridlm",
      title: "HybridLM_Engine",
      sector: "AI_Infra",
      ref: "REF: HYBRID-01",
      stack: ["Golang", "GolangChain", "OpenAI API", "Groq", "ONNX-Go", "Gin", "Redis", "Docker"],
      desc: "Hybrid LLM/SLM inference engine in pure Golang that dynamically routes requests between cloud-based LLMs and edge-deployed SLMs, reducing latency and compute costs for real-time applications.",
      meta: "Status: Active",
      dotColor: "bg-[#034694]",
      tag: "progress" as const,
      video: "https://pub-b89bbe6de05c4dc4bc02906fe3d45c25.r2.dev/HybridLM.mp4",
      report: "/reports/HybridLM.pdf", // "/reports/filename.pdf" for public/reports/ files
    },
    {
      id: "crackit",
      title: "CrackIt",
      sector: "AI_Systems",
      ref: "REF: CRACK-02",
      stack: ["Python", "FastAPI", "WebSocket", "OpenAI Realtime API", "Hugging Face", "GPT-4o-mini", "librosa"],
      desc: "Real-time AI interview system with WebSocket relay pipeline enabling live speech-to-speech conversation with adaptive follow-up question generation and multi-model response evaluation.",
      meta: "Status: Stable",
      dotColor: "bg-[#034694]",
      tag: "full" as const,
      video: "",
      report: "", // "/reports/filename.pdf" for public/reports/ files
    },
    {
      id: "kangl",
      title: "KanGL",
      sector: "Agentic_AI",
      ref: "REF: KANGL-03",
      stack: ["Python", "LangGraph", "LangChain", "OpenAI API", "LangSmith", "FastAPI", "Docker"],
      desc: "Multi-agent AI system using LangGraph that autonomously scans codebases, detects frameworks, and generates deployment configurations via structured LLM reasoning pipelines.",
      meta: "Status: In Progress",
      dotColor: "bg-[#034694]",
      tag: "full" as const,
      video: "https://pub-b89bbe6de05c4dc4bc02906fe3d45c25.r2.dev/KanglAd.mp4",
      report: "", // "/reports/filename.pdf" for public/reports/ files
    },
    {
      id: "plgrzr",
      title: "Plgrzr",
      sector: "ML_Applied",
      ref: "REF: PLGZR-04",
      stack: ["Python", "NLTK", "BERT", "Generative AI", "Flask", "OpenCV", "Git"],
      desc: "PDF document analysis system using NLTK, BERT embeddings, Google Cloud Vision API, and Mathpix to detect text, handwriting, and structural similarities with 95%+ accuracy.",
      meta: "Accuracy: 95%+",
      dotColor: "bg-[#22c55e]",
      tag: "archived" as const,
      video: "",
      report: "", // "/reports/filename.pdf" for public/reports/ files
    },
    {
      id: "arsidet",
      title: "ArsiDet",
      sector: "Computer_Vision",
      ref: "REF: ARSI-05",
      stack: ["Python", "PyTorch", "YOLO", "Ultralytics", "Streamlit", "LLM", "Git"],
      desc: "Arabic Sign Language Detection system using YOLO object detection and transfer learning, achieving 97% accuracy in real-time gesture recognition with LLM-powered translation.",
      meta: "Accuracy: 97%",
      dotColor: "bg-[#22c55e]",
      tag: "archived" as const,
      video: "",
      report: "", // "/reports/filename.pdf" for public/reports/ files
    },
    {
      id: "relay",
      title: "Relay",
      sector: "DevTools",
      ref: "REF: RELAY-06",
      stack: ["Rust", "Claude API", "Gemini", "Codex", "Aider", "Ollama"],
      desc: "Universal agent handoff CLI that captures any AI coding tool's session context and intelligently routes to fallback agents, with relevance-based compression, secret detection, and sub-100ms handoff.",
      meta: "Status: Active",
      dotColor: "bg-[#034694]",
      tag: "progress" as const,
      video: "https://pub-b89bbe6de05c4dc4bc02906fe3d45c25.r2.dev/relay-demo.mp4",
      report: "",
    },
    {
      id: "resbook",
      title: "ResBook",
      sector: "Web_Applications",
      ref: "REF: RESB-07",
      stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      desc: "Restaurant reservation and management system enabling seamless booking experiences and operational efficiency.",
      meta: "Status: In Development",
      dotColor: "bg-[#034694]",
      tag: "progress" as const,
      video: "",
      report: "",
    },
    {
      id: "plotter",
      title: "Plotter",
      sector: "Agentic_AI",
      ref: "REF: PLOT-08",
      stack: ["Go", "Wails", "Desktop App", "Ollama", "ComfyUI"],
      desc: "Interactive AI-powered storytelling platform where users create dynamic narratives through real-time conversation with an AI narrator.",
      meta: "Status: Active",
      dotColor: "bg-[#034694]",
      tag: "full" as const,
      video: "https://pub-b89bbe6de05c4dc4bc02906fe3d45c25.r2.dev/Plotter-demo.mp4",
      report: "",
    },
  ],

  // ── Hackathon Projects ─────────────────────────────────────────────────────
  hackathonProjects: [
    {
      id: "geovisionquest",
      title: "GeoVisionQuest",
      sector: "Computer_Vision",
      ref: "REF: GEO-09",
      stack: ["Python", "OpenCV", "Flask", "TensorFlow"],
      desc: "Geographic vision challenge system combining computer vision and geospatial analysis for location-based intelligence tasks.",
      meta: "Hackathon Project",
      dotColor: "bg-[#f59e0b]",
      tag: "archived" as const,
      video: "",
      report: "",
    },
    {
      id: "sstr",
      title: "S.S.T.R",
      sector: "AI_Systems",
      ref: "REF: SSTR-10",
      stack: ["Python", "FastAPI", "Machine Learning"],
      desc: "Intelligent system leveraging AI for specialized task automation and real-time response generation.",
      meta: "Hackathon Project",
      dotColor: "bg-[#f59e0b]",
      tag: "archived" as const,
      video: "",
      report: "",
    },
  ],

  // ── Achievements ───────────────────────────────────────────────────────────
  achievements: [
    {
      title: "DAFZA x Wellington Hackathon: UAE Hackathon Winner",
      org: "Dubai Airport Free Zone Authority",
      date: "April 2025",
      detail: "20,000 AED Prize",
      location: "Dubai, UAE",
    },
    {
      title: "Samsung Innovation Campus AI Cohort",
      org: "Samsung Gulf & UAE National Program for Coders",
      date: "Nov. 2024",
      detail: "Final Score: 92/100",
      location: "Dubai, UAE",
    },
    {
      title: "Impactathon 1.0: Inter-University Hackathon",
      org: "ACM Bits Pilani Dubai",
      date: "Feb. 2025",
      detail: "4th place / 30 teams",
      location: "Dubai, UAE",
    },
  ],

  // ── Certifications ─────────────────────────────────────────────────────────
  certifications: [
    { title: "Specialization in Golang", org: "UCI, Irvine", date: "Aug. 2025" },
    { title: "Data Analysis with IBM", org: "IBM", date: "Aug. 2023" },
    { title: "Software Engineering Simulation", org: "Goldman Sachs", date: "Sep. 2023" },
    { title: "BigQuery and PostgreSQL for Data Analysis", org: "Udemy", date: "Aug. 2022" },
  ],

  // ── Leadership ─────────────────────────────────────────────────────────────
  leadership: [
    {
      title: "Peer Mentor",
      org: "Student Council BPDC",
      desc: "Guiding incoming students through university transition by providing academic support, campus resource navigation, and promoting student engagement.",
    },
    {
      title: "Technical Head",
      org: "BITS Tech Fest BPDC",
      desc: "Led technical operations for the university's biggest tech-fest, coordinating hackathons and managing technical infrastructure and volunteer teams.",
    },
    {
      title: "Ex-Officio",
      org: "Linux Users Group Bits Dubai",
      desc: "Administered college server architecture, conducted workshops on DBMS and DSA, led a cross-functional team of 16 students in technical events.",
    },
    {
      title: "General Secretary",
      org: "Expressions — The Public Speaking and Literary Club",
      desc: "Delivered engaging talks to 100+ attendees and collaboratively managed declamation events, coordinating logistics and judging criteria.",
    },
  ],

  // ── Dossier skill tiles (6 highlighted capabilities for the grid) ──────────
  skillTiles: [
    { label: "LLM\nDevelopment",    bg: "bg-black",        text: "text-white",       border: false },
    { label: "Agentic\nSystems",    bg: "bg-[#034694]",    text: "text-white",       border: false },
    { label: "Python\n& PyTorch",   bg: "bg-[#e2e2e2]",    text: "text-[#1a1c1c]",  border: true  },
    { label: "Golang\nBackend",     bg: "bg-[#f3f3f3]",    text: "text-[#1a1c1c]",  border: true  },
    { label: "Data\nEngineering",   bg: "bg-black",        text: "text-white",       border: false },
    { label: "Cloud\n& DevOps",     bg: "bg-[#034694]",    text: "text-white",       border: false },
  ],

  // ── Home page stats ────────────────────────────────────────────────────────
  stats: [
    { value: "9.35", label: "CGPA" },
    { value: "3+", label: "Internships" },
    { value: "5+", label: "Projects" },
    { value: "ACTIVE", label: "Status", highlight: true },
  ],
} as const;
