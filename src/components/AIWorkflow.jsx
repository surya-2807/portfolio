import React, { useState } from 'react';
import { aiWorkflow } from '../data/portfolioData';
import { ShieldCheck, Terminal } from 'lucide-react';

const TOOL_COLORS = {
  'Antigravity':        'text-[#4f8ef7] bg-[#4f8ef7]/10 border-[#4f8ef7]/20',
  'Claude':             'text-violet-400 bg-violet-500/10 border-violet-500/20',
  'DeepSeek':           'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  'AI Agents & MCP':    'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
};

export default function AIWorkflow() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="ai-workflow" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Section header */}
        <div className="space-y-2 border-b border-white/[0.07] pb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            04 / Engineering Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {aiWorkflow.heading}
          </h2>
          <p className="text-sm text-slate-400 max-w-3xl leading-relaxed font-light">
            {aiWorkflow.philosophy}
          </p>
        </div>

        {/* 6-step pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiWorkflow.steps.map((step, index) => {
            const isHovered = activeStep === step.num;
            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(step.num)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative p-5 rounded-2xl border transition-all duration-200 flex flex-col gap-4 cursor-default group ${
                  isHovered
                    ? 'bg-gradient-to-br from-[#0f1d3a] to-[#080f1e] border-[#4f8ef7]/30 shadow-glow-sm -translate-y-0.5'
                    : 'bg-gradient-to-br from-[#0d1528] to-[#080f1e] border-white/[0.07] hover:border-white/[0.13]'
                }`}
              >
                {/* Step number circle */}
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold font-mono transition-all duration-200 ${
                    isHovered
                      ? 'bg-[#4f8ef7] text-white shadow-glow-sm'
                      : 'bg-white/[0.05] text-slate-400 border border-white/[0.09]'
                  }`}>
                    {step.num}
                  </div>
                  <h3 className={`text-sm font-semibold tracking-tight transition-colors ${isHovered ? 'text-white' : 'text-slate-200'}`}>
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {step.summary}
                </p>

                {/* Connecting arrow — right side decoration */}
                {index % 3 !== 2 && (
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-px bg-gradient-to-r from-white/[0.1] to-transparent hidden lg:block" />
                )}
              </div>
            );
          })}
        </div>

        {/* AI Tools section */}
        <div className="card-top-glow p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0d1528] to-[#060d1c] border border-white/[0.07] shadow-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-2.5">
              <Terminal className="w-4 h-4 text-[#4f8ef7]" />
              <h3 className="text-sm font-bold text-white tracking-tight">
                AI Tool Ecosystem & Practical Roles
              </h3>
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              Structured Tools · Not Artificial Skill Levels
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiWorkflow.tools.map((tool, idx) => {
              const colorClass = TOOL_COLORS[tool.name] || 'text-slate-400 bg-white/[0.03] border-white/[0.07]';
              return (
                <div key={idx} className="p-4 rounded-xl bg-black/20 border border-white/[0.05] space-y-2.5 hover:border-white/[0.1] transition-all">
                  <div className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-lg border ${colorClass}`}>
                    <span>{tool.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{tool.role}</p>
                </div>
              );
            })}
          </div>

          {/* Grounding statement */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/15 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">Core Engineering Standard:</strong> AI accelerates the workflow. Human validation, testing, security checks, and code ownership remain non-negotiable.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}