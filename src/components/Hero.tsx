import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import profileImg from '../data/profil.png';

export const Hero = () => {
  const { setActiveSection } = useNavigation();
  const [greeting, setGreeting] = useState('Bonjour, je suis');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 18) {
      setGreeting('Bonjour, je suis');
    } else if (hour >= 18 && hour < 24) {
      setGreeting('Bonsoir, je suis');
    } else {
      setGreeting('Je suis');
    }
  }, []);

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center pb-10 px-4">
      <div className="container mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-amber-600 dark:text-amber-400 font-semibold tracking-wide uppercase text-sm mb-3">
            {greeting}
          </h2>
          <h1 translate="no" className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-2 whitespace-nowrap">
            Dels Dinla.
          </h1>
          <h2 translate="no" className="text-3xl md:text-5xl font-bold text-slate-700 dark:text-slate-300 mb-6 leading-tight">
            Dev <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              & Data Scientist
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0 text-justify">
            Je transforme des données complexes en applications web performantes et intuitives.
            Passionné par l'intersection entre l'ingénierie logicielle et l'intelligence artificielle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick('contact', e)}
              className="px-8 py-3 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors shadow-lg shadow-amber-200 dark:shadow-amber-900/20 w-full sm:w-auto text-center"
            >
              Me contacter
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-5">
            <a href="https://github.com/delsDin " className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/marcel-dinla-02a72b25b" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:delsmarceldinla@gmail.com" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-orange-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={profileImg}
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
