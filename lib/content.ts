export type Service = {
  slug: string;
  title: string;
  summary: string;
  whoItHelps: string;
  whatToExpect: string;
  session: string;
};

export const SERVICES: Service[] = [
  {
    slug: "individual-therapy",
    title: "Individual therapy",
    summary:
      "A private, unhurried space to understand what you are carrying and find a kinder way forward.",
    whoItHelps:
      "Adults navigating anxiety, low mood, burnout, grief, life transitions, or a quiet sense that something needs to change.",
    whatToExpect:
      "We begin by listening. Together we set a pace that feels safe, explore patterns with curiosity rather than judgement, and practise skills you can use between sessions.",
    session: "50 minutes · in person or online",
  },
  {
    slug: "couples-therapy",
    title: "Couples therapy",
    summary:
      "Support for two people who want to feel closer, communicate more gently, and repair what has been strained.",
    whoItHelps:
      "Partners facing conflict, distance, trust wounds, parenting stress, or a wish to deepen connection before things feel stuck.",
    whatToExpect:
      "Sessions are structured and respectful. We slow conversations down, name the cycle you get caught in, and practise new ways of turning toward each other.",
    session: "60–75 minutes · in person or online",
  },
  {
    slug: "family-therapy",
    title: "Family therapy",
    summary:
      "A calm setting for families to hear one another, reduce tension, and rebuild a sense of belonging.",
    whoItHelps:
      "Families experiencing conflict, blended-family adjustments, parenting disagreements, or a child whose struggles are affecting the whole home.",
    whatToExpect:
      "Everyone who attends is given space to speak. We look at the family as a system — not at one person as the problem — and agree on small, doable changes.",
    session: "60–75 minutes · in person or online",
  },
  {
    slug: "child-adolescent",
    title: "Child and adolescent therapy",
    summary:
      "Age-appropriate support that helps young people name feelings, feel safer, and grow in confidence.",
    whoItHelps:
      "Children and teens with anxiety, sadness, school stress, friendship difficulties, big life changes, or behaviour that feels hard to understand.",
    whatToExpect:
      "Sessions may include conversation, play, and simple activities. Parents are included in a way that protects the child’s trust and supports the home.",
    session: "45–50 minutes · in person or online where suitable",
  },
  {
    slug: "telehealth",
    title: "Online / telehealth sessions",
    summary:
      "The same thoughtful care, from a quiet room that works for you — wherever you are in South Africa.",
    whoItHelps:
      "Anyone who prefers the comfort of home, has a busy schedule, lives further away, or finds travel a barrier to starting therapy.",
    whatToExpect:
      "We meet over a secure video link. You will receive a simple guide for privacy, lighting, and what to do if the connection drops.",
    session: "Same length as in-person sessions · video",
  },
];

export const QUALIFICATIONS = [
  "Master of Arts in Clinical Psychology (placeholder — confirm with Bongi)",
  "Registered Psychologist, Health Professions Council of South Africa (HPCSA)",
  "Member, Psychological Society of South Africa (PsySSA)",
  "Additional training in Cognitive Behavioural Therapy (CBT)",
  "Ongoing professional development in trauma-informed and culturally responsive care",
];

export const TRUST_ITEMS = [
  { label: "Registered psychologist", detail: "HPCSA" },
  { label: "12+ years", detail: "clinical experience" },
  { label: "PsySSA member", detail: "professional body" },
  { label: "In person & online", detail: "flexible care" },
];

export const TESTIMONIAL = {
  quote:
    "I arrived exhausted and unsure. The room felt quiet in the best way — I was never rushed, and I left each session with something I could actually use. For the first time in a long while, I felt understood.",
  attribution: "Adult client, individual therapy",
  note: "Shared with permission. Details have been changed to protect privacy.",
};
