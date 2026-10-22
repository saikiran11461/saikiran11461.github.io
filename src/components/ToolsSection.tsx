import React from 'react';
import { motion } from 'framer-motion';
import { toolsData } from '../data/portfolioData';
import {
  Cpu,
  Code2,
  Server,
  Database,
  Palette,
  Send,
  Box,
  GitBranch,
  Zap,
  ShieldCheck,
  Layers,
  Wrench,
} from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Send':
        return <Send className="w-5 h-5" />;
      case 'Box':
        return <Box className="w-5 h-5" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="tools" className="py-20 border-t border-white/10">
      {/* Sawad Signature Dual-Contrast Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#c5ff41] mb-4 uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5" />
          <span>Technical Arsenal</span>
        </div>

        <h2 className="sawad-heading text-3xl sm:text-5xl lg:text-6xl tracking-tight">
          PREMIUM <span className="ghost-text">TOOLS</span>
        </h2>
        <p className="text-[#998f8f] text-sm sm:text-base mt-3 max-w-2xl font-normal">
          Battle-tested frameworks, cloud infrastructure, and developer utilities utilized to deliver high-performance production software.
        </p>
      </motion.div>

      {/* Grid of Tools */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {toolsData.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="sawad-card p-5 group flex flex-col justify-between hover:border-[#c5ff41]/50 hover:bg-white/[0.05] transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ color: tool.color || '#c5ff41' }}
              >
                {getIcon(tool.iconName)}
              </div>
              {tool.level && (
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-white/5 text-[#998f8f] border border-white/5">
                  {tool.level}
                </span>
              )}
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-[#c5ff41] transition-colors mb-0.5">
                {tool.name}
              </h3>
              <p className="text-[#998f8f] text-xs font-normal truncate">
                {tool.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
