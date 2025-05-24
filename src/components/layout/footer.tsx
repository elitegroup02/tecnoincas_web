'use client';

import {useLanguage} from '@/context/language-context';
import Link from 'next/link';

const footerLinks = {
  services: [
    { en: "Web Development", es: "Desarrollo Web", href: "#services" },
    { en: "Mobile Apps", es: "Apps Móviles", href: "#services" },
    { en: "Cloud Solutions", es: "Soluciones Nube", href: "#services" },
  ],
  company: [
    { en: "About", es: "Acerca", href: "#about" },
    { en: "Contact", es: "Contacto", href: "#contact" },
  ],
};

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary dark:bg-dark-surface text-background dark:text-dark-text-primary section-padding pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-3">
                <span className="text-2xl">⚡</span>
                <span>TecnoIncas</span>
            </Link>
            <p className="text-sm text-text-muted dark:text-dark-text-muted">
              {t({
                en: "Building tomorrow's software with ancient wisdom.",
                es: "Construyendo el software del mañana con sabiduría ancestral.",
              })}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-primary dark:text-primary-light mb-4">
              {t({ en: "Services", es: "Servicios" })}
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.en}>
                  <Link href={link.href} className="text-sm hover:text-primary dark:hover:text-primary-light transition-colors">
                    {t({ en: link.en, es: link.es })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary dark:text-primary-light mb-4">
              {t({ en: "Company", es: "Empresa" })}
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.en}>
                  <Link href={link.href} className="text-sm hover:text-primary dark:hover:text-primary-light transition-colors">
                    {t({ en: link.en, es: link.es })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border dark:border-dark-border pt-8 text-center text-sm text-text-muted dark:text-dark-text-muted">
          <p>
            &copy; {currentYear} TecnoIncas.{" "}
            {t({
              en: "All rights reserved.",
              es: "Todos los derechos reservados.",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
