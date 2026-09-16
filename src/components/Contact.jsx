import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">

        {/* Section header */}
        <div className="space-y-2.5 border-b border-white/[0.08] pb-5">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            08 / Contact & Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Have a problem worth solving?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-light">
            I'm open to software engineering roles, cloud opportunities, and technical collaborations.
            Feel free to reach out directly — I respond promptly.
          </p>
        </div>

        {/* Contact card */}
        <div className="card-top-glow p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0c152a]/95 via-[#071020]/95 to-[#040813]/95 border border-white/[0.08] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.7)] space-y-8">

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_25px_-5px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_-2px_rgba(56,189,248,0.6)] hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Send an Email</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.08] text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/30"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-mono text-xs">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.06]">
            <div className="p-4 rounded-xl bg-black/30 border border-white/[0.05] space-y-1">
              <div className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">Email Address</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 break-all transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="p-4 rounded-xl bg-black/30 border border-white/[0.05] space-y-1">
              <div className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">Phone / WhatsApp</div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="p-4 rounded-xl bg-black/30 border border-white/[0.05] space-y-1">
              <div className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">Location</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">{personalInfo.location}</div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-white/[0.06] text-xs sm:text-sm">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}