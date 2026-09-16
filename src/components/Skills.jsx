import React from 'react';
import { skillGroups } from '../data/portfolioData';

const DOMAIN_COLORS = {
  'Cloud Infrastructure':      { header: 'text-cyan-400',   bar: 'bg-cyan-500/10 border-cyan-500/25',   dot: 'bg-cyan-400' },
  'Development':               { header: 'text-blue-400',   bar: 'bg-blue-500/10 border-blue-500/25',   dot: 'bg-blue-400' },
  'Cloud / DevOps Tools':      { header: 'text-sky-400',    bar: 'bg-sky-500/10 border-sky-500/25',     dot: 'bg-sky-400' },
  'Systems & Networking':      { header: 'text-teal-400',   bar: 'bg-teal-500/10 border-teal-500/25',   dot: 'bg-teal-400' },
  'Quality & Testing':         { header: 'text-amber-400',  bar: 'bg-amber-500/10 border-amber-500/25', dot: 'bg-amber-400' },
  'AI-Assisted Development':   { header: 'text-violet-400', bar: 'bg-violet-500/10 border-violet-500/25',dot: 'bg-violet-400' },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">

        {/* Section header */}
        <div className="space-y-2.5 border-b border-white/[0.08] pb-5">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            06 / Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Skills & Competency Domains
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-light">
            Organized by functional engineering domains with real-world application context from active project work and internship responsibilities.
          </p>
        </div>

        {/* Domain grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => {
            const colors = DOMAIN_COLORS[group.category] || DOMAIN_COLORS['Development'];
            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0c152a]/95 via-[#071020]/95 to-[#040813]/95 border border-white/[0.08] hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] flex flex-col space-y-4"
              >
                {/* Category header with color accent */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.06]">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot} animate-pulse`} />
                  <h3 className={`text-xs font-mono font-bold uppercase tracking-wider ${colors.header}`}>
                    {group.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3.5">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-sm font-semibold text-white tracking-tight">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400 leading-normal font-light">
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