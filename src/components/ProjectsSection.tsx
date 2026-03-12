import { useState } from 'react';
import { Github, Layers, CheckCircle2, X } from 'lucide-react';

// Definimos la estructura del tipo de proyecto para TypeScript
interface Project {
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  image: string;
  imagePlaceholder: string;
}

const ProjectsSection = () => {
  // Estado para controlar qué proyecto se está viendo en el modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Portal Wiki",
      category: "Facultad",
      description: "Sistema de Gestión de Conocimiento centralizado y altamente accesible. Transforma cómo la organización captura, organiza y comparte su expertise técnico. Incluye gestión de documentación, roles de usuario y navegación jerárquica.",
      features: [
        "Login seguro y validación de usuarios",
        "Gestión de roles (Admin, Editor, Lector)",
        "Menú dinámico personalizable",
        "Soporte para PDF, texto plano y URLs",
        "CRUD completo de documentos"
      ],
      tech: ["Java", "Spring Boot", "Vue.js", "SQL"],
      
      github: "https://github.com/agus25varela/RepoFullStackPortalWiki", 
      
      image: "/portal-wiki.png", 
      imagePlaceholder: "bg-indigo-900"
    },
    {
      title: "Cartelera de Cine",
      category: "Facultad",
      description: "Catálogo online interactivo de películas y animes. Permite a los usuarios explorar contenido basado en puntuaciones y géneros, con una interfaz moderna y actualizaciones en tiempo real.",
      features: [
        "Búsqueda instantánea de títulos",
        "Filtros avanzados por género y puntaje",
        "Interfaz gráfica amigable e intuitiva",
        "Gestión y actualización en tiempo real"
      ],
      tech: ["JavaScript", "HTML", "CSS"],
      
      github: "https://github.com/agus25varela/CatalogoCine",
      
      image: "/cartelera.png",
      imagePlaceholder: "bg-rose-900"
    },
    {
      title: "TicTacTareas",
      category: "Facultad",
      description: "Aplicación integral para la gestión de productividad personal. Permite organizar tareas, establecer recordatorios y gestionar perfiles de usuario de manera eficiente.",
      features: [
        "Búsqueda inteligente de tareas",
        "Sistema de notificaciones y recordatorios",
        "Gestión de estado (Pendiente, En curso, Finalizada)",
        "Perfiles de usuario personalizados"
      ],
      tech: ["Java", "Spring Boot", "MySQL"],

      github: "https://github.com/ErichSchnell/TicTacTareas",
      
      image: "/tictactareas.jpg",
      imagePlaceholder: "bg-emerald-900"
    }
  ];

  const getTechColor = (tech: string) => {
    switch (tech) {
      case 'Java': return 'bg-red-600 text-white';
      case 'Spring Boot': return 'bg-green-600 text-white';
      case 'Vue.js': return 'bg-emerald-500 text-slate-900';
      case 'SQL': case 'MySQL': return 'bg-blue-600 text-white';
      case 'JavaScript': return 'bg-yellow-400 text-slate-900';
      case 'HTML': return 'bg-orange-600 text-white';
      case 'CSS': return 'bg-blue-500 text-white';
      default: return 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 w-full relative bg-slate-50 dark:bg-slate-850 transition-colors duration-300">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-5 flex items-center justify-center gap-3">
          <Layers className="text-primary-500 dark:text-primary-400" /> Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col">
              
              {/* Imagen del Proyecto */}
              <div className="h-48 w-full overflow-hidden relative border-b border-slate-200 dark:border-slate-800 cursor-pointer" onClick={() => setSelectedProject(project)}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : null}
                <div className={`hidden absolute inset-0 w-full h-full flex items-center justify-center ${project.imagePlaceholder} group-hover:scale-105 transition-transform duration-500`}>
                    <Layers className="text-slate-400 dark:text-white/50 w-12 h-12" />
                </div>
                <div className="absolute top-4 right-4 bg-primary-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(tech => (
                          <span key={tech} className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm ${getTechColor(tech)}`}>
                          {tech}
                          </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {/* Botón VER MÁS (Abre el Modal) */}
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                          Ver más
                      </button>
                      
                      {/* Botón CÓDIGO (Va a GitHub) */}
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white py-2 rounded-lg transition-colors text-sm font-medium border border-slate-200 dark:border-slate-700"
                      >
                          <Github size={16} /> Código
                      </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL (Ventana Emergente) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Fondo oscuro backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Contenido del Modal */}
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
            
            {/* Botón cerrar */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-red-500/20 hover:text-red-400 transition-all z-10"
            >
              <X size={20} />
            </button>

            {/* Imagen Grande */}
            <div className="h-64 w-full relative">
               {selectedProject.image ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
               ) : (
                  <div className={`w-full h-full ${selectedProject.imagePlaceholder}`}></div>
               )}
               <div className="absolute bottom-0 inset-x-0 from-white dark:from-slate-900 to-transparent h-24"></div>
            </div>

            <div className="p-8 -mt-6 relative">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{selectedProject.title}</h3>
              <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wider uppercase mb-6 block">
                {selectedProject.category}
              </span>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-8">
                <h4 className="text-slate-900 dark:text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-primary-500" /> Funcionalidades clave:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map(tech => (
                   <span key={tech} className={`text-xs font-bold px-3 py-1 rounded-full ${getTechColor(tech)}`}>
                      {tech}
                   </span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
                 <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 hover:bg-primary-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                 >
                    <Github size={20} /> Ver Código en GitHub
                 </a>
                 <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors"
                 >
                    Cerrar
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;