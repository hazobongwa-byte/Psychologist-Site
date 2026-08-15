export type QuizOption = {
  id: string;
  label: string;
  scores: Record<string, number>;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export type QuizResult = {
  id: string;
  title: string;
  summary: string;
  suggestion: string;
};

export type Quiz = {
  slug: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  results: QuizResult[];
};

export const QUIZZES: Quiz[] = [
  {
    slug: "introvert-extrovert",
    title: "Introvert or extrovert?",
    description:
      "A gentle look at where you draw energy from. Most of us live somewhere in between — and that is more than okay.",
    questions: [
      {
        id: "q1",
        prompt: "After a full day with people, you usually feel…",
        options: [
          { id: "a", label: "Ready for quiet, even if the day was lovely", scores: { introvert: 2 } },
          { id: "b", label: "A mix — I need a pause, then I am fine", scores: { ambivert: 2 } },
          { id: "c", label: "Energised and open to one more conversation", scores: { extrovert: 2 } },
        ],
      },
      {
        id: "q2",
        prompt: "When something important happens, you prefer to…",
        options: [
          { id: "a", label: "Think it through privately first", scores: { introvert: 2 } },
          { id: "b", label: "Talk with one trusted person, then reflect", scores: { ambivert: 2 } },
          { id: "c", label: "Talk it out with others as I go", scores: { extrovert: 2 } },
        ],
      },
      {
        id: "q3",
        prompt: "A nourishing weekend looks like…",
        options: [
          { id: "a", label: "Books, nature, and plenty of unscheduled time", scores: { introvert: 2 } },
          { id: "b", label: "A balance of rest and seeing people I love", scores: { ambivert: 2 } },
          { id: "c", label: "Plans, gatherings, and a full social calendar", scores: { extrovert: 2 } },
        ],
      },
      {
        id: "q4",
        prompt: "In a group, you tend to…",
        options: [
          { id: "a", label: "Listen closely and speak when it feels meaningful", scores: { introvert: 2 } },
          { id: "b", label: "Shift between listening and leading, depending on the room", scores: { ambivert: 2 } },
          { id: "c", label: "Jump in, connect people, and keep the energy moving", scores: { extrovert: 2 } },
        ],
      },
      {
        id: "q5",
        prompt: "You recharge most reliably by…",
        options: [
          { id: "a", label: "Solitude", scores: { introvert: 2 } },
          { id: "b", label: "A little of both, in the right amounts", scores: { ambivert: 2 } },
          { id: "c", label: "Company and conversation", scores: { extrovert: 2 } },
        ],
      },
    ],
    results: [
      {
        id: "introvert",
        title: "You lean introvert",
        summary:
          "Quiet is not a lack of warmth. Your answers suggest you restore yourself in stillness, depth, and unhurried connection. That is a strength — especially in a noisy world.",
        suggestion:
          "In therapy, we can honour your need for space while making sure you still feel connected. Many introverts thrive when they stop apologising for how they recharge.",
      },
      {
        id: "ambivert",
        title: "You live in the middle — an ambivert",
        summary:
          "Your answers suggest a flexible rhythm: you enjoy people and you need rest. That adaptability is a gift, even when it feels like you never quite “fit” one label.",
        suggestion:
          "Therapy can help you notice what you need on a given day, so you do not over-give in social seasons or isolate when you actually want company.",
      },
      {
        id: "extrovert",
        title: "You lean extrovert",
        summary:
          "Connection seems to light you up. Your answers suggest you think out loud, draw energy from people, and feel most alive in shared spaces. That warmth is a real resource.",
        suggestion:
          "In therapy we can also make room for the quieter feelings that sometimes get missed in a full life — so your energy has somewhere gentle to land.",
      },
    ],
  },
  {
    slug: "love-languages",
    title: "Love languages",
    description:
      "A warm look at how you like to give and receive care. There is no winning language — only clues about what helps you feel close.",
    questions: [
      {
        id: "q1",
        prompt: "You feel most cared for when someone…",
        options: [
          { id: "a", label: "Tells you, clearly, what they appreciate about you", scores: { words: 2 } },
          { id: "b", label: "Sets time aside just for you, phones away", scores: { time: 2 } },
          { id: "c", label: "Does something practical that lightens your load", scores: { acts: 2 } },
          { id: "d", label: "Offers a hug, a hand, or sits close", scores: { touch: 2 } },
          { id: "e", label: "Gives a thoughtful gift or keepsake", scores: { gifts: 2 } },
        ],
      },
      {
        id: "q2",
        prompt: "When you want to show love, you naturally…",
        options: [
          { id: "a", label: "Write a note or say the kind thing out loud", scores: { words: 2 } },
          { id: "b", label: "Plan time together without distractions", scores: { time: 2 } },
          { id: "c", label: "Cook, run an errand, or fix something", scores: { acts: 2 } },
          { id: "d", label: "Reach for their hand", scores: { touch: 2 } },
          { id: "e", label: "Bring a small surprise that says “I thought of you”", scores: { gifts: 2 } },
        ],
      },
      {
        id: "q3",
        prompt: "You feel unseen when…",
        options: [
          { id: "a", label: "Kind words are rare, even if everything else is fine", scores: { words: 2 } },
          { id: "b", label: "You are always fitting around someone else’s schedule", scores: { time: 2 } },
          { id: "c", label: "You carry the mental load alone", scores: { acts: 2 } },
          { id: "d", label: "Affection feels distant or withheld", scores: { touch: 2 } },
          { id: "e", label: "Special days pass without a gesture", scores: { gifts: 2 } },
        ],
      },
      {
        id: "q4",
        prompt: "A restorative evening with someone you love is…",
        options: [
          { id: "a", label: "Honest conversation and encouragement", scores: { words: 2 } },
          { id: "b", label: "Uninterrupted time, even if you do very little", scores: { time: 2 } },
          { id: "c", label: "Sharing tasks so you can both rest", scores: { acts: 2 } },
          { id: "d", label: "Closeness — a film, a walk arm in arm", scores: { touch: 2 } },
          { id: "e", label: "A small ritual: flowers, a favourite snack, a token", scores: { gifts: 2 } },
        ],
      },
    ],
    results: [
      {
        id: "words",
        title: "Words of affirmation",
        summary:
          "Language lands deeply for you. Hearing “I see you” can settle something that practical help alone cannot. That does not make you needy — it makes you someone who is nourished by being named.",
        suggestion:
          "In therapy or in your relationships, practising specific, honest appreciation — and asking for it — can be a powerful form of care.",
      },
      {
        id: "time",
        title: "Quality time",
        summary:
          "Presence is your language. You feel loved when someone chooses you with their attention, not only their tasks. In a distracted world, that longing is wise.",
        suggestion:
          "Couples work often helps partners protect small islands of undivided time. You do not need grand plans — you need to feel chosen.",
      },
      {
        id: "acts",
        title: "Acts of service",
        summary:
          "Love, for you, often looks like follow-through. When someone lightens the load, your nervous system can finally exhale. That is a valid, generous way of bonding.",
        suggestion:
          "Therapy can help you ask for help without guilt, and notice when you are over-functioning for everyone else.",
      },
      {
        id: "touch",
        title: "Physical touch",
        summary:
          "Your body keeps the score of closeness. A hand on your shoulder can say more than a paragraph. Consent and safety matter here — and so does your need for warmth.",
        suggestion:
          "In a therapeutic space we can talk about boundaries, comfort, and how to communicate this need without shame.",
      },
      {
        id: "gifts",
        title: "Receiving gifts",
        summary:
          "Symbols matter to you. A small, thoughtful object can carry the message “you were on my mind.” This is not materialism — it is meaning, made visible.",
        suggestion:
          "Exploring family history around giving and receiving can be rich work in therapy, especially if gifts were scarce or complicated growing up.",
      },
    ],
  },
  {
    slug: "stress-style",
    title: "Your stress style",
    description:
      "How do you tend to respond when life tightens? This is a map, not a verdict — and maps can be redrawn.",
    questions: [
      {
        id: "q1",
        prompt: "When pressure builds, you are most likely to…",
        options: [
          { id: "a", label: "Keep going, ignore the tiredness, and stay in control", scores: { overfunction: 2 } },
          { id: "b", label: "Withdraw, delay, or go quiet", scores: { freeze: 2 } },
          { id: "c", label: "Feel it in your body — tension, sleep changes, a tight chest", scores: { body: 2 } },
          { id: "d", label: "Reach for people, reassurance, or distraction", scores: { connect: 2 } },
        ],
      },
      {
        id: "q2",
        prompt: "A stressful email arrives. Your first move is…",
        options: [
          { id: "a", label: "Reply immediately and solve it", scores: { overfunction: 2 } },
          { id: "b", label: "Leave it unopened a little longer than you mean to", scores: { freeze: 2 } },
          { id: "c", label: "Notice your heart rate before you even finish reading", scores: { body: 2 } },
          { id: "d", label: "Forward it to a friend or talk it through", scores: { connect: 2 } },
        ],
      },
      {
        id: "q3",
        prompt: "People close to you might say that under stress you…",
        options: [
          { id: "a", label: "Become extra capable — and a little less available", scores: { overfunction: 2 } },
          { id: "b", label: "Go missing, even if you are in the room", scores: { freeze: 2 } },
          { id: "c", label: "Look exhausted or unwell before you admit you are struggling", scores: { body: 2 } },
          { id: "d", label: "Need more contact than usual", scores: { connect: 2 } },
        ],
      },
      {
        id: "q4",
        prompt: "The kindest support for you is usually…",
        options: [
          { id: "a", label: "Permission to stop performing", scores: { overfunction: 2 } },
          { id: "b", label: "A gentle structure and no shame about the pause", scores: { freeze: 2 } },
          { id: "c", label: "Rest, warmth, and body-based calming", scores: { body: 2 } },
          { id: "d", label: "A steady person who does not disappear", scores: { connect: 2 } },
        ],
      },
    ],
    results: [
      {
        id: "overfunction",
        title: "The capable one",
        summary:
          "Your answers suggest you meet stress by doing more. Competence has likely kept you safe. The cost can be a body that never gets the message that the emergency is over.",
        suggestion:
          "Therapy can help you practise receiving, resting, and letting “good enough” be enough — without losing the strengths that got you here.",
      },
      {
        id: "freeze",
        title: "The quieter pause",
        summary:
          "When things intensify, part of you may shut down or delay. That is a nervous-system strategy, not laziness. Freeze often appears when fight or flight did not feel possible.",
        suggestion:
          "In therapy we can thaw that freeze with small, doable steps and a lot of self-compassion — so movement returns without force.",
      },
      {
        id: "body",
        title: "The body messenger",
        summary:
          "Stress seems to speak through your body first. Headaches, sleep, appetite, and tension may be trying to tell a story your words have not caught up with yet.",
        suggestion:
          "A body-aware approach in therapy — breathing, pacing, and naming sensations — can help you feel safer in your own skin.",
      },
      {
        id: "connect",
        title: "The reacher",
        summary:
          "You tend to seek people when life is hard. Connection is a wise instinct. The work is making sure the people you reach for can meet you, and that you can also soothe from the inside.",
        suggestion:
          "Therapy offers a reliable relationship while you build inner steadiness — so closeness feels like a choice, not only a lifeline.",
      },
    ],
  },
  {
    slug: "communication-style",
    title: "Your communication style",
    description:
      "How you speak, listen, and ask for what you need. Styles can soften. None of this is a character flaw.",
    questions: [
      {
        id: "q1",
        prompt: "When something bothers you, you usually…",
        options: [
          { id: "a", label: "Say it clearly, even if your voice shakes", scores: { assertive: 2 } },
          { id: "b", label: "Keep the peace and hope they notice", scores: { gentle: 2 } },
          { id: "c", label: "Feel a spike of heat and speak more sharply than you mean to", scores: { fiery: 2 } },
          { id: "d", label: "Go quiet and sort it out later — or not at all", scores: { reserved: 2 } },
        ],
      },
      {
        id: "q2",
        prompt: "In a disagreement, your aim is mostly to…",
        options: [
          { id: "a", label: "Be understood and understand them", scores: { assertive: 2 } },
          { id: "b", label: "Keep the relationship smooth", scores: { gentle: 2 } },
          { id: "c", label: "Make the point so it cannot be ignored", scores: { fiery: 2 } },
          { id: "d", label: "End the conversation as soon as possible", scores: { reserved: 2 } },
        ],
      },
      {
        id: "q3",
        prompt: "People often experience you as…",
        options: [
          { id: "a", label: "Direct and fair", scores: { assertive: 2 } },
          { id: "b", label: "Kind, sometimes hard to read", scores: { gentle: 2 } },
          { id: "c", label: "Passionate, occasionally intense", scores: { fiery: 2 } },
          { id: "d", label: "Thoughtful and private", scores: { reserved: 2 } },
        ],
      },
      {
        id: "q4",
        prompt: "Asking for what you need feels…",
        options: [
          { id: "a", label: "Uncomfortable but doable", scores: { assertive: 2 } },
          { id: "b", label: "Selfish, even when it is not", scores: { gentle: 2 } },
          { id: "c", label: "Easier when you are already frustrated", scores: { fiery: 2 } },
          { id: "d", label: "Almost impossible in the moment", scores: { reserved: 2 } },
        ],
      },
    ],
    results: [
      {
        id: "assertive",
        title: "Clear and grounded",
        summary:
          "Your answers lean toward assertive communication: you try to be honest without steamrolling. That skill can still wobble under stress — and that is human.",
        suggestion:
          "Therapy can refine this further: staying open when you feel hurt, and making space for partners or family who communicate differently.",
      },
      {
        id: "gentle",
        title: "The peacemaker",
        summary:
          "You often put harmony first. That tenderness is a gift. Over time, unspoken needs can turn into quiet resentment — not because you are unkind, but because you were never taught that your needs count too.",
        suggestion:
          "In therapy we practise small, kind sentences that tell the truth. You can keep your warmth and still take up space.",
      },
      {
        id: "fiery",
        title: "The passionate voice",
        summary:
          "You care enough to raise the volume. Intensity often protects something tender underneath — fear of being dismissed, or a history of not being heard.",
        suggestion:
          "Couples or individual work can help you slow the heat, name the softer feeling, and still be taken seriously.",
      },
      {
        id: "reserved",
        title: "The inner processor",
        summary:
          "You think before you speak — sometimes so long that the moment passes. Silence can be wisdom. It can also leave people guessing, and leave you carrying things alone.",
        suggestion:
          "Therapy is a place to try words at your own pace, with no pressure to perform. Many reserved communicators blossom when they feel unhurried.",
      },
    ],
  },
];

export function getQuiz(slug: string) {
  return QUIZZES.find((quiz) => quiz.slug === slug);
}

export function scoreQuiz(quiz: Quiz, answers: Record<string, string>) {
  const totals: Record<string, number> = {};
  for (const question of quiz.questions) {
    const optionId = answers[question.id];
    const option = question.options.find((item) => item.id === optionId);
    if (!option) continue;
    for (const [key, value] of Object.entries(option.scores)) {
      totals[key] = (totals[key] ?? 0) + value;
    }
  }
  const winner =
    Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0] ?? quiz.results[0].id;
  return quiz.results.find((result) => result.id === winner) ?? quiz.results[0];
}
