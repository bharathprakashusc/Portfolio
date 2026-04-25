import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { projects } from '../data/portfolio';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-24 px-6">
      {/* Ambient glow */}
      <div className="absolute right-1/4 top-1/3 w-80 h-80 bg-[#8b5cf6] rounded-full filter blur-[160px] opacity-[0.05] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/3 w-80 h-80 bg-[#00d4ff] rounded-full filter blur-[160px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-tag text-[#00d4ff] mb-3">// featured projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What I've Built</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            End-to-end AI systems, agentic pipelines, and full-stack applications - from local inference to cloud deployment.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.13 }}
              className="group glass-card rounded-2xl flex flex-col overflow-hidden cursor-pointer"
              onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
            >
              {/* Card top accent bar */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.gradientFrom}, ${project.gradientTo})`,
                }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + title */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className="text-sm font-bold text-white leading-snug">{project.title}</h3>
                  </div>
                  <FaGithub
                    className="text-slate-500 group-hover:text-slate-300 transition-colors flex-shrink-0 mt-0.5"
                    size={16}
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{project.description}</p>

                {/* Bullets */}
                <ul className="space-y-2 mb-5 flex-1">
                  {project.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: project.accentColor }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-md border"
                      style={{
                        color: project.accentColor,
                        borderColor: `${project.accentColor}30`,
                        background: `${project.accentColor}0d`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer links */}
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={13} />
                    View Code
                  </a>

                  {project.liveUrl && project.liveUrl !== project.githubUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt size={11} />
                      Live Demo
                    </a>
                  )}

                  <span
                    className="flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all"
                    style={{ color: project.accentColor }}
                  >
                    Open <HiArrowRight size={13} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
