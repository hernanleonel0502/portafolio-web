import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lógica de estado para el tema (Persistencia + Detección de sistema)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      // 1. Si el usuario ya guardó preferencia, úsala
      if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      }
      // 2. Si no, mira la preferencia del sistema operativo
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light'; // Default
  });

  // Efecto que aplica la clase 'dark' a la etiqueta <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Educación', href: '#education' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-1.5 rounded-lg"><Cpu className="text-white w-6 h-6" /></div>
            <span className="text-2xl md:text-xl font-bold text-slate-900 dark:text-white transition-colors">
              Hernán Chaves
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Botón Tema Desktop */}
              <button
                onClick={toggleTheme}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 px-3 py-2 rounded-md transition-all"
                aria-label="Alternar tema"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button Group */}
          <div className="md:hidden flex items-center gap-4">
            {/* Botón Tema Mobile */}
            <button
                onClick={toggleTheme}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 p-2 rounded-md transition-all"
                aria-label="Alternar tema"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Botón Hamburguesa */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-3 md:p-2"
              aria-label="Menu Principal"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-0 pt-0 pb-0 shadow-xl h-[calc(100vh-4rem)] flex flex-col justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 block w-full text-center px-4 py-4 text-2xl font-bold transition-colors border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;