import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 text-center">
      <h1 className="heading-section">This page is resting elsewhere</h1>
      <p className="lede mt-4">The link may have moved. Let us take you home.</p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}
