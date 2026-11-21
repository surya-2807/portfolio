import React from 'react';
import { skillGroups } from '../data/portfolioData';

// Domain → accent color mapping
const DOMAIN_COLORS = {
  'Cloud Infrastructure':      { header: 'text-[#4f8ef7]', bar: 'bg-[#4f8ef7]/15 border-[#4f8ef7]/20', dot: 'bg-[#4f8ef7]' },
  'Development':               { header: 'text-indigo-400', bar: 'bg-indigo-500/10 border-indigo-500/20', dot: 'bg-indigo-400' },
  'Cloud / DevOps Tools':      { header: 'text-cyan-400',   bar: 'bg-cyan-500/10 border-cyan-500/20',   dot: 'bg-cyan-400' },
  'Systems & Networking':      { header: 'text-slate-300',  bar: 'bg-slate-500/10 border-slate-500/20', dot: 'bg-slate-400' },
  'Quality & Testing':         { header: 'text-amber-400',  bar: 'bg-amber-500/10 border-amber-500/20', dot: 'bg-amber-400' },
  'AI-Assisted Development':   { header: 'text-violet-400', bar: 'bg-violet-500/10 border-violet-500/20',dot: 'bg-violet-400' },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Section header */}
        <div className="space-y-2 border-b border-white/[0.07] pb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            06 / Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Practical Competencies
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed font-light">
            Organized by functional domain with real-world application context from active project work and internship responsibilities.
          </p>
        </div>

        {/* Domain grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => {
            const colors = DOMAIN_COLORS[group.category] || DOMAIN_COLORS['Development'];
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#0d1528] to-[#080f1e] border border-white/[0.07] hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-300 shadow-card flex flex-col space-y-4"
              >
                {/* Category header with color accent */}
                <div className={`flex items-center gap-2 pb-3 border-b border-white/[0.06]`}>
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
                  <h3 className={`text-xs font-mono font-bold uppercase tracking-wider ${colors.header}`}>
                    {group.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-xs font-semibold text-white tracking-tight">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400 leading-normal">
                        {item.context}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}