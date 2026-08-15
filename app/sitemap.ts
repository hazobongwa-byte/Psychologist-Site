import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { ASSESSMENTS } from "@/lib/assessments";
import { QUIZZES } from "@/lib/quizzes";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/education",
    "/kids",
    "/relationships",
    "/tests",
    "/assessments",
    "/contact",
    "/privacy",
  ];

  const dynamic = [
    ...ARTICLES.map((item) => `/education/${item.slug}`),
    ...QUIZZES.map((item) => `/tests/${item.slug}`),
    ...ASSESSMENTS.map((item) => `/assessments/${item.slug}`),
  ];

  return [...staticPaths, ...dynamic].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
  }));
}
