import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../data/mockData';

const SkillBar: React.FC<{ name: string; level: number; index: number }> = ({ name, level, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-amber-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Compétences Techniques
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">Data Science</h3>
              </div>
              <div>
                {skillsData.dataScience.map((skill, index) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">Développement</h3>
              </div>
              <div>
                {skillsData.development.map((skill, index) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">Autres</h3>
              </div>
              <div>
                {skillsData.autres.map((skill, index) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
