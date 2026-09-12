export type Achievement = {
  slug: string;
  title: string;
  organization: string;
  year: string;
  periodShort: string;
  periodLong: string;
  details?: string[];
  /** Cover image for cards and detail header */
  image?: string;
  /** Pinterest-style photo gallery on the detail page */
  gallery?: string[];
  featured?: boolean;
};

export const achievements: Achievement[] = [
  {
    slug: "google-data-analytics",
    title: "Certificate",
    organization: "Google Data Analytics Professional Certificate",
    year: "2024",
    periodShort: "2024",
    periodLong: "2024 · Google",
    details: [
      "Completed Google's professional certificate covering the full data-analysis workflow.",
      "Hands-on with data cleaning, analysis, visualization, SQL, R, and spreadsheets.",
      "Built case studies translating raw data into stakeholder-ready insights.",
    ],
    featured: true,
  },
  {
    slug: "ga4-certification",
    title: "Certification",
    organization: "Google Analytics (GA4) Certification",
    year: "2024",
    periodShort: "2024",
    periodLong: "2024 · Google Skillshop",
    details: [
      "Certified in Google Analytics 4 measurement, reporting, and analysis.",
      "Covered event-based tracking, funnels, audiences, and attribution.",
    ],
    featured: true,
  },
];

export function getAchievement(slug: string) {
  return achievements.find((item) => item.slug === slug);
}
