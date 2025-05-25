"use client";
import {LanguageToggleButton} from '@/components/ui/language-toggle-button';
import Logo from '@/components/ui/logo';
import {ThemePaletteSelector} from '@/components/ui/theme-palette-selector';
import {ThemeToggleButton} from '@/components/ui/theme-toggle-button';
import {useLanguage} from '@/context/language-context';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';

const THEMES = [
  { id: "sun-stone", label: "Sun & Stone", icon: "🌞" },
  { id: "mountain-earth", label: "Mountain Earth", icon: "🌄" },
  { id: "royal-sky", label: "Royal Sky", icon: "🌌" },
  { id: "sacred-valley", label: "Sacred Valley", icon: "🌱" },
];

export default function DemoSection() {
  const { t, language } = useLanguage();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = resolvedTheme || theme || "theme-sun-stone-light";
  const currentPalette = THEMES.find(t => currentTheme.includes(`-${t.id}-`)) || THEMES[0];
  const currentMode = currentTheme.endsWith('-dark') ? 'dark' : 'light';

  const demoCards = [
    {
      title: t({ en: "Dynamic Content", es: "Contenido Dinámico" }),
      description: t({
        en: "This content changes based on your selected language. Notice how everything adapts seamlessly!",
        es: "Este contenido cambia según el idioma seleccionado. ¡Observa cómo todo se adapta perfectamente!"
      }),
      icon: "🌐"
    },    {
      title: t({ en: "Theme Awareness", es: "Conciencia de Tema" }),
      description: t({
        en: "Colors, shadows, and contrasts automatically adjust between light and dark modes for optimal readability.",
        es: "Los colores, sombras y contrastes se ajustan automáticamente entre modos claro y oscuro para una legibilidad óptima."
      }),
      icon: currentMode === 'dark' ? "🌙" : "☀️"
    },
    {
      title: t({ en: "Color Harmony", es: "Armonía de Colores" }),
      description: t({
        en: "Our carefully crafted color palettes ensure beautiful combinations in any theme configuration.",
        es: "Nuestras paletas de colores cuidadosamente elaboradas aseguran combinaciones hermosas en cualquier configuración de tema."
      }),
      icon: "🎨"
    }
  ];


  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-surface to-background dark:from-dark-surface dark:to-dark-background relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:to-primary-light">
              {t({ en: "Interactive Design Demo", es: "Demo de Diseño Interactivo" })}
            </span>
          </h2>          <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
            {t({
              en: "Experience the power of adaptive design. Try changing the language, theme, or color palette to see how everything adapts in real-time.",
              es: "Experimenta el poder del diseño adaptativo. Prueba cambiar el idioma, tema o paleta de colores para ver cómo todo se adapta en tiempo real."
            })}
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {demoCards.map((card, index) => (
            <div key={index} className="group bg-surface dark:bg-dark-surface rounded-xl p-6 border border-border dark:border-dark-border hover:border-primary dark:hover:border-primary-light transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary dark:text-dark-text-primary">
                {card.title}
              </h3>
              <p className="text-text-secondary dark:text-dark-text-secondary">
                {card.description}
              </p>
            </div>
          ))}        </div>

        {/* Interactive Controls */}
        <div className="text-center mb-12">
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-6">
            {t({
              en: "Try the controls below to see how the configuration card adapts in real-time:",
              es: "Prueba los controles de abajo para ver cómo la tarjeta de configuración se adapta en tiempo real:"
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-surface dark:bg-dark-surface rounded-lg p-3 border border-border dark:border-dark-border">
              <span className="text-sm font-medium">{t({ en: "Language:", es: "Idioma:" })}</span>
              <LanguageToggleButton />
            </div>
            <div className="flex items-center gap-2 bg-surface dark:bg-dark-surface rounded-lg p-3 border border-border dark:border-dark-border">
              <span className="text-sm font-medium">{t({ en: "Theme:", es: "Tema:" })}</span>
              <ThemeToggleButton />
            </div>
            <div className="flex items-center gap-2 bg-surface dark:bg-dark-surface rounded-lg p-3 border border-border dark:border-dark-border">
              <span className="text-sm font-medium">{t({ en: "Palette:", es: "Paleta:" })}</span>
              <ThemePaletteSelector />
            </div>
          </div>
        </div>        {/* Current Configuration Display */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary-light/10 dark:to-accent/10 rounded-xl p-8 border border-primary/20 dark:border-primary-light/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
              {t({ en: "Current Configuration", es: "Configuración Actual" })}
            </h3>
          </div>          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo Display */}
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-surface dark:bg-dark-surface rounded-lg min-h-[200px]">
                <Logo
                  size={64}
                  animate={true}
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary text-center">
                  {t({
                    en: "Watch how the logo adapts to different themes and modes",
                    es: "Observa cómo el logo se adapta a diferentes temas y modos"
                  })}
                </p>
              </div>
            </div>

            {/* Status Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-surface dark:bg-dark-surface rounded-lg">
                <span className="font-medium">{t({ en: "Language", es: "Idioma" })}:</span>
                <span className="text-primary dark:text-primary-light font-bold">
                  {language === 'en' ? 'English' : 'Español'} ({language.toUpperCase()})
                </span>
              </div>              <div className="flex items-center justify-between p-3 bg-surface dark:bg-dark-surface rounded-lg">
                <span className="font-medium">{t({ en: "Theme Mode", es: "Modo de Tema" })}:</span>
                <span className="text-primary dark:text-primary-light font-bold capitalize">
                  {currentMode === 'dark' ? t({ en: "Dark", es: "Oscuro" }) : t({ en: "Light", es: "Claro" })}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-surface dark:bg-dark-surface rounded-lg">
                <span className="font-medium">{t({ en: "Color Palette", es: "Paleta de Colores" })}:</span>
                <span className="text-primary dark:text-primary-light font-bold capitalize">
                  {t({
                    en: currentPalette.label,
                    es: currentPalette.id === 'sun-stone' ? 'Sol y Piedra' :
                        currentPalette.id === 'mountain-earth' ? 'Montaña y Tierra' :
                        currentPalette.id === 'royal-sky' ? 'Cielo Real' :
                        currentPalette.id === 'sacred-valley' ? 'Valle Sagrado' : currentPalette.label
                  })}
                </span>
              </div>
            </div>

            {/* Color Palette Display */}
            <div className="space-y-4">
              <h4 className="font-semibold text-text-primary dark:text-dark-text-primary">
                {t({ en: "Active Colors", es: "Colores Activos" })}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-surface dark:bg-dark-surface rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-primary border-2 border-white dark:border-dark-surface shadow-sm"></div>
                  <span className="text-sm font-medium">{t({ en: "Primary", es: "Primario" })}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface dark:bg-dark-surface rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-accent border-2 border-white dark:border-dark-surface shadow-sm"></div>
                  <span className="text-sm font-medium">{t({ en: "Accent", es: "Acento" })}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface dark:bg-dark-surface rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-surface-variant border-2 border-border dark:border-dark-border shadow-sm"></div>
                  <span className="text-sm font-medium">{t({ en: "Surface", es: "Superficie" })}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface dark:bg-dark-surface rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-text-primary border-2 border-white dark:border-dark-surface shadow-sm"></div>
                  <span className="text-sm font-medium">{t({ en: "Text", es: "Texto" })}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-text-secondary dark:text-dark-text-secondary italic">
              {t({
                en: "This entire section updates dynamically as you change settings above. Notice how colors, text, and layout adapt seamlessly!",
                es: "Toda esta sección se actualiza dinámicamente cuando cambias la configuración arriba. ¡Observa cómo los colores, texto y diseño se adaptan perfectamente!"
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
