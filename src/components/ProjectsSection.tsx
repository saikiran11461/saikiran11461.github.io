import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData, ecosystemLinks } from '../data/portfolioData';
import type { Project } from '../types';
import { ArrowUpRight, Layers, ExternalLink, Globe } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Core Ecosystem', 'Applications', 'Enterprise Automation'];

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : filter === 'Core Ecosystem'
      ? projectsData.filter((p) => p.category.includes('Core') || p.category.includes('Ecosystem'))
      : filter === 'Applications'
      ? projectsData.filter((p) => p.category.includes('Application') || p.category.includes('SaaS') || p.category.includes('Media'))
      : projectsData.filter((p) => p.category.includes('Automation') || p.category.includes('DevOps') || p.category.includes('Integration'));

  return (
    <section id="projects" className="py-20 border-t border-white/10">
      {/* Sawad Signature Dual-Contrast Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#c5ff41] mb-4 uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>RapidRoot Ecosystem</span>
        </div>

        <h2 className="sawad-heading text-3xl sm:text-5xl lg:text-6xl tracking-tight">
          RECENT <span className="ghost-text">PROJECTS</span>
        </h2>
        <p className="text-[#998f8f] text-sm sm:text-base mt-3 max-w-2xl font-normal">
          Scalable web platforms, microservices architectures, and developer tooling engineered under the <span className="text-white font-medium">RapidRoot Ecosystem</span>.
        </p>
      </motion.div>

      {/* Live Ecosystem Quick Launcher Pill Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2.5">
          <Globe className="w-4 h-4 text-[#c5ff41]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            Live Ecosystem Deployments:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={ecosystemLinks.rapidroot}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-[#c5ff41] text-white hover:text-black border border-white/10 transition-all hover:scale-105"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5ff41]" />
            <span>rapidroot.in</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={ecosystemLinks.realestate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-[#f46c38] text-white hover:text-black border border-white/10 transition-all hover:scale-105"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f46c38]" />
            <span>Real Estate</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={ecosystemLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-[#25D366] text-white hover:text-black border border-white/10 transition-all hover:scale-105"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            <span>WhatsApp App</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={ecosystemLinks.hostels}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-[#c5ff41] text-white hover:text-black border border-white/10 transition-all hover:scale-105"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5ff41]" />
            <span>Hostels Login</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
              filter === cat
                ? 'bg-[#c5ff41] text-black shadow-[0_0_20px_rgba(197,255,65,0.3)]'
                : 'bg-white/5 hover:bg-white/10 text-[#998f8f] hover:text-white border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => {
          const isFullWidth = index === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onSelectProject(project)}
              className={`sawad-card group cursor-pointer relative overflow-hidden p-6 sm:p-8 flex flex-col justify-between ${
                isFullWidth ? 'md:col-span-2' : ''
              }`}
            >
              {/* Subtle background gradient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-35 transition-opacity duration-500`}
              />

              {/* Top Meta info */}
              <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-[#c5ff41]">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#c5ff41]/10 hover:bg-[#c5ff41] text-[#c5ff41] hover:text-black border border-[#c5ff41]/30 transition-all flex items-center gap-1.5"
                      title="Open Live Website"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="relative z-10 mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-[#c5ff41] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#998f8f] text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tags */}
              <div className="relative z-10 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-white/80 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 text-[11px] text-[#998f8f]">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                <span className="text-xs font-semibold text-white/50 group-hover:text-white transition-colors">
                  View Architecture →
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
