# Bongi Ndumo — Psychologist website

A premium, calm Next.js 14 site for a private psychology practice. Colour, type, and motion are chosen to feel safe, unhurried, and trustworthy.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Animated SVG hero (with `prefers-reduced-motion`)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Environment

Copy the example below into `.env.local` if you use a booking tool:

```
NEXT_PUBLIC_CAL_URL=https://cal.com/your-link
```

Update contact details, qualifications, and the site URL in `lib/site.ts` before launch.

## Before you go live

1. Replace Unsplash portraits with Bongi’s own professional photographs (`next/image` already allows `images.unsplash.com` as a placeholder host).
2. Confirm HPCSA / PsySSA wording and years of experience.
3. Set real fees, address, phone, and email.
4. Connect the contact form to an email service (the current form validates and shows a thank-you state only).
5. Add your Cal.com (or similar) URL.
6. Review emergency numbers for your region.

## Clinical note

PHQ-9, GAD-7, and the Perceived Stress Scale items are included for **educational self-reflection**. They are not diagnostic. Results use non-diagnostic language and repeat the required disclaimer. Confirm any instrument licensing for your jurisdiction before production use.

## Deploy on Vercel

1. Push this folder to GitHub.
2. Import the project in Vercel.
3. Set `NEXT_PUBLIC_CAL_URL` if needed.
4. Deploy. The app is App Router / Node and needs no extra config.
