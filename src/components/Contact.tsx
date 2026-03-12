import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 w-full relative bg-slate-50 dark:bg-slate-850 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">¿Trabajamos juntos?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
          Estoy en búsqueda activa de nuevas oportunidades en el sector eléctrico y de mantenimiento industrial. Si buscas un técnico comprometido, resolutivo y orientado a la mejora continua, hablemos.
        </p>

        {/* Contact info grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12">
           <a 
            href="mailto:chaveshernanleonel@gmail.com" 
            className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg font-medium bg-white dark:bg-slate-800/50 px-6 py-3 rounded-full shadow-sm border border-slate-200 dark:border-slate-700/50"
          >
            <Mail className="text-blue-600 dark:text-blue-500" /> Correo
          </a>
          <a 
            href="tel:+5491140281046" 
            className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg font-medium bg-white dark:bg-slate-800/50 px-6 py-3 rounded-full shadow-sm border border-slate-200 dark:border-slate-700/50"
          >
            <Phone className="text-green-600 dark:text-green-500" /> 1140281046
          </a>
        </div>

        {/* Maps and location */}
        <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 mb-12">
            <MapPin size={20} className="text-red-500" />
            <span>Banfield (CP 1828), Buenos Aires, Argentina.</span>
        </div>
        
        {/* Socials */}
        <div className="flex justify-center gap-4">
          <a href="https://linkedin.com/in/chaves-hernan/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg border border-slate-200 dark:border-transparent">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      
      <footer className="mt-24 text-center text-slate-500 dark:text-slate-600 text-sm border-t border-slate-200 dark:border-slate-800 pt-8">
        <p>© {new Date().getFullYear()} Hernán Leonel Chaves. Todos los derechos reservados.</p>
      </footer>
    </section>
  );
};

export default Contact;