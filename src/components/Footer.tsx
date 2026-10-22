import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { ArrowUp, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 text-xs text-[#998f8f]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side copyright */}
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-white font-medium">{personalInfo.name}</span>
          <span>•</span>
          <span>Founder of RapidRoot</span>
        </div>

        {/* Center info */}
        <div className="flex items-center gap-1.5 text-white/50">
          <span>Crafted with</span>
          <span className="text-[#c5ff41]">React</span>
          <span>&</span>
          <span className="text-[#f46c38]">Tailwind CSS</span>
        </div>

        {/* Right side social links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c5ff41] transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c5ff41] transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[#c5ff41] transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c5ff41] transition-colors"
            title="RapidRoot Website"
          >
            <Globe className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="ml-2 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
