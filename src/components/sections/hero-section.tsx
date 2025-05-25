"use client";
import Logo from '@/components/ui/logo';
import {useLanguage} from '@/context/language-context';
import Link from 'next/link';

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-surface-variant dark:from-dark-background dark:to-dark-surface-variant relative overflow-hidden section-padding pt-32 md:pt-36 lg:pt-32">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">
              {t({ en: "Crafting Digital", es: "Creando" })}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:to-primary-light">
              {t({ en: "Excellence", es: "Excelencia Digital" })}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary dark:text-dark-text-secondary mb-8 max-w-xl mx-auto md:mx-0">
            {t({
              en: "Modern software solutions built with ancient wisdom and cutting-edge technology.",
              es: "Soluciones de software modernas construidas con sabiduría ancestral y tecnología de vanguardia.",
            })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#services" className="btn btn-primary">
              {t({ en: "Explore Services", es: "Explorar Servicios" })}
            </Link>
            <Link href="#contact" className="btn btn-secondary">
              {t({ en: "Get in Touch", es: "Contáctanos" })}
            </Link>
          </div>        </div>        {/* Logo with dynamic animation */}
        <div className="flex justify-center items-center mt-8 md:mt-0">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative">
            <Logo
              size="100%"
              animate={true}
              className="absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div></div>
    </section>
  );
}

