import React, { useEffect } from 'react';
import { X, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, subtitle, type, data }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-lg animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-gradient-to-b from-[#0d1528] to-[#08101e] border border-white/[0.1] rounded-2xl shadow-[0_24px_80px_-12px_rgba(0,0,0,0.9)] overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4f8ef7]/50 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07] bg-black/20">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#4f8ef7]">
              {subtitle || 'Document & Proof Preview'}
            </span>
            <h3 id="modal-title" className="text-base sm:text-lg font-semibold text-white tracking-tight mt-0.5">
              {title || data.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.07] transition-all"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">

          {/* Project case study */}
          {type === 'project' && (
            <div className="space-y-6">
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {data.summary || data.description}
              </p>

              {data.architectureNodes && (
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-3">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Architecture: <span className="text-[#4f8ef7] font-semibold">{data.architectureString}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {data.architectureNodes.map((node) => (
                      <div key={node.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">{node.label}</span>
                          <span className="text-[10px] font-mono text-slate-500">{node.type}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{node.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.keyPoints && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Implementation Breakdown
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {data.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#4f8ef7] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {data.techStack && (
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Technologies</div>
                  <div className="flex flex-wrap gap-1.5">
                    {data.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-200 border border-white/[0.06]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
                {data.githubUrl && (
                  <a
                    href={data.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#4f8ef7] hover:bg-[#6aa1f8] text-white transition-all hover:-translate-y-px"
                  >
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {data.liveUrl && (
                  <a
                    href={data.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/[0.09] transition-all hover:-translate-y-px"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Image lightbox */}
          {type === 'image' && (
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-black/50 flex items-center justify-center max-h-[65vh]">
                <img
                  src={data.src || data.image}
                  alt={data.caption || data.title || 'Preview'}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />
              </div>
              {(data.caption || data.summary) && (
                <p className="text-xs sm:text-sm text-slate-400 text-center leading-relaxed">
                  {data.caption || data.summary}
                </p>
              )}
            </div>
          )}

          {/* PDF document */}
          {type === 'pdf' && (
            <div className="space-y-4">
              <div className="p-8 rounded-xl bg-black/30 border border-white/[0.06] text-center space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 flex items-center justify-center mx-auto">
                  <FileText className="w-8 h-8 text-[#4f8ef7]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{data.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{data.subtitle || data.description || 'Verified Document'}</p>
                </div>
                <a
                  href={data.url || data.pdfUrl || data.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4f8ef7] hover:bg-[#6aa1f8] text-white text-sm font-semibold transition-all hover:-translate-y-px shadow-glow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Open / Download PDF</span>
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}