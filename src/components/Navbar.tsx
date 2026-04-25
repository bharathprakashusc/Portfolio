import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(8,10,28,0.85)] backdrop-blur-xl py-3'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          onClick={() => setActive('Home')}
          className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-slate-400">&lt;</span>
          <span className="gradient-text">portfolio</span>
          <span className="text-slate-400"> /&gt;</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNav(label, href)}
              className={`text-sm font-medium transition-all duration-200 underline-animate ${
                active === label
                  ? 'text-[#00d4ff] text-glow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download="Resume_BharathPrakash.pdf"
            className="px-4 py-1.5 text-sm font-medium border border-[rgba(0,212,255,0.4)] text-[#00d4ff] rounded-md hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-300 hover:text-[#00d4ff] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-[rgba(0,212,255,0.1)] mt-2"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => handleNav(label, href)}
                  className={`text-sm font-medium text-left transition-colors ${
                    active === label ? 'text-[#00d4ff]' : 'text-slate-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
