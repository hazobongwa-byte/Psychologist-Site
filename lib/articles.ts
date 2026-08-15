export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  body: { heading?: string; paragraphs: string[] }[];
  sources: { label: string; href: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "what-is-psychology",
    title: "What is psychology?",
    excerpt:
      "A gentle introduction to the science of mind, behaviour, and the ways we make meaning of our lives.",
    category: "Foundations",
    readTime: "6 min",
    body: [
      {
        paragraphs: [
          "Psychology is the study of how we think, feel, relate, and behave — and why those patterns make sense in the context of our lives. It is not about labelling people. It is about understanding the human experience with curiosity and care.",
          "In a therapy room, psychology becomes practical. We look at the stories you tell yourself, the relationships that shaped you, the stresses you carry, and the strengths you may have forgotten you have. The aim is not to “fix” you. It is to help you feel more at home in your own life.",
        ],
      },
      {
        heading: "What a psychologist actually does",
        paragraphs: [
          "A psychologist is trained to assess, understand, and support mental and emotional wellbeing. Sessions might include talking, noticing patterns, practising new skills, and making sense of difficult feelings at a pace that feels safe.",
          "You remain the expert on your own experience. The psychologist brings training, a steady presence, and evidence-based approaches — such as Cognitive Behavioural Therapy — and together you decide what is useful.",
        ],
      },
      {
        heading: "A note on language",
        paragraphs: [
          "Words like “disorder” or “diagnosis” can feel heavy. In this practice we speak plainly. Feeling anxious, low, or overwhelmed does not mean something is wrong with you as a person. It often means your mind and body have been working hard to cope.",
        ],
      },
    ],
    sources: [
      { label: "American Psychological Association — What is psychology?", href: "https://www.apa.org/topics" },
      { label: "World Health Organization — Mental health", href: "https://www.who.int/health-topics/mental-health" },
    ],
  },
  {
    slug: "common-mental-health-experiences",
    title: "Common mental health experiences, explained kindly",
    excerpt:
      "Anxiety, low mood, stress, and grief are part of being human. Here is language that does not shame.",
    category: "Wellbeing",
    readTime: "8 min",
    body: [
      {
        paragraphs: [
          "Many people wait a long time before seeking support because they worry they are “overreacting.” You do not need to be in crisis to deserve care. If life feels heavier than you can comfortably carry, that is reason enough to talk.",
        ],
      },
      {
        heading: "Anxiety",
        paragraphs: [
          "Anxiety is the body’s alarm system. It can show up as racing thoughts, a tight chest, restlessness, or a sense that something bad is about to happen. Sometimes the alarm is helpful. Sometimes it stays on long after the danger has passed.",
          "You are not “too sensitive.” A nervous system that has learned to stay alert can be gently retrained — through therapy, breathing, sleep, and small experiments that rebuild a sense of safety.",
        ],
      },
      {
        heading: "Low mood and depression",
        paragraphs: [
          "Low mood can look like sadness, emptiness, irritability, or a loss of interest in things that used to matter. It can also look like going through the motions while feeling far away from yourself.",
          "Depression is not laziness or a lack of gratitude. It is a real experience that responds to support, connection, and, when needed, medical care alongside therapy.",
        ],
      },
      {
        heading: "Stress and burnout",
        paragraphs: [
          "Stress is what happens when demands outpace recovery. Burnout is what happens when that imbalance lasts. Rest is not a luxury in this picture — it is part of the treatment.",
        ],
      },
      {
        heading: "Grief",
        paragraphs: [
          "Grief is love with nowhere to go. It does not follow a tidy timeline. Therapy can offer a place to remember, to rage, to rest, and to slowly make room for a life that includes the loss.",
        ],
      },
    ],
    sources: [
      { label: "SADAG — Understanding mental health", href: "https://www.sadag.org/" },
      { label: "WHO — Depression", href: "https://www.who.int/news-room/fact-sheets/detail/depression" },
    ],
  },
  {
    slug: "coping-and-self-care",
    title: "Coping strategies and self-care that actually help",
    excerpt:
      "Small, repeatable practices that soothe the nervous system — without the pressure to be perfect.",
    category: "Skills",
    readTime: "7 min",
    body: [
      {
        paragraphs: [
          "Self-care is not a spa day, though rest can be beautiful. It is the quiet work of treating yourself as someone worth looking after. The most helpful practices are often ordinary: sleep, food, movement, people, and a little less stimulation.",
        ],
      },
      {
        heading: "Start smaller than you think",
        paragraphs: [
          "When you are depleted, ambitious routines collapse. Choose one thing that takes less than five minutes: a glass of water, stepping outside, sending a message to someone safe, or putting your phone in another room for the first hour of the morning.",
        ],
      },
      {
        heading: "Soothing the body",
        paragraphs: [
          "Feelings live in the body. Warmth, slow exhalations, a hand on the chest, and a short walk can lower arousal more reliably than arguing with your thoughts. These are not distractions. They are ways of telling your nervous system: you are allowed to settle.",
        ],
      },
      {
        heading: "When coping is not enough",
        paragraphs: [
          "Coping skills support you between sessions. They do not replace being witnessed. If you are using every strategy you know and still feel unsafe or hopeless, please reach out to a professional or a crisis line. You do not have to do this alone.",
        ],
      },
    ],
    sources: [
      { label: "APA — Resilience and coping", href: "https://www.apa.org/topics/resilience" },
    ],
  },
  {
    slug: "mindfulness-and-breathing",
    title: "Mindfulness and breathing: a calm place to begin",
    excerpt:
      "Simple practices that invite the body to slow down — no special equipment, no perfect posture required.",
    category: "Practices",
    readTime: "5 min",
    body: [
      {
        paragraphs: [
          "Mindfulness is the practice of noticing what is happening right now, with a little more kindness than usual. You do not have to empty your mind. You only have to meet it.",
        ],
      },
      {
        heading: "A three-minute breathing space",
        paragraphs: [
          "Sit or stand comfortably. For one minute, notice what you are thinking and feeling — no need to change it. For the next minute, follow the breath, especially the longer, slower out-breath. For the last minute, widen your attention to the room: sounds, light, the chair beneath you.",
          "If your mind wanders, that is not failure. That is the practice: noticing, and coming back.",
        ],
      },
      {
        heading: "Box breathing",
        paragraphs: [
          "Breathe in for a count of four, hold for four, out for four, hold for four. Repeat four times. This pattern can lower heart rate and give anxious thoughts a rhythm to rest against.",
        ],
      },
    ],
    sources: [
      { label: "Oxford Mindfulness — What is mindfulness?", href: "https://www.oxfordmindfulness.org/" },
    ],
  },
  {
    slug: "cbt-overview",
    title: "Cognitive Behavioural Therapy (CBT), in plain language",
    excerpt:
      "How thoughts, feelings, and actions weave together — and how gentle experiments can loosen unhelpful loops.",
    category: "Approaches",
    readTime: "7 min",
    body: [
      {
        paragraphs: [
          "CBT is one of the most researched talking therapies. At its heart is a simple idea: the way we interpret a situation shapes how we feel and what we do next. Those interpretations are not facts. They are habits of mind — and habits can be updated.",
        ],
      },
      {
        heading: "The loop",
        paragraphs: [
          "Imagine you send a message and there is no reply. A thought arrives: “They are upset with me.” The feeling that follows might be shame or panic. The behaviour might be withdrawing, or sending three more messages. Each step feeds the next.",
          "In CBT we slow the loop down. We ask: What is the evidence? What else could be true? What would I do if I believed a kinder story for a moment?",
        ],
      },
      {
        heading: "What CBT is not",
        paragraphs: [
          "It is not positive thinking, and it is not telling you to “just change your mindset.” Painful feelings are allowed. CBT offers tools so those feelings do not have to run the whole day.",
          "It also is not the only helpful approach. Many people benefit from a blend of CBT, compassion-focused work, and a strong therapeutic relationship. We choose what fits you.",
        ],
      },
    ],
    sources: [
      { label: "Beck Institute — What is CBT?", href: "https://beckinstitute.org/about/understanding-cbt/" },
      { label: "NICE — Cognitive behavioural therapy", href: "https://www.nice.org.uk/" },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}
