import { heroConfig, socialLinks } from "@/config/hero";
import { siteConfig } from "@/config/meta";
import { education, skills } from "@/config/education";

const profileLinks = socialLinks
  .filter((link) => link.href.startsWith("http"))
  .map((link) => link.href);

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: heroConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${heroConfig.avatar}`,
    jobTitle: "Data Analyst & Business Analytics",
    description: siteConfig.description,
    email: heroConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    alumniOf: education.map((edu) => ({
      "@type": "CollegeOrUniversity",
      name: edu.school,
    })),
    knowsAbout: skills,
    sameAs: profileLinks,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
