import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy and confidentiality",
  description: "How this practice handles your information and the limits of confidentiality.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28">
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-6 text-slate-muted">
          <h1 className="heading-display text-slate">Privacy and confidentiality</h1>
          <p>
            {SITE.name} treats your information with care. Enquiries, session
            notes, and any forms you complete are kept confidential within the
            bounds of professional ethics and South African law, including POPIA.
          </p>
          <h2 className="heading-section text-slate">What we collect</h2>
          <p>
            Contact details you send through the form, appointment information,
            and clinical notes created during therapy. This website may use
            privacy-respecting analytics only if you enable them at launch.
          </p>
          <h2 className="heading-section text-slate">Confidentiality in therapy</h2>
          <p>
            What you share in session stays in the room, with important
            exceptions: if there is a serious risk of harm to you or someone
            else, or where the law requires a report (including certain
            disclosures involving children). These limits will be discussed at
            the start of therapy.
          </p>
          <h2 className="heading-section text-slate">Quizzes and assessments</h2>
          <p>
            Personality quizzes and screening questionnaires on this site are
            processed in your browser. They are not stored as a clinical record
            unless you later choose to share results in a session.
          </p>
          <h2 className="heading-section text-slate">Your rights</h2>
          <p>
            You may ask what information is held about you and request
            corrections. For privacy questions, email{" "}
            <a className="text-teal-dark underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
