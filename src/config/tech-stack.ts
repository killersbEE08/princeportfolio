export type TechItem = {
  name: string;
  /** simple-icons slug, an absolute URL, a local "/..." path, or "" for text-only. */
  icon: string;
};

export type TechGroup = {
  label: string;
  items: TechItem[];
};

// Grouped by capability rather than a flat wall of logos — reads as
// "here's how I solve analytical problems," not "everything I've touched."
export const techGroups: TechGroup[] = [
  {
    label: "Analytics",
    items: [
      { name: "SQL", icon: "/assets/tech/sql.svg" },
      { name: "Python", icon: "python" },
      { name: "Power BI", icon: "/assets/tech/powerbi.svg" },
      { name: "Excel", icon: "/assets/tech/excel.svg" },
      { name: "DAX", icon: "/assets/tech/dax.svg" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "Data Modeling", icon: "" },
    ],
  },
  {
    label: "Analytics Engineering / AI",
    items: [
      { name: "Git", icon: "git" },
      { name: "RAG", icon: "" },
      { name: "OpenAI", icon: "openai" },
      { name: "LangChain", icon: "langchain" },
    ],
  },
];
