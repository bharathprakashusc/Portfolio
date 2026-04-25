import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories } from '../data/portfolio';

function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <p className="section-tag text-[#00d4ff] mb-3">{tag}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
      {subtitle && <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-24 px-6 grid-bg">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            tag="// skills & expertise"
            title="Technical Arsenal"
            subtitle="A breadth of skills spanning AI/ML research, cloud infrastructure, and full-stack engineering."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => {
            const CatIcon = cat.categoryIcon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: ci * 0.12 }}
                className="glass-card rounded-2xl p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
                  >
                    <CatIcon style={{ color: cat.color, fontSize: '1.1rem' }} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-200">{cat.label}</h3>
                  <div
                    className="ml-auto w-2 h-2 rounded-full animate-pulse"
                    style={{ background: cat.color }}
                  />
                </div>

                {/* Skills grid */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: ci * 0.12 + si * 0.05 }}
                        className="skill-chip flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] cursor-default"
                      >
                        <Icon style={{ color: skill.color, fontSize: '0.95rem', flexShrink: 0 }} />
                        <span className="text-xs font-medium text-slate-300 whitespace-nowrap">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
