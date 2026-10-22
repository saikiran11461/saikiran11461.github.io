import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  MessageSquare,
  Globe,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    budget: '$1,000 - $3,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    'Full-Stack Web App',
    'SaaS Multi-Tenant MVP',
    'API & Microservices',
    'UI / Frontend Overhaul',
  ];

  const budgetOptions = ['< $1,000', '$1,000 - $3,000', '$3,000 - $5,000', '$5,000+'];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c5ff41', '#f46c38', '#ffffff'],
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Full-Stack Web App',
        budget: '$1,000 - $3,000',
        message: '',
      });
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 border-t border-white/10">
      {/* Sawad Signature Dual-Contrast Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#c5ff41] mb-4 uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>

        <h2 className="sawad-heading text-3xl sm:text-5xl lg:text-6xl tracking-tight">
          LET'S WORK <span className="ghost-text">TOGETHER</span>
        </h2>
        <p className="text-[#998f8f] text-sm sm:text-base mt-3 max-w-2xl font-normal">
          Have an enterprise platform, SaaS venture, or engineering role in mind? Drop a message below and let's craft scalable solutions together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Information & Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="sawad-card p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Direct Communication
            </h3>
            <p className="text-[#998f8f] text-xs sm:text-sm leading-relaxed">
              I am open to full-stack engineering roles, architectural consulting, and collaborative SaaS ventures.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              {/* Email with copy button */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 truncate">
                  <Mail className="w-4 h-4 text-[#c5ff41] shrink-0" />
                  <div className="truncate">
                    <div className="text-[10px] text-[#998f8f] uppercase tracking-wider font-semibold">
                      Email Address
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-white truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors ml-2"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#c5ff41]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                <Phone className="w-4 h-4 text-[#f46c38] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#998f8f] uppercase tracking-wider font-semibold">
                    Phone / WhatsApp
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-[#c5ff41] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#998f8f] uppercase tracking-wider font-semibold">
                    Location
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Website */}
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <Globe className="w-4 h-4 text-[#f46c38] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#998f8f] uppercase tracking-wider font-semibold">
                    Ecosystem Website
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white group-hover:text-[#c5ff41] transition-colors">
                    {personalInfo.websiteDisplay}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Interactive Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="sawad-card p-6 sm:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#c5ff41]/20 border border-[#c5ff41] text-[#c5ff41] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-sm text-[#998f8f] max-w-md mx-auto">
                  Thank you for reaching out, <span className="text-white font-medium">{formData.name || 'friend'}</span>. Sai Kiran will review your details and respond promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project Type selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2.5">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`py-2 px-3 rounded-xl text-xs font-medium text-left transition-all ${
                          formData.projectType === type
                            ? 'bg-[#c5ff41] text-black font-semibold'
                            : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/5'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs sm:text-sm focus:outline-none focus:border-[#c5ff41] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs sm:text-sm focus:outline-none focus:border-[#c5ff41] transition-colors"
                    />
                  </div>
                </div>

                {/* Budget Range selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2.5">
                    Estimated Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((budget) => (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => setFormData({ ...formData, budget })}
                        className={`py-2 px-2.5 rounded-xl text-xs font-medium text-center transition-all ${
                          formData.budget === budget
                            ? 'bg-white text-black font-semibold shadow-sm'
                            : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/5'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    Project Overview / Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your goals, timeline, and any specific technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs sm:text-sm focus:outline-none focus:border-[#c5ff41] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#c5ff41] hover:bg-[#b0f026] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(197,255,65,0.3)] hover:shadow-[0_0_35px_rgba(197,255,65,0.5)] active:scale-[0.98]"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
