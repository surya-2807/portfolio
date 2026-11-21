import React, { useState } from 'react';
import { featuredProjects, earlierEngineeringProjects } from '../data/portfolioData';
import {
  ExternalLink, Github, ArrowRight, Eye,
  Server, Activity, Bell, Mail, Globe, Shield, HardDrive,
  LayoutTemplate, Images, ListChecks, CalendarCheck,
} from 'lucide-react';

const ICON_CLASS = 'w-4 h-4';

// Node type -> colour + icon. Add a new type here and it works everywhere.
const NODE_STYLES = {
  // Cloud
  Compute:          { border: 'border-blue-500/30',    bg: 'bg-blue-500/10',    icon: <Server         className={`${ICON_CLASS} text-blue-400`} /> },
  Monitoring:       { border: 'border-amber-500/30',   bg: 'bg-amber-500/10',   icon: <Activity       className={`${ICON_CLASS} text-amber-400`} /> },
  'Pub/Sub':        { border: 'border-rose-500/30',    bg: 'bg-rose-500/10',    icon: <Bell           className={`${ICON_CLASS} text-rose-400`} /> },
  Notification:     { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', icon: <Mail           className={`${ICON_CLASS} text-emerald-400`} /> },
  Client:           { border: 'border-cyan-500/30',    bg: 'bg-cyan-500/10',    icon: <Globe          className={`${ICON_CLASS} text-cyan-400`} /> },
  Distribution:     { border: 'border-indigo-500/30',  bg: 'bg-indigo-500/10',  icon: <Shield         className={`${ICON_CLASS} text-indigo-400`} /> },
  'Origin Storage': { border: 'border-teal-500/30',    bg: 'bg-teal-500/10',    icon: <HardDrive      className={`${ICON_CLASS} text-teal-400`} /> },
  // Front-end
  Interface:        { border: 'border-sky-500/30',     bg: 'bg-sky-500/10',     icon: <LayoutTemplate className={`${ICON_CLASS} text-sky-400`} /> },
  Media:            { border: 'border-violet-500/30',  bg: 'bg-violet-500/10',  icon: <Images         className={`${ICON_CLASS} text-violet-400`} /> },
  Content:          { border: 'border-teal-500/30',    bg: 'bg-teal-500/10',    icon: <ListChecks     className={`${ICON_CLASS} text-teal-400`} /> },
  Interaction:      { border: 'border-rose-500/30',    bg: 'bg-rose-500/10',    icon: <CalendarCheck  className={`${ICON_CLASS} text-rose-400`} /> },
};

const ICON_LINK_CLASS =
  'p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.07] transition-all';

function IconLink({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={ICON_LINK_CLASS} aria-label={label}>
      {children}
    </a>
  );
}

function ArchitectureDiagram({ nodes, flow }) {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-black/30 border border-white/[0.05] space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
        <span className="uppercase">Architecture · Hover or tap a node</span>
        <span className="text-[#4f8ef7] font-semibold break-words">{flow}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
        {nodes.map((node) => {
          const isActive = activeId === node.id;
          const style = NODE_STYLES[node.type] || NODE_STYLES.Compute;
          return (
            <button
              key={node.id}
              type="button"
              aria-expanded={isActive}
              onMouseEnter={() => setActiveId(node.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(node.id)}
              onBlur={() => setActiveId(null)}
              onClick={() => setActiveId(isActive ? null : node.id)}
              className={`text-left p-3 rounded-xl border transition-all duration-200 ${
                isActive
                  ? `${style.bg} ${style.border} shadow-sm -translate-y-0.5`
                  : 'bg-white/[0.02] border-white/[0.05] hover:border-white/[0.1]'
              }`}
            >
              <span className="flex items-center gap-2">
                {style.icon}
                <span className="text-xs font-semibold text-white tracking-tight leading-tight">{node.label}</span>
              </span>
              <span className="block text-[10px] font-mono text-slate-500 mt-1">{node.type}</span>
              {isActive && (
                <span className="block text-[11px] text-slate-300 mt-2 leading-relaxed pt-2 border-t border-white/[0.07] animate-fadeIn">
                  {node.detail}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project, onOpenModal }) {
  return (
    <article className="card-top-glow relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0d1528] to-[#080f1e] border border-white/[0.07] hover:border-[#4f8ef7]/20 transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#4f8ef7] bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 px-2.5 py-0.5 rounded-md">
            {project.category}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{project.title}</h3>
          <p className="text-sm text-slate-400 font-light">{project.subtitle}</p>
        </div>

        <div className="flex items-center gap-2 self-start flex-shrink-0">
          {project.githubUrl && (
            <IconLink href={project.githubUrl} label={`${project.title} on GitHub`}>
              <Github className="w-4 h-4" />
            </IconLink>
          )}
          {project.liveUrl && (
            <IconLink href={project.liveUrl} label={`${project.title} live demo`}>
              <ExternalLink className="w-4 h-4" />
            </IconLink>
          )}
          <button
            type="button"
            onClick={() => onOpenModal('project', project, project.title, project.category)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#4f8ef7]/15 hover:bg-[#4f8ef7]/25 text-[#4f8ef7] border border-[#4f8ef7]/30 text-xs font-semibold transition-all hover:-translate-y-px"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {project.architectureNodes && (
        <ArchitectureDiagram nodes={project.architectureNodes} flow={project.architectureString} />
      )}

      {/* Key points */}
      <div className="space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-600">Technical Highlights</div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
          {project.keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2.5 bg-white/[0.015] p-2.5 rounded-lg border border-white/[0.04]">
              <span className="text-[#4f8ef7] mt-0.5 flex-shrink-0">›</span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

function EarlierProjectCard({ item, onOpenModal }) {
  const openEvidence = () =>
    onOpenModal('image', { image: item.image, caption: `${item.title} — ${item.summary}` }, item.title, item.type);

  return (
    <article className="p-5 rounded-2xl bg-gradient-to-b from-[#0d1528] to-[#080e1c] border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between space-y-4 group">
      <div className="space-y-3">
        {item.image && (
          <button
            type="button"
            onClick={openEvidence}
            aria-label={`View proof for ${item.title}`}
            className="relative block w-full h-36 rounded-xl overflow-hidden border border-white/[0.08] bg-slate-950"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold">
              <Eye className="w-3.5 h-3.5" />
              View Proof
            </span>
          </button>
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
        type="button"
        onClick={openEvidence}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4f8ef7] hover:text-blue-300 transition-colors pt-3 border-t border-white/[0.05]"
      >
        <span>View Project Evidence</span>
        <ArrowRight className="w-3 h-3" />
      </button>
    </article>
  );
}

export default function Projects({ onOpenModal }) {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section header */}
        <div className="space-y-2 border-b border-white/[0.07] pb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">03 / Practical Work</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects & Cloud Architectures
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed font-light">
            Cloud setups, web feature development and hands-on prototypes, each with its architecture and implementation notes.
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} onOpenModal={onOpenModal} />
          ))}
        </div>

        {/* Earlier engineering work */}
        <div className="space-y-6 pt-4 border-t border-white/[0.07]">
          <div className="space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-600">Earlier Engineering Work</div>
            <h3 className="text-lg font-bold text-white tracking-tight">Hardware & Automotive Engineering Prototypes</h3>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed font-light">
              Foundational engineering projects covering hands-on prototyping, sensor programming and experimental research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {earlierEngineeringProjects.map((item) => (
              <EarlierProjectCard key={item.id} item={item} onOpenModal={onOpenModal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
