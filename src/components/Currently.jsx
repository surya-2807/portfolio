import React, { useState } from 'react';
import { currentFocus } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

export default function Currently() {
  const [activeAreaId, setActiveAreaId] = useState(currentFocus.areas[0].id);
  const activeArea = currentFocus.areas.find(a => a.id === activeAreaId) || currentFocus.areas[0];

  return (
    <section id="currently" className="py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Section header */}
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            02 / Current Focus
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Active Engagement
          </div>
        </div>

        {/* Main card */}
        <div className="card-top-glow p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0d1528] to-[#080f1e] border border-white/[0.07] shadow-card space-y-6">

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {currentFocus.role} at{' '}
                <span className="text-[#4f8ef7]">{currentFocus.company}</span>
              </h2>
              <p className="text-[11px] font-mono text-slate-500 mt-1">{currentFocus.period}</p>
            </div>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed max-w-3xl font-light">
            {currentFocus.summary}
          </p>

          {/* Interactive system */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-4 border-t border-white/[0.05]">

            {/* Left — tabs */}
            <div className="lg:col-span-5 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-600 mb-3">
                Responsibility Areas
              </div>
              {currentFocus.areas.map((area) => {
                const isSelected = activeAreaId === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveAreaId(area.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#4f8ef7]/10 border border-[#4f8ef7]/25 border-l-2 border-l-[#4f8ef7]'
                        : 'bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.09]'
                    }`}
                  >
                    <div>
                      <div className={`text-xs font-semibold tracking-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {area.title}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{area.subtitle}</div>
                    </div>
                    <ArrowRight
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-all ${
                        isSelected ? 'text-[#4f8ef7] translate-x-0.5' : 'text-slate-700 group-hover:text-slate-500'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right — detail */}
            <div className="lg:col-span-7 p-5 rounded-xl bg-black/25 border border-white/[0.05] flex flex-col justify-between space-y-5">
              <div className="space-y-3 animate-fadeIn" key={activeArea.id}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#4f8ef7] uppercase tracking-widest">
                    Focus Detail
                  </span>
                  <span className="text-xs font-semibold text-white tracking-tight">
                    {activeArea.title}
                  </span>
                </div>
                <p className="text-base text-slate-300 leading-relaxed font-light">
                  {activeArea.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.05]">
                <div className="text-[10px] font-mono uppercase text-slate-600 mb-2">
                  Applied Skills
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeArea.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#4f8ef7]/8 text-slate-200 border border-[#4f8ef7]/15"
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