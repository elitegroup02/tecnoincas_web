"use client";
import ScrollAnimation from '@/components/ui/scroll-animation';
import {useLanguage} from '@/context/language-context';
import {CloudIcon, DevicePhoneMobileIcon, GlobeAltIcon} from '@heroicons/react/24/outline';

const services = [
  {
    icon: GlobeAltIcon,
    title: { en: "Web Development", es: "Desarrollo Web" },
    description: {
      en: "Responsive, fast, and scalable web applications using modern frameworks and best practices.",
      es: "Aplicaciones web responsivas, rápidas y escalables usando frameworks modernos y mejores prácticas.",
    },
    tech: ["React", "Vue.js", "Node.js"],
  },
  {
    icon: DevicePhoneMobileIcon,
    title: { en: "Mobile Apps", es: "Aplicaciones Móviles" },
    description: {
      en: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      es: "Aplicaciones móviles nativas y multiplataforma que ofrecen experiencias de usuario excepcionales.",
    },
    tech: ["React Native", "Flutter", "Swift"],
  },
  {
    icon: CloudIcon,
    title: { en: "Cloud Solutions", es: "Soluciones en la Nube" },
    description: {
      en: "Scalable cloud infrastructure and deployment strategies for modern applications.",
      es: "Infraestructura en la nube escalable y estrategias de despliegue para aplicaciones modernas.",
    },
    tech: ["AWS", "Docker", "Kubernetes"],
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-surface dark:bg-dark-surface section-padding">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">
            {t({ en: "Our Services", es: "Nuestros Servicios" })}
          </h2>
          <p className="section-subtitle">
            {t({
              en: "Building the future with proven methodologies.",
              es: "Construyendo el futuro con metodologías probadas.",
            })}
          </p>
        </header>        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} animationClass="animate-fade-in-up">
              <div className="service-card bg-background dark:bg-dark-background p-8 rounded-xl border border-border dark:border-dark-border shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col relative group overflow-hidden">
                {/* Inca Pattern Background */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  {index === 0 && <div className="inca-stepped-pyramid w-12 h-12"></div>}
                  {index === 1 && <div className="inca-textile-pattern w-12 h-12"></div>}
                  {index === 2 && <div className="inca-quipu-knots w-12 h-12"></div>}
                </div>

                <service.icon className="h-10 w-10 text-primary dark:text-primary-light mb-6 relative z-10" />
                <h3 className="text-xl font-semibold mb-3 relative z-10">
                  {t(service.title)}
                </h3>
                <p className="text-text-secondary dark:text-dark-text-secondary mb-6 text-sm flex-grow relative z-10">
                  {t(service.description)}
                </p>
                <ul className="flex flex-wrap gap-2 relative z-10">
                  {service.tech.map((techItem) => (
                    <li
                      key={techItem}
                      className="bg-surface-variant dark:bg-dark-surface-variant px-3 py-1 rounded-full text-xs font-mono text-text-muted dark:text-dark-text-muted hover:bg-primary hover:text-white dark:hover:bg-primary-light transition-colors duration-200"
                    >
                      {techItem}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
