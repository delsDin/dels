import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '../context/NavigationContext';
import { skillsData, projectsData, experienceData, testimonialsData } from '../data/mockData';

export const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { activeSection, setActiveSection } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hasSkills = Object.values(skillsData).some(arr => arr.length > 0);
  const hasProjects = projectsData.length > 0;
  const hasExperience = experienceData.length > 0 || testimonialsData.length > 0;

  const navLinks = [
    { name: 'Accueil', id: 'home', show: true },
    { name: 'À propos', id: 'about', show: true },
    { name: 'Compétences', id: 'skills', show: hasSkills },
    { name: 'Projets', id: 'projects', show: hasProjects },
    { name: 'Expérience', id: 'experience', show: hasExperience },
    { name: 'Contact', id: 'contact', show: true },
  ].filter(link => link.show);

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div translate="no" className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick('home', e)}
          className="text-2xl font-bold text-amber-600 dark:text-amber-400 tracking-tighter"
        >
          De<span className="text-slate-800 dark:text-slate-100">ls</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-slate-600 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-600 dark:text-slate-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(link.id, e)}
              className={`text-base font-medium ${
                activeSection === link.id
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-slate-600 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
