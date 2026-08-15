import Image from "next/image";
import Link from "next/link";
import { HeroBackground } from "@/components/home/HeroBackground";
import { FadeIn } from "@/components/ui/FadeIn";
import { SERVICES, TESTIMONIAL, TRUST_ITEMS } from "@/lib/content";
import { ARTICLES } from "@/lib/articles";
import { QUIZZES } from "@/lib/quizzes";

const PHOTO = {
  portrait:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
  room: "https://images.unsplash.com/photo-1600585154340-0ef3c08c0417?auto=format&fit=crop&w=1400&q=80",
  nature:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
};

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden pt-28">
        <HeroBackground />
        <div className="container-page relative z-10 flex min-h-[72vh] flex-col justify-center pb-20">
          <FadeIn className="max-w-3xl rounded-3xl bg-cream/70 p-6 shadow-soft backdrop-blur-md md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-dark">
              Private practice
            </p>
            <h1 className="heading-display mt-4">
              Welcome to a space where healing begins
            </h1>
            <p className="lede mt-6">
              Bongi Ndumo — Psychologist. Helping you find clarity, calm, and
              connection.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Session
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-sand bg-sand/30">
        <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label}>
              <p className="font-display text-2xl text-slate">{item.label}</p>
              <p className="text-sm text-slate-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={PHOTO.portrait}
                alt="Professional portrait placeholder for psychologist Bongi Ndumo"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-dark">
              Meet Bongi
            </p>
            <h2 className="heading-section mt-3">A steady presence in a noisy world</h2>
            <p className="mt-5 text-slate-muted">
              Bongi Ndumo offers a warm, professional space for people who are
              tired of holding everything together. Sessions are unhurried,
              confidential, and grounded in evidence-based care — with room for
              your culture, your story, and your pace.
            </p>
            <p className="mt-4 text-slate-muted">
              Whether you are coming for yourself, your relationship, or your
              child, you will be met with respect and clarity.
            </p>
            <Link href="/about" className="btn-secondary mt-8">
              Read Bongi’s story
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-sage-light/40">
        <div className="container-page">
          <FadeIn>
            <h2 className="heading-section">How we can work together</h2>
            <p className="lede mt-4">
              Therapy shaped around your life — in the room or online.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.05}>
                <Link href="/services" className="card-premium block h-full p-6">
                  <h3 className="font-display text-2xl text-slate">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-muted">{service.summary}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-teal-dark">
                    {service.session}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn>
            <blockquote className="rounded-3xl bg-lavender-light/60 p-8 md:p-12">
              <p className="font-display text-2xl leading-snug text-slate md:text-3xl">
                “{TESTIMONIAL.quote}”
              </p>
              <footer className="mt-6 text-sm text-slate-muted">
                <p>{TESTIMONIAL.attribution}</p>
                <p className="mt-1 text-xs">{TESTIMONIAL.note}</p>
              </footer>
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl">
              <Image
                src={PHOTO.room}
                alt="A calm, sunlit therapy room with soft furnishings"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-cream-dark/60">
        <div className="container-page">
          <FadeIn>
            <h2 className="heading-section">Resources and gentle self-reflection</h2>
            <p className="lede mt-4">
              Learn at your own pace. Quizzes and check-ins are educational — never a diagnosis.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FadeIn>
              <Link href="/education" className="card-premium block p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-teal-dark">Education</p>
                <h3 className="mt-2 font-display text-2xl">{ARTICLES[0].title}</h3>
                <p className="mt-3 text-sm text-slate-muted">{ARTICLES[0].excerpt}</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.05}>
              <Link href="/tests" className="card-premium block p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-teal-dark">Personality</p>
                <h3 className="mt-2 font-display text-2xl">{QUIZZES[0].title}</h3>
                <p className="mt-3 text-sm text-slate-muted">{QUIZZES[0].description}</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href="/assessments" className="card-premium block p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-teal-dark">Self-assessment</p>
                <h3 className="mt-2 font-display text-2xl">PHQ-9, GAD-7 and more</h3>
                <p className="mt-3 text-sm text-slate-muted">
                  Screening-style questionnaires with clear disclaimers and a path to professional care.
                </p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTO.nature}
            alt="Soft forest light filtering through green leaves"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate/35" />
        </div>
        <div className="container-page relative z-10 py-24 text-center">
          <h2 className="font-display text-3xl text-cream md:text-4xl">
            When you are ready, the door is open.
          </h2>
          <Link href="/contact" className="btn-primary mt-8 bg-cream text-slate hover:bg-white">
            Book a Session
          </Link>
        </div>
      </section>
    </>
  );
}
