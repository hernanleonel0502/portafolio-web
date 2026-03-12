import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact'; 

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-200 selection:bg-blue-500 selection:text-white transition-colors duration-300">
      <Navbar />
      <main className="w-full">
        <Hero />
        
        <About />

        <Experience />

        <Education />

        <Skills />

        <Contact />
      </main>
    </div>
  );
}

export default App;