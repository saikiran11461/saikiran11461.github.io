import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

export const ProfileCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sawad-card p-6 lg:p-7 relative overflow-hidden backdrop-blur-xl group"
    >
      {/* Ambient warm glow in top corner */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#c5ff41]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#f46c38]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Profile Image with subtle border shine */}
      <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/10 aspect-4/5 max-h-[380px] w-full bg-[#1c1a19] shadow-2xl group-hover:border-white/20 transition-all duration-300">
        <img
          src={personalInfo.avatar}
          alt={personalInfo.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151312] via-transparent to-transparent opacity-60" />

        {/* Live Availability Pill Badge */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-flex items-center gap-2 bg-[#151312]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#c5ff41] pulsing-dot" />
            <span className="text-white/90">{personalInfo.availability}</span>
          </div>
        </div>
      </div>

      {/* Name and Designation */}
      <div className="mb-4">
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-1">
          {personalInfo.name}
        </h2>
        <p className="text-[#c5ff41] font-semibold text-sm tracking-wide">
          {personalInfo.role}
        </p>
      </div>

      {/* Bio Summary */}
      <p className="text-[#998f8f] text-xs leading-relaxed mb-6 font-normal">
        Founder of <span className="text-white font-medium">RapidRoot</span>. 3+ years architecting scalable full-stack web applications, microservices, and high-throughput REST APIs across the MERN stack & TypeScript.
      </p>

      {/* Details List */}
      <div className="space-y-3 pt-4 border-t border-white/10 text-xs mb-6">
        <div className="flex items-center gap-3 text-[#998f8f]">
          <MapPin className="w-4 h-4 text-[#f46c38] shrink-0" />
          <span className="text-white/90 truncate">{personalInfo.location}</span>
        </div>

        <div className="flex items-center justify-between text-[#998f8f]">
          <div className="flex items-center gap-3 truncate">
            <Mail className="w-4 h-4 text-[#c5ff41] shrink-0" />
            <span className="text-white/90 truncate">{personalInfo.email}</span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors relative"
            title="Copy email to clipboard"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#c5ff41]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 text-[#998f8f]">
          <Phone className="w-4 h-4 text-[#c5ff41] shrink-0" />
          <span className="text-white/90">{personalInfo.phone}</span>
        </div>

        <a
          href={personalInfo.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between text-[#998f8f] hover:text-[#c5ff41] transition-colors group/link"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-[#f46c38] shrink-0" />
            <span className="text-white font-medium group-hover/link:text-[#c5ff41] transition-colors">
              {personalInfo.websiteDisplay}
            </span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100" />
        </a>
      </div>

      {/* Social Links & Action Buttons */}
      <div className="flex items-center gap-2 pt-2">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-all hover:scale-[1.02]"
        >
          <GithubIcon className="w-4 h-4 text-white" />
          <span>GitHub</span>
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-all hover:scale-[1.02]"
        >
          <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
          <span>LinkedIn</span>
        </a>

        <a
          href="#contact"
          className="p-2.5 rounded-xl bg-[#c5ff41] hover:bg-[#b0f026] text-black transition-all hover:scale-105"
          title="Direct message"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};
