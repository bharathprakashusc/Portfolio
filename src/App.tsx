import './index.css';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050510] text-slate-200 overflow-x-hidden">
      <NeuralBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Education />
        </main>
        <footer className="py-8 text-center border-t border-[rgba(0,212,255,0.08)]">
          <p className="text-xs text-slate-600 font-mono">
            &lt;Built with React + Framer Motion /&gt; · Bharath Prakash © 2025
          </p>
        </footer>
      </div>
    </div>
  );
}
