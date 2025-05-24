"use client";

import {MoonIcon, SunIcon} from '@heroicons/react/24/outline';
import {useTheme} from 'next-themes';
import React from 'react'; // Import React

const THEMES = [
	{ id: "sun-stone", label: "Sun & Stone", icon: "🌞" },
	{ id: "mountain-earth", label: "Mountain Earth", icon: "🌄" },
	{ id: "royal-sky", label: "Royal Sky", icon: "🌌" },
	{ id: "sacred-valley", label: "Sacred Valley", icon: "🌱" },
];

export function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  const toggleTheme = () => {
    const currentActualTheme = resolvedTheme || theme || "theme-sun-stone-light";
    const currentPalette = THEMES.find(t => currentActualTheme.includes(`-${t.id}-`)) || THEMES[0];
    const isDarkMode = currentActualTheme.endsWith("-dark");
    const newMode = isDarkMode ? "light" : "dark";
    const newTheme = `theme-${currentPalette.id}-${newMode}`;
    setTheme(newTheme);
  };

  // Always render the same structure to avoid hydration mismatch
  const displayThemeForIcon = mounted ? (resolvedTheme || theme || "theme-sun-stone-light") : "theme-sun-stone-light";
  const currentMode = displayThemeForIcon.endsWith("-dark") ? "dark" : "light";
  return (
    <button
      onClick={toggleTheme}
      aria-label={currentMode === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={currentMode === "light" ? "Switch to dark mode" : "Switch to light mode"}
      disabled={!mounted}
      className="btn btn-icon disabled:opacity-50"
      suppressHydrationWarning
    >
      {currentMode === "light" ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  );
}
