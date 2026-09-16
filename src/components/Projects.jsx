import React, { useState } from 'react';
import { featuredProjects, earlierEngineeringProjects } from '../data/portfolioData';
import { ExternalLink, Github, ArrowRight, Eye, Server, Activity, Bell, Mail, Globe, Shield, HardDrive, Layers, Radio, Network } from 'lucide-react';

const NODE_CONFIG = {
  Compute:        { border: 'border-amber-500/30 hover:border-amber-400/60', bg: 'bg-amber-500/10', text: 'text-amber-400', icon: <Server className="w-4 h-4 text-amber-400" /> },
  Monitoring:     { border: 'border-cyan-500/30 hover:border-cyan-400/60',   bg: 'bg-cyan-500/10',   text: 'text-cyan-400',  icon: <Activity className="w-4 h-4 text-cyan-400" /> },
  'Pub/Sub':      { border: 'border-rose-500/30 hover:border-rose-400/60',   bg: 'bg-rose-500/10',   text: 'text-rose-400',  icon: <Bell className="w-4 h-4 text-rose-400" /> },
  Notification:   { border: 'border-emerald-500/30 hover:border-emerald-400/60', bg: 'bg-emerald-500/10', text: 'text-emerald-400', icon: <Mail className="w-4 h-4 text-emerald-400" /> },
  Client:         { border: 'border-sky-500/30 hover:border-sky-400/60',     bg: 'bg-sky-500/10',    text: 'text-sky-400',   icon: <Globe className="w-4 h-4 text-sky-400" /> },
  DNS:            { border: 'border-blue-500/30 hover:border-blue-400/60',   bg: 'bg-blue-500/10',   text: 'text-blue-400',  icon: <Network className="w-4 h-4 text-blue-400" /> },
  Distribution:   { border: 'border-indigo-500/30 hover:border-indigo-400/60', bg: 'bg-indigo-500/10', text: 'text-indigo-400', icon: <Shield className="w-4 h-4 text-indigo-400" /> },
  'Origin Storage': { border: 'border-teal-500/30 hover:border-teal-400/60', bg: 'bg-teal-500/10',  text: 'text-teal-400',  icon: <HardDrive className="w-4 h-4 text-teal-400" /> },
};

export default function Projects({ onOpenModal }) {
  const [activeArchNode, setActiveArchNode] = useState(null);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {/* Section header */}
        <div className="space-y-2.5 border-b border-white/[0.08] pb-5">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            03 / Practical Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Cloud Architectures & Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-light">
            Real-world AWS infrastructure setups, automated alert pipelines, and production web delivery workflows with interactive topology.
          </p>
        </div>

        {/* Featured projects list */}
        <div className="space-y-10">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="card-top-glow relative p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#0c152a]/95 via-[#071020]/95 to-[#040813]/95 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.7)] space-y-7"
            >
              {/* Top Row: Title, Category & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/25 px-2.5 py-0.5 rounded-md">
                    <Layers className="w-3 h-3" />
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-light max-w-2xl">{project.subtitle}</p>
                </div>

                <div className="flex items-center gap-2 self-start flex-shrink-0 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-all hover:border-cyan-500/30"
                      aria-label="View on GitHub"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-all hover:border-cyan-500/30"
                      aria-label="Live Demo"
                      title="Live Deployment"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => onOpenModal('project', project, project.title, project.category)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600/30 to-cyan-600/30 hover:from-blue-600/45 hover:to-cyan-600/45 text-cyan-300 border border-cyan-500/35 text-xs font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* ── Architecture Topology Flow Canvas (Visual Cloud Diagram) ── */}
              {project.architectureNodes && (
                <div className="p-5 sm:p-6 rounded-xl bg-black/40 border border-cyan-500/20 shadow-inner space-y-4">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-400 gap-2 border-b border-white/[0.06] pb-3">
                    <span className="flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-wider">
                      <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                      Visual Architecture Pipeline
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Hover / Tap nodes to inspect data flow logic
                    </span>
                  </div>

                  {/* Connected Topology Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                    {project.architectureNodes.map((node, nodeIdx) => {
                      const isHovered = activeArchNode === `${project.id}-${node.id}`;
                      const config = NODE_CONFIG[node.type] || NODE_CONFIG.Compute;
                      const isLast = nodeIdx === project.architectureNodes.length - 1;

                      return (
                        <div key={node.id} className="relative flex flex-col">
                          <div
                            onMouseEnter={() => setActiveArchNode(`${project.id}-${node.id}`)}
                            onMouseLeave={() => setActiveArchNode(null)}
                            onClick={() => setActiveArchNode(isHovered ? null : `${project.id}-${node.id}`)}
                            className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between h-full ${
                              isHovered
                                ? `${config.bg} ${config.border} shadow-[0_0_20px_-3px_rgba(56,189,248,0.25)] -translate-y-1`
                                : 'bg-white/[0.025] border-white/[0.06] hover:border-white/[0.14]'
                            }`}
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {config.icon}
                                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                                    0{nodeIdx + 1}
                                  </span>
                                </div>
                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${config.bg} ${config.text} border border-white/[0.06]`}>
                                  {node.type}
                                </span>
                              </div>

                              <div>
                                <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                                  {node.label}
                                </h4>
                                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-light">
                                  {node.detail}
                                </p>
                              </div>
                            </div>

                            {isHovered && (
                              <div className="mt-3 pt-2.5 border-t border-white/[0.08] text-[10px] font-mono text-cyan-300 flex items-center gap-1 animate-fadeIn">
                                <span>Active Node Details Inspected</span>
                              </div>
                            )}
                          </div>

                          {/* Connector indicator for desktop */}
                          {!isLast && (
                            <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-slate-900 border border-cyan-500/40 items-center justify-center text-[10px] text-cyan-400 font-bold">
                              →
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Flow summary string */}
                  <div className="pt-2 text-center sm:text-left flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-slate-500">Pipeline Flow:</span>
                    <span className="text-cyan-400 font-medium">{project.architectureString}</span>
                  </div>

                </div>
              )}

              {/* Technical Highlights Grid */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Implementation Highlights & Decisions
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                  {project.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-black/20 p-3 rounded-xl border border-white/[0.04]">
                      <span className="text-cyan-400 mt-0.5 font-bold flex-shrink-0">›</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.06]">
                <span className="text-xs font-mono text-slate-500 mr-1">Stack:</span>
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.03] text-slate-300 border border-white/[0.07]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* ── Earlier Engineering & Prototyping Section ── */}
        <div className="space-y-6 pt-6 border-t border-white/[0.08]">
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
              Earlier Engineering Work
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Hardware & Automotive Engineering Prototypes
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed font-light">
              Foundational core engineering projects demonstrating hands-on prototyping, sensor programming, and experimental research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {earlierEngineeringProjects.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#0c152a]/90 to-[#060c18]/95 border border-white/[0.07] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {item.image && (
                    <div
                      onClick={() => onOpenModal('image', { image: item.image, caption: `${item.title} — ${item.summary}` }, item.title, item.type)}
                      className="relative h-40 rounded-xl overflow-hidden border border-white/[0.08] cursor-pointer bg-slate-950"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold">
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>View Project Proof</span>
                      </div>
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">{item.period} · {item.type}</span>
                    <h4 className="text-sm font-semibold text-white tracking-tight mt-1 group-hover:text-cyan-300 transition-colors duration-200">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">{item.summary}</p>
                </div>

                <button
                  onClick={() => onOpenModal('image', { image: item.image, caption: `${item.title} — ${item.summary}` }, item.title, item.type)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors pt-3 border-t border-white/[0.06]"
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