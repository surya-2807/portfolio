import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 px-4 sm:px-6 bg-[#04070d]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4f8ef7]/25 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">

        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-300">{personalInfo.name}</span>
          <span className="text-slate-700">·</span>
          <span>Associate System Engineer Intern @ Devopstrio</span>
        </div>

        <div className="text-[11px] font-mono text-slate-600">
          React · Tailwind CSS · Vite
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-all hover:-translate-y-0.5 p-1"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}