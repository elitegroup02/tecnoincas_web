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
          sm: "1.5rem",
          md: "2rem",
          lg: "1.5rem",
          xl: "2rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1200px",
        },
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Custom breakpoints for better tablet support
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        // Touch device breakpoints
        'touch': { 'raw': '(hover: none)' },
        'mouse': { 'raw': '(hover: hover)' },
      },
      transitionDuration: {
        '250': '250ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      minHeight: {
        'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-gentle': 'pulse 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 12s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.8'
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '1'
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
