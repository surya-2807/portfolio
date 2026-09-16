import React, { useState } from 'react';
import { currentFocus } from '../data/portfolioData';
import { ArrowRight, Briefcase } from 'lucide-react';

export default function Currently() {
  const [activeAreaId, setActiveAreaId] = useState(currentFocus.areas[0].id);
  const activeArea = currentFocus.areas.find(a => a.id === activeAreaId) || currentFocus.areas[0];

  return (
    <section id="currently" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Section header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            02 / Current Focus & Internship
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/25 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Active Engagement</span>
          </div>
        </div>

        {/* Main card */}
        <div className="card-top-glow p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#0c152a]/95 via-[#071020]/95 to-[#040813]/95 border border-white/[0.08] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.7)] space-y-7">

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {currentFocus.role} at{' '}
                <span className="text-cyan-400">{currentFocus.company}</span>
              </h2>
              <p className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span>{currentFocus.period} · Pudukkottai, India</span>
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-light">
            {currentFocus.summary}
          </p>

          {/* Interactive system */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-4 border-t border-white/[0.06]">

            {/* Left — tabs */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Responsibility Domains
              </div>
              {currentFocus.areas.map((area) => {
                const isSelected = activeAreaId === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveAreaId(area.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-cyan-950/40 border border-cyan-500/40 border-l-4 border-l-cyan-400 shadow-[0_0_20px_-4px_rgba(6,182,212,0.2)]'
                        : 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
                    }`}
                  >
                    <div>
                      <div className={`text-sm font-semibold tracking-tight ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                        {area.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{area.subtitle}</div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 flex-shrink-0 transition-all ${
                        isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right — detail */}
            <div className="lg:col-span-7 p-6 rounded-xl bg-black/35 border border-white/[0.06] flex flex-col justify-between space-y-5">
              <div className="space-y-3.5 animate-fadeIn" key={activeArea.id}>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    Domain Overview
                  </span>
                  <span className="text-sm font-semibold text-white tracking-tight">
                    {activeArea.title}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                  {activeArea.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                  Applied Tools & Competencies
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeArea.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-cyan-950/40 text-cyan-200 border border-cyan-500/25"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}