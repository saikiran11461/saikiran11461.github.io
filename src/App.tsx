import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProfileCard } from './components/ProfileCard';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolsSection } from './components/ToolsSection';
import { ThoughtsSection } from './components/ThoughtsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import type { Project } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Set up intersection observer to track which section is currently active
  useEffect(() => {
    const sectionIds = ['home', 'projects', 'experience', 'tools', 'thoughts', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#151312] text-white selection:bg-[#c5ff41] selection:text-black">
      {/* Top Floating Pill Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Sticky Profile Card (Sawad signature) */}
          <aside className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-24 z-20">
            <ProfileCard />
          </aside>

          {/* Right Column: Main Content Feed */}
          <main className="lg:col-span-8 xl:col-span-8 min-w-0">
            <HeroSection />
            <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
            <ExperienceSection />
            <ToolsSection />
            <ThoughtsSection />
            <ContactSection />
            <Footer />
          </main>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
