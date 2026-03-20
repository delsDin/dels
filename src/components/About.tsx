import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            À propos de moi
          </h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
              <p className="mb-6">
                Passionné par la résolution de problèmes complexes, je combine une solide expertise en 
                <strong> développement logiciel</strong> et en <strong>science des données</strong>. 
                Mon parcours m'a amené à concevoir des architectures robustes tout en extrayant de la valeur 
                à partir de grands volumes de données.
              </p>
              <p className="mb-8">
                Mon approche technique repose sur une veille constante et la volonté de créer des produits 
                à la fois performants, scalables et centrés sur l'utilisateur. Que ce soit pour entraîner un 
                modèle de Machine Learning ou développer une interface React réactive, je m'efforce de livrer 
                un code propre et maintenable.
              </p>
              
              <blockquote className="border-l-4 border-amber-500 pl-6 italic text-slate-700 dark:text-slate-200 text-xl font-medium my-8">
                "La donnée n'a de valeur que si elle est transformée en action. Le code est l'outil qui permet cette transformation."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
