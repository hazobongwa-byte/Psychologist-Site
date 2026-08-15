import { SITE } from "./site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressCountry: "ZA",
    },
    jobTitle: "Psychologist",
    knowsAbout: [
      "Individual therapy",
      "Couples therapy",
      "Family therapy",
      "Child and adolescent therapy",
      "Cognitive behavioural therapy",
    ],
  };
}
