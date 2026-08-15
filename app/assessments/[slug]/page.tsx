import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AssessmentEngine } from "@/components/assessments/AssessmentEngine";
import { ASSESSMENTS, getAssessment } from "@/lib/assessments";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return ASSESSMENTS.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getAssessment(params.slug);
  if (!item) return { title: "Assessment" };
  return { title: item.title, description: item.description };
}

export default function AssessmentPage({ params }: Props) {
  const assessment = getAssessment(params.slug);
  if (!assessment) notFound();

  return (
    <div className="pt-28">
      <section className="section-y">
        <div className="container-page max-w-2xl">
          <Link href="/assessments" className="text-sm text-teal-dark">
            ← All self-assessments
          </Link>
          <div className="mt-8">
            <AssessmentEngine assessment={assessment} />
          </div>
        </div>
      </section>
    </div>
  );
}
