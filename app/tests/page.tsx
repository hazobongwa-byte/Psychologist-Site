import type { Metadata } from "next";
import Link from "next/link";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { QUIZZES } from "@/lib/quizzes";

export const metadata: Metadata = {
  title: "Personality tests",
  description:
    "Encouraging, non-judgemental quizzes on energy, love languages, stress, and communication.",
};

export default function TestsPage() {
  return (
    <div className="pt-28">
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <h1 className="heading-display">Personality tests</h1>
          <p className="lede mt-6">
            Fun, reflective quizzes. Your result is a conversation starter — not
            a label you have to wear.
          </p>
        </div>
        <div className="container-page mt-12 grid gap-6 md:grid-cols-2">
          {QUIZZES.map((quiz, index) => (
            <FadeIn key={quiz.slug} delay={index * 0.05}>
              <Link href={`/tests/${quiz.slug}`} className="card-premium block h-full p-7">
                <h2 className="font-display text-2xl">{quiz.title}</h2>
                <p className="mt-3 text-sm text-slate-muted">{quiz.description}</p>
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
