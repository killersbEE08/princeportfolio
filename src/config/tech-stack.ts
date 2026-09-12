export type TechItem = {
  name: string;
  /**
   * A simple-icons slug (e.g. "python"), an absolute URL, or a local path
   * starting with "/". Leave empty ("") to render a text badge instead —
   * useful for brands not available on simple-icons (Power BI, Excel, SQL).
   */
  icon: string;
};

export const techStack: TechItem[] = [
  { name: "SQL", icon: "/assets/tech/sql.svg" },
  { name: "Power BI", icon: "/assets/tech/powerbi.svg" },
  { name: "Excel", icon: "/assets/tech/excel.svg" },
  { name: "Google Sheets", icon: "googlesheets" },
  { name: "DAX", icon: "/assets/tech/dax.svg" },
  { name: "Python", icon: "python" },
  { name: "Pandas", icon: "pandas" },
  { name: "NumPy", icon: "numpy" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Google Analytics", icon: "googleanalytics" },
  { name: "Search Console", icon: "googlesearchconsole" },
  { name: "Jupyter", icon: "jupyter" },
  { name: "OpenAI", icon: "openai" },
  { name: "LangChain", icon: "langchain" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
];
