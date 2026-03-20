import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          reply_to: data.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Contactez-moi
          </h2>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Discutons de votre projet</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Je suis actuellement disponible pour de nouvelles opportunités. N'hésitez pas à me contacter pour discuter de vos besoins en développement ou en data science.
                </p>
              </div>

              <div className="space-y-6">
                <a href="mailto:delsdenla.dev@gmail.com" className="flex items-center gap-4 group hover:opacity-80 transition-opacity">
                  <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">delsdenla.dev@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+2290154972991" className="flex items-center gap-4 group hover:opacity-80 transition-opacity">
                  <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Téléphone</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">+229 01 54 97 29 91</p>
                  </div>
                </a>

                <a href="https://maps.google.com/?q=Abomey-Calavi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:opacity-80 transition-opacity">
                  <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Localisation</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">Calavi, Bénin</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nom complet</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jean Dupont"
                      {...register('name', { required: 'Le nom est requis' })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors outline-none"
                    />
                    {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name.message as string}</span>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jean@example.com"
                      {...register('email', {
                        required: 'L\'email est requis',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Adresse email invalide'
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors outline-none"
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email.message as string}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Sujet</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Proposition de projet"
                    {...register('subject', { required: 'Le sujet est requis' })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors outline-none"
                  />
                  {errors.subject && <span className="text-red-500 text-sm mt-1 block">{errors.subject.message as string}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Votre message ici..."
                    {...register('message', { required: 'Le message est requis' })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors outline-none resize-none"
                  />
                  {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message.message as string}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Envoi en cours...</span>
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={18} />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg text-center font-medium">
                    Votre message a été envoyé avec succès !
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-center font-medium">
                    Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
