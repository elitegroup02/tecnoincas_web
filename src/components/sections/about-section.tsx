"use client";
import ScrollAnimation from '@/components/ui/scroll-animation';
import {useLanguage} from '@/context/language-context';

const stats = [
  { number: "100+", label: { en: "Projects Completed", es: "Proyectos Completados" } },
  { number: "50+", label: { en: "Happy Clients", es: "Clientes Satisfechos" } },
  { number: "5+", label: { en: "Years Experience", es: "Años de Experiencia" } },
];

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <ScrollAnimation animationClass="animate-fade-in-up">
          <header className="section-header text-center mb-12">
            <h2 className="section-title">
              {t({ en: "About Tecno Incas", es: "Acerca de Tecno Incas" })}
            </h2>
          </header>
        </ScrollAnimation>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animationClass="animate-fade-in-up">
            <div className="lg:pr-8">
              <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                {t({
                  en: "We blend the precision and ingenuity of ancient Inca engineering with modern software development practices. Like the master builders who created Machu Picchu without mortar, we craft code that stands the test of time.",
                  es: "Combinamos la precisión e ingenio de la ingeniería inca ancestral con las prácticas modernas de desarrollo de software. Como los maestros constructores que crearon Machu Picchu sin mortero, creamos código que resiste la prueba del tiempo.",
                })}
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="p-4 bg-surface dark:bg-dark-surface rounded-lg shadow">
                    <span className="block text-3xl font-bold text-primary dark:text-primary-light mb-1">
                      {stat.number}
                    </span>
                    <span className="text-xs text-text-muted dark:text-dark-text-muted uppercase tracking-wider">
                      {t(stat.label)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in-up" delay={200}>
            <div className="flex justify-center items-center mt-12 lg:mt-0">
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
                <div className="inca-chakana-about absolute inset-0 opacity-80 animate-pulse-slow"></div>
                 {/* Placeholder for a more complex Inca-themed visual */}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
       <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 7s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.9; transform: scale(1.03) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}
