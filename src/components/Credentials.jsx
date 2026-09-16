import React from 'react';
import { credentials, educationInfo } from '../data/portfolioData';
import { Award, ShieldCheck, GraduationCap, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';

export default function Credentials({ onOpenModal }) {
  return (
    <section id="credentials" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {/* Section header */}
        <div className="space-y-2.5 border-b border-white/[0.08] pb-5">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            07 / Proof & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Certifications & Academic Credentials
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-light">
            Verified AWS cloud certifications, Credly badges, and official academic degree credentials.
          </p>
        </div>

        {/* AWS Cert cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {credentials.map((cert) => (
            <div
              key={cert.id}
              className="card-top-glow relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#131108]/95 via-[#0c152a]/95 to-[#050c1c]/95 border border-amber-500/20 hover:border-amber-400/50 hover:shadow-[0_0_35px_-8px_rgba(245,158,11,0.35)] transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.7)] flex flex-col justify-between space-y-5"
            >
              {/* Watermark icon */}
              <div className="absolute top-4 right-4 opacity-[0.06] pointer-events-none">
                <ShieldCheck className="w-20 h-20 text-amber-400" />
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-300 bg-amber-950/40 px-3 py-1 rounded-md border border-amber-500/30 font-semibold">
                    AWS Verified
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/25">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    Issued by <strong className="text-slate-200 font-semibold">{cert.issuer}</strong>
                    {cert.issueDate && ` · ${cert.issueDate}`}
                  </p>
                </div>

                {cert.validationNumber && (
                  <div className="p-3.5 rounded-xl bg-black/60 border border-amber-500/20 space-y-1 font-mono">
                    <div className="text-[10px] uppercase tracking-widest text-amber-400/80 font-bold">
                      AWS Validation Number:
                    </div>
                    <code className="text-xs text-amber-200 break-all">{cert.validationNumber}</code>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {cert.summary}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3.5 border-t border-amber-500/[0.12]">
                {cert.credlyUrl && (
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition-all hover:-translate-y-0.5 shadow-sm"
                  >
                    <span>View Credly Badge</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <span>AWS Verification Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education card */}
        <div className="card-top-glow p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#0c152a]/95 via-[#071020]/95 to-[#040813]/95 border border-white/[0.08] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.7)] space-y-7">

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-white/[0.06]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mt-0.5 flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {educationInfo.degree}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-0.5">
                  {educationInfo.institution}
                  <span className="text-slate-400"> · {educationInfo.affiliation}</span>
                </p>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Register No: {educationInfo.registerNumber} · {educationInfo.period}
                </p>
              </div>
            </div>
            <div className="text-xs sm:text-sm font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/25 px-3.5 py-1.5 rounded-lg self-start flex-shrink-0">
              {educationInfo.grade} · {educationInfo.graduationDate}
            </div>
          </div>

          {/* Transition story */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              The Engineering Transition
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light max-w-3xl">
              {educationInfo.transitionStory}
            </p>
          </div>

          {/* Graduation photos in full color */}
          <div className="space-y-3.5 pt-2 border-t border-white/[0.06]">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Degree Proof & Graduation Folio
              </div>
              <span className="text-cyan-400 font-mono text-xs">Click image to inspect in full resolution</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {educationInfo.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => onOpenModal(
                    'image',
                    { image: img.src, caption: `${img.caption} · Kongu Engineering College (Anna University)` },
                    'Kongu Engineering College — Graduation Day',
                    'Academic Verification'
                  )}
                  className="group relative rounded-xl overflow-hidden border border-white/[0.08] hover:border-cyan-500/30 bg-black/40 cursor-pointer h-56 sm:h-64 transition-all duration-300"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs sm:text-sm font-medium text-white line-clamp-1">{img.caption}</p>
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 mt-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect photo in lightbox</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}