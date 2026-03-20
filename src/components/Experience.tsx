import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../data/mockData';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Expérience & Formation
          </h2>

          <div className="relative border-l-2 border-amber-200 dark:border-amber-900/50 ml-3 md:ml-6">
            {experienceData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-10 ml-8 md:ml-12 relative"
              >
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-amber-100 dark:border-amber-900/50 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-amber-600 dark:bg-amber-400" />
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                      <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium mt-1">
                        <Briefcase size={16} />
                        <span>{item.company}</span>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-full w-fit">
                      {item.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
