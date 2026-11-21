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
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Section header */}
        <div className="space-y-3 border-b border-white/[0.07] pb-5">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            08 / Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Have a problem worth solving?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed font-light">
            I'm open to software engineering roles, cloud opportunities, and technical collaborations.
            Feel free to reach out directly — I respond quickly.
          </p>
        </div>

        {/* Contact card */}
        <div className="card-top-glow p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0d1528] to-[#060d1c] border border-white/[0.07] shadow-card space-y-8">

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#4f8ef7] hover:bg-[#6aa1f8] text-white text-sm font-semibold transition-all duration-200 shadow-glow-sm hover:shadow-glow-blue hover:-translate-y-px"
            >
              <Mail className="w-4 h-4" />
              <span>Send an Email</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 border border-white/[0.09] text-sm font-medium transition-all duration-200 hover:-translate-y-px"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-mono">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/[0.05]">
            <div className="p-4 rounded-xl bg-black/20 border border-white/[0.05] space-y-1.5">
              <div className="text-[10px] font-mono uppercase text-slate-600 tracking-wider">Email</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xs font-semibold text-slate-200 hover:text-[#4f8ef7] break-all transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="p-4 rounded-xl bg-black/20 border border-white/[0.05] space-y-1.5">
              <div className="text-[10px] font-mono uppercase text-slate-600 tracking-wider">Phone / WhatsApp</div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-xs font-semibold text-slate-200 hover:text-[#4f8ef7] transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="p-4 rounded-xl bg-black/20 border border-white/[0.05] space-y-1.5">
              <div className="text-[10px] font-mono uppercase text-slate-600 tracking-wider">Location</div>
              <div className="text-xs font-semibold text-slate-200">{personalInfo.location}</div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 pt-2 border-t border-white/[0.05] text-xs">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-70 transition-opacity" />
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Profile</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-70 transition-opacity" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}