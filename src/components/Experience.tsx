import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { SiQualcomm } from 'react-icons/si';
import { HiChip } from 'react-icons/hi';
import { experiences } from '../data/portfolio';

const companyIcons: Record<string, JSX.Element> = {
  'Computer Age Management Services (CAMS)': (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)]">
      <HiChip className="text-[#00d4ff] text-xl" />
    </div>
  ),
  Qualcomm: (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
      <SiQualcomm className="text-[#3264ff] text-xl" />
    </div>
  ),
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative py-24 px-6">
      {/* Ambient glow */}
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-[#00d4ff] rounded-full filter blur-[150px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-tag text-[#00d4ff] mb-3">// professional experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Work Experience</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Building production AI/ML systems and software solutions across fintech and wireless industries.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px timeline-line opacity-30" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center timeline-dot"
                    style={{ background: `${exp.accentColor}18`, border: `2px solid ${exp.accentColor}` }}
                  >
                    <FaBriefcase style={{ color: exp.accentColor, fontSize: '0.85rem' }} />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass-card rounded-2xl p-6 mb-2">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      {companyIcons[exp.company]}
                      <div>
                        <h3 className="font-bold text-white text-base leading-tight">{exp.company}</h3>
                        <p
                          className="text-sm font-semibold mt-0.5"
                          style={{ color: exp.accentColor }}
                        >
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <FaCalendarAlt className="text-[#00d4ff] text-xs" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FaMapMarkerAlt className="text-[#8b5cf6] text-xs" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: 10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.15 + bi * 0.08 + 0.2 }}
                        className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: exp.accentColor }}
                        />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
