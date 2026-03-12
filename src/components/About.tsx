import { User, Settings, Cpu, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-32 md:py-20 px-6 w-full relative bg-white dark:bg-slate-850 transition-colors duration-300">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-5xl md:text-3xl font-bold text-slate-900 dark:text-white mb-20 md:mb-12 flex items-center justify-center gap-3">
          <User className="w-10 h-10 md:w-6 md:h-6 text-blue-600 dark:text-blue-500" /> Sobre Mí
        </h2>
        
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl transition-colors duration-300">
          <p className="text-slate-700 dark:text-slate-300 text-xl md:text-lg leading-relaxed mb-6">
            Técnico con experiencia en producción industrial y servicios técnicos autónomos. Capacidad de diagnóstico comprobada en reparación de hardware y ejecución de instalaciones eléctricas bajo normativa. Estudiante universitario avanzado orientado al mantenimiento electromecánico y la mejora de procesos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700/50 transition-colors duration-300">
              <Settings className="text-blue-600 dark:text-blue-500 w-12 h-12 md:w-8 md:h-8 shrink-0" />
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-xl md:text-lg mb-2">Mantenimiento Electromecánico</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-sm">Enfoque en la eficiencia y disponibilidad de equipos industriales.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700/50 transition-colors duration-300">
              <Cpu className="text-yellow-600 dark:text-yellow-500 w-12 h-12 md:w-8 md:h-8 shrink-0" />
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-xl md:text-lg mb-2">Soporte de Hardware</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-sm">Diagnóstico, reparación y refurbishing de componentes tecnológicos.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700/50 transition-colors duration-300">
              <ShieldCheck className="text-orange-600 dark:text-orange-500 w-12 h-12 md:w-8 md:h-8 shrink-0" />
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-xl md:text-lg mb-2">Normativas y Calidad</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-sm">Ejecución de trabajos y procesos bajo estrictos estándares normativos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;