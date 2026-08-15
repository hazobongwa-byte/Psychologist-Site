import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Psychology education",
  description:
    "Calm, non-stigmatising articles on psychology, mental health, coping, mindfulness, and CBT.",
};

export default function EducationPage() {
  return (
    <div className="pt-28">
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-dark">
            Education
          </p>
          <h1 className="heading-display mt-3">Understanding yourself, gently</h1>
          <p className="lede mt-6">
            These articles are written to inform, not to diagnose. Take what is
            useful, leave the rest, and come back whenever you need a quieter
            explanation.
          </p>
        </div>
        <div className="container-page mt-16 grid gap-6 md:grid-cols-2">
          {ARTICLES.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.05}>
              <Link href={`/education/${article.slug}`} className="card-premium block h-full p-7">
                <p className="text-xs uppercase tracking-[0.16em] text-teal-dark">
                  {article.category} · {article.readTime}
                </p>
                <h2 className="mt-3 font-display text-2xl">{article.title}</h2>
                <p className="mt-3 text-sm text-slate-muted">{article.excerpt}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
