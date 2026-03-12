import { Wrench, Zap, ShieldCheck, PenTool, Monitor } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Automatización y Control",
      items: ["PLC", "Electricidad industrial", "Armado de tableros"],
      Icon: Zap
    },
    {
      category: "Normativas y Procesos",
      items: ["Normas GMP", "ISO 9001", "Seguridad e Higiene Industrial"],
      Icon: ShieldCheck
    },
    {
      category: "Instrumental y Herramientas",
      items: ["Multímetro", "Pinza amperométrica", "Soldador", "Herramientas manuales"],
      Icon: PenTool
    },
    {
      category: "Software e Informática",
      items: ["AutoCAD", "KiCad", "Office", "Hardware de PC"],
      Icon: Monitor
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-32 md:py-20 px-6 w-full relative transition-colors duration-300">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-5xl md:text-3xl font-bold text-slate-900 dark:text-white mb-20 md:mb-16 flex items-center justify-center gap-3">
          <Wrench className="w-10 h-10 md:w-6 md:h-6 text-blue-600 dark:text-blue-500" /> Habilidades Técnicas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.Icon;
            return (
              <div key={index} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none text-left flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-2xl md:text-xl">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3 md:gap-2 mt-auto">
                  {skillGroup.items.map(skill => (
                    <span key={skill} className="text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/80 px-4 py-2 md:px-3 md:py-1.5 rounded-full text-md md:text-sm border border-slate-200 dark:border-slate-800 shadow-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;