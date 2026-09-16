import React, { useState } from 'react';
import { featuredProjects, earlierEngineeringProjects } from '../data/portfolioData';
import { ExternalLink, Github, ArrowRight, Eye, Server, Activity, Bell, Mail, Globe, Shield, HardDrive } from 'lucide-react';

const NODE_COLORS = {
  Compute:        { border: 'border-blue-500/35',   bg: 'bg-blue-500/8',   icon: <Server   className="w-4 h-4 text-blue-400" /> },
  Monitoring:     { border: 'border-amber-500/35',  bg: 'bg-amber-500/8',  icon: <Activity className="w-4 h-4 text-amber-400" /> },
  'Pub/Sub':      { border: 'border-rose-500/35',   bg: 'bg-rose-500/8',   icon: <Bell     className="w-4 h-4 text-rose-400" /> },
  Notification:   { border: 'border-emerald-500/35',bg: 'bg-emerald-500/8',icon: <Mail     className="w-4 h-4 text-emerald-400" /> },
  Client:         { border: 'border-cyan-500/35',   bg: 'bg-cyan-500/8',   icon: <Globe    className="w-4 h-4 text-cyan-400" /> },
  Distribution:   { border: 'border-indigo-500/35', bg: 'bg-indigo-500/8', icon: <Shield   className="w-4 h-4 text-indigo-400" /> },
  'Origin Storage':{ border: 'border-teal-500/35',  bg: 'bg-teal-500/8',   icon: <HardDrive className="w-4 h-4 text-teal-400" /> },
};

export default function Projects({ onOpenModal }) {
  const [activeArchNode, setActiveArchNode] = useState(null);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section header */}
        <div className="space-y-2 border-b border-white/[0.07] pb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            03 / Practical Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects & Cloud Architectures
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed font-light">
            Real-world cloud setups, web feature development, and engineering prototypes with detailed architectural workflows.
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="card-top-glow relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0d1528] to-[#080f1e] border border-white/[0.07] hover:border-[#4f8ef7]/20 transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#4f8ef7] bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 px-2.5 py-0.5 rounded-md">
                    {project.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light">{project.subtitle}</p>
                </div>

                <div className="flex items-center gap-2 self-start flex-shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.07] transition-all"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.07] transition-all"
                      aria-label="Live Website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => onOpenModal('project', project, project.title, project.category)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#4f8ef7]/15 hover:bg-[#4f8ef7]/25 text-[#4f8ef7] border border-[#4f8ef7]/30 text-xs font-semibold transition-all hover:-translate-y-px"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Interactive architecture flowchart */}
              {project.architectureNodes && (
                <div className="p-4 sm:p-5 rounded-xl bg-black/30 border border-white/[0.05] space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
                    <span className="uppercase">Architecture · Hover nodes for detail</span>
                    <span className="text-[#4f8ef7] font-semibold">{project.architectureString}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {project.architectureNodes.map((node) => {
                      const isHovered = activeArchNode === `${project.id}-${node.id}`;
                      const colors = NODE_COLORS[node.type] || NODE_COLORS.Compute;
                      return (
                        <div
                          key={node.id}
                          onMouseEnter={() => setActiveArchNode(`${project.id}-${node.id}`)}
                          onMouseLeave={() => setActiveArchNode(null)}
                          onClick={() => setActiveArchNode(isHovered ? null : `${project.id}-${node.id}`)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                            isHovered
                              ? `${colors.bg} ${colors.border} shadow-sm -translate-y-0.5`
                              : 'bg-white/[0.02] border-white/[0.05] hover:border-white/[0.1]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {colors.icon}
                            <span className="text-xs font-semibold text-white tracking-tight leading-tight">{node.label}</span>
                          </div>
                          <p className="text-[10px] font-mono text-slate-500 mt-1">{node.type}</p>
                          {isHovered && (
                            <p className="text-[11px] text-slate-300 mt-2 leading-relaxed pt-2 border-t border-white/[0.07] animate-fadeIn">
                              {node.detail}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Key points */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-600">
                  Technical Highlights
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                  {project.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-white/[0.015] p-2.5 rounded-lg border border-white/[0.04]">
                      <span className="text-[#4f8ef7] mt-0.5 flex-shrink-0">›</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Earlier engineering work */}
        <div className="space-y-6 pt-4 border-t border-white/[0.07]">
          <div className="space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-600">
              Earlier Engineering Work
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Hardware & Automotive Engineering Prototypes
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed font-light">
              Foundational core engineering projects demonstrating hands-on prototyping, sensor programming, and experimental research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {earlierEngineeringProjects.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#0d1528] to-[#080e1c] border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {item.image && (
                    <div
                      onClick={() => onOpenModal('image', { image: item.image, caption: `${item.title} — ${item.summary}` }, item.title, item.type)}
                      className="relative h-36 rounded-xl overflow-hidden border border-white/[0.08] cursor-pointer bg-slate-950"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Proof</span>
                      </div>
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] font-mono text-slate-600 uppercase">{item.period} · {item.type}</span>
                    <h4 className="text-sm font-semibold text-white tracking-tight mt-0.5 group-hover:text-[#4f8ef7] transition-colors duration-200">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">{item.summary}</p>
                </div>

                <button
                  onClick={() => onOpenModal('image', { image: item.image, caption: `${item.title} — ${item.summary}` }, item.title, item.type)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4f8ef7] hover:text-blue-300 transition-colors pt-3 border-t border-white/[0.05]"
                >
                  <span>View Project Evidence</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}