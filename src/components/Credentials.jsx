import React from 'react';
import { credentials, educationInfo } from '../data/portfolioData';
import { Award, ShieldCheck, GraduationCap, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';

export default function Credentials({ onOpenModal }) {
  return (
    <section id="credentials" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section header */}
        <div className="space-y-2 border-b border-white/[0.07] pb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            07 / Proof & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications & Academic Background
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed font-light">
            Verified AWS cloud credentials and academic qualification documenting the transition into software engineering.
          </p>
        </div>

        {/* AWS Cert cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((cert) => (
            <div
              key={cert.id}
              className="card-top-glow relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#120e05] to-[#0d1020] border border-amber-500/12 hover:border-amber-500/28 hover:shadow-glow-amber transition-all duration-300 hover:-translate-y-0.5 shadow-card flex flex-col justify-between space-y-5"
            >
              {/* Watermark icon */}
              <div className="absolute top-4 right-4 opacity-[0.05]">
                <ShieldCheck className="w-16 h-16 text-amber-400" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    AWS Certified
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Issued by <strong className="text-slate-200">{cert.issuer}</strong>
                    {cert.issueDate && ` · ${cert.issueDate}`}
                  </p>
                </div>

                {cert.validationNumber && (
                  <div className="p-3 rounded-xl bg-black/50 border border-amber-500/10 space-y-1 font-mono">
                    <div className="text-[9px] uppercase tracking-widest text-amber-500/60">
                      AWS Validation Number
                    </div>
                    <code className="text-xs text-amber-300 break-all">{cert.validationNumber}</code>
                  </div>
                )}

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {cert.summary}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-amber-500/[0.08]">
                {cert.credlyUrl && (
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-amber-500/12 hover:bg-amber-500/22 text-amber-400 border border-amber-500/25 transition-all hover:-translate-y-px"
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
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education card */}
        <div className="card-top-glow p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0d1528] to-[#080f1e] border border-white/[0.07] shadow-card space-y-6">

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-white/[0.06]">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 text-[#4f8ef7] mt-0.5 flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {educationInfo.degree}
                </h3>
                <p className="text-sm text-slate-300 mt-0.5">
                  {educationInfo.institution}
                  <span className="text-slate-500"> · {educationInfo.affiliation}</span>
                </p>
                <p className="text-[11px] font-mono text-slate-500 mt-1">
                  Reg. No: {educationInfo.registerNumber} · {educationInfo.period}
                </p>
              </div>
            </div>
            <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg self-start flex-shrink-0">
              {educationInfo.grade} · {educationInfo.graduationDate}
            </div>
          </div>

          {/* Transition story */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              The Engineering Transition
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-light max-w-3xl">
              {educationInfo.transitionStory}
            </p>
          </div>

          {/* Graduation photos — full color */}
          <div className="space-y-3 pt-2 border-t border-white/[0.05]">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                Graduation Day · Degree Proof
              </div>
              <span className="text-[#4f8ef7] font-mono text-[10px]">Click to inspect in full resolution</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {educationInfo.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => onOpenModal(
                    'image',
                    { image: img.src, caption: `${img.caption} · Kongu Engineering College (Anna University)` },
                    'Kongu Engineering College — Graduation Day',
                    'Academic Verification'
                  )}
                  className="group relative rounded-xl overflow-hidden border border-white/[0.08] hover:border-[#4f8ef7]/25 bg-black/40 cursor-pointer h-52 sm:h-60 transition-all duration-300"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay — not grayscale */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-xs font-medium text-white line-clamp-1">{img.caption}</p>
                    <span className="text-[10px] font-mono text-[#4f8ef7] flex items-center gap-1 mt-0.5">
                      <Eye className="w-3 h-3" />
                      <span>Inspect in lightbox</span>
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-[#4f8ef7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}