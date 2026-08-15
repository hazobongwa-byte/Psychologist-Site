import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { QUALIFICATIONS } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Bongi Ndumo",
  description:
    "Meet psychologist Bongi Ndumo — her training, therapeutic approach, and why she chose this work.",
};

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Warm professional portrait placeholder for Bongi Ndumo in a calm office setting"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-dark">
              About
            </p>
            <h1 className="heading-display mt-3">Hello, I am Bongi</h1>
            <p className="mt-6 text-slate-muted">
              I am a psychologist who believes healing happens in relationship —
              in being met, without hurry, by someone who can hold both your
              strength and your ache. My practice is a quiet room for that kind
              of meeting.
            </p>
            <p className="mt-4 text-slate-muted">
              You do not need to arrive with the right words. We will find them
              together. I work with adults, couples, families, and young people,
              in person in {SITE.location} and online across South Africa.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-sage-light/40">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="heading-section">Qualifications and experience</h2>
            <ul className="mt-6 space-y-3 text-slate-muted">
              {QUALIFICATIONS.map((item) => (
                <li key={item} className="rounded-2xl bg-white/70 px-5 py-4">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-light">
              Please replace placeholders with Bongi’s confirmed credentials before launch.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="heading-section">How I work</h2>
            <p className="mt-6 text-slate-muted">
              My approach is person-centred and trauma-informed, with practical
              tools from Cognitive Behavioural Therapy when they are useful. I
              pay attention to culture, family, and the systems around you —
              because nobody heals in a vacuum.
            </p>
            <p className="mt-4 text-slate-muted">
              Sessions are collaborative. We will name what hurts, notice what
              already helps, and practise small changes that respect your
              nervous system. I will not rush you toward a version of yourself
              that looks good on paper. I will walk with the person you already
              are.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page max-w-3xl">
          <FadeIn>
            <h2 className="heading-section">Why I became a psychologist</h2>
            <p className="mt-6 text-slate-muted">
              I came to this work because I have seen what happens when people
              are asked to be strong without being held. I wanted to offer a
              different kind of strength: the courage to rest, to tell the
              truth, and to be accompanied.
            </p>
            <p className="mt-4 text-slate-muted">
              If you are reading this and wondering whether your story is “enough”
              to deserve a session — it is. You are welcome here.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book a consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
