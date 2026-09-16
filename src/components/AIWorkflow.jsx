import React, { useState } from 'react';
import { aiWorkflow } from '../data/portfolioData';
import { ShieldCheck, Terminal, Cpu, Bot, CheckCircle2 } from 'lucide-react';

const TOOL_COLORS = {
  'Antigravity':        'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
  'Claude':             'text-violet-300 bg-violet-950/40 border-violet-500/30',
  'DeepSeek':           'text-sky-300 bg-sky-950/40 border-sky-500/30',
  'AI Agents & MCP':    'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
};

export default function AIWorkflow() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="ai-workflow" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">

        {/* Section header */}
        <div className="space-y-2.5 border-b border-white/[0.08] pb-5">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            04 / Engineering Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {aiWorkflow.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
            {aiWorkflow.philosophy}
          </p>
        </div>

        {/* 6-step pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {aiWorkflow.steps.map((step, index) => {
            const isHovered = activeStep === step.num;
            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(step.num)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-4 cursor-default ${
                  isHovered
                    ? 'bg-gradient-to-br from-[#0c1833] to-[#060e1f] border-cyan-500/40 shadow-[0_0_25px_-5px_rgba(6,182,212,0.25)] -translate-y-1'
                    : 'bg-gradient-to-br from-[#0c152a]/95 via-[#071020]/95 to-[#040813]/95 border-white/[0.08] hover:border-white/[0.14]'
                }`}
              >
                <div className="space-y-3">
                  {/* Step number circle */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-mono transition-all duration-200 ${
                      isHovered
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                        : 'bg-white/[0.04] text-slate-400 border border-white/[0.08]'
                    }`}>
                      {step.num}
                    </div>
                    <h3 className={`text-base font-semibold tracking-tight transition-colors ${isHovered ? 'text-cyan-300' : 'text-slate-100'}`}>
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {step.summary}
                  </p>
                </div>

                {/* Connecting arrow indicator */}
                {index % 3 !== 2 && (
                  <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-px bg-gradient-to-r from-cyan-500/40 to-transparent hidden lg:block" />
                )}
              </div>
            );
          })}
        </div>

        {/* AI Tools ecosystem section */}
        <div className="card-top-glow p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c152a]/95 via-[#071020]/95 to-[#040813]/95 border border-white/[0.08] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.7)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                AI Tool Ecosystem & Engineering Role Mapping
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Pragmatic Automation · Verified Outputs
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiWorkflow.tools.map((tool, idx) => {
              const colorClass = TOOL_COLORS[tool.name] || 'text-slate-300 bg-white/[0.03] border-white/[0.08]';
              return (
                <div key={idx} className="p-4 rounded-xl bg-black/30 border border-white/[0.05] space-y-2 hover:border-cyan-500/30 transition-all">
                  <div className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-lg border ${colorClass}`}>
                    <span>{tool.name}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{tool.role}</p>
                </div>
              );
            })}
          </div>

          {/* Grounding statement */}
          <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/30 border border-emerald-500/25 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              <strong className="text-emerald-300 font-medium">Core Engineering Standard:</strong> AI accelerates drafting and syntax exploration. Human architecture validation, test execution, regression retesting, and code ownership remain 100% mandatory.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}