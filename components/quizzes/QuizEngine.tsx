"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { DisclaimerModal } from "@/components/ui/DisclaimerModal";
import { type Quiz, scoreQuiz } from "@/lib/quizzes";

export function QuizEngine({ quiz }: { quiz: Quiz }) {
  const [started, setStarted] = useState(false);
  const [modal, setModal] = useState(true);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = quiz.questions[index];
  const complete = Object.keys(answers).length === quiz.questions.length;
  const result = useMemo(
    () => (complete ? scoreQuiz(quiz, answers) : null),
    [complete, quiz, answers],
  );

  if (!started) {
    return (
      <>
        <DisclaimerModal
          open={modal}
          onAccept={() => {
            setModal(false);
            setStarted(true);
          }}
          onClose={() => setModal(false)}
        />
        <div className="card-premium p-8">
          <h1 className="heading-section">{quiz.title}</h1>
          <p className="mt-4 text-slate-muted">{quiz.description}</p>
          <p className="mt-3 text-sm text-slate-light">{quiz.questions.length} questions · about 2 minutes</p>
          <button type="button" className="btn-primary mt-8" onClick={() => setModal(true)}>
            Begin
          </button>
        </div>
        <div className="mt-8">
          <DisclaimerBanner />
        </div>
      </>
    );
  }

  if (result) {
    return (
      <div className="space-y-8">
        <div className="card-premium p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-dark">
            Your result
          </p>
          <h1 className="heading-section mt-3">{result.title}</h1>
          <p className="mt-5 text-slate-muted">{result.summary}</p>
          <p className="mt-4 text-slate-muted">{result.suggestion}</p>
          <Link href="/contact" className="btn-primary mt-8">
            Explore this in a session
          </Link>
        </div>
        <DisclaimerBanner />
      </div>
    );
  }

  const progress = ((index + 1) / quiz.questions.length) * 100;

  return (
    <div className="card-premium p-8">
      <div className="h-1.5 overflow-hidden rounded-full bg-sand" aria-hidden="true">
        <div className="h-full rounded-full bg-teal transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-4 text-sm text-slate-muted">
        Question {index + 1} of {quiz.questions.length}
      </p>
      <h1 className="mt-4 font-display text-2xl text-slate md:text-3xl">{question.prompt}</h1>
      <ul className="mt-8 space-y-3">
        {question.options.map((option) => (
          <li key={option.id}>
            <button
              type="button"
              className="w-full rounded-2xl border border-sand bg-white/70 px-5 py-4 text-left text-slate transition hover:border-teal hover:bg-sage-light/50"
              onClick={() => {
                const next = { ...answers, [question.id]: option.id };
                setAnswers(next);
                if (index < quiz.questions.length - 1) {
                  setIndex((value) => value + 1);
                }
              }}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
