"use client";
import ScrollAnimation from '@/components/ui/scroll-animation';
import {useLanguage} from '@/context/language-context';
import {EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import {FormEvent, useState} from 'react';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState<{ message: string; type: "success" | "error" | "" }>({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: "", type: "" });

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic client-side validation (enhance as needed)
    if (!data.name || !data.email || !data.message) {
      setFormStatus({ message: t({en: "Please fill all fields.", es: "Por favor complete todos los campos."}), type: "error" });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      // Replace with your actual form submission logic, e.g., an API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form data submitted:", data);
      setFormStatus({ message: t({en: "Message sent successfully!", es: "¡Mensaje enviado con éxito!"}), type: "success" });
      (event.target as HTMLFormElement).reset();
    } catch {
      setFormStatus({ message: t({en: "Failed to send message. Please try again.", es: "Error al enviar el mensaje. Por favor, inténtelo de nuevo."}), type: "error" });
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-1">
                  {t({ en: "Name", es: "Nombre" })}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 border border-border dark:border-dark-border rounded-md focus:ring-primary focus:border-primary dark:bg-dark-surface-variant dark:text-dark-text-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-1">
                  {t({ en: "Email", es: "Correo" })}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2.5 border border-border dark:border-dark-border rounded-md focus:ring-primary focus:border-primary dark:bg-dark-surface-variant dark:text-dark-text-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-1">
                  {t({ en: "Message", es: "Mensaje" })}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 border border-border dark:border-dark-border rounded-md focus:ring-primary focus:border-primary dark:bg-dark-surface-variant dark:text-dark-text-primary resize-none"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                  {isSubmitting
                    ? t({ en: "Sending...", es: "Enviando..." })
                    : t({ en: "Send Message", es: "Enviar Mensaje" })}
                </button>
              </div>
              {formStatus.message && (
                <p className={`text-sm mt-4 ${formStatus.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                  {formStatus.message}
                </p>
              )}
            </form>

            <div className="space-y-8 pt-6 md:pt-0">
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-8 w-8 text-primary dark:text-primary-light mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold">
                    {t({ en: "Email", es: "Correo" })}
                  </h4>
                  <a href="mailto:hello@tecnoincas.com" className="text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light">
                    hello@tecnoincas.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-8 w-8 text-primary dark:text-primary-light mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold">
                    {t({ en: "Location", es: "Ubicación" })}
                  </h4>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    {t({ en: "Remote & Global", es: "Remoto y Global" })}
                  </p>
                </div>
              </div>
               {/* Add other contact items if needed, e.g. phone */}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
