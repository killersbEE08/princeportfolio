export const techIconMap: Record<string, string> = {
  // Local brand logos (not available on simple-icons).
  "Power BI": "/assets/tech/powerbi.svg",
  "Microsoft Power BI": "/assets/tech/powerbi.svg",
  Excel: "/assets/tech/excel.svg",
  "Microsoft Excel": "/assets/tech/excel.svg",
  "Advanced Excel": "/assets/tech/excel.svg",
  SQL: "/assets/tech/sql.svg",
  DAX: "/assets/tech/dax.svg",
  // simple-icons slugs.
  Python: "python",
  Pandas: "pandas",
  NumPy: "numpy",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  "Google Sheets": "googlesheets",
  "Google Analytics": "googleanalytics",
  "Google Analytics 4": "googleanalytics",
  "Search Console": "googlesearchconsole",
  Jupyter: "jupyter",
  OpenAI: "openai",
  LLMs: "openai",
  LangChain: "langchain",
  Git: "git",
  GitHub: "github",
};

export function getTechIcon(tech: string) {
  return techIconMap[tech] ?? null;
}

/** Resolve an icon value to a usable <img> src. Local paths and absolute URLs
 *  are used as-is; bare values are treated as simple-icons slugs. */
export function techIconSrc(icon: string) {
  return icon.startsWith("/") || icon.startsWith("http")
    ? icon
    : `https://cdn.simpleicons.org/${icon}`;
}
