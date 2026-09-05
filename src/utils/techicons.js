const TECH_ICON_MAP = {
  django: "django",
  python: "python",
  react: "react",
  "react.js": "react",
  javascript: "javascript",
  js: "javascript",
  html: "html5",
  css: "css3",
  tailwind: "tailwindcss",
  "tailwind css": "tailwindcss",
  tailwindcss: "tailwindcss",
  postgresql: "postgresql",
  postgres: "postgresql",
  docker: "docker",
  celery: "celery",
  redis: "redis",
  fastapi: "fastapi",
  flask: "flask",
  langchain: "langchain",
  chromadb: "postgresql", // fallback, same as original
  groq: "groq",
  gemini: "googlegemini",
  "gemini vision api": "googlegemini",
  llama: "meta",
  "llama 3.1": "meta",
  "llama 3.3": "meta",
  "sentence transformers": "huggingface",
  "sentence-transformers": "huggingface",
  cloudinary: "cloudinary",
  tensorflow: "tensorflow",
  pandas: "pandas",
  "scikit-learn": "scikitlearn",
  sklearn: "scikitlearn",
};

export function getTechIconUrl(tech) {
  const key = tech.trim().toLowerCase();
  const slug = TECH_ICON_MAP[key] || key.replace(/\s/g, "").replace(/\./g, "");
  return `https://cdn.simpleicons.org/${slug}`;
}
