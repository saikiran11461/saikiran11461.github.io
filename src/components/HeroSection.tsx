import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const marqueeItems = [
    'RAPIDROOT ECOSYSTEM',
    'MERN STACK',
    'TYPESCRIPT',
    'REACT.JS',
    'NODE.JS',
    'EXPRESS.JS',
    'MONGODB & INDEXING',
    'TAILWIND CSS',
    'DOCKER CONTAINERIZATION',
    'POSTMAN 40+ APIS',
    'MULTI-TENANT RBAC',
    'META CLOUD API',
  ];

  return (
    <section id="home" className="pt-24 md:pt-32 pb-12">
      {/* Sawad Signature Dual-Contrast Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#c5ff41] mb-6 tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full Stack Software Engineering</span>
        </div>

        <h1 className="sawad-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight">
          FULL STACK{' '}
          <span className="ghost-text block sm:inline">DEVELOPER</span>
        </h1>
      </motion.div>

      {/* Hero Subtitle Statement */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#998f8f] text-base md:text-xl font-normal leading-relaxed max-w-3xl mb-10"
      >
        Accomplished engineer with <span className="text-white font-medium">3+ years of experience</span> architecting scalable web applications across React, Node.js, Express, and MongoDB. Founder of{' '}
        <span className="text-[#c5ff41] font-medium">RapidRoot (rapidroot.in)</span>, delivering modular microservices, multi-tenant RBAC, and reliable RESTful API systems.
      </motion.p>

      {/* Metric Counters Grid (Sawad style +12, +46, +20) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
      >
        <div className="sawad-card p-6 border-white/10 hover:border-[#c5ff41]/40 relative overflow-hidden group">
          <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-[#c5ff41] transition-colors">
            {personalInfo.experienceYears}
          </div>
          <div className="text-xs uppercase tracking-wider text-[#998f8f] font-semibold">
            YEARS OF <br />
            <span className="text-white">PROFESSIONAL EXPERIENCE</span>
          </div>
        </div>

        <div className="sawad-card p-6 border-white/10 hover:border-[#f46c38]/40 relative overflow-hidden group">
          <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-[#f46c38] transition-colors">
            {personalInfo.projectsCount}
          </div>
          <div className="text-xs uppercase tracking-wider text-[#998f8f] font-semibold">
            ENTERPRISE <br />
            <span className="text-white">MODULES & VENTURES</span>
          </div>
        </div>

        <div className="sawad-card p-6 border-white/10 hover:border-[#c5ff41]/40 relative overflow-hidden group">
          <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-[#c5ff41] transition-colors">
            {personalInfo.apisBuiltCount}
          </div>
          <div className="text-xs uppercase tracking-wider text-[#998f8f] font-semibold">
            PRODUCTION <br />
            <span className="text-white">RESTFUL APIS SECURED</span>
          </div>
        </div>
      </motion.div>

      {/* Call To Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center gap-4 mb-14"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[#c5ff41] hover:bg-[#b0f026] text-black font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-[0_0_25px_rgba(197,255,65,0.25)] hover:shadow-[0_0_35px_rgba(197,255,65,0.45)] hover:scale-[1.02] active:scale-95"
        >
          <span>Explore Projects</span>
          <ArrowDown className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm px-6 py-3.5 rounded-full transition-all duration-200 hover:border-white/30 hover:scale-[1.02] active:scale-95"
        >
          <span>Get In Touch</span>
        </a>
      </motion.div>

      {/* Infinite Marquee Ticker (Sawad signature element) */}
      <div className="relative overflow-hidden py-4 border-y border-white/10 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#151312] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#151312] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-4 mx-4 text-xs font-semibold tracking-widest text-[#998f8f] uppercase"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5ff41]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
