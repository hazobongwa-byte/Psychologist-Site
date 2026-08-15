export type LikertQuestion = {
  id: string;
  prompt: string;
  reverse?: boolean;
};

export type AssessmentBand = {
  min: number;
  max: number;
  label: string;
  narrative: string;
};

export type Assessment = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  citation: string;
  scale: { value: number; label: string }[];
  questions: LikertQuestion[];
  bands: AssessmentBand[];
  maxScore: number;
};

const PHQ9_SCALE = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "Several days" },
  { value: 2, label: "More than half the days" },
  { value: 3, label: "Nearly every day" },
];

const GAD7_SCALE = PHQ9_SCALE;

const PSS_SCALE = [
  { value: 0, label: "Never" },
  { value: 1, label: "Almost never" },
  { value: 2, label: "Sometimes" },
  { value: 3, label: "Fairly often" },
  { value: 4, label: "Very often" },
];

const WELLBEING_SCALE = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "A little" },
  { value: 2, label: "Somewhat" },
  { value: 3, label: "Quite a bit" },
  { value: 4, label: "Very much" },
];

export const ASSESSMENTS: Assessment[] = [
  {
    slug: "phq-9",
    title: "PHQ-9 mood check",
    shortTitle: "PHQ-9",
    description:
      "Nine questions used in many clinics to reflect on low mood over the past two weeks. This version is for self-reflection only.",
    citation: "Adapted from the Patient Health Questionnaire-9 (Kroenke, Spitzer & Williams). Educational use.",
    scale: PHQ9_SCALE,
    maxScore: 27,
    questions: [
      { id: "1", prompt: "Little interest or pleasure in doing things" },
      { id: "2", prompt: "Feeling down, depressed, or hopeless" },
      { id: "3", prompt: "Trouble falling or staying asleep, or sleeping too much" },
      { id: "4", prompt: "Feeling tired or having little energy" },
      { id: "5", prompt: "Poor appetite or overeating" },
      { id: "6", prompt: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down" },
      { id: "7", prompt: "Trouble concentrating on things, such as reading or watching television" },
      { id: "8", prompt: "Moving or speaking so slowly that other people could have noticed — or the opposite, being so fidgety or restless that you have been moving around a lot more than usual" },
      { id: "9", prompt: "Thoughts that you would be better off dead, or of hurting yourself in some way" },
    ],
    bands: [
      {
        min: 0,
        max: 4,
        label: "Few or no symptoms suggested",
        narrative:
          "Your answers suggest you may be experiencing few, if any, of the mood-related symptoms this questionnaire asks about. If life still feels heavy, you are welcome to talk — numbers never tell the whole story.",
      },
      {
        min: 5,
        max: 9,
        label: "Some symptoms suggested",
        narrative:
          "Your answers suggest you may be experiencing some symptoms often associated with low mood. This is not a diagnosis. It is a signal that extra care — rest, support, or a conversation with a professional — may be useful.",
      },
      {
        min: 10,
        max: 14,
        label: "A moderate cluster of symptoms suggested",
        narrative:
          "Your answers suggest you may be experiencing a moderate cluster of symptoms often discussed in the context of depression. This questionnaire cannot tell you what you have. A qualified professional can help you make sense of what you are feeling.",
      },
      {
        min: 15,
        max: 19,
        label: "A fuller cluster of symptoms suggested",
        narrative:
          "Your answers suggest you may be experiencing a fuller range of symptoms that people sometimes describe when they are struggling with low mood. Please consider booking a professional consultation. If you feel unsafe, use the emergency resources on this page.",
      },
      {
        min: 20,
        max: 27,
        label: "Many symptoms suggested",
        narrative:
          "Your answers suggest you may be experiencing many of the symptoms this questionnaire explores. This is not a diagnosis, and it is not a verdict on who you are. It is a strong invitation to seek professional support promptly. If you are in crisis, please contact a helpline or emergency services now.",
      },
    ],
  },
  {
    slug: "gad-7",
    title: "GAD-7 anxiety check",
    shortTitle: "GAD-7",
    description:
      "Seven questions that invite you to notice worry and tension over the past two weeks. For reflection, not diagnosis.",
    citation: "Adapted from the GAD-7 (Spitzer, Kroenke, Williams & Löwe). Educational use.",
    scale: GAD7_SCALE,
    maxScore: 21,
    questions: [
      { id: "1", prompt: "Feeling nervous, anxious, or on edge" },
      { id: "2", prompt: "Not being able to stop or control worrying" },
      { id: "3", prompt: "Worrying too much about different things" },
      { id: "4", prompt: "Trouble relaxing" },
      { id: "5", prompt: "Being so restless that it is hard to sit still" },
      { id: "6", prompt: "Becoming easily annoyed or irritable" },
      { id: "7", prompt: "Feeling afraid as if something awful might happen" },
    ],
    bands: [
      {
        min: 0,
        max: 4,
        label: "Few or no symptoms suggested",
        narrative:
          "Your answers suggest you may be experiencing little of the worry this questionnaire describes. If anxiety still visits you in other ways, a conversation can still help.",
      },
      {
        min: 5,
        max: 9,
        label: "Some symptoms suggested",
        narrative:
          "Your answers suggest you may be experiencing some symptoms often associated with anxiety. This is not a diagnosis. Many people find that naming worry, and learning to settle the body, makes a meaningful difference.",
      },
      {
        min: 10,
        max: 14,
        label: "A moderate cluster of symptoms suggested",
        narrative:
          "Your answers suggest you may be experiencing a moderate cluster of symptoms often discussed in the context of anxiety. A professional can help you understand what your nervous system is trying to do — and how to feel safer.",
      },
      {
        min: 15,
        max: 21,
        label: "Many symptoms suggested",
        narrative:
          "Your answers suggest you may be experiencing many of the symptoms this questionnaire explores. Please consider professional support. If worry feels unmanageable or you feel unsafe, reach out to a helpline today.",
      },
    ],
  },
  {
    slug: "perceived-stress",
    title: "Perceived Stress Scale",
    shortTitle: "PSS-10",
    description:
      "Ten questions about how unpredictable, overloaded, or manageable life has felt in the last month.",
    citation: "Adapted from the Perceived Stress Scale (Cohen, Kamarck & Mermelstein). Educational use.",
    scale: PSS_SCALE,
    maxScore: 40,
    questions: [
      { id: "1", prompt: "In the last month, how often have you been upset because of something that happened unexpectedly?" },
      { id: "2", prompt: "In the last month, how often have you felt that you were unable to control the important things in your life?" },
      { id: "3", prompt: "In the last month, how often have you felt nervous and stressed?" },
      { id: "4", prompt: "In the last month, how often have you felt confident about your ability to handle your personal problems?", reverse: true },
      { id: "5", prompt: "In the last month, how often have you felt that things were going your way?", reverse: true },
      { id: "6", prompt: "In the last month, how often have you found that you could not cope with all the things that you had to do?" },
      { id: "7", prompt: "In the last month, how often have you been able to control irritations in your life?", reverse: true },
      { id: "8", prompt: "In the last month, how often have you felt that you were on top of things?", reverse: true },
      { id: "9", prompt: "In the last month, how often have you been angered because of things that were outside of your control?" },
      { id: "10", prompt: "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?" },
    ],
    bands: [
      {
        min: 0,
        max: 13,
        label: "Lower perceived stress suggested",
        narrative:
          "Your answers suggest you may be experiencing a relatively manageable level of perceived stress. Even so, support is welcome whenever life feels uneven.",
      },
      {
        min: 14,
        max: 26,
        label: "A moderate level of perceived stress suggested",
        narrative:
          "Your answers suggest you may be experiencing a moderate sense of strain. This is not a diagnosis. It may be a good moment to restore rest, ask for help, or talk with a psychologist about what is piling up.",
      },
      {
        min: 27,
        max: 40,
        label: "A higher level of perceived stress suggested",
        narrative:
          "Your answers suggest you may be experiencing a high level of perceived stress. Please be gentle with yourself. A professional consultation can help you find a more sustainable pace — you do not have to carry this alone.",
      },
    ],
  },
  {
    slug: "wellbeing-check",
    title: "General wellbeing check",
    shortTitle: "Wellbeing",
    description:
      "A brief, original check-in about sleep, connection, energy, and hope. Designed for reflection, not diagnosis.",
    citation: "Practice-developed educational questionnaire. Not a standardised clinical instrument.",
    scale: WELLBEING_SCALE,
    maxScore: 32,
    questions: [
      { id: "1", prompt: "I have been sleeping in a way that leaves me reasonably rested", reverse: true },
      { id: "2", prompt: "I have felt connected to at least one person who cares about me", reverse: true },
      { id: "3", prompt: "I have had enough energy for the ordinary parts of my day", reverse: true },
      { id: "4", prompt: "I have felt hopeful about something in my future", reverse: true },
      { id: "5", prompt: "I have been able to enjoy small moments", reverse: true },
      { id: "6", prompt: "I have felt overwhelmed by my thoughts or feelings" },
      { id: "7", prompt: "I have been withdrawing from people or activities I usually value" },
      { id: "8", prompt: "I have felt unsafe in my own mind or body" },
    ],
    bands: [
      {
        min: 0,
        max: 8,
        label: "A steadier season suggested",
        narrative:
          "Your answers suggest you may be in a relatively steady season of wellbeing. Keep the habits that are holding you — and know you can return here anytime things shift.",
      },
      {
        min: 9,
        max: 16,
        label: "A mixed picture suggested",
        narrative:
          "Your answers suggest a mixed picture: some areas of strength, and some that may need more care. This is not a diagnosis. Many people benefit from talking it through before it grows heavier.",
      },
      {
        min: 17,
        max: 32,
        label: "A heavier season suggested",
        narrative:
          "Your answers suggest you may be in a heavier season. Please consider professional support. If you feel unsafe, use the emergency resources listed on this page — help is available.",
      },
    ],
  },
];

export function getAssessment(slug: string) {
  return ASSESSMENTS.find((item) => item.slug === slug);
}

export function scoreAssessment(
  assessment: Assessment,
  answers: Record<string, number>,
) {
  let total = 0;
  for (const question of assessment.questions) {
    const raw = answers[question.id];
    if (typeof raw !== "number") continue;
    const max = Math.max(...assessment.scale.map((s) => s.value));
    const value = question.reverse ? max - raw : raw;
    total += value;
  }
  const band =
    assessment.bands.find((item) => total >= item.min && total <= item.max) ??
    assessment.bands[assessment.bands.length - 1];
  return { total, band };
}
