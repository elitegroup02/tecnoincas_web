"use client";

import {useLanguage} from '@/context/language-context';
import {useEffect, useState} from 'react';

export function LanguageToggleButton() {
  const { language, toggleLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const displayLanguage = mounted ? language : "en";
  return (
    <button
      onClick={toggleLanguage}
      className="btn btn-icon disabled:opacity-50"
      aria-label={displayLanguage === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
      title={displayLanguage === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
      disabled={!mounted}
      suppressHydrationWarning
    >
      <span className="font-medium text-sm">
        {displayLanguage === "en" ? "ES" : "EN"}
      </span>
    </button>
  );
}
