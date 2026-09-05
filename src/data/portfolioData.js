// Central content file — mirrors the Django models (Profile, Project, Skill, Experience)

export const profile = {
  name: "Asad Ali Mir",
  title: "Code. Intelligence. Impact.",
  bio: "Building scalable software solutions and AI-powered products with a focus on performance, usability, and real-world impact.",
  sidebarBio: "Software Engineer",
  about: `Hello! I'm Asad Ali Mir, a software engineer passionate about building intelligent software that solves real-world problems and creates meaningful user experiences.

I enjoy working at the intersection of Artificial Intelligence and software engineering, where I can transform ideas into practical, scalable, and impactful solutions. I'm driven by curiosity, continuous learning, and the challenge of solving complex problems with thoughtful design and clean implementation.

Beyond writing code, I value understanding the people and businesses behind every product. I believe great software is built by combining technical excellence with clear communication, adaptability, and a strong focus on user needs. Whether collaborating with a team or working independently, I strive to create solutions that are reliable, efficient, and deliver lasting value.

I'm always excited to learn emerging technologies, contribute to innovative products, and collaborate with people who are passionate about building the future. If you'd like to connect, discuss an idea, or explore a potential collaboration, I'd love to hear from you.`,
  yearsExperience: 1,
  projectsCompleted: 5,
  githubUrl: "https://github.com/MirAsad1",
  linkedinUrl: "https://www.linkedin.com/in/asad-mir/",
};

export const projects = [
  {
    id: 1,
    title: "Assess.io",
    description:
      "An AI-powered platform that automates grading for code, document, and handwritten assignments, built for admin, teacher, and student roles. Submissions are processed asynchronously via Celery and Redis, with code executed in a secure Docker sandbox and handwritten work extracted through Gemini Vision OCR. A Groq LLaMA 3.3 70B model then scores each submission against a rubric and generates personalized feedback. Built with FastAPI, PostgreSQL, React.js, and Tailwind CSS.",
    techStack: [
      "FastAPI",
      "PostgreSQL",
      "React.js",
      "Tailwind CSS",
      "Celery",
      "Redis",
      "Docker",
      "Gemini Vision API",
      "Groq",
      "LLaMA 3.3",
    ],
    image: "logo2.jpeg",
    githubLink: "https://github.com/MirAsad1/assess.io",
    liveLink: "",
    featured: true,
    order: 0,
  },
  {
    id: 2,
    title: "PaperMind",
    description:
      "A Retrieval-Augmented Generation (RAG) system that lets researchers query multiple academic papers through a conversational interface and get instant, context-aware answers. Built a semantic search pipeline using embeddings and custom prompting, with source attribution so every answer traces back to the original document. Powered by LangChain, ChromaDB, and Llama 3.1.",
    techStack: [
      "Python",
      "LangChain",
      "LlaMa 3.1",
      "Sentence Transformers",
      "ChromaDB",
    ],
    image: "rag-logo.png",
    githubLink: "https://github.com/MirAsad1/papermind-research-paper-rag",
    liveLink: "",
    featured: false,
    order: 1,
  },
  {
    id: 3,
    title: "AI-Driven Urban Traffic Optimization",
    description:
      "A multi-stage AI pipeline that moves from raw traffic camera footage to actionable traffic-light decisions. Vehicle detection feeds an LSTM forecasting model, which feeds a VAE-based anomaly detector, which feeds a reinforcement-learning traffic light controller, audited afterward for fairness and environmental impact. A separate NLP branch scans social media for real-world crisis events like floods or road closures as additional context.",
    techStack: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "KeyBERT",
      "Sentence Transformers",
    ],
    image: "ai-optimization.png",
    githubLink:
      "https://github.com/MirAsad1/ai-driven-urban-traffic-optimization",
    liveLink: "",
    featured: false,
    order: 2,
  },
  {
    id: 4,
    title: "WeatherBrief",
    description:
      "A Python tool that scrapes live weather data for Lahore and sends personalized morning briefing emails to a list of employees, with an admin dashboard to manage recipients. Weather data is scraped from AccuWeather and delivered as HTML emails via Gmail SMTP, with context-aware tips based on forecast conditions. Built for use cases like corporate offices, logistics teams, and schools sending daily weather alerts to staff.",
    techStack: [
      "Python",
      "Flask",
      "BeautifulSoup",
      "smtplib",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "weather-app-logo.png",
    githubLink: "https://github.com/MirAsad1/weatherbrief-notifications",
    liveLink: "",
    featured: false,
    order: 3,
  },
];

export const experience = [
  {
    id: 1,
    role: "Web Development Trainee",
    company: "FriendsBit",
    companyLogo: "friendsbit_logo.jpg",
    companyUrl: "https://www.friendsbits.com/",
    startDate: "2025-08-01",
    endDate: "2025-10-01",
    description:
      "Developed responsive React-based applications while applying modern frontend development practices and component-based architecture.\nWorked with state management concepts and reusable UI components to build maintainable and user-friendly web interfaces.",
    order: 0,
  },
  {
    id: 2,
    role: "Python Development Intern",
    company: "HiSkyTech",
    companyLogo: "hiskytech.jpg",
    companyUrl: "https://www.hiskytechs.com/",
    startDate: "2024-07-01",
    endDate: "2024-08-01",
    description:
      "Developed a web scraper, chatbot, and machine learning models including linear regression and spam classification systems using Python, Scikit-learn, and NLTK.\nPerformed data preprocessing, feature engineering, and model evaluation to improve model performance and reliability.",
    order: 1,
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "C++"],
  frontend: ["React.js", "HTML", "CSS"],
  backend: ["Django", "Node.js", "PostgreSQL", "MySQL", "REST APIs"],
  ai_ml: [
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "LLMs",
    "RAG",
    "NLP",
    "Prompt Engineering",
  ],
  tools: ["Git", "Github", "Docker"],
};