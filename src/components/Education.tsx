import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import { education } from '../data/portfolio';

const institutionMeta: Record<string, { shortName: string; initials: string; bg: string }> = {
  'University of Southern California': {
    shortName: 'USC Viterbi School of Engineering',
    initials: 'USC',
    bg: 'bg-[rgba(196,17,47,0.12)]',
  },
  'IIT Kharagpur': {
    shortName: 'Indian Institute of Technology',
    initials: 'IIT',
    bg: 'bg-[rgba(251,191,36,0.1)]',
  },
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="relative py-24 px-6 grid-bg">
      {/* Ambient glow */}
      <div className="absolute right-0 top-1/2 w-72 h-72 bg-[#8b5cf6] rounded-full filter blur-[160px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-tag text-[#00d4ff] mb-3">// education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Academic Background</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Strong academic foundations from world-class institutions in data science, AI, and engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px timeline-line opacity-30" />

          <div className="space-y-8">
            {education.map((edu, i) => {
              const meta = institutionMeta[edu.institution];
              return (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.18 }}
                  className="relative flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center timeline-dot"
                      style={{ background: `${edu.accentColor}18`, border: `2px solid ${edu.accentColor}` }}
                    >
                      <HiAcademicCap style={{ color: edu.accentColor, fontSize: '1rem' }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass-card rounded-2xl p-6 mb-2">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                      <div className="flex items-start gap-3">
                        {/* Institution logo placeholder */}
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${meta.bg} border`}
                          style={{ borderColor: `${edu.accentColor}30` }}
                        >
                          <span
                            className="text-xs font-black tracking-tight"
                            style={{ color: edu.accentColor }}
                          >
                            {meta.initials}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-base leading-tight">{edu.institution}</h3>
                          <p className="text-slate-400 text-xs mt-0.5">{meta.shortName}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                        <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <FaCalendarAlt className="text-[#00d4ff] text-xs" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-500">
                          <FaMapMarkerAlt className="text-[#8b5cf6] text-xs" />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    {/* Degree + GPA */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <FaGraduationCap
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: edu.accentColor, fontSize: '0.9rem' }}
                        />
                        <span className="text-sm text-slate-200 font-medium leading-snug">
                          {edu.degree}
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg flex-shrink-0 self-start sm:self-auto"
                        style={{
                          background: `${edu.accentColor}12`,
                          border: `1px solid ${edu.accentColor}30`,
                        }}
                      >
                        <FaStar style={{ color: edu.accentColor, fontSize: '0.7rem' }} />
                        <span className="text-xs font-bold" style={{ color: edu.accentColor }}>
                          GPA {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
