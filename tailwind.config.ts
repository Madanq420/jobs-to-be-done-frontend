import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "jtbd-bg-primary": "#fef5f2",
        foreground: "var(--foreground)",
        "jtbd": "#0081ab",
        "jtbd-text-primary": "#666666",
        "jtbd-text-secondary": "#ffffff",
        "jtbd-text-tertiary": "#d8c8c8",
      },
    },
  },
  plugins: [],
} satisfies Config;
