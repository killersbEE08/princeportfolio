import { heroConfig } from "@/config/hero";

export const aboutConfig = {
  headline: ["From raw numbers", "to business decisions."],
  intro:
    "I'm Prince Kumar — a **data & business analyst** who turns messy data into clear, actionable insight. I care about the details: clean datasets, honest metrics, and dashboards that help people **decide faster**.",
  quote:
    "A good dashboard doesn't just show numbers — it answers the question the business is actually asking.",
  traits: ["Analytical", "Curious", "Detail-oriented", "Persistent"] as const,
  traitStyles: {
    Analytical:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300",
    Curious:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300",
    "Detail-oriented":
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300",
    Persistent:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300",
  },
  meta: [
    { label: "Location", value: heroConfig.location },
    { label: "Status", value: "Open to Data Analyst / Analytics roles" },
    { label: "Focus", value: "Analytics · BI · Data Engineering" },
  ],
  story: {
    title: "How it started",
    paragraphs: [
      "I started in digital marketing, where the real work wasn't the campaigns — it was the **numbers** behind them. I found myself living in dashboards, asking why a metric moved and what to do about it. That pull toward **data** is what shaped my path.",
      "Working across GA4, Search Console, and ad platforms, I learned to turn scattered metrics into **structured reports** that non-technical stakeholders could actually act on. Clean data and a clear story beat a fancy chart every time.",
      "An **MBA in Business Analytics** gave me the framework to connect data to decisions — ROI, cost-benefit analysis, and revenue attribution — while SQL, Power BI, and Python became the tools I reach for daily.",
      "Now I work at the intersection of **analytics and engineering** — building KPI dashboards, modeling data with SQL and DAX, and exploring how **Python and RAG** can make analytics faster and more conversational.",
    ],
  },
  principles: {
    title: "How I work",
    items: [
      {
        title: "Start with the question",
        description:
          "Every dashboard begins with the decision it needs to support — not the chart I want to build.",
      },
      {
        title: "Trust the data",
        description:
          "Cleaning, validating, and modeling come first. Insights are only as good as the data behind them.",
      },
      {
        title: "Tell the story",
        description:
          "I translate complex metrics into clear narratives that non-technical stakeholders can act on.",
      },
      {
        title: "Measure the impact",
        description:
          "Analysis should move a number — conversion, cost, retention. If it doesn't drive a decision, it's noise.",
      },
    ],
  },
  beyond: {
    title: "Beyond Analytics",
    paragraphs: [
      "Outside my analytics work, I experiment with **software**, **AI**, and small **products** — building things end to end to understand how data actually gets used.",
      "I like **learning by doing** and sharing what actually worked. I'm drawn to work that combines **analytical depth** with **business clarity** — the kind of analyst who is trusted in the room where decisions get made.",
    ],
  },
  connectLinks: [
    {
      name: "Email",
      href: "mailto:hello@princelabs.me",
      icon: "mail" as const,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/princekumar",
      icon: "linkedin" as const,
    },
    {
      name: "GitHub",
      href: "https://github.com/killersbEE08",
      icon: "github" as const,
    },
  ],
};
