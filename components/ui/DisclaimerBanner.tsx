import { DISCLAIMER } from "@/lib/site";

export function DisclaimerBanner({ compact = false }: { compact?: boolean }) {
  return (
    <aside
      className="rounded-2xl border border-sand bg-sand/50 p-5 text-sm leading-relaxed text-slate md:p-6"
      role="note"
    >
      <p className="font-semibold text-slate">Disclaimer</p>
      <p className={`mt-2 text-slate-muted ${compact ? "line-clamp-none" : ""}`}>
        {DISCLAIMER}
      </p>
    </aside>
  );
}
