"use client";
import {LanguageToggleButton} from '@/components/ui/language-toggle-button';
import {ThemePaletteSelector} from '@/components/ui/theme-palette-selector';
import {ThemeToggleButton} from '@/components/ui/theme-toggle-button';
import {useLanguage} from '@/context/language-context';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';

const navLinks = [
  { en: "Home", es: "Inicio", href: "#home" },
  { en: "Services", es: "Servicios", href: "#services" },
  { en: "About", es: "Acerca", href: "#about" },
  { en: "Demo", es: "Demo", href: "#demo" },
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
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 96; // Account for header height with proper margin
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition), // Ensure we don't scroll above the page
          behavior: 'smooth'
        });
      }
    }
  };

  return (    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
                 ${isScrolled ? "bg-surface/95 dark:bg-dark-surface/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}
    >
      <nav className="container py-3 md:py-4">
        <div className="flex items-center justify-between">          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-text-primary dark:text-dark-text-primary">
            <Image src="/inca_logo_2.svg" alt="TecnoIncas Logo" width={32} height={32} />
            <span>TecnoIncas</span>
          </Link>          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.en}
                onClick={() => handleNavClick(link.href)}
                className="text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer border-none bg-transparent"
              >
                {t({ en: link.en, es: link.es })}
              </button>
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
      {isMenuOpen && (        <div className="md:hidden absolute top-full left-0 right-0 bg-surface dark:bg-dark-surface shadow-lg py-4">
          <div className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={`mobile-${link.en}`}
                onClick={() => handleNavClick(link.href)}
                className="text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors py-2 text-left border-none bg-transparent w-full"
              >
                {t({ en: link.en, es: link.es })}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
