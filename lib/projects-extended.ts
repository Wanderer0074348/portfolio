// Extended per-project data — keyed by project id from siteConfig.projects
const R2 = "https://pub-b89bbe6de05c4dc4bc02906fe3d45c25.r2.dev";

export const projectsExtended = {
  hybridlm: {
    github: "https://github.com/Wanderer0074348",
    live: "",
    video: `${R2}/hybridlm.mp4`,
    motivation:
      "Built to eliminate the binary choice between accuracy and cost in production LLM deployments. Most teams pick one cloud model and overpay for simple queries, or use a cheap model and get poor outputs. HybridLM routes dynamically so neither sacrifice is made.",
    whitepaper: {
      ref: "0x001A",
      title: "Dynamic Inference Routing in HybridLM_Engine",
      abstract:
        "This document details the architecture of HybridLM_Engine, a pure Golang inference routing system that dynamically selects between cloud LLMs and edge-deployed SLMs based on query complexity, latency requirements, and compute cost budgets. The router achieves an average 40% latency reduction and 60% cost reduction versus cloud-only pipelines.",
      architecture:
        "The engine implements a rule-based router with ML-assisted prompt classification, scoring each incoming request across complexity, context length, and urgency dimensions. Cloud calls are dispatched via Gin HTTP handlers to OpenAI-compatible endpoints, while edge inference runs ONNX-exported SLMs through ONNX-Go. Redis provides prompt caching and session state across concurrent requests.",
      stats: [
        { key: "LATENCY_REDUCTION", val: "~40%" },
        { key: "COST_REDUCTION",    val: "~60%" },
        { key: "ROUTER_ACCURACY",   val: "94%"  },
        { key: "CACHE_HIT_RATE",    val: "72%"  },
      ],
    },
  },

  crackit: {
    github: "https://github.com/Wanderer0074348",
    live: "",
    video: `${R2}/crackit.mp4`,
    motivation:
      "Technical interviews are anxiety-inducing partly because candidates rarely get realistic real-time practice. CrackIt simulates the actual conversational pressure of a live interview — with an AI that adapts follow-up questions based on your answers rather than following a fixed script.",
    whitepaper: {
      ref: "0x002B",
      title: "Real-Time Speech Pipeline Architecture in CrackIt",
      abstract:
        "CrackIt implements a real-time speech-to-speech interview simulation pipeline using WebSocket relay architecture and OpenAI's Realtime API, enabling sub-200ms audio round-trips with adaptive follow-up question generation driven by a multi-model evaluation chain.",
      architecture:
        "Audio is streamed from the client browser to a FastAPI WebSocket handler, transcribed via Whisper, then routed through a multi-model chain: GPT-4o-mini generates contextual follow-up questions and scores the answer, while Hugging Face classifiers add sentiment and confidence signals. Synthesized TTS audio is streamed back, maintaining rolling conversation context across turns.",
      stats: [
        { key: "ROUND_TRIP_LATENCY", val: "<200ms"    },
        { key: "MODELS_INTEGRATED",  val: "4"         },
        { key: "AUDIO_FORMAT",       val: "16kHz PCM" },
        { key: "QUESTION_MODE",      val: "Adaptive"  },
      ],
    },
  },

  kangl: {
    github: "https://github.com/Wanderer0074348",
    live: "",
    video: `${R2}/kangl.mp4`,
    motivation:
      "Deployment configuration is one of the most repetitive and error-prone tasks in software engineering. KanGL was built to automate this entirely — from reading a codebase to producing production-ready Kubernetes and Docker Compose configs — using structured LLM reasoning rather than fragile static templates.",
    whitepaper: {
      ref: "0x003C",
      title: "Multi-Agent Codebase Analysis in KanGL",
      abstract:
        "KanGL is a multi-agent deployment configuration generator that autonomously traverses codebases using LangGraph's stateful agent graph, identifying frameworks and dependencies to produce production-ready Kubernetes and Docker Compose configurations with 91% accuracy on real-world repositories.",
      architecture:
        "The system uses a directed acyclic agent graph with four specialized nodes: a Scanner Agent for recursive repo traversal, a Framework Detection Agent leveraging GPT-4o structured outputs, a Config Writer Agent with template interpolation, and a Validator Agent that performs dry-run consistency checks. LangSmith provides full token-level observability across all agent hops.",
      stats: [
        { key: "FRAMEWORKS_DETECTED", val: "20+"  },
        { key: "CONFIG_ACCURACY",      val: "91%"  },
        { key: "AVG_SCAN_TIME",        val: "8.2s" },
        { key: "AGENT_NODES",          val: "4"    },
      ],
    },
  },

  plgrzr: {
    github: "https://github.com/Wanderer0074348",
    live: "",
    video: `${R2}/plgrzr.mp4`,
    motivation:
      "Academic plagiarism detection tools miss non-text similarity — handwritten notes, formula-heavy documents, and structural copying all go undetected. Plgrzr closes this gap by combining vision-based OCR with semantic NLP embeddings across every content modality in a single PDF.",
    whitepaper: {
      ref: "0x004D",
      title: "Multi-Modal Plagiarism Detection in Plgrzr",
      abstract:
        "Plgrzr implements a multi-modal plagiarism detection pipeline combining BERT semantic embeddings, NLTK n-gram analysis, Google Cloud Vision OCR, and Mathpix formula extraction to detect text, handwriting, and structural document similarity with 95%+ accuracy across academic PDF submissions.",
      architecture:
        "PDFs are split into modality streams: Mathpix handles formula extraction, GCV processes handwriting and visual regions, and standard OCR covers typed text. Each stream is chunked at the passage level and embedded via a fine-tuned BERT model. Cosine distance scoring with a configurable threshold surfaces matches through a Flask dashboard with per-page heatmap visualisation.",
      stats: [
        { key: "DETECTION_ACCURACY", val: "95%+"                    },
        { key: "MODALITIES",         val: "3 (text / hand / formula)" },
        { key: "AVG_PROCESS_TIME",   val: "3.1s"                    },
        { key: "EMBEDDING_DIM",      val: "768"                     },
      ],
    },
  },

  arsidet: {
    github: "https://github.com/Wanderer0074348",
    live: "",
    video: `${R2}/arsidet.mp4`,
    motivation:
      "Arabic Sign Language has no widely available real-time translation system. ArsiDet was built to make ARSL accessible through affordable hardware, combining YOLO's speed with LLM-powered sentence construction to produce fluent natural language from live gesture sequences.",
    whitepaper: {
      ref: "0x005E",
      title: "Real-Time ARSL Recognition Architecture in ArsiDet",
      abstract:
        "ArsiDet delivers real-time Arabic Sign Language gesture recognition using YOLOv8 object detection with transfer learning on a custom 10,000-frame annotated dataset, achieving 97% detection accuracy at 30fps and augmented by an LLM translation layer for natural Arabic and English sentence generation.",
      architecture:
        "A YOLOv8 model fine-tuned via Ultralytics on the custom ARSL dataset performs bounding-box detection at 30fps on standard webcam input. Detected gesture sequences are buffered in a sliding window and passed to an LLM translation module that resolves gestural context into grammatically coherent output sentences, rendered in a Streamlit interface with real-time bounding-box overlay.",
      stats: [
        { key: "DETECTION_ACCURACY", val: "97%"           },
        { key: "INFERENCE_SPEED",    val: "30fps"         },
        { key: "DATASET_SIZE",       val: "10,000 frames" },
        { key: "GESTURE_CLASSES",    val: "28"            },
      ],
    },
  },

  relay: {
    github: "https://github.com/Manavarya09/relay",
    live: "",
    video: "",
    motivation:
      "AI coding agents hit rate limits unexpectedly, breaking developer flow mid-task. Relay solves this by capturing ANY agent's complete session context—conversation history, file edits, errors, git state—and seamlessly routing to fallback agents without losing progress or requiring re-explanation.",
    whitepaper: {
      ref: "0x006F",
      title: "Universal Agent Session Compression and Intelligent Handoff",
      abstract:
        "Relay is a Rust-based CLI that universally captures coding agent session transcripts, applies relevance-based compression scoring, detects and redacts secrets, and performs sub-100ms handoffs to 8+ fallback AI agents (Claude, Gemini, Codex, Aider, Ollama, etc.) with full session preservation.",
      architecture:
        "The system abstracts over session transcript formats from multiple agent platforms, capturing every conversation turn, tool call, file edit, and error. A relevance scorer using ML heuristics prioritizes recent/critical context while compressing older turns. Built-in secret detection prevents leaking API keys and credentials. Daemon mode monitors rate limits across agents in real-time, triggering automatic handoffs. Plugin architecture enables custom agent adapters. SQLite analytics track cost estimates and handoff success rates per agent platform.",
      stats: [
        { key: "CODEBASE", val: "95.1% Rust"          },
        { key: "BINARY_SIZE", val: "~5MB"              },
        { key: "HANDOFF_SPEED", val: "<100ms"         },
        { key: "AGENT_SUPPORT", val: "8+ platforms"   },
        { key: "SECRET_DETECTION", val: "Enabled"     },
        { key: "CONTEXT_PRESERVATION", val: "100%"    },
      ],
    },
  },

  resbook: {
    github: "https://github.com/Wanderer0074348/ResBook",
    live: "",
    video: "",
    motivation:
      "Restaurant reservations shouldn't be complicated. ResBook streamlines the entire booking experience for customers while providing managers with powerful tools to optimize seating, staffing, and operations.",
    whitepaper: {
      ref: "0x0070",
      title: "Restaurant Management Platform Architecture",
      abstract:
        "ResBook is a full-stack restaurant reservation and management system providing real-time booking, table optimization, and operational analytics.",
      architecture:
        "React frontend with TypeScript for responsive UI, Node.js backend with PostgreSQL for reliable data persistence, real-time updates via WebSocket.",
      stats: [
        { key: "MODULES", val: "Booking, Analytics, Staffing" },
        { key: "TECH_STACK", val: "MERN"                      },
        { key: "RESPONSE_TIME", val: "<100ms"                 },
      ],
    },
  },

  plotter: {
    github: "https://github.com/Wanderer0074348/Plotter",
    live: "https://wanderer0074348.github.io/Plotter/#home",
    video: "",
    motivation:
      "Data visualization is crucial for understanding complex datasets. Plotter provides an intuitive interface for creating publication-quality charts and interactive visualizations.",
    whitepaper: {
      ref: "0x0071",
      title: "Interactive Data Visualization Library",
      abstract:
        "Plotter is a Python-based visualization utility enabling rapid generation of professional charts and graphs from diverse data sources.",
      architecture:
        "Built on Matplotlib and Pandas, providing high-level APIs for common visualization patterns with support for custom styling and interactive elements.",
      stats: [
        { key: "SUPPORTED_CHARTS", val: "15+"       },
        { key: "DATA_FORMATS", val: "CSV, JSON, SQL" },
        { key: "CUSTOMIZATION", val: "Full"         },
      ],
    },
  },

  geovisionquest: {
    github: "https://github.com/Wanderer0074348/GeoVisionQuest",
    live: "",
    video: "",
    motivation:
      "Combining geospatial data with computer vision opens new possibilities for location intelligence. GeoVisionQuest was built during a hackathon to demonstrate real-time geographic analysis from visual input.",
    whitepaper: {
      ref: "0x0072",
      title: "Geospatial Computer Vision Integration",
      abstract:
        "GeoVisionQuest integrates computer vision with geographic information systems to enable location-based visual intelligence tasks during hackathon competition.",
      architecture:
        "OpenCV for image processing, geospatial libraries for coordinate transformation, Flask backend for API exposure.",
      stats: [
        { key: "ACCURACY", val: "Hackathon Grade"    },
        { key: "PROCESSING_TIME", val: "<2s per image" },
        { key: "PROJECT_TYPE", val: "Hackathon"      },
      ],
    },
  },

  sstr: {
    github: "https://github.com/Wanderer0074348/S.S.T.R",
    live: "",
    video: "",
    motivation:
      "Built during a hackathon sprint, S.S.T.R demonstrates rapid prototyping of AI systems with focus on specialized task automation and intelligent response generation.",
    whitepaper: {
      ref: "0x0073",
      title: "Hackathon AI System for Specialized Tasks",
      abstract:
        "S.S.T.R is a specialized AI system developed during a hackathon, showcasing fast iteration and practical application of machine learning techniques.",
      architecture:
        "FastAPI backend with integrated ML models, Python-based task automation pipeline.",
      stats: [
        { key: "PROJECT_TYPE", val: "Hackathon"      },
        { key: "EXECUTION_TIME", val: "24-48 hours" },
        { key: "FOCUS_AREA", val: "AI Automation"   },
      ],
    },
  },
} as const;
