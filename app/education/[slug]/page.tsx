import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/lib/articles";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: "Article" };
  return { title: article.title, description: article.excerpt };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <article className="pt-28">
      <div className="section-y">
        <div className="container-page max-w-3xl">
          <Link href="/education" className="text-sm text-teal-dark">
            ← All articles
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-teal-dark">
            {article.category} · {article.readTime}
          </p>
          <h1 className="heading-display mt-3">{article.title}</h1>
          {article.body.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]} className="mt-10">
              {section.heading ? (
                <h2 className="font-display text-2xl text-slate">{section.heading}</h2>
              ) : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-slate-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <aside className="mt-12 rounded-2xl border border-sand bg-sand/40 p-6">
            <h2 className="font-semibold">Sources and further reading</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {article.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    className="text-teal-dark underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </article>
  );
}
