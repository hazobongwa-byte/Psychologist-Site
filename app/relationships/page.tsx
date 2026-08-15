import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Relationships",
  description:
    "Attachment, Gottman-informed communication, emotional connection, and when to consider couples therapy.",
};

export default function RelationshipsPage() {
  return (
    <div className="pt-28">
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-dark">
            Relationships
          </p>
          <h1 className="heading-display mt-3">Closer is a practice, not a personality</h1>
          <p className="lede mt-6">
            Interesting, research-informed notes on how people bond — written so
            you can recognise yourself without shame.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <FadeIn>
            <article className="card-premium p-8">
              <h2 className="font-display text-2xl">A few facts that surprise people</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-muted">
                <li>Feeling close is less about never fighting and more about repairing after you do.</li>
                <li>Small daily turns toward each other often matter more than grand gestures.</li>
                <li>Your nervous system learned how to attach long before you chose a partner.</li>
                <li>Curiosity (“help me understand”) lowers threat faster than being right.</li>
              </ul>
            </article>
          </FadeIn>
          <FadeIn delay={0.05}>
            <article className="card-premium p-8">
              <h2 className="font-display text-2xl">Attachment styles, simply</h2>
              <p className="mt-4 text-slate-muted">
                <strong>Secure:</strong> I can need you and still be myself.
              </p>
              <p className="mt-3 text-slate-muted">
                <strong>Anxious:</strong> Closeness soothes me; distance can feel like danger.
              </p>
              <p className="mt-3 text-slate-muted">
                <strong>Avoidant:</strong> Independence soothes me; too much closeness can feel like a trap.
              </p>
              <p className="mt-3 text-slate-muted">
                <strong>Disorganised / fearful:</strong> I want closeness and I fear it. Both can be true.
              </p>
              <p className="mt-4 text-sm text-slate-light">
                These are patterns, not prisons. They can soften in a safe relationship — including therapy.
              </p>
            </article>
          </FadeIn>
          <FadeIn>
            <article className="card-premium p-8">
              <h2 className="font-display text-2xl">Gottman-informed communication</h2>
              <p className="mt-4 text-slate-muted">
                The Gottman Institute’s research suggests stable couples keep a
                rough <strong>5:1 ratio</strong> of warm moments to hard ones, and they
                watch for four patterns that erode trust: criticism, contempt,
                defensiveness, and stonewalling.
              </p>
              <p className="mt-4 text-slate-muted">
                Antidotes are ordinary and brave: complain without attacking
                character, build respect, take responsibility for a slice of the
                problem, and take a break when flooded — then come back.
              </p>
            </article>
          </FadeIn>
          <FadeIn delay={0.05}>
            <article className="card-premium p-8">
              <h2 className="font-display text-2xl">Deepening emotional connection</h2>
              <p className="mt-4 text-slate-muted">
                Connection grows when we share the feeling under the story.
                “I felt alone when you were on your phone” lands differently from
                “You never listen.” Ask: What did that moment mean to you? What
                did you need?
              </p>
            </article>
          </FadeIn>
          <FadeIn>
            <article className="card-premium p-8">
              <h2 className="font-display text-2xl">Signs of a healthy relationship</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-muted">
                <li>Repair is possible after conflict</li>
                <li>Both people’s inner worlds are treated as real</li>
                <li>There is room for difference without humiliation</li>
                <li>Affection, humour, and appreciation still visit</li>
                <li>Safety — emotional and physical — is non-negotiable</li>
              </ul>
            </article>
          </FadeIn>
          <FadeIn delay={0.05}>
            <article className="card-premium p-8">
              <h2 className="font-display text-2xl">When to seek couples therapy</h2>
              <p className="mt-4 text-slate-muted">
                Come when the same argument keeps returning, when you feel more
                like housemates than partners, after a betrayal, during a big
                transition, or simply because you want to be closer on purpose.
                You do not have to wait until someone threatens to leave.
              </p>
              <Link href="/contact" className="btn-primary mt-6">
                Enquire about couples sessions
              </Link>
            </article>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
