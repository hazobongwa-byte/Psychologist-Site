import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { EMERGENCY_RESOURCES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and booking",
  description: "Book a session with psychologist Bongi Ndumo, find hours, FAQs, and emergency resources.",
};

const FAQS = [
  {
    q: "How do I book?",
    a: "Send a message through the form, or use the calendar placeholder once your Cal.com (or similar) link is added. You will receive a confirmation and a brief intake note.",
  },
  {
    q: "Are sessions confidential?",
    a: "Yes. What you share is protected within the limits of South African law and professional ethics. Limits include risk of serious harm and legal requirements to report. See the privacy page for detail.",
  },
  {
    q: "Do you offer online sessions?",
    a: "Yes. Telehealth is available where it is clinically appropriate. You will need a private room and a stable connection.",
  },
  {
    q: "What if I am in crisis?",
    a: "This practice is not an emergency service. Please contact a helpline or emergency number listed on this page, then follow up for an appointment when you are safe.",
  },
];

export default function ContactPage() {
  const calUrl = process.env.NEXT_PUBLIC_CAL_URL;

  return (
    <div className="pt-28">
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-dark">
              Contact
            </p>
            <h1 className="heading-display mt-3">Let us begin gently</h1>
            <p className="mt-6 text-slate-muted">
              Share a little about what you are looking for. There is no need to
              tell the whole story here — a few sentences are enough.
            </p>
            <dl className="mt-8 space-y-3 text-sm">
              <div>
                <dt className="font-semibold">Location</dt>
                <dd className="text-slate-muted">{SITE.location}</dd>
              </div>
              <div>
                <dt className="font-semibold">Hours</dt>
                <dd className="text-slate-muted">{SITE.hours}</dd>
              </div>
              <div>
                <dt className="font-semibold">Email</dt>
                <dd>
                  <a className="text-teal-dark underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <h2 className="heading-section">Booking calendar</h2>
          <p className="mt-3 text-slate-muted">
            Placeholder for Cal.com or a similar scheduler. Set{" "}
            <code className="rounded bg-sand px-1">NEXT_PUBLIC_CAL_URL</code> to enable the embed.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-sand bg-white/70">
            {calUrl ? (
              <iframe title="Booking calendar" src={calUrl} className="h-[720px] w-full" />
            ) : (
              <div className="flex h-64 items-center justify-center p-8 text-center text-slate-muted">
                Calendar embed will appear here once a booking URL is configured.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-y bg-sage-light/40">
        <div className="container-page max-w-3xl">
          <h2 className="heading-section">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            {FAQS.map((item) => (
              <details key={item.q} className="card-premium p-5">
                <summary className="cursor-pointer font-semibold">{item.q}</summary>
                <p className="mt-3 text-sm text-slate-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page max-w-3xl">
          <h2 className="heading-section">Emergency resources</h2>
          <p className="mt-4 text-slate-muted">
            If you are in immediate danger, call emergency services. If you need
            to talk now, these lines are a starting point.
          </p>
          <ul className="mt-6 space-y-2">
            {EMERGENCY_RESOURCES.map((item) => (
              <li key={item.name}>
                <a className="text-terracotta underline" href={item.href}>
                  {item.name}: {item.detail}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
