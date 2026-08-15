import Link from "next/link";
import { EMERGENCY_RESOURCES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-sand bg-sand/40">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-slate">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-muted">
            A calm, confidential practice for individuals, couples, families, and
            young people seeking clarity, rest, and connection.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-muted">
            Visit
          </h2>
          <p className="mt-3 text-sm text-slate">{SITE.location}</p>
          <p className="text-sm text-slate">{SITE.hours}</p>
          <p className="mt-2 text-sm">
            <a className="text-teal-dark underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-muted">
            If you need urgent help
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {EMERGENCY_RESOURCES.map((item) => (
              <li key={item.name}>
                <a className="text-terracotta underline-offset-4 hover:underline" href={item.href}>
                  {item.name}: {item.detail}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-sand/80">
        <div className="container-page space-y-4 py-8 text-xs leading-relaxed text-slate-muted">
          <p>
            This website does not provide emergency care and is not a substitute
            for professional medical or psychological advice. If you are in
            crisis or at risk of harm, please contact emergency services or a
            crisis helpline immediately.
          </p>
          <p>
            The quizzes and self-assessments on this site are for education and
            self-reflection only. They are not diagnostic tools.
          </p>
          <p className="flex flex-wrap gap-4">
            <Link href="/privacy" className="underline-offset-4 hover:underline">
              Privacy & confidentiality
            </Link>
            <Link href="/contact" className="underline-offset-4 hover:underline">
              Contact
            </Link>
            <span>© {new Date().getFullYear()} {SITE.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
