/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';

const MainContent = () => {
  const { activeSection } = useNavigation();

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return (
          <>
            <Experience />
            <Testimonials />
          </>
        );
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <main className="flex-grow pt-20 flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow flex flex-col"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300 flex flex-col">
          <Header />
          <MainContent />
        </div>
      </NavigationProvider>
    </ThemeProvider>
  );
}
