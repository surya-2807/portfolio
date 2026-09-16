import React from 'react';
import { careerTimeline } from '../data/portfolioData';
import { FileText, ArrowRight, Briefcase } from 'lucide-react';

export default function Experience({ onOpenModal }) {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">

        {/* Section header */}
        <div className="space-y-2.5 border-b border-white/[0.08] pb-5">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            05 / Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Professional Experience & Internships
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light max-w-2xl">
            Practical engineering responsibilities across cloud governance, frontend feature delivery, UAT testing, and system analysis.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ml-2 sm:ml-6 space-y-8 pl-6 sm:pl-10">
          {/* Gradient vertical line */}
          <div className="absolute left-0 top-3 bottom-3 w-px timeline-line" />

          {careerTimeline.map((item, index) => (
            <div key={index} className="relative group">

              {/* Timeline dot */}
              <div className="absolute -left-[29px] sm:-left-[45px] top-6 w-3.5 h-3.5 rounded-full bg-[#050811] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all duration-300" />

              {/* Card */}
              <div className="card-top-glow p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c152a]/95 via-[#071020]/95 to-[#040813]/95 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.7)] hover:-translate-y-0.5 space-y-4">

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.06] pb-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      {item.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-0.5">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">{item.company}</p>
                  </div>
                  <div className="text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded-lg border border-cyan-500/25 self-start sm:self-auto flex-shrink-0">
                    {item.period}
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-1">
                  {item.details.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-0.5 font-bold flex-shrink-0">›</span>
                      <span className="leading-relaxed font-light">{point}</span>
                    </li>
                  ))}
                </ul>

                {item.certificateUrl && (
                  <div className="pt-2 border-t border-white/[0.06]">
                    <button
                      onClick={() => onOpenModal(
                        'pdf',
                        {
                          certificateUrl: item.certificateUrl,
                          title: 'Data Visualization Internship Certificate',
                          subtitle: 'Issued by Excelerate (May – June 2025)',
                        },
                        'Excelerate Internship Certificate',
                        'Verified Credential'
                      )}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View Completion Certificate Proof</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}