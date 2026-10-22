import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Tools', href: '#tools', id: 'tools' },
    { name: 'Thoughts', href: '#thoughts', id: 'thoughts' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5 pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-2 md:gap-8 px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#1c1a19]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
              : 'bg-[#1c1a19]/60 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Brand Mark */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 group text-white font-medium text-sm tracking-tight"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-[#c5ff41] transition-colors">
              <img
                src="/saikiran.jpg"
                alt="Sai Kiran Ommi"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="font-semibold text-white tracking-wide text-xs md:text-sm">
              SAI KIRAN
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#998f8f] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="group flex items-center gap-1.5 bg-[#c5ff41] hover:bg-[#b0f026] text-black font-semibold text-xs md:text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(197,255,65,0.25)] hover:shadow-[0_0_25px_rgba(197,255,65,0.45)] active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 p-4 rounded-3xl bg-[#1c1a19]/95 backdrop-blur-2xl border border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-white/10 text-[#c5ff41] font-semibold'
                      : 'text-[#998f8f] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-white/30">→</span>
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 bg-[#c5ff41] text-black font-semibold py-3 rounded-2xl text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start A Conversation</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
