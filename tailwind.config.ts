import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          light: "var(--primary-light, var(--primary))",
        },
        accent: {
          DEFAULT: "var(--accent)",
          dark: "var(--accent-dark)",
        },
        // Use CSS variables for all colors
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-variant": "var(--surface-variant)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
        // Dark theme colors will be handled by CSS variables
        dark: {
          background: "var(--background)",
          surface: "var(--surface)",
          "surface-variant": "var(--surface-variant)",
          "text-primary": "var(--text-primary)",
          "text-secondary": "var(--text-secondary)",
          "text-muted": "var(--text-muted)",
          border: "var(--border)",
        },
      },
      fontFamily: {
        primary: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["Fira Code", "SF Mono", "Consolas", "monospace"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "1.5rem",
        },
        screens: {
          "2xl": "1200px",
        },
      },
      transitionDuration: {
        '250': '250ms',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-gentle': 'pulse 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 12s linear infinite',
      },
      keyframes: {
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
