"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        solid ? "glass-nav" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="font-display text-xl text-slate md:text-2xl">
          {SITE.name}
          <span className="mt-0.5 block font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-slate-muted">
            Psychologist
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Primary">
          {NAV_LINKS.filter((link) => link.href !== "/").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-[13px] transition hover:text-teal-dark ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "font-semibold text-teal-dark"
                  : "text-slate-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-5 !py-2 text-xs">
            Book a Session
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-full border border-sand px-4 py-2 text-sm text-slate xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-sand bg-cream/95 px-5 py-4 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block py-1 text-slate">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
