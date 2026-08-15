"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { DisclaimerModal } from "@/components/ui/DisclaimerModal";
import { EMERGENCY_RESOURCES } from "@/lib/site";
import { type Assessment, scoreAssessment } from "@/lib/assessments";

export function AssessmentEngine({ assessment }: { assessment: Assessment }) {
  const [started, setStarted] = useState(false);
  const [modal, setModal] = useState(true);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const question = assessment.questions[index];
  const complete = Object.keys(answers).length === assessment.questions.length;
  const scored = useMemo(
    () => (complete ? scoreAssessment(assessment, answers) : null),
    [complete, assessment, answers],
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
          <h1 className="heading-section">{assessment.title}</h1>
          <p className="mt-4 text-slate-muted">{assessment.description}</p>
          <p className="mt-3 text-xs text-slate-light">{assessment.citation}</p>
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

  if (scored) {
    return (
      <div className="space-y-8">
        <div className="card-premium p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-dark">
            Reflection — not a diagnosis
          </p>
          <h1 className="heading-section mt-3">{scored.band.label}</h1>
          <p className="mt-3 text-sm text-slate-light">
            Score {scored.total} of {assessment.maxScore} (for your information only)
          </p>
          <p className="mt-5 text-slate-muted">{scored.band.narrative}</p>
          <Link href="/contact" className="btn-primary mt-8">
            Book a professional consultation
          </Link>
        </div>
        <DisclaimerBanner />
        <aside className="rounded-2xl border border-sand p-5 text-sm">
          <p className="font-semibold">If you feel unsafe right now</p>
          <ul className="mt-3 space-y-1">
            {EMERGENCY_RESOURCES.map((item) => (
              <li key={item.name}>
                <a className="text-terracotta underline" href={item.href}>
                  {item.name}: {item.detail}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    );
  }

  const progress = ((index + 1) / assessment.questions.length) * 100;

  return (
    <div className="card-premium p-8">
      <div className="h-1.5 overflow-hidden rounded-full bg-sand">
        <div className="h-full rounded-full bg-lavender-dark transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-4 text-sm text-slate-muted">
        Over the last two weeks / period described — question {index + 1} of {assessment.questions.length}
      </p>
      <h1 className="mt-4 font-display text-2xl text-slate md:text-3xl">{question.prompt}</h1>
      <ul className="mt-8 space-y-3">
        {assessment.scale.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              className="w-full rounded-2xl border border-sand bg-white/70 px-5 py-4 text-left transition hover:border-teal hover:bg-sage-light/50"
              onClick={() => {
                const next = { ...answers, [question.id]: option.value };
                setAnswers(next);
                if (index < assessment.questions.length - 1) {
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
