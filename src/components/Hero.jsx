import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, FileText, Github, Linkedin, ShieldCheck, Cloud, Award, Terminal, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-10 lg:gap-14">

          {/* ── Left Column: Editorial Typography & Actions ── */}
          <div className="flex-1 space-y-6 sm:space-y-7">

            {/* Chapter eyebrow */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
                01 / Introduction
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="flex items-center gap-2 text-xs font-mono font-medium text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full shadow-[0_0_15px_-3px_rgba(6,182,212,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block" />
                  Devopstrio · Associate System Engineer Intern
                </span>
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Cloud Infrastructure. <span className="accent-gradient">Software Systems.</span> AI-Assisted Engineering.
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                {personalInfo.shortBio}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_25px_-5px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_-2px_rgba(56,189,248,0.6)] hover:-translate-y-0.5"
              >
                <span>Explore Technical Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.09] font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/30"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume (PDF)</span>
              </a>

              <div className="flex items-center gap-1.5 pl-2 border-l border-white/[0.08]">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
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
                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300 hover:border-amber-400/50 hover:bg-amber-500/15 transition-all"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>AWS CCP · Verified</span>
              </a>
              <a
                href="#credentials"
                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/25 text-blue-300 hover:border-blue-400/50 hover:bg-blue-500/15 transition-all"
              >
                <Cloud className="w-3.5 h-3.5 text-blue-400" />
                <span>AWS re/Start · Graduate</span>
              </a>
              <a
                href="#credentials"
                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 hover:border-emerald-400/50 hover:bg-emerald-500/15 transition-all"
              >
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kongu Engg · CGPA: 7.84</span>
              </a>
            </div>

          </div>

          {/* ── Right Column: Profile Picture with Dual Glow Frame ── */}
          <div className="flex-shrink-0 w-full sm:w-auto flex flex-col items-center sm:items-start lg:items-end">
            <div className="relative group">
              {/* Outer Cyan/Cobalt Aura */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-blue-600/25 to-indigo-600/15 blur-lg group-hover:blur-xl transition-all duration-500" />
              {/* Card Container */}
              <div className="relative p-1 rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-white/[0.02] border border-white/10">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} — Profile`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
            {/* Caption */}
            <div className="mt-3 text-[11px] font-mono text-slate-400 text-center sm:text-left flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>{personalInfo.name} · Pudukkottai, India</span>
            </div>
          </div>

        </div>

        {/* ── Engineering Telemetry Board (Real-world Vitality Card) ── */}
        <div className="card-top-glow rounded-2xl bg-gradient-to-br from-[#0c162e]/90 via-[#071022]/90 to-[#040814]/95 border border-cyan-500/20 shadow-[0_8px_30px_-6px_rgba(6,182,212,0.15)] p-5 sm:p-7 space-y-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.07] pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white">
                Engineering Telemetry & Active Focus
              </h2>
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Current Status: Active Intern @ Devopstrio</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Currently Building */}
            <div className="p-4 rounded-xl bg-black/30 border border-white/[0.05] space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Currently Building</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                Azure Landing Zone research & Cloud Budget Alerting PoCs
              </p>
              <p className="text-[11px] text-slate-400">Governance policies, metric triggers & UAT validation</p>
            </div>

            {/* Currently Mastering */}
            <div className="p-4 rounded-xl bg-black/30 border border-white/[0.05] space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                <Code2 className="w-3 h-3" />
                <span>Currently Mastering</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                Terraform Modular IaC & Multi-Tier AWS Architectures
              </p>
              <p className="text-[11px] text-slate-400">Automating reproducible VPC, S3 and IAM deployments</p>
            </div>

            {/* Active Core Stack */}
            <div className="p-4 rounded-xl bg-black/30 border border-white/[0.05] space-y-1.5">
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                Active Core Stack
              </div>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {["AWS (EC2/S3/CloudWatch/SNS)", "Linux CLI", "React", "Python", "Git", "UAT Testing"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}