import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Individual, couples, family, child and adolescent therapy, and online sessions with psychologist Bongi Ndumo.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28">
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-dark">
            Services
          </p>
          <h1 className="heading-display mt-3">Care that meets you where you are</h1>
          <p className="lede mt-6">
            Each offering is paced, confidential, and shaped around your needs.
            Fees are confirmed at booking — please treat the notes below as a guide.
          </p>
        </div>
        <div className="container-page mt-16 space-y-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.04}>
              <article id={service.slug} className="card-premium p-8 md:p-10">
                <h2 className="font-display text-3xl text-slate">{service.title}</h2>
                <p className="mt-4 text-slate-muted">{service.summary}</p>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-dark">
                      Who it helps
                    </h3>
                    <p className="mt-2 text-sm text-slate-muted">{service.whoItHelps}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-dark">
                      What to expect
                    </h3>
                    <p className="mt-2 text-sm text-slate-muted">{service.whatToExpect}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate">{service.session} · fees on enquiry</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="container-page mt-12">
          <Link href="/contact" className="btn-primary">
            Book a Session
          </Link>
        </div>
      </section>
    </div>
  );
}
