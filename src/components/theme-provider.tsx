"use client";

import {ThemeProvider as NextThemesProvider} from 'next-themes';

import type {ThemeProviderProps} from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="theme-sun-stone-light"
      enableSystem={false}
      disableTransitionOnChange={false}
      value={{
        'theme-sun-stone-light': 'theme-sun-stone-light',
        'theme-sun-stone-dark': 'theme-sun-stone-dark',
        'theme-mountain-earth-light': 'theme-mountain-earth-light',
        'theme-mountain-earth-dark': 'theme-mountain-earth-dark',
        'theme-royal-sky-light': 'theme-royal-sky-light',
        'theme-royal-sky-dark': 'theme-royal-sky-dark',
        'theme-sacred-valley-light': 'theme-sacred-valley-light',
        'theme-sacred-valley-dark': 'theme-sacred-valley-dark',
      }}
    >
      {children}
    </NextThemesProvider>
  );
}
