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
  /** Public link to verify the credential */
  verifyUrl?: string;
  /** Pinterest-style photo gallery on the detail page */
  gallery?: string[];
  featured?: boolean;
};

export const achievements: Achievement[] = [
  {
    slug: "google-data-analytics",
    title: "Certificate",
    organization: "Google Data Analytics Professional Certificate",
    year: "2026",
    periodShort: "2026",
    periodLong: "2026 · Google",
    image: "/assets/achievements/google-data-analytics.svg",
    verifyUrl:
      "https://www.skills.google/public_profiles/2900f315-3534-4338-bd26-d7b4ff5251d1/badges/23736914",
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
    year: "2026",
    periodShort: "2026",
    periodLong: "2026 · Google Skillshop",
    image: "/assets/achievements/ga4-certification.png",
    verifyUrl: "https://skillshop.credential.net/b3087637-ecda-406c-b9db-7e992a211717",
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
