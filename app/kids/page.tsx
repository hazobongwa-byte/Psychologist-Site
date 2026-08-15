import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Kids Corner",
  description:
    "Calm resources for children and parents — feelings, anxiety, confidence, and when to seek support.",
};

const FOR_KIDS = [
  {
    title: "Feelings have names",
    body: "Happy, sad, angry, scared, and mixed-up can all visit in one day. Naming a feeling is like turning on a light. You do not have to make it go away — you only have to notice it.",
  },
  {
    title: "When worry gets loud",
    body: "Worry is a body alarm. Try a slow balloon breath: in through the nose, out through the mouth, as if you are filling and emptying a balloon. Then tell a safe adult what the worry said.",
  },
  {
    title: "Building confidence",
    body: "Confidence grows from small brave steps, not from being perfect. One kind thing you did, one try you made, one friend you were good to — that counts.",
  },
];

const FOR_PARENTS = [
  {
    title: "How to talk about emotions",
    body: "Get low, go slow, and use simple words. “Your face looks tight. Was that a big feeling?” Listening longer than you advise is often the most powerful thing you can do.",
  },
  {
    title: "Signs a child may need extra support",
    body: "Lasting changes in sleep, appetite, school, friendships, or play; lots of tummy aches; big fears; or a child who seems much younger or much older than their age. Trust your knowing — you do not need to wait for a crisis.",
  },
  {
    title: "Parenting tips that lower the temperature",
    body: "Predictable routines, fewer questions at bedtime, repair after you raise your voice, and one-on-one time that is not about behaviour. Children settle when the adults around them have somewhere to put their own stress too.",
  },
];

export default function KidsPage() {
  return (
    <div className="pt-28">
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lavender-dark">
            Kids Corner
          </p>
          <h1 className="heading-display mt-3 text-[2.35rem] md:text-5xl">
            A softer place for big feelings
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-slate-muted">
            This page is calm on purpose. Soft shapes, simple words, and no rush.
            Grown-ups are welcome too.
          </p>
        </div>

        <div className="container-page mt-16 grid gap-6 md:grid-cols-3">
          {FOR_KIDS.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article className="rounded-3xl bg-lavender-light/70 p-7 text-lg leading-relaxed shadow-soft">
                <h2 className="font-display text-2xl">{item.title}</h2>
                <p className="mt-4 text-slate-muted">{item.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-y bg-sage-light/50">
        <div className="container-page">
          <h2 className="heading-section">For parents</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {FOR_PARENTS.map((item) => (
              <article key={item.title} className="card-premium p-7">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-4 text-slate-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page max-w-3xl">
          <h2 className="heading-section">Worksheets and activities</h2>
          <p className="mt-4 text-slate-muted">
            Printable placeholders you can replace with Bongi’s own activities.
          </p>
          <ul className="mt-6 space-y-3">
            <li>
              <a className="text-teal-dark underline" href="/worksheets/feelings-check-in.txt">
                Feelings check-in (text worksheet)
              </a>
            </li>
            <li>
              <a className="text-teal-dark underline" href="/worksheets/worry-cloud.txt">
                Worry cloud (text worksheet)
              </a>
            </li>
          </ul>
          <Link href="/contact" className="btn-primary mt-10">
            Talk about support for your child
          </Link>
        </div>
      </section>
    </div>
  );
}
