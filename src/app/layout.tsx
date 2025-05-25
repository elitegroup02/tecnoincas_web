import type { Metadata, Viewport } from "next";
import './globals.css';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import {ThemeProvider} from '@/components/theme-provider';
import {ThemeScript} from '@/components/theme-script';
import {LanguageProvider} from '@/context/language-context';
import {Fira_Code, Inter} from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TecnoIncas - Software Development",
  description:
    "Modern software solutions built with ancient wisdom and cutting-edge technology.",
  keywords:
    "software development, web development, mobile apps, TecnoIncas, Next.js, React",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} font-primary`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="theme-sun-stone-light"
          disableTransitionOnChange
          storageKey="tecnoincas-theme"
        >
          <LanguageProvider>
            <div className="flex flex-col min-h-screen bg-background dark:bg-dark-background">
              <a href="#main" className="skip-link">
                Skip to main content
              </a>
              <Header />
              <main id="main" className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
