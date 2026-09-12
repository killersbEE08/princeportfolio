export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  href: string;
  website?: string;
  featured?: boolean;
  /** Optional cover image for project cards */
  cover?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "blinkit-sales-dashboard",
    title: "Blinkit Sales Performance Dashboard",
    date: "2025",
    description:
      "An end-to-end interactive Power BI dashboard analyzing sales performance across product categories, outlet types, and locations — with DAX measures and a data model that surface revenue trends and item-level insights for category-level strategy.",
    tech: ["Power BI", "SQL", "DAX", "Data Modeling"],
    href: "https://github.com/killersbEE08",
    featured: true,
    gradient: "from-yellow-500/25 via-amber-500/15 to-orange-500/25",
  },
  {
    slug: "studentdiscount-analytics",
    title: "StudentDiscount.tech — Product Analytics",
    date: "2025",
    description:
      "A GA4 measurement plan built from scratch — custom events, goals, and dimensions tracking the full user journey from acquisition to retention. Funnel and retention analysis drove content and site-architecture decisions that improved session depth and return-visitor rate.",
    tech: ["Google Analytics 4", "Search Console", "Funnel Analysis"],
    href: "https://github.com/killersbEE08",
    website: "https://studentdiscount.tech",
    featured: true,
    gradient: "from-emerald-500/25 via-green-500/15 to-lime-500/25",
  },
  {
    slug: "rag-analytics-assistant",
    title: "RAG Analytics Assistant",
    date: "2025",
    description:
      "A Python-based retrieval-augmented assistant that lets you ask business questions in plain English and get source-cited answers over reports and SQL data — bridging analytics and LLM workflows.",
    tech: ["Python", "RAG", "SQL", "LLMs"],
    href: "https://github.com/killersbEE08",
    featured: true,
    gradient: "from-blue-500/25 via-indigo-500/15 to-violet-500/25",
  },
];
