import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { thoughtsData } from '../data/portfolioData';
import type { ThoughtItem } from '../types';
import { BookOpen, Calendar, Clock, ArrowUpRight, X } from 'lucide-react';

export const ThoughtsSection: React.FC = () => {
  const [selectedThought, setSelectedThought] = useState<ThoughtItem | null>(null);

  return (
    <section id="thoughts" className="py-20 border-t border-white/10">
      {/* Sawad Signature Dual-Contrast Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#f46c38] mb-4 uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Case Studies & Insights</span>
        </div>

        <h2 className="sawad-heading text-3xl sm:text-5xl lg:text-6xl tracking-tight">
          ENGINEERING <span className="ghost-text">THOUGHTS</span>
        </h2>
        <p className="text-[#998f8f] text-sm sm:text-base mt-3 max-w-2xl font-normal">
          Architectural blueprints, performance optimization experiments, and engineering deep-dives written from real-world product development.
        </p>
      </motion.div>

      {/* Thoughts Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {thoughtsData.map((thought, index) => (
          <motion.article
            key={thought.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedThought(thought)}
            className="sawad-card p-6 sm:p-7 group cursor-pointer flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.04] transition-all"
          >
            <div>
              {/* Date & Read time */}
              <div className="flex items-center gap-3 text-xs text-[#998f8f] mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#c5ff41]" />
                  {thought.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#f46c38]" />
                  {thought.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#c5ff41] transition-colors leading-snug">
                {thought.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-[#998f8f] leading-relaxed line-clamp-3 mb-6">
                {thought.excerpt}
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {thought.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-white/70 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#c5ff41] border border-white/10 flex items-center justify-center transition-all">
                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedThought && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedThought(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#1c1a19] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto my-8"
            >
              <button
                onClick={() => setSelectedThought(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs text-[#998f8f] mb-3">
                <span>{selectedThought.date}</span>
                <span>•</span>
                <span>{selectedThought.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight leading-snug">
                {selectedThought.title}
              </h2>

              <div className="space-y-4 text-sm text-white/80 leading-relaxed mb-8">
                {selectedThought.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {selectedThought.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#c5ff41]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
