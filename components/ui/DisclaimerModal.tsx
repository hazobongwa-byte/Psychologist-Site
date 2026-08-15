"use client";

import { ASSESSMENT_DISCLAIMER } from "@/lib/site";

export function DisclaimerModal({
  open,
  onAccept,
  onClose,
}: {
  open: boolean;
  onAccept: () => void;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate/40 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-cream p-6 shadow-lift md:p-8">
        <h2 id="disclaimer-title" className="font-display text-2xl text-slate">
          Important disclaimer
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-muted">{ASSESSMENT_DISCLAIMER}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="btn-primary" onClick={onAccept}>
            I understand — continue
          </button>
          <button type="button" className="btn-secondary" onClick={onClose}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
