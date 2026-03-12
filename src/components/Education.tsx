import { GraduationCap, Calendar, BookOpen, School } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      title: "Licenciatura en Tecnologías Ferroviarias",
      institution: "Universidad Nacional de Lanús (UNLa)",
      period: "Febrero 2023 - Actualidad",
      location: "Remedios de Escalada",
      Icon: BookOpen
    },
    {
      title: "Técnico Electrónico",
      institution: 'Escuela Secundaria Técnica N°5 "2 de Abril"',
      period: "Febrero 2016 - Diciembre 2022",
      location: "Temperley",
      Icon: School
    }
  ];

  return (
    <section id="education" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 w-full relative transition-colors duration-300">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center justify-center gap-3">
          <GraduationCap className="text-blue-600 dark:text-blue-500" /> Educación y Formación
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
          {educationList.map((edu, index) => {
            const IconComponent = edu.Icon;
            return (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
                  <IconComponent size={16} className="text-blue-600 dark:text-blue-500" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800/50 p-6 flex flex-col text-left rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-blue-500/30 transition-all shadow-lg dark:shadow-none">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">{edu.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 shrink-0">
                      {edu.institution}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-3">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{edu.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
