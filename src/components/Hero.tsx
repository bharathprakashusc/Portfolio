import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const tags = [
  'AI / ML Engineer',
  'Software Developer',
  'Data Scientist',
  'Computer Vision',
  'Agentic AI',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff] rounded-full filter blur-[160px] opacity-[0.06] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6] rounded-full filter blur-[160px] opacity-[0.06] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="section-tag text-[#00d4ff]">AI Engineer and Software Developer</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-4 leading-tight"
        >
          <span className="text-white">Bharath</span>{' '}
          <span className="gradient-text text-glow">Prakash</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed"
        >
          MS Applied Data Science at{' '}
          <span className="text-[#c4112f] font-semibold">USC</span> · Building intelligent systems at the intersection of AI, data, and software engineering.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-8"
        >
          <FaMapMarkerAlt className="text-[#00d4ff]" />
          <span>Los Angeles, CA</span>
        </motion.div>

        {/* Skill tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.07 }}
              className="px-3 py-1 text-xs font-medium rounded-full border border-[rgba(0,212,255,0.25)] text-slate-300 bg-[rgba(0,212,255,0.05)] font-mono"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:bharathp@usc.edu"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white glow-cyan hover:opacity-90 transition-opacity"
          >
            <FaEnvelope />
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/bharathprakashusc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm glass-card text-slate-300 hover:text-[#00d4ff] transition-all"
          >
            <FaLinkedin className="text-[#0077b5]" />
            LinkedIn
          </a>
          <a
            href="https://github.com/bharathprakashusc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm glass-card text-slate-300 hover:text-[#00d4ff] transition-all"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download="Resume_BharathPrakash.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm glass-card text-slate-300 hover:text-[#00d4ff] transition-all"
          >
            <HiDownload />
            Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="section-tag text-slate-600">scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-0.5 h-10 bg-gradient-to-b from-[rgba(0,212,255,0.6)] to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
