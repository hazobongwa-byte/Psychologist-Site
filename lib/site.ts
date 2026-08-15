export const SITE = {
  name: "Bongi Ndumo",
  title: "Bongi Ndumo | Psychologist",
  description:
    "A calm, confidential space for healing with psychologist Bongi Ndumo. Individual, couples, family, and child therapy — in person and online.",
  url: "https://bongindumo.co.za",
  email: "hello@bongindumo.co.za",
  phone: "+27 00 000 0000",
  location: "Johannesburg, South Africa",
  hours: "Monday–Friday, 8:00–17:00",
  experienceYears: 12,
} as const;

export const DISCLAIMER =
  "The tests and quizzes on this website are for educational and entertainment purposes only. They are not clinical diagnostic tools and are not concrete evidence of who you are or what you have. They do not replace professional medical or psychological advice. If you are truly concerned about your mental health or wellbeing, please seek help from a qualified professional.";

export const ASSESSMENT_DISCLAIMER =
  "These tests are for educational and self-reflection purposes only. They are not diagnostic tools and are not concrete evidence of who you are or what you have. If you are truly concerned about your mental health, please seek professional help.";

export const EMERGENCY_RESOURCES = [
  {
    name: "SADAG 24-hour helpline",
    detail: "0800 567 567",
    href: "tel:0800567567",
  },
  {
    name: "SADAG SMS",
    detail: "31393",
    href: "sms:31393",
  },
  {
    name: "Emergency services",
    detail: "112 or 10111",
    href: "tel:112",
  },
  {
    name: "Suicide Crisis Line",
    detail: "0800 567 567",
    href: "tel:0800567567",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/education", label: "Education" },
  { href: "/kids", label: "Kids Corner" },
  { href: "/relationships", label: "Relationships" },
  { href: "/tests", label: "Personality Tests" },
  { href: "/assessments", label: "Self-Assessment" },
  { href: "/contact", label: "Contact" },
] as const;
