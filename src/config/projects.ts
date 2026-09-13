export type CaseStudySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

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
  /** Full case study rendered on the project detail page. */
  caseStudy?: CaseStudySection[];
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
    cover: "/assets/projects/blinkit.png",
    gradient: "from-yellow-500/25 via-amber-500/15 to-orange-500/25",
    caseStudy: [
      {
        heading: "Context",
        paragraphs: [
          "Blinkit-style quick-commerce generates a huge amount of transactional data across product categories, outlet types, and locations. The raw numbers were available, but nobody could quickly answer which outlet types were underperforming or which categories drove the most revenue in which regions without manually slicing spreadsheets.",
        ],
      },
      {
        heading: "The questions I set out to answer",
        bullets: [
          "Where is revenue concentrated across product categories and outlet types?",
          "Which outlets underperform relative to similar ones, and by how much?",
          "What item-level patterns should drive the next merchandising decision?",
        ],
      },
      {
        heading: "Data & tools",
        bullets: [
          "Source data: item-level sales with category, outlet type, outlet size, location tier, and item attributes.",
          "SQL: cleaned and shaped the raw tables — handling missing weights and standardizing labels — before modeling.",
          "Power BI + DAX: a star-style data model with reusable measures for total sales, averages, and outlet performance.",
        ],
      },
      {
        heading: "Approach",
        bullets: [
          "Built a clean data model instead of a flat table, so filters propagate correctly across every visual.",
          "Wrote reusable DAX measures for revenue, average selling price, and outlet performance.",
          "Designed the report around the decisions stakeholders needed to make, not around every possible chart.",
        ],
      },
      {
        heading: "What the dashboard shows",
        bullets: [
          "Revenue by product category and outlet type, with drill-down.",
          "Outlet-level performance ranked against peers of the same size and type.",
          "Item-level top and bottom performers to guide assortment decisions.",
        ],
      },
      {
        heading: "Results & impact",
        bullets: [
          "Replaced a manual, spreadsheet-heavy reporting process with a single interactive, self-serve view.",
          "Surfaced clear category- and outlet-level patterns that support merchandising and expansion decisions.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "A dashboard full of accurate charts can still fail if nobody knows what to do after looking at it. Starting from the decision — not the data — is what makes analytics actually useful.",
        ],
      },
    ],
  },
  {
    slug: "customer-churn-analysis",
    title: "Customer Churn Analysis",
    date: "2025",
    description:
      "An end-to-end churn analysis using SQL and Python to quantify which factors drive customer churn, turning the findings into concrete retention recommendations and a summary dashboard.",
    tech: ["SQL", "Python", "Pandas", "Power BI"],
    href: "https://github.com/killersbEE08",
    featured: true,
    cover: "/assets/projects/customer-churn.png",
    gradient: "from-rose-500/25 via-pink-500/15 to-fuchsia-500/25",
    caseStudy: [
      {
        heading: "Context",
        paragraphs: [
          "Acquiring a customer costs far more than keeping one, yet most churn is only noticed after it happens. The goal here was to move from 'we lost customers' to 'here are the specific factors driving churn, and what to do about them.'",
        ],
      },
      {
        heading: "The questions",
        bullets: [
          "Which customer segments churn the most (contract type, tenure, service mix)?",
          "Which factors most strongly associate with churn, and how strongly?",
          "What concrete actions would reduce it?",
        ],
      },
      {
        heading: "Data & tools",
        bullets: [
          "Dataset: customer records with demographics, services, contract and billing details, tenure, and a churn label.",
          "SQL: extracted and aggregated the data, building cohort and segment-level churn rates.",
          "Python (pandas): cleaned the data, engineered features (tenure buckets, services-per-customer, charge ratios), and analyzed drivers.",
          "Power BI: summarized the findings in a stakeholder-friendly view.",
        ],
      },
      {
        heading: "Approach",
        bullets: [
          "Cleaned and prepared the data, engineering features that make churn patterns visible.",
          "Computed churn rates across contract types, tenure bands, payment methods, and service bundles.",
          "Ranked the factors most associated with churn and validated them against segment cuts.",
          "Translated the strongest signals into targeted retention actions.",
        ],
      },
      {
        heading: "Key findings",
        bullets: [
          "Month-to-month customers and those in their first few months of tenure churn far more than long-tenure, annual-contract customers.",
          "Certain payment methods and service combinations correlate with elevated churn.",
          "A small set of high-risk segments accounts for a disproportionate share of total churn.",
        ],
      },
      {
        heading: "Recommendations",
        bullets: [
          "Prioritize onboarding and early-tenure engagement for new customers.",
          "Incentivize longer contracts for the highest-risk month-to-month segment.",
          "Target retention offers at specific high-churn segments rather than spending evenly across the base.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "Churn analysis is only useful if it ends in an action. The hard part isn't the model or the SQL — it's translating 'these factors correlate with churn' into a concrete, prioritized retention plan a business can execute.",
        ],
      },
    ],
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
    cover: "/assets/projects/rag-analytics.png",
    gradient: "from-blue-500/25 via-indigo-500/15 to-violet-500/25",
    caseStudy: [
      {
        heading: "Context",
        paragraphs: [
          "Dashboards are great at answering the questions you anticipated. But stakeholders constantly ask new, one-off questions ('why did returns spike in the north region last week?') that don't fit an existing chart — which means someone manually digging through reports and writing SQL.",
        ],
      },
      {
        heading: "The problem",
        paragraphs: [
          "How do you let non-technical users ask ad-hoc questions and get trustworthy, traceable answers — without an analyst in the loop for every request?",
        ],
      },
      {
        heading: "Approach",
        bullets: [
          "Ingestion: business reports and documents are chunked and embedded into a vector store for semantic retrieval.",
          "Retrieval + generation: for each question, the system retrieves the most relevant context (and, where applicable, maps the question to SQL), then an LLM composes a grounded answer.",
          "Source citations: every answer links back to the exact source it used, so numbers can be verified.",
        ],
      },
      {
        heading: "Why it matters for analytics",
        bullets: [
          "Traceability: citations keep the rigor analytics demands — no hallucinated numbers passed off as fact.",
          "Speed: routine 'what/why' questions get answered without a full analyst cycle.",
          "Accessibility: non-technical stakeholders can self-serve in plain language.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "RAG is only as good as its retrieval and its guardrails. For analytics specifically, traceability beats fluency — an answer you can't verify is worse than no answer. Designing for citations from the start is what makes a RAG assistant usable in a business context.",
        ],
      },
    ],
  },
];
