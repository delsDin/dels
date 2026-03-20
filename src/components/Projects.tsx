import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, X } from 'lucide-react';
import { projectsData } from '../data/mockData';

const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-20"
          >
            <X size={20} />
          </button>
          
          <div className="h-64 sm:h-80 w-full relative shrink-0">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-600 text-white mb-3 inline-block">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
          
          <div className="p-6 sm:p-8 overflow-y-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techs.map((tech: string) => (
                <span key={tech} className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
            
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">À propos du projet</h4>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {project.details}
            </p>
            
            <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors font-medium"
              >
                <Github size={18} />
                Code Source
              </a>
              {project.demo && project.demo !== '#' && project.demo !== '' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium"
                >
                  <ExternalLink size={18} />
                  Visiter
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export const Projects = () => {
  const [filter, setFilter] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = filter === 'Tous' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(3);
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setVisibleCount(3); // Reset visible count when changing filter
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Projets Phares
          </h2>

          <div className="flex justify-center gap-4 mb-12">
            {['Tous', 'Dev', 'Data', 'Autres'].filter(cat => cat === 'Tous' || projectsData.some(p => p.category === cat)).map(cat => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-amber-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {displayedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col"
                >
                  <div className="h-48 relative overflow-hidden group">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 bg-white text-slate-900 rounded-lg font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        Voir détails
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techs.slice(0, 3).map((tech: string) => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                          {tech}
                        </span>
                      ))}
                      {project.techs.length > 3 && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                          +{project.techs.length - 3}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm flex-1 mb-6">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline"
                      >
                        En savoir plus
                      </button>
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                          <Github size={18} />
                        </a>
                        {project.demo && project.demo !== '#' && project.demo !== '' && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" title="Visiter">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {(visibleCount < filteredProjects.length || visibleCount > 3) && (
            <div className="mt-12 flex justify-center gap-4">
              {visibleCount < filteredProjects.length && (
                <button
                  onClick={handleShowMore}
                  className="px-8 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors shadow-sm hover:shadow-md"
                >
                  Voir plus de projets
                </button>
              )}
              {visibleCount > 3 && (
                <button
                  onClick={handleShowLess}
                  className="px-8 py-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium transition-colors shadow-sm hover:shadow-md"
                >
                  Voir moins
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
