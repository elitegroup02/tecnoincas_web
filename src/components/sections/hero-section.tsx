"use client";
import {useLanguage} from '@/context/language-context';
import Link from 'next/link';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-surface-variant dark:from-dark-background dark:to-dark-surface-variant relative overflow-hidden section-padding pt-20 md:pt-24">
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
          </div>
        </div>        <div className="hidden md:flex justify-center items-center">
          <div className="w-72 h-72 lg:w-96 lg:h-96 relative">
            {/* Main Inca Sun (Inti) */}
            <div className="inca-sun absolute inset-0 opacity-90 animate-rotate-slow"></div>
            {/* Inner geometric pattern */}
            <div className="inca-chakana absolute inset-12 opacity-70 animate-pulse-gentle"></div>
            {/* Central symbol */}
            <div className="inca-center absolute inset-1/3 opacity-80 animate-pulse-gentle animation-delay-500"></div>
          </div>
        </div>
      </div>      <style jsx>{`
        .animate-pulse-gentle {
          animation: pulse-gentle 4s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 30s linear infinite;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

