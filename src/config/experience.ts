export type ExperienceItem = {
  company: string;
  role: string;
  periodShort: string;
  periodLong: string;
  locationShort: string;
  locationLong: string;
  working?: boolean;
  /** Optional company logo, e.g. "/assets/logos/tidalwave.png". Falls back to initials. */
  logo?: string;
  details?: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Tidalwave Solution Pvt Ltd",
    role: "Digital Marketing Specialist · Data & Analytics",
    periodShort: "Sep 23 – Nov 24",
    periodLong: "September 2023 – November 2024",
    locationShort: "Bengaluru, IN",
    locationLong: "Bengaluru, India",
    details: [
      "Built and maintained GA4 dashboards tracking traffic, goal completions, and revenue attribution across 5+ client accounts; insights contributed to a 20%+ improvement in client conversion rates.",
      "Conducted weekly variance analysis on campaign KPIs (CPC, CTR, ROAS), identifying spend anomalies and recommending adjustments that reduced cost-per-acquisition.",
      "Synthesized data from multiple sources into structured performance reports covering traffic trends, revenue attribution, and period-over-period comparisons for non-technical stakeholders.",
      "Monitored multi-channel spend using ROI and cost-benefit frameworks to flag inefficiencies and inform budget reallocation decisions.",
    ],
    tech: ["Google Analytics 4", "SQL", "Excel", "Power BI", "Data Modeling"],
  },
  {
    company: "KEY4U Information Consultants",
    role: "Digital Marketing Executive · Reporting & Analytics",
    periodShort: "Feb 23 – Aug 23",
    periodLong: "February 2023 – August 2023",
    locationShort: "Gurugram, IN",
    locationLong: "Gurugram, India",
    details: [
      "Maintained KPI tracking dashboards monitoring organic traffic and performance metrics, reporting progress against quarterly business targets.",
      "Aggregated and cleaned data from Google Search Console, GA4, and Ahrefs to build reliable reporting datasets, establishing early data-hygiene practices.",
      "Conducted competitor and market research using structured frameworks to surface growth opportunities and support data-driven decisions.",
    ],
    tech: ["Google Analytics 4", "Search Console", "Excel", "Data Cleaning"],
  },
];
