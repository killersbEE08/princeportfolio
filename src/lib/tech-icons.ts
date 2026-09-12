export const techIconMap: Record<string, string> = {
  Python: "python",
  Pandas: "pandas",
  NumPy: "numpy",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  "Google Analytics": "googleanalytics",
  "Google Analytics 4": "googleanalytics",
  "Search Console": "googlesearchconsole",
  Jupyter: "jupyter",
  OpenAI: "openai",
  LLMs: "openai",
  LangChain: "langchain",
  Git: "git",
  GitHub: "github",
  // Brands not on simple-icons (Power BI, Excel, SQL, DAX, etc.) intentionally
  // omitted so the UI renders a clean text badge instead of a broken image.
};

export function getTechIcon(tech: string) {
  return techIconMap[tech] ?? null;
}
