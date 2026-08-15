import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuizEngine } from "@/components/quizzes/QuizEngine";
import { getQuiz, QUIZZES } from "@/lib/quizzes";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return QUIZZES.map((quiz) => ({ slug: quiz.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const quiz = getQuiz(params.slug);
  if (!quiz) return { title: "Quiz" };
  return { title: quiz.title, description: quiz.description };
}

export default function QuizPage({ params }: Props) {
  const quiz = getQuiz(params.slug);
  if (!quiz) notFound();

  return (
    <div className="pt-28">
      <section className="section-y">
        <div className="container-page max-w-2xl">
          <Link href="/tests" className="text-sm text-teal-dark">
            ← All quizzes
          </Link>
          <div className="mt-8">
            <QuizEngine quiz={quiz} />
          </div>
        </div>
      </section>
    </div>
  );
}
