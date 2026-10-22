import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/10">
      {/* Sawad Signature Dual-Contrast Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#f46c38] mb-4 uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Career Milestones</span>
        </div>

        <h2 className="sawad-heading text-3xl sm:text-5xl lg:text-6xl tracking-tight">
          3+ YEARS OF <span className="ghost-text">EXPERIENCE</span>
        </h2>
        <p className="text-[#998f8f] text-sm sm:text-base mt-3 max-w-2xl font-normal">
          Demonstrated engineering history architecting enterprise web systems, securing 40+ RESTful APIs, and leading agile deployments.
        </p>
      </motion.div>

      {/* Experience Timeline Stack */}
      <div className="space-y-6">
        {experienceData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="sawad-card p-6 sm:p-8 relative overflow-hidden group hover:border-white/20"
          >
            {/* Top row: Role, Company & Period */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#c5ff41] transition-colors">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#c5ff41] mt-0.5">
                  <span>{item.company}</span>
                  {item.location && (
                    <>
                      <span className="text-white/30">•</span>
                      <span className="text-[#998f8f] font-normal text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#f46c38]" />
                        {item.location}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Date pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/90 self-start md:self-auto">
                <Calendar className="w-3.5 h-3.5 text-[#c5ff41]" />
                <span>{item.period}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#998f8f] text-xs sm:text-sm leading-relaxed mb-5">
              {item.description}
            </p>

            {/* Bullet Highlights from Resume */}
            <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-white/80">
              {item.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#c5ff41] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-white/70 border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
