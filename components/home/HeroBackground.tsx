"use client";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="hero-motion h-full w-full opacity-[0.16]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveSage" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B5C4B1" />
            <stop offset="100%" stopColor="#6B9BAB" />
          </linearGradient>
          <linearGradient id="waveLav" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C9B8D4" />
            <stop offset="100%" stopColor="#B5C4B1" />
          </linearGradient>
          <radialGradient id="orb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9B8D4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C9B8D4" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          className="wave-a"
          fill="url(#waveSage)"
          d="M0,420 C180,360 280,520 480,460 C680,400 760,300 960,360 C1080,400 1140,480 1200,440 L1200,800 L0,800 Z"
        />
        <path
          className="wave-b"
          fill="url(#waveLav)"
          d="M0,500 C220,440 340,580 540,520 C740,460 820,380 1020,430 C1120,460 1160,520 1200,500 L1200,800 L0,800 Z"
        />
        <circle className="orb-a" cx="220" cy="180" r="120" fill="url(#orb)" />
        <circle className="orb-b" cx="920" cy="140" r="160" fill="#6B9BAB" opacity="0.35" />
        <circle className="orb-c" cx="640" cy="320" r="90" fill="#B5C4B1" opacity="0.45" />
      </svg>
      <div className="absolute inset-0 bg-hero-wash" />
    </div>
  );
}
