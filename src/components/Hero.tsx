import { ArrowRight, Download, Cpu, Zap, ShieldAlert } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[100dvh] w-full flex items-center justify-center pt-32 pb-20 md:pt-20 md:pb-10 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        
        {/* Texts */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-yellow-600 dark:text-yellow-500 font-semibold tracking-wider uppercase text-lg md:text-base">
            Hola, soy
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mt-4 mb-8 leading-tight">
            Hernán Leonel <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text">
              Chaves
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8 font-medium">
            Técnico Electrónico | Desarrollo y Mantenimiento Electromecánico
          </h2>
          <p className="text-xl md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
            Especializado en hardware, electricidad industrial, mantenimiento sistemático y automatización de procesos.
          </p>
          
          <div className="w-full flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 mt-8">
            <a href="#experience" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 text-xl md:text-lg">
              Ver Experiencia <ArrowRight size={22} />
            </a>
            <a href="/CV_Hernan_Chaves.pdf" download="CV_Hernan_Chaves.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-xl md:text-lg">
              Descargar CV <Download size={22} />
            </a>
          </div>
        </div>

        {/* Visual Container for Profile Pillars */}
        <div className="order-1 lg:order-2 w-full max-w-md mx-auto">
          <div className="relative">
             {/* Background blur effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-blue-500/20 rounded-full blur-3xl dark:opacity-60" />
            
             <div className="relative bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-sm transition-colors duration-300 flex flex-col gap-6">
                
                {/* Pillar 1 */}
                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Cpu size={28} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-slate-800 dark:text-slate-100 text-lg">Automatización & PLC</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Control de procesos industriales</span>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-500 rounded-xl">
                    <Zap size={28} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-slate-800 dark:text-slate-100 text-lg">Instalaciones Eléctricas</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Diseño y mantenimiento</span>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl">
                    <ShieldAlert size={28} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-slate-800 dark:text-slate-100 text-lg">Hardware & CCTV</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Seguridad y componentes físicos</span>
                  </div>
                </div>

             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;