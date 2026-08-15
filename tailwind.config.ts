/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#B5C4B1",
          dark: "#8FA38A",
          light: "#D4DDD1",
        },
        teal: {
          DEFAULT: "#6B9BAB",
          dark: "#4F7A8A",
          light: "#A3C4CF",
        },
        cream: {
          DEFAULT: "#F7F3EE",
          dark: "#EFE8DF",
        },
        lavender: {
          DEFAULT: "#C9B8D4",
          dark: "#A992B8",
          light: "#E4D9EC",
        },
        slate: {
          DEFAULT: "#3E4A56",
          muted: "#5C6B78",
          light: "#7A8794",
        },
        sand: {
          DEFAULT: "#E8DCC8",
          dark: "#D4C4A8",
        },
        terracotta: "#A67C6D",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(62, 74, 86, 0.08)",
        lift: "0 16px 40px rgba(62, 74, 86, 0.12)",
      },
      backgroundImage: {
        "calm-gradient":
          "linear-gradient(165deg, #F7F3EE 0%, #E8DCC8 42%, #D4DDD1 100%)",
        "hero-wash":
          "linear-gradient(180deg, rgba(247,243,238,0.55) 0%, rgba(247,243,238,0.88) 70%, #F7F3EE 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
