"use client";
import {LanguageToggleButton} from '@/components/ui/language-toggle-button';
import {ThemePaletteSelector} from '@/components/ui/theme-palette-selector';
import {ThemeToggleButton} from '@/components/ui/theme-toggle-button';
import {useLanguage} from '@/context/language-context';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {useEffect, useState} from 'react';

const navLinks = [
  { en: "Home", es: "Inicio", href: "#home" },
  { en: "Services", es: "Servicios", href: "#services" },
  { en: "About", es: "Acerca", href: "#about" },
  { en: "Contact", es: "Contacto", href: "#contact" },
];

export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
                 ${isScrolled ? "bg-surface/95 dark:bg-dark-surface/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}
    >
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-text-primary dark:text-dark-text-primary">
            <span className="text-2xl">⚡</span>
            <span>TecnoIncas</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.en}
                href={link.href}
                className="text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                {t({ en: link.en, es: link.es })}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <LanguageToggleButton />
            <ThemeToggleButton />
            <ThemePaletteSelector />
            <button
              className="md:hidden btn btn-icon"
              onClick={toggleMenu}
              aria-label={t({ en: "Toggle navigation", es: "Alternar navegación" })}
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface dark:bg-dark-surface shadow-lg py-4">
          <div className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.en}`}
                href={link.href}
                className="text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t({ en: link.en, es: link.es })}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
