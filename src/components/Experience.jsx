import React from 'react';
import { careerTimeline } from '../data/portfolioData';
import { FileText, ArrowRight } from 'lucide-react';

export default function Experience({ onOpenModal }) {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Section header */}
        <div className="space-y-2 border-b border-white/[0.07] pb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            05 / Career & Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Work Experience & Internships
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            Practical engineering roles focused on cloud systems, frontend development, UAT, and analytical workflows.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ml-4 sm:ml-8 space-y-8 pl-8 sm:pl-10">
          {/* Gradient vertical line */}
          <div className="absolute left-0 top-3 bottom-3 w-px timeline-line" />

          {careerTimeline.map((item, index) => (
            <div key={index} className="relative group">

              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-5 w-3.5 h-3.5 rounded-full bg-[#05080f] border-2 border-[#4f8ef7] group-hover:bg-[#4f8ef7] group-hover:shadow-glow-sm transition-all duration-300" />

              {/* Card */}
              <div className="card-top-glow p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0d1528] to-[#080f1e] border border-white/[0.07] hover:border-[#4f8ef7]/18 transition-all duration-300 shadow-card hover:-translate-y-0.5 space-y-4">

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#4f8ef7]">
                      {item.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">{item.company}</p>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.07] self-start sm:self-auto flex-shrink-0">
                    {item.period}
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-slate-300 pt-2 border-t border-white/[0.05]">
                  {item.details.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#4f8ef7] mt-0.5 flex-shrink-0">›</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {item.certificateUrl && (
                  <div className="pt-2">
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
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4f8ef7] hover:text-blue-300 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Completion Certificate Proof</span>
                      <ArrowRight className="w-3 h-3" />
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