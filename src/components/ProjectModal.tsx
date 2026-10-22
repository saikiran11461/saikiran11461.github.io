import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import { X, ExternalLink, CheckCircle2, Layers, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl my-8 bg-[#1c1a19] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header Action: Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Category Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5ff41]/10 border border-[#c5ff41]/30 text-[#c5ff41] text-xs font-semibold mb-4 tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
            {project.title}
          </h2>
          <p className="text-[#998f8f] text-sm sm:text-base font-medium mb-6">
            {project.subtitle}
          </p>

          {/* Metrics Pill Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-3 text-center"
                >
                  <span className="text-xs font-semibold text-white tracking-wide">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="space-y-4 mb-6 text-sm text-[#998f8f] leading-relaxed">
            <p>{project.longDescription}</p>
          </div>

          {/* Architecture Highlights */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c5ff41]" />
              <span>Architectural Highlights & Engineering Impact</span>
            </h3>
            <ul className="space-y-2.5">
              {project.architecturePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-[#998f8f]">
                  <CheckCircle2 className="w-4 h-4 text-[#c5ff41] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#c5ff41] hover:bg-[#b0f026] text-black font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
