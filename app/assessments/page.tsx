import type { Metadata } from "next";
import Link from "next/link";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { ASSESSMENTS } from "@/lib/assessments";

export const metadata: Metadata = {
  title: "Self-assessment tools",
  description:
    "Educational PHQ-9, GAD-7, Perceived Stress, and wellbeing check-ins. Not diagnostic.",
};

export default function AssessmentsPage() {
  return (
    <div className="pt-28">
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <h1 className="heading-display">Self-assessment tools</h1>
          <p className="lede mt-6">
            These questionnaires can help you notice patterns. They cannot tell
            you who you are, and they cannot diagnose a condition.
          </p>
        </div>
        <div className="container-page mt-12 grid gap-6 md:grid-cols-2">
          {ASSESSMENTS.map((item, index) => (
            <FadeIn key={item.slug} delay={index * 0.05}>
              <Link href={`/assessments/${item.slug}`} className="card-premium block h-full p-7">
                <p className="text-xs uppercase tracking-[0.16em] text-teal-dark">{item.shortTitle}</p>
                <h2 className="mt-2 font-display text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm text-slate-muted">{item.description}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="container-page mt-12 max-w-3xl">
          <DisclaimerBanner />
        </div>
      </section>
    </div>
  );
}
