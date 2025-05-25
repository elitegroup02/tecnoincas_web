"use client";
import ScrollAnimation from '@/components/ui/scroll-animation';
import Toast from '@/components/ui/toast';
import {useLanguage} from '@/context/language-context';
import {EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import {FormEvent, useState} from 'react';

export default function ContactSection() {
  const { t } = useLanguage();
  const [toast, setToast] = useState<{ message: string; type: "success" | "error"; show: boolean }>({
    message: "",
    type: "success",
    show: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic client-side validation
    if (!data.name || !data.email || !data.message) {
      setToast({
        message: t({en: "Please fill all fields.", es: "Por favor complete todos los campos."}),
        type: "error",
        show: true
      });
      setIsSubmitting(false);
      return;
    }

    // Check if we're in development mode
    const isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';

    try {
      if (isDevelopment) {
        // Simulate API call in development
        console.log('Development mode - Form data:', { name: data.name, email: data.email, message: data.message });
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

        setToast({
          message: t({
            en: "Message sent successfully! (Development mode - no actual email sent)",
            es: "¡Mensaje enviado con éxito! (Modo desarrollo - no se envió email real)"
          }),
          type: "success",
          show: true
        });
        (event.target as HTMLFormElement).reset();
      } else {
        // Production API call
        const response = await fetch('https://mail-resend-worker.tecnoincas.workers.dev/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
          })
        });

        if (response.ok) {
          setToast({
            message: t({en: "Message sent successfully! We'll get back to you soon.", es: "¡Mensaje enviado con éxito! Te responderemos pronto."}),
            type: "success",
            show: true
          });
          (event.target as HTMLFormElement).reset();
        } else {
          throw new Error('Failed to send message');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setToast({
        message: t({
          en: isDevelopment
            ? "Development mode error simulation"
            : "Failed to send message. Please try again or contact us directly.",
          es: isDevelopment
            ? "Simulación de error en modo desarrollo"
            : "Error al enviar el mensaje. Por favor, inténtelo de nuevo o contáctenos directamente."
        }),
        type: "error",
        show: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="bg-surface dark:bg-dark-surface section-padding">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">
            {t({ en: "Get in Touch", es: "Ponte en Contacto" })}
          </h2>
          <p className="section-subtitle">
            {t({
              en: "Ready to start your next project?",
              es: "¿Listo para comenzar tu próximo proyecto?",
            })}
          </p>
        </header>

        <ScrollAnimation animationClass="animate-fade-in-up">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 bg-background dark:bg-dark-background p-6 sm:p-8 md:p-12 rounded-xl shadow-xl border border-border dark:border-dark-border">
            <form onSubmit={handleSubmit} className="space-y-6">              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-2">
                  {t({ en: "Name", es: "Nombre" })} <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  aria-describedby="name-error"
                  autoComplete="name"
                  className="w-full px-4 py-3 sm:py-2.5 border border-border dark:border-dark-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary dark:bg-dark-surface-variant dark:text-dark-text-primary text-base transition-colors duration-200"
                  placeholder={t({ en: "Your full name", es: "Tu nombre completo" })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-2">
                  {t({ en: "Email", es: "Correo" })} <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  aria-describedby="email-error"
                  autoComplete="email"
                  className="w-full px-4 py-3 sm:py-2.5 border border-border dark:border-dark-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary dark:bg-dark-surface-variant dark:text-dark-text-primary text-base transition-colors duration-200"
                  placeholder={t({ en: "your.email@example.com", es: "tu.correo@ejemplo.com" })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-2">
                  {t({ en: "Message", es: "Mensaje" })} <span className="text-red-500" aria-label="required">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  aria-describedby="message-error"
                  className="w-full px-4 py-3 sm:py-2.5 border border-border dark:border-dark-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary dark:bg-dark-surface-variant dark:text-dark-text-primary resize-none text-base transition-colors duration-200"
                  placeholder={t({ en: "Tell us about your project...", es: "Cuéntanos sobre tu proyecto..." })}
                ></textarea>
              </div>              <div>                <button
                  type="submit"
                  className="btn btn-primary w-full min-h-[44px] text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? t({ en: "Sending...", es: "Enviando..." })
                    : t({ en: "Send Message", es: "Enviar Mensaje" })}
                </button>
              </div>
            </form>

            <div className="space-y-8 pt-6 md:pt-0">
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-8 w-8 text-primary dark:text-primary-light mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold">
                    {t({ en: "Email", es: "Correo" })}
                  </h4>
                  <a href="mailto:info@tecnoincas.com" className="text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light">
                    info@tecnoincas.com
                  </a>
                </div>
              </div>              <div className="flex items-start gap-4">
                <MapPinIcon className="h-8 w-8 text-primary dark:text-primary-light mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold">
                    {t({ en: "Location", es: "Ubicación" })}
                  </h4>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    {t({ en: "Buenos Aires, Argentina", es: "Ciudad Autónoma de Buenos Aires, Argentina" })}
                  </p>
                  <p className="text-text-secondary dark:text-dark-text-secondary text-sm mt-1">
                    {t({ en: "Remote & Global", es: "Remoto y Global" })}
                  </p>
                </div>
              </div>
               {/* Add other contact items if needed, e.g. phone */}
            </div>          </div>
        </ScrollAnimation>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </section>
  );
}
