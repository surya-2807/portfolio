import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, FileText, Github, Linkedin, ShieldCheck, Cloud, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-12 lg:gap-16">

          {/* ── Left Column ─────────────────────────── */}
          <div className="flex-1 space-y-7">

            {/* Chapter eyebrow */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
                01 / Introduction
              </div>
              <div className="inline-flex items-center gap-2.5">
                <span className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-400 bg-emerald-400/8 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  Active · Devopstrio Internship
                </span>
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                {personalInfo.headline}
              </h1>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                {personalInfo.shortBio}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4f8ef7] hover:bg-[#6aa1f8] text-white font-semibold text-sm transition-all duration-200 shadow-glow-sm hover:shadow-glow-blue hover:-translate-y-px"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 border border-white/[0.1] font-medium text-sm transition-all duration-200 hover:-translate-y-px"
              >
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Resume (PDF)</span>
              </a>

              <div className="flex items-center gap-1.5 pl-3 border-l border-white/[0.08]">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href="#credentials"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg bg-amber-500/8 border border-amber-500/20 text-amber-400 hover:border-amber-400/40 hover:bg-amber-500/12 transition-all"
              >
                <ShieldCheck className="w-3 h-3" />
                <span>AWS CCP · Verified</span>
              </a>
              <a
                href="#credentials"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg bg-blue-500/8 border border-blue-500/20 text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/12 transition-all"
              >
                <Cloud className="w-3 h-3" />
                <span>AWS re/Start · Graduate</span>
              </a>
              <a
                href="#credentials"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg bg-emerald-500/8 border border-emerald-500/20 text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-500/12 transition-all"
              >
                <Award className="w-3 h-3" />
                <span>B.E. · First Class · 7.84 CGPA</span>
              </a>
            </div>

          </div>

          {/* ── Right Column: Profile ────────────────── */}
          <div className="flex-shrink-0 w-full sm:w-auto flex flex-col items-center sm:items-start lg:items-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#4f8ef7]/30 via-[#6366f1]/15 to-transparent blur-md" />
              {/* Frame */}
              <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-[#4f8ef7]/30 via-white/5 to-white/[0.03]">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} — Profile`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
            {/* Caption */}
            <div className="mt-3 text-[10px] font-mono text-slate-500 text-center">
              {personalInfo.name} · Pudukkottai, India
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}